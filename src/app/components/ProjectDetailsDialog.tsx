import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, Calendar, Users, Code } from "lucide-react";

export interface ProjectDetails {
    title: string;
    description?: string;
    longDescription?: string;
    tags?: string[];
    technologies?: string[];
    startDate?: string;
    endDate?: string;
    teamSize?: number;
    github?: string;
    link?: string;
    image?: string;
    challenges?: string[];
    achievements?: string[];
}

interface ProjectDetailsDialogProps {
    project: ProjectDetails | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const isValidUrl = (value?: string) => !!value && value !== "#";

const ProjectDetailsDialog = ({ project, open, onOpenChange }: ProjectDetailsDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
                {project && (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-center">
                                {project.title}
                            </DialogTitle>
                        </DialogHeader>

                        <div className="overflow-y-auto flex-1 space-y-6 pr-2">
                            <div className="h-64 bg-gradient-to-r from-primary/10 to-portfolio-accent/10 rounded-lg flex items-center justify-center">
                                <div className="text-4xl font-bold text-muted-foreground/30">Project Preview</div>
                            </div>

                            {(project.longDescription || project.description) && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                                    <p className="text-muted-foreground">
                                        {project.longDescription || project.description}
                                    </p>
                                </div>
                            )}

                            {(project.startDate || project.teamSize || (project.technologies && project.technologies.length > 0)) && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {(project.startDate || project.endDate) && (
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-primary" />
                                            <span className="text-sm">
                                                {project.startDate}{project.endDate ? ` - ${project.endDate}` : ""}
                                            </span>
                                        </div>
                                    )}
                                    {project.teamSize !== undefined && (
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-primary" />
                                            <span className="text-sm">{project.teamSize} team members</span>
                                        </div>
                                    )}
                                    {project.technologies && project.technologies.length > 0 && (
                                        <div className="flex items-center gap-2">
                                            <Code className="h-4 w-4 text-primary" />
                                            <span className="text-sm">{project.technologies.length} technologies</span>
                                        </div>
                                    )}
                                </div>
                            )}

                            {project.technologies && project.technologies.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <Badge key={index} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.tags && project.tags.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.challenges && project.challenges.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Key Challenges</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        {project.challenges.map((challenge, index) => (
                                            <li key={index}>{challenge}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.achievements && project.achievements.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Key Achievements</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        {project.achievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {(isValidUrl(project.github) || isValidUrl(project.link)) && (
                            <div className="flex flex-col sm:flex-row gap-3 pt-4 sticky bottom-100 bg-background">
                                {isValidUrl(project.github) && (
                                    <Button
                                        variant="gradient"
                                        className="flex-1"
                                        onClick={() => window.open(project.github as string, "_blank")}
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        View on GitHub
                                    </Button>
                                )}
                                {isValidUrl(project.link) && (
                                    <Button
                                        variant="gradient"
                                        className="flex-1"
                                        onClick={() => window.open(project.link as string, "_blank")}
                                    >
                                        <Globe className="mr-2 h-4 w-4" />
                                        Live Demo
                                    </Button>
                                )}
                            </div>
                        )}
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ProjectDetailsDialog;