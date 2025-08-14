import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Calendar } from "lucide-react";
import img from "../media/profile.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="md:min-h-screen py-20 flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-slate-100 via-blue-50/50 to-red-200/50 md:py-0"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Balls with Animation */}
        <div className="absolute top-1/4 left-3/5 w-6 h-6 bg-blue-400/20 rounded-full animate-float1"></div>
        <div className="absolute top-1/3 right-2/4 w-8 h-8 bg-indigo-400/20 rounded-full animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-purple-400/20 rounded-full animate-float3"></div>
        <div className="absolute top-2/5 right-2/5 w-7 h-7 bg-blue-400/15 rounded-full animate-float4"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-indigo-400/15 rounded-full animate-float5"></div>
        <div className="absolute top-3/4 right-1/3 w-5 h-5 bg-purple-400/15 rounded-full animate-float6"></div>
        <div className="absolute top-10 left-2/2 w-4 h-4 bg-pink-400/20 rounded-full animate-float7"></div>
        <div className="absolute bottom-1/2 right-3/6 w-9 h-9 bg-teal-400/20 rounded-full animate-float8"></div>
        <div className="absolute top-1/6 right-2/3 w-5 h-5 bg-yellow-400/15 rounded-full animate-float9"></div>
        <div className="absolute bottom-3/5 left-1/5 w-6 h-6 bg-rose-400/15 rounded-full animate-float10"></div>
        <div className="absolute top-3/5 left-1/6 w-7 h-7 bg-emerald-400/15 rounded-full animate-float11"></div>
        <div className="absolute bottom-1/10 right-1/2 w-8 h-8 bg-cyan-400/15 rounded-full animate-float12"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/5 left-1/5 w-40 h-40 bg-blue-400/10 rounded-lg rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-400/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-400/10 triangle animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-pink-400/10 rounded-lg rotate-12 animate-rotate-reverse-slow"></div>

        {/* Blurred Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
      </div>

      <style>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, 20px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-12px, 15px) rotate(-3deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(10px, -18px) rotate(4deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes rotate-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes rotate-reverse-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
        .triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .animate-float1 {
          animation: float1 12s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 15s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 14s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 40s linear infinite;
        }
        .animate-rotate-reverse-slow {
          animation: rotate-reverse-slow 45s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6 lg:pr-8 order-1 mt-0 lg:mt-0">
            {/* Status Badge */}
            <div className="flex items-center gap-2 w-fit bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full hover:shadow-sm hover:shadow-emerald-100 transition-shadow">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-emerald-700">
                Available for New Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="block text-slate-900">Quality-Driven</span>
                <span className="block bg-gradient-to-r font-semibold from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Senior SQA Engineer with{" "}
                <strong className="text-slate-900">7+ years</strong> of
                expertise in delivering robust software solutions across
                Financial Services, SaaS, CRM, E-commerce, FinTech, and AI
                domains.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
              <div className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200/50 text-xs sm:text-sm hover:shadow-sm hover:shadow-blue-100 transition-shadow">
                <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-lg">
                  <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-600" />
                </div>
                <span className="font-medium truncate">
                  vijay.dvaswani@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200/50 text-xs sm:text-sm hover:shadow-sm hover:shadow-green-100 transition-shadow">
                <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-green-100 rounded-lg">
                  <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-600" />
                </div>
                <span className="font-medium">+92-3332532999</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200/50 text-xs sm:text-sm hover:shadow-sm hover:shadow-purple-100 transition-shadow">
                <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-purple-100 rounded-lg">
                  <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-purple-600" />
                </div>
                <span className="font-medium">Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200/50 text-xs sm:text-sm hover:shadow-sm hover:shadow-orange-100 transition-shadow">
                <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-orange-100 rounded-lg">
                  <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-600" />
                </div>
                <span className="font-medium">7+ Years Exp</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col-2 sm:flex-row gap-2 sm:gap-3 pt-2">
              <Button
                size="lg"
                variant="gradient"
                className="shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 font-semibold px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-xl w-full sm:w-auto transition-all duration-300"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Download Resume
              </Button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center font-semibold px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-xl w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-2 flex items-center justify-center ">
            <div className="relative w-full max-w-md aspect-square">
              {/* Image Container with Decorative Elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/30 via-indigo-100/30 to-purple-100/30 blur-xl animate-pulse-slow"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/10 rounded-full animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-400/10 rounded-lg rotate-45 animate-rotate-slow"></div>

              {/* Your Image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center lg:mt-10">
                <div className="w-[28rem] h-[28rem] sm:w-[32rem] sm:h-[32rem] md:w-[30rem] md:h-[30rem] bg-white/50 backdrop-blur-sm rounded-full overflow-hidden border-8 border-white/50 shadow-2xl shadow-blue-200/50 hover:shadow-3xl hover:shadow-indigo-300/50 transition-all duration-500">
                  {/* Replace with your actual image */}
                  <Image
                    src={img}
                    alt="Vijay Dvaswani"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badges Around Image */}
              <div className="absolute top-10 left-0 z-20">
                <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-xs font-medium animate-float3">
                  Agile Testing
                </Badge>
              </div>
              <div className="absolute bottom-10 right-0 z-20">
                <Badge className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 text-xs font-medium animate-float2">
                  QA Expert
                </Badge>
              </div>
              <div className="absolute top-1/2 -left-4 z-20">
                <Badge className="bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1 text-xs font-medium animate-float1">
                  7+ Years Exp
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Download, Mail, Phone, MapPin, Calendar } from "lucide-react";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="md:min-h-screen py-20 flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-slate-100 via-blue-50/50 to-red-200/50 md:py-0"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Balls with Animation */}
//         <div className="absolute top-1/4 left-3/5 w-6 h-6 bg-blue-400/20 rounded-full animate-float1"></div>
//         <div className="absolute top-1/3 right-2/4 w-8 h-8 bg-indigo-400/20 rounded-full animate-float2"></div>
//         <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-purple-400/20 rounded-full animate-float3"></div>
//         <div className="absolute top-2/5 right-2/5 w-7 h-7 bg-blue-400/15 rounded-full animate-float4"></div>
//         <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-indigo-400/15 rounded-full animate-float5"></div>
//         <div className="absolute top-3/4 right-1/3 w-5 h-5 bg-purple-400/15 rounded-full animate-float6"></div>
//         <div className="absolute top-10 left-2/2 w-4 h-4 bg-pink-400/20 rounded-full animate-float7"></div>
//         <div className="absolute bottom-1/2 right-3/6 w-9 h-9 bg-teal-400/20 rounded-full animate-float8"></div>
//         <div className="absolute top-1/6 right-2/3 w-5 h-5 bg-yellow-400/15 rounded-full animate-float9"></div>
//         <div className="absolute bottom-3/5 left-1/5 w-6 h-6 bg-rose-400/15 rounded-full animate-float10"></div>
//         <div className="absolute top-3/5 left-1/6 w-7 h-7 bg-emerald-400/15 rounded-full animate-float11"></div>
//         <div className="absolute bottom-1/10 right-1/2 w-8 h-8 bg-cyan-400/15 rounded-full animate-float12"></div>

