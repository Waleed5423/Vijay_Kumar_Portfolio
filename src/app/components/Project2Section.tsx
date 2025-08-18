import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import img from "../../app/media/image0.png";
import img2 from "../../app/media/image1.png";
import img3 from "../../app/media/image2.png";
import img5 from "../../app/media/image4.png";
import img6 from "../../app/media/image5.png";
import img7 from "../../app/media/image6.png";
import img9 from "../../app/media/image9.png";
import img10 from "../../app/media/image10.png";

const Project2Section = () => {
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
      image: img9,
    },
    {
      id: 5,
      title: "HERFA – Build Smarter, Build Faster with Digital Construction",
      description:
        "HERFA is an online construction platform for contractors, builders, and project managers, offering real-time project tracking, material management, collaboration tools, and automated estimates to boost efficiency and cut costs.",
      tags: [
        "API Testing",
        "UI Testing",
        "Integration Testing",
        "Selenium",
        "Performance Testing",
      ],
      link: "https://herfa.com",
      image: img6,
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
      image: img10,
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
      id: 6,
      title: "MULTILIP – Where Investments Multiply with Confidence",
      description:
        "MULTILIP is a stock investment company helping beginners and experienced investors with expert insights, data-driven strategies, and personalized portfolio management for both short-term and long-term gains.",
      tags: [
        "Security Testing",
        "API Testing",
        "Automation Testing",
        "Selenium",
        "Performance Testing",
      ],
      link: "https://multilip.com", // Replace with actual link if different
      image: img7,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-17 pb-15 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"
    >
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
        @keyframes cardHover { 0% { transform: translateY(0); } 100% { transform: translateY(-5px); } }

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
        
        .project-card {
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          animation: cardHover 1s ease-in-out;
        }
        .tag-hover {
          transition: all 0.2s ease;
        }
        .tag-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      <div className="mx-auto px-4 sm:px-6 relative z-10 max-w-9xl container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-fadeIn">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Project Portfolio
            </span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg animate-fadeIn delay-100">
            Selected projects showcasing my expertise in quality assurance and
            test automation across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card hover:z-10 transition-all rounded-lg duration-300"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/project">
            <Button
              variant="gradient"
              className="transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 shadow-md"
            >
              View Complete Project Archive
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project2Section;
