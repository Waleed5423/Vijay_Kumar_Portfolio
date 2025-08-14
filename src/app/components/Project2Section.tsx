import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

const Project2Section = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Testing Platform",
      description:
        "Developed an intelligent testing framework that uses machine learning to predict high-risk areas of applications, reducing testing time by 40% while maintaining 99% defect detection rate.",
      tags: ["AI/ML", "Python", "Selenium", "Flask", "AWS"],
      link: "https://demo-ai-testing.com",
      image: "/project-ai-testing.jpg",
    },
    {
      id: 2,
      title: "Financial Services Automation Suite",
      description:
        "Created an end-to-end test automation solution for a fintech platform, covering web, mobile and API testing with integrated security validation.",
      tags: ["FinTech", "Cypress", "Appium", "Postman", "OAuth"],
      link: "https://fintech-automation-demo.com",
      image: "/project-fintech.jpg",
    },
    {
      id: 3,
      title: "E-commerce Quality Gateway",
      description:
        "Implemented a comprehensive quality control system for a high-traffic e-commerce platform that reduced production incidents by 65%.",
      tags: ["E-commerce", "JMeter", "SQL", "Jenkins", "Kubernetes"],
      link: "https://ecommerce-quality-demo.com",
      image: "/project-ecommerce.jpg",
    },
    {
      id: 4,
      title: "CRM Testing Framework",
      description:
        "Built a modular testing framework for a SaaS CRM platform that enabled parallel test execution across multiple environments.",
      tags: ["SaaS", "TestNG", "Docker", "CI/CD", "Allure"],
      link: "https://crm-testing-demo.com",
      image: "/project-crm.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Balls */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-blue-400/20 rounded-full animate-float1"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-indigo-400/20 rounded-full animate-float2"></div>
        <div className="absolute bottom-1/3 left-2/3 w-5 h-5 bg-purple-400/20 rounded-full animate-float3"></div>
        <div className="absolute top-3/4 right-1/5 w-7 h-7 bg-blue-400/15 rounded-full animate-float4"></div>
        <div className="absolute bottom-1/5 left-1/4 w-6 h-6 bg-indigo-400/15 rounded-full animate-float5"></div>
        <div className="absolute top-1/6 right-2/3 w-5 h-5 bg-purple-400/15 rounded-full animate-float6"></div>
        <div className="absolute top-2/3 left-1/6 w-4 h-4 bg-pink-400/20 rounded-full animate-float7"></div>
        <div className="absolute bottom-1/2 right-1/3 w-9 h-9 bg-teal-400/20 rounded-full animate-float8"></div>
        <div className="absolute top-1/5 left-2/5 w-7 h-7 bg-yellow-400/15 rounded-full animate-float9"></div>
        <div className="absolute bottom-2/5 right-2/5 w-6 h-6 bg-rose-400/15 rounded-full animate-float10"></div>
        <div className="absolute top-4/5 left-2/3 w-5 h-5 bg-emerald-400/15 rounded-full animate-float11"></div>
        <div className="absolute bottom-1/4 right-1/6 w-8 h-8 bg-cyan-400/15 rounded-full animate-float12"></div>
        <div className="absolute top-36 left-20 w-68 h-68 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-36 right-20 w-92 h-92 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <style>{`
        @keyframes float1 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(31px,27px) rotate(7deg);} }
        @keyframes float2 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-22px,34px) rotate(-5deg);} }
        @keyframes float3 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(19px,-28px) rotate(6deg);} }
        @keyframes float4 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-26px,21px) rotate(-4deg);} }
        @keyframes float5 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(36px,-19px) rotate(8deg);} }
        @keyframes float6 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-14px,-35px) rotate(-7deg);} }
        @keyframes float7 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(28px,18px) rotate(5deg);} }
        @keyframes float8 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-33px,-16px) rotate(-6deg);} }
        @keyframes float9 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(20px,39px) rotate(4deg);} }
        @keyframes float10 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(30px,25px) rotate(-3deg);} }
        @keyframes float11 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-25px,-30px) rotate(7deg);} }
        @keyframes float12 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(24px,20px) rotate(-4deg);} }

        .animate-float1 { animation: float1 19s ease-in-out infinite; }
        .animate-float2 { animation: float2 14s ease-in-out infinite; }
        .animate-float3 { animation: float3 21s ease-in-out infinite; }
        .animate-float4 { animation: float4 17s ease-in-out infinite; }
        .animate-float5 { animation: float5 23s ease-in-out infinite; }
        .animate-float6 { animation: float6 16s ease-in-out infinite; }
        .animate-float7 { animation: float7 20s ease-in-out infinite; }
        .animate-float8 { animation: float8 25s ease-in-out infinite; }
        .animate-float9 { animation: float9 18s ease-in-out infinite; }
        .animate-float10 { animation: float10 22s ease-in-out infinite; }
        .animate-float11 { animation: float11 15s ease-in-out infinite; }
        .animate-float12 { animation: float12 24s ease-in-out infinite; }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Project Portfolio
            </span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Selected projects showcasing my expertise in quality assurance and
            test automation across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button
              variant="gradient"
              className="transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View Complete Project Archive
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project2Section;
