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
import Link from "next/link";
import img from "../../media/image0.png";
import img2 from "../../media/image1.png";
import img3 from "../../media/image2.png";
import img4 from "../../media/image3.png";
import img5 from "../../media/image4.png";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Argaam – Saudi Financial Markets & News",
      description:
        "Argaam (English) is a premier Saudi-based financial news portal offering real-time market data, analysis, interviews, and coverage of stocks across the Gulf region.",
      tags: [
        "Test Automation",
        "Web Testing",
        "Selenium",
        "Flask",
        "Performance Testing",
      ],
      link: "https://www.argaam.com/en",
      image: img,
    },
    {
      id: 2,
      title: "Argaam Charts – Financial Market Charts (Arabic)",
      description:
        "Argaam Charts (Arabic) provides interactive real-time financial charts and market analytics for Gulf and Saudi stocks.",
      tags: [
        "Test Automation",
        "Web Testing",
        "Performance Testing",
        "Selenium",
        "Flask",
      ],
      link: "https://www.argaamcharts.com/ar/1120",
      image: img2,
    },
    {
      id: 3,
      title: "Contractor Foreman – Construction Management Software",
      description:
        "Contractor Foreman is an all-in-one, cloud-based construction management suite offering project, financial, document, and team tracking tools.",
      tags: [
        "API Testing",
        "Integration Testing",
        "Load Testing",
        "Selenium",
        "Performance Testing",
      ],
      link: "https://contractorforeman.com/",
      image: img3,
    },
    {
      id: 4,
      title: "JOYA! – Social Loyalty & Gifting Platform",
      description:
        "JOYA! is a social loyalty platform enabling users to earn and redeem points, share experiences, and send gifts via social networking for partner stores.",
      tags: [
        "Test Automation",
        "UI Testing",
        "Functional Testing",
        "Selenium",
        "CRM Testing",
      ],
      link: "https://oyah.com/index.html",
      image: img5,
    },
    {
      id: 5,
      title: "BuyHouseEZ – Non-Conventional Home Financing",
      description:
        "BuyHouseEZ enables self-employed individuals and ITIN holders with poor credit to secure mortgages through alternative lending solutions.",
      tags: [
        "API Testing",
        "Security Testing",
        "Automation Testing",
        "Selenium",
        "Performance Testing",
      ],
      link: "https://buyhouseez.com/",
      image: img4,
    },
  ];

  return (
    <div className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Balls */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-blue-400/20 rounded-full animate-float1 shadow-sm"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-indigo-400/20 rounded-full animate-float2 shadow-sm"></div>
        <div className="absolute bottom-1/3 left-2/3 w-5 h-5 bg-purple-400/20 rounded-full animate-float3 shadow-sm"></div>
        <div className="absolute top-3/4 right-1/5 w-7 h-7 bg-blue-400/15 rounded-full animate-float4 shadow-sm"></div>
        <div className="absolute bottom-1/5 left-1/4 w-6 h-6 bg-indigo-400/15 rounded-full animate-float5 shadow-sm"></div>
        <div className="absolute top-1/6 right-2/3 w-5 h-5 bg-purple-400/15 rounded-full animate-float6 shadow-sm"></div>
        <div className="absolute top-2/3 left-1/6 w-4 h-4 bg-pink-400/20 rounded-full animate-float7 shadow-sm"></div>
        <div className="absolute bottom-1/2 right-1/3 w-9 h-9 bg-teal-400/20 rounded-full animate-float8 shadow-sm"></div>
        <div className="absolute top-1/5 left-2/5 w-7 h-7 bg-yellow-400/15 rounded-full animate-float9 shadow-sm"></div>
        <div className="absolute bottom-2/5 right-2/5 w-6 h-6 bg-rose-400/15 rounded-full animate-float10 shadow-sm"></div>
        <div className="absolute top-4/5 left-2/3 w-5 h-5 bg-emerald-400/15 rounded-full animate-float11 shadow-sm"></div>
        <div className="absolute bottom-1/4 right-1/6 w-8 h-8 bg-cyan-400/15 rounded-full animate-float12 shadow-sm"></div>
        <div className="absolute top-36 left-20 w-68 h-68 bg-blue-400/10 rounded-full blur-3xl animate-pulse shadow-xl"></div>
        <div className="absolute bottom-36 right-20 w-92 h-92 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000 shadow-xl"></div>
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
        @keyframes cardHover { 0% { transform: translateY(0); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0); } }

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
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Project Archive
            </span>
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Comprehensive collection of my quality assurance and test automation
            projects.
          </p>
          <div className="mt-6">
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="transition-all duration-300 hover:z-10 hover:scale-[1.02]"
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl group overflow-hidden flex flex-col">
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
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="bg-blue-100/80 hover:bg-blue-200/80 text-blue-800 border border-blue-200 text-xs font-medium transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="w-full gap-2 hover:bg-gray-100 border-gray-300 text-gray-700 transition-all"
                      disabled
                    >
                      <Github className="h-4 w-4" />
                      <span>Private</span>
                    </Button>
                    <Button
                      variant="default"
                      className="w-full gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live Demo</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
