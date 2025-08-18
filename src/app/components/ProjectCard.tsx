import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: StaticImageData;
    github?: string;
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="h-full">
      <Card className="h-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl group overflow-hidden flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            width={400}
            height={300}
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-semibold text-slate-800">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-slate-600 mt-1">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                className="bg-blue-100/80 hover:bg-blue-200/80 text-blue-800 border border-blue-200 text-xs font-medium transition-colors"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge className="bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 border border-slate-200 text-xs font-medium transition-colors">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="w-full gap-2 hover:bg-gray-100 border-gray-300 text-gray-700 transition-all"
              disabled={!project.github}
            >
              <Github className="h-4 w-4" />
              <span>{project.github ? "Code" : "Private"}</span>
            </Button>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="default"
                    className="w-full gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all"
                    disabled
                  >
                    <span>Live Demo</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>No live demo available / Private</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