//         {/* Blurred Background Elements */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
//         <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
//         <div className="absolute top-4/5 right-1/2 w-56 h-56 bg-purple-400/30 rounded-full blur-2xl animate-pulse-slow delay-1500"></div>
//         <div className="absolute bottom-1/6 left-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
//         <div className="absolute top-3/4 left-1/4 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow delay-1200"></div>
//       </div>

//       {/* <style>{`
//         @keyframes float1 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(15px, 20px) rotate(5deg);
//           }
//         }
//         @keyframes float2 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(-12px, 15px) rotate(-3deg);
//           }
//         }
//         @keyframes float3 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(10px, -18px) rotate(4deg);
//           }
//         }
//         @keyframes float4 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(-15px, 10px) rotate(-2deg);
//           }
//         }
//         @keyframes float5 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(8px, -15px) rotate(3deg);
//           }
//         }
//         @keyframes float6 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(-10px, -12px) rotate(-4deg);
//           }
//         }
//         @keyframes float7 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(12px, 8px) rotate(2deg);
//           }
//         }
//         @keyframes float8 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(-8px, -10px) rotate(-3deg);
//           }
//         }
//         @keyframes float9 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(15px, 12px) rotate(4deg);
//           }
//         }
//         @keyframes float10 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(-12px, 15px) rotate(-2deg);
//           }
//         }
//         @keyframes float11 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(10px, -12px) rotate(3deg);
//           }
//         }
//         @keyframes float12 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           50% {
//             transform: translate(-15px, 8px) rotate(-4deg);
//           }
//         }
//         @keyframes pulse-slow {
//           0%,
//           100% {
//             opacity: 0.8;
//           }
//           50% {
//             opacity: 1;
//           }
//         }
//         .animate-float1 {
//           animation: float1 12s ease-in-out infinite;
//         }
//         .animate-float2 {
//           animation: float2 15s ease-in-out infinite;
//         }
//         .animate-float3 {
//           animation: float3 14s ease-in-out infinite;
//         }
//         .animate-float4 {
//           animation: float4 16s ease-in-out infinite;
//         }
//         .animate-float5 {
//           animation: float5 13s ease-in-out infinite;
//         }
//         .animate-float6 {
//           animation: float6 17s ease-in-out infinite;
//         }
//         .animate-float7 {
//           animation: float7 11s ease-in-out infinite;
//         }
//         .animate-float8 {
//           animation: float8 18s ease-in-out infinite;
//         }
//         .animate-float9 {
//           animation: float9 14s ease-in-out infinite;
//         }
//         .animate-float10 {
//           animation: float10 16s ease-in-out infinite;
//         }
//         .animate-float11 {
//           animation: float11 13s ease-in-out infinite;
//         }
//         .animate-float12 {
//           animation: float12 15s ease-in-out infinite;
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 6s ease-in-out infinite;
//         }
//       `}</style> */}

