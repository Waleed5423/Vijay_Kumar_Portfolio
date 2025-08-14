import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/50 rounded-2xl group overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-purple-400/10 flex items-center justify-center">
        <div className="text-2xl font-bold text-slate-400/50">
          Project Preview
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg text-slate-800">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-slate-600">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium">
              +{project.tags.length - 3} more
            </Badge>
          )}
        </div>
        <Button variant="gradient" className="w-full">
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
