import React from "react";
import { Card } from "@/components/ui/card";
import {
  FileSearch,
  ClipboardList,
  TestTube2,
  Bug,
  CheckCircle,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const Workflow = () => {
  const workflowSteps = [
    {
      icon: FileSearch,
      title: "Requirement Analysis",
      description: "Thorough review of specifications and documentation",
      iconColor: "text-blue-600",
      bgGradient: "bg-gradient-to-br from-blue-50 to-blue-100/80",
      borderColor: "border-blue-200/50",
      shadowColor: "shadow-blue-200/25",
      hoverShadow: "hover:shadow-blue-300/40",
    },
    {
      icon: ClipboardList,
      title: "Test Planning",
      description: "Create test strategy, cases and traceability matrix",
      iconColor: "text-indigo-600",
      bgGradient: "bg-gradient-to-br from-indigo-50 to-indigo-100/80",
      borderColor: "border-indigo-200/50",
      shadowColor: "shadow-indigo-200/25",
      hoverShadow: "hover:shadow-indigo-300/40",
    },
    {
      icon: TestTube2,
      title: "Test Execution",
      description: "Manual and automated test implementation",
      iconColor: "text-purple-600",
      bgGradient: "bg-gradient-to-br from-purple-50 to-purple-100/80",
      borderColor: "border-purple-200/50",
      shadowColor: "shadow-purple-200/25",
      hoverShadow: "hover:shadow-purple-300/40",
    },
    {
      icon: Bug,
      title: "Defect Reporting",
      description: "Log, prioritize and track issues",
      iconColor: "text-rose-600",
      bgGradient: "bg-gradient-to-br from-rose-50 to-rose-100/80",
      borderColor: "border-rose-200/50",
      shadowColor: "shadow-rose-200/25",
      hoverShadow: "hover:shadow-rose-300/40",
    },
    {
      icon: CheckCircle,
      title: "Verification",
      description: "Validate fixes and regression testing",
      iconColor: "text-emerald-600",
      bgGradient: "bg-gradient-to-br from-emerald-50 to-emerald-100/80",
      borderColor: "border-emerald-200/50",
      shadowColor: "shadow-emerald-200/25",
      hoverShadow: "hover:shadow-emerald-300/40",
    },
    {
      icon: ClipboardCheck,
      title: "Sign-off",
      description: "Final approval and test summary report",
      iconColor: "text-teal-600",
      bgGradient: "bg-gradient-to-br from-teal-50 to-teal-100/80",
      borderColor: "border-teal-200/50",
      shadowColor: "shadow-teal-200/25",
      hoverShadow: "hover:shadow-teal-300/40",
    },
  ];

  return (
    <section
      id="workflow"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-1/5 left-1/4 w-8 h-8 bg-blue-400/20 rounded-full animate-float1 blur-sm shadow-sm"></div>
        <div className="absolute top-1/2 right-1/5 w-6 h-6 bg-indigo-400/20 rounded-full animate-float2 blur-sm shadow-sm"></div>
        <div className="absolute bottom-1/5 left-1/2 w-5 h-5 bg-purple-400/20 rounded-full animate-float3 blur-sm shadow-sm"></div>
        <div className="absolute top-3/5 right-2/3 w-7 h-7 bg-blue-400/15 rounded-full animate-float4 blur-sm shadow-sm"></div>
        <div className="absolute bottom-1/4 left-1/6 w-9 h-9 bg-indigo-400/15 rounded-full animate-float5 blur-sm shadow-sm"></div>
        <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-purple-400/15 rounded-full animate-float6 blur-sm shadow-sm"></div>

        {/* Large Glowing Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-transparent rounded-full blur-3xl animate-pulse shadow-xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-400/8 to-transparent rounded-full blur-3xl animate-pulse delay-1000 shadow-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-400/6 to-transparent rounded-full blur-3xl animate-pulse delay-2000 shadow-xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <style>{`
        @keyframes float1 { 
          0%, 100% { transform: translate(0,0) rotate(0deg) scale(1); } 
          33% { transform: translate(30px,20px) rotate(120deg) scale(1.1); }
          66% { transform: translate(-20px,40px) rotate(240deg) scale(0.9); }
        }
        @keyframes float2 { 
          0%, 100% { transform: translate(0,0) rotate(0deg) scale(1); } 
          33% { transform: translate(-35px,25px) rotate(-120deg) scale(1.2); }
          66% { transform: translate(25px,-30px) rotate(-240deg) scale(0.8); }
        }
        @keyframes float3 { 
          0%, 100% { transform: translate(0,0) rotate(0deg) scale(1); } 
          33% { transform: translate(25px,-35px) rotate(90deg) scale(1.1); }
          66% { transform: translate(-30px,20px) rotate(180deg) scale(0.9); }
        }
        @keyframes float4 { 
          0%, 100% { transform: translate(0,0) rotate(0deg) scale(1); } 
          50% { transform: translate(-25px,30px) rotate(-180deg) scale(1.15); }
        }
        @keyframes float5 { 
          0%, 100% { transform: translate(0,0) rotate(0deg) scale(1); } 
          50% { transform: translate(40px,-25px) rotate(180deg) scale(0.85); }
        }
        @keyframes float6 { 
          0%, 100% { transform: translate(0,0) rotate(0deg) scale(1); } 
          50% { transform: translate(-30px,-35px) rotate(270deg) scale(1.3); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
        }
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-float1 { animation: float1 20s ease-in-out infinite; }
        .animate-float2 { animation: float2 16s ease-in-out infinite; }
        .animate-float3 { animation: float3 24s ease-in-out infinite; }
        .animate-float4 { animation: float4 18s ease-in-out infinite; }
        .animate-float5 { animation: float5 22s ease-in-out infinite; }
        .animate-float6 { animation: float6 19s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-pulseGlow { animation: pulseGlow 2s infinite; }
        .animate-iconBounce { animation: iconBounce 1s infinite; }
      `}</style>

      <div className="px-6 md:px-12 mx-auto relative z-10 max-w-8xl">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div
            className="inline-block mb-4 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              Quality Assurance
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              QA Process Workflow
            </span>
          </h2>
          <p
            className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            My systematic approach to ensuring software quality from start to
            finish
          </p>
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-8 rounded-full animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Connector */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-200/80 via-indigo-200/80 to-purple-200/80 rounded-full -z-10 shadow-sm hover:shadow-md transition-shadow duration-300"></div>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fadeInUp"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <Card
                  className={`${step.bgGradient} backdrop-blur-xl ${step.borderColor} border-2 ${step.shadowColor} shadow-xl rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 h-full relative overflow-hidden group-hover:-translate-y-2 ${step.hoverShadow}`}
                >
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 bg-white/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <span className="text-xs font-bold text-slate-600">
                      {index + 1}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div
                      className={`p-4 rounded-2xl bg-white/80 backdrop-blur-sm w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl group-hover:animate-iconBounce`}
                    >
                      <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </Card>

                {/* Enhanced Arrow Connectors */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-slate-200/50 hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulseGlow">
                      <ArrowRight className="h-5 w-5 text-slate-500 hover:text-indigo-600 transition-colors duration-300" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Mobile Timeline */}
        <div
          className="lg:hidden mt-12 animate-fadeInUp"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="flex justify-center mb-6">
            <div className="h-32 w-2 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"></div>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center space-x-3">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className={`h-4 w-4 rounded-full shadow-md border-2 border-white hover:scale-125 transition-transform duration-300 ${
                    index === 0
                      ? "bg-blue-500 hover:shadow-blue-500/50"
                      : index === workflowSteps.length - 1
                      ? "bg-purple-500 hover:shadow-purple-500/50"
                      : "bg-indigo-400 hover:shadow-indigo-400/50"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 animate-fadeInUp"
          style={{ animationDelay: "1.2s" }}
        >
          <p className="text-slate-500 text-lg mb-6">
            Ready to implement quality processes in your project?
          </p>
          <a href="#contact">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulseGlow">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