//       <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

//       <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
//           {/* Left Content */}
//           <div className="space-y-4 lg:space-y-6 lg:pr-8 order-1 mt-0 lg:mt-0">
//             {/* Status Badge */}
//             <div className="flex items-center gap-2 w-fit bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full hover:shadow-sm hover:shadow-emerald-100 transition-shadow">
//               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
//               <span className="text-xs sm:text-sm font-medium text-emerald-700">
//                 Available for New Opportunities
//               </span>
//             </div>

//             {/* Main Heading */}
//             <div className="space-y-3 lg:space-y-4">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
//                 <span className="block text-slate-900">Quality-Driven</span>
//                 <span className="block bg-gradient-to-r font-semibold from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                   Excellence
//                 </span>
//               </h1>
//               <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
//                 Senior SQA Engineer with{" "}
//                 <strong className="text-slate-900">7+ years</strong> of
//                 expertise in delivering robust software solutions across
//                 Financial Services, SaaS, CRM, E-commerce, FinTech, and AI
//                 domains.
//               </p>
//             </div>

//             {/* Contact Info */}
//             <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
//               <div className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200/50 text-xs sm:text-sm hover:shadow-sm hover:shadow-blue-100 transition-shadow">
//                 <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-lg">
//                   <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-600" />
//                 </div>
//                 <span className="font-medium truncate">
//                   vijay.dvaswani@gmail.com
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200/50 text-xs sm:text-sm hover:shadow-sm hover:shadow-green-100 transition-shadow">
//                 <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-green-100 rounded-lg">
//                   <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-600" />
//                 </div>
//                 <span className="font-medium">+92-3332532999</span>
//               </div>
//               <div className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200/50 text-xs sm:text-sm hover:shadow-sm hover:shadow-purple-100 transition-shadow">
//                 <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-purple-100 rounded-lg">
//                   <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-purple-600" />
//                 </div>
//                 <span className="font-medium">Karachi, Pakistan</span>
//               </div>
//               <div className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200/50 text-xs sm:text-sm hover:shadow-sm hover:shadow-orange-100 transition-shadow">
//                 <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-orange-100 rounded-lg">
//                   <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-600" />
//                 </div>
//                 <span className="font-medium">7+ Years Exp</span>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col-2 sm:flex-row gap-2 sm:gap-3 pt-2">
//               <Button
//                 size="lg"
//                 variant="gradient"
//                 className="shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 font-semibold px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-xl w-full sm:w-auto transition-all duration-300"
//               >
//                 <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
//                 Download Resume
//               </Button>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center font-semibold px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-xl w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300"
//               >
//                 <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
//                 Hire Me
//               </a>
//             </div>
//           </div>

//           {/* Right Card */}
//           <div className="order-2 lg:pl-8 mt-6 sm:mt-8 md:mt-8">
//             <Card className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-xl sm:shadow-2xl shadow-slate-200/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-300/30 transition-shadow duration-300">
//               <div className="p-4 sm:p-6 md:p-8">
//                 <div className="text-center mb-4 sm:mb-6 md:mb-8">
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1 sm:mb-2">
//                     Core Expertise
//                   </h3>
//                   <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
//                 </div>

//                 <div className="space-y-4 sm:space-y-6 md:space-y-8">
//                   {/* Testing Methodologies */}
//                   <div className="space-y-2 sm:space-y-3 md:space-y-4">
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//                       <h4 className="font-bold text-slate-800 text-sm sm:text-base">
//                         Testing Methodologies
//                       </h4>
//                     </div>
//                     <div className="flex flex-wrap gap-1 sm:gap-2">
//                       {[
//                         "Agile/Scrum",
//                         "Smoke Testing",
//                         "Regression Testing",
//                         "Test Case Design",
//                         "Monkey Testing",
//                         "Postman",
//                         "Mobile Testing",
//                       ].map((skill) => (
//                         <Badge
//                           key={skill}
//                           className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 hover:shadow-sm hover:shadow-blue-100 transition-all duration-200 px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium"
//                         >
//                           {skill}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Tools & Technologies */}
//                   <div className="space-y-2 sm:space-y-3 md:space-y-4">
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
//                       <h4 className="font-bold text-slate-800 text-sm sm:text-base">
//                         Tools & Technologies
//                       </h4>
//                     </div>
//                     <div className="flex flex-wrap gap-1 sm:gap-2">
//                       {[
//                         "Jira",
//                         "ClickUp",
//                         "YouTrack",
//                         "SQL",
//                         "Slack",
//                         "Microsoft Teams",
//                       ].map((tool) => (
//                         <Badge
//                           key={tool}
//                           className="bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-100 transition-all duration-200 px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium"
//                         >
//                           {tool}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Domain Experience */}
//                   <div className="space-y-2 sm:space-y-3 md:space-y-4">
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
//                       <h4 className="font-bold text-slate-800 text-sm sm:text-base">
//                         Domain Experience
//                       </h4>
//                     </div>
//                     <div className="flex flex-wrap gap-1 sm:gap-2">
//                       {[
//                         "Financial Services",
//                         "SaaS",
//                         "CRM",
//                         "E-commerce",
//                         "FinTech",
//                         "AI Bots",
//                         "Social",
//                       ].map((domain) => (
//                         <Badge
//                           key={domain}
//                           className="bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-100 transition-all duration-200 px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium"
//                         >
//                           {domain}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Accent */}
//               <div className="h-2 mt-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
