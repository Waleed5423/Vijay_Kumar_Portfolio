import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Send,
  Calendar,
} from "lucide-react";
import { ContactForm } from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative pt-17 pb-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Balls */}
        <div className="absolute top-1/5 left-1/6 w-7 h-7 bg-blue-400/20 rounded-full animate-float1"></div>
        <div className="absolute top-1/3 right-1/5 w-5 h-5 bg-indigo-400/20 rounded-full animate-float2"></div>
        <div className="absolute bottom-1/5 left-1/3 w-8 h-8 bg-purple-400/20 rounded-full animate-float3"></div>
        <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-blue-400/15 rounded-full animate-float4"></div>
        <div className="absolute bottom-1/3 left-2/3 w-5 h-5 bg-indigo-400/15 rounded-full animate-float5"></div>
        <div className="absolute top-4/5 right-2/3 w-4 h-4 bg-purple-400/15 rounded-full animate-float6"></div>
        <div className="absolute top-1/4 left-3/4 w-6 h-6 bg-pink-400/20 rounded-full animate-float7"></div>
        <div className="absolute bottom-2/3 right-1/6 w-7 h-7 bg-teal-400/20 rounded-full animate-float8"></div>
        <div className="absolute top-1/6 left-1/4 w-5 h-5 bg-yellow-400/15 rounded-full animate-float9"></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-rose-400/15 rounded-full animate-float10"></div>
        <div className="absolute top-3/5 left-1/5 w-6 h-6 bg-emerald-400/15 rounded-full animate-float11"></div>
        <div className="absolute bottom-3/5 right-2/5 w-5 h-5 bg-cyan-400/15 rounded-full animate-float12"></div>
        <div className="absolute top-40 left-12 w-84 h-84 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-12 w-68 h-68 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-2/3 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-2/3 w-64 h-64 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1200"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <style>{`
        @keyframes float1 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(24px,36px) rotate(6deg);} }
        @keyframes float2 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-27px,22px) rotate(-4deg);} }
        @keyframes float3 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(32px,-25px) rotate(7deg);} }
        @keyframes float4 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-20px,29px) rotate(-5deg);} }
        @keyframes float5 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(28px,-18px) rotate(8deg);} }
        @keyframes float6 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-17px,-31px) rotate(-6deg);} }
        @keyframes float7 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(25px,19px) rotate(5deg);} }
        @keyframes float8 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-29px,-14px) rotate(-7deg);} }
        @keyframes float9 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(18px,37px) rotate(4deg);} }
        @keyframes float10 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(34px,23px) rotate(-3deg);} }
        @keyframes float11 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-23px,-27px) rotate(6deg);} }
        @keyframes float12 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(21px,16px) rotate(-4deg);} }

        .animate-float1 { animation: float1 20s ease-in-out infinite; }
        .animate-float2 { animation: float2 16s ease-in-out infinite; }
        .animate-float3 { animation: float3 24s ease-in-out infinite; }
        .animate-float4 { animation: float4 18s ease-in-out infinite; }
        .animate-float5 { animation: float5 22s ease-in-out infinite; }
        .animate-float6 { animation: float6 15s ease-in-out infinite; }
        .animate-float7 { animation: float7 19s ease-in-out infinite; }
        .animate-float8 { animation: float8 26s ease-in-out infinite; }
        .animate-float9 { animation: float9 17s ease-in-out infinite; }
        .animate-float10 { animation: float10 21s ease-in-out infinite; }
        .animate-float11 { animation: float11 23s ease-in-out infinite; }
        .animate-float12 { animation: float12 14s ease-in-out infinite; }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hire Me
            </span>
          </h2>
          <p className="text-slate-600 text-lg">
            Ready to discuss how my QA expertise can contribute to your next
            project? I&apos;m always open to new opportunities and
            collaborations.
          </p>
        </div>

        <div className="w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Left Column - Contact Info */}
            <div className="flex-1 max-w-md">
              {/* Contact Details */}
              <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-200/50">
                  <CardTitle className="flex items-center gap-3 text-slate-800">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Contact Information
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm hover:shadow-md">
                    <div className="p-2 bg-blue-100/50 rounded-lg text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 mb-1">
                        Email
                      </div>
                      <div className="text-base font-medium text-slate-800 hover:text-blue-600 transition-colors">
                        vijay.dvaswani@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm hover:shadow-md">
                    <div className="p-2 bg-green-100/50 rounded-lg text-green-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 mb-1">
                        Phone
                      </div>
                      <div className="text-base font-medium text-slate-800 hover:text-green-600 transition-colors">
                        +92-3332532999
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm hover:shadow-md">
                    <div className="p-2 bg-purple-100/50 rounded-lg text-purple-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 mb-1">
                        Location
                      </div>
                      <div className="text-base font-medium text-slate-800 hover:text-purple-600 transition-colors">
                        Karachi, Pakistan
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm hover:shadow-md">
                    <div className="p-2 bg-amber-100/50 rounded-lg text-amber-600">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 mb-1">
                        Availability
                      </div>
                      <div className="text-base font-medium text-slate-800 hover:text-amber-600 transition-colors">
                        Open to opportunities
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg rounded-xl overflow-hidden mt-8">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-200/50">
                  <CardTitle className="flex items-center gap-3 text-slate-800">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Professional Links
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-6">
                  <a
                    href="https://www.linkedin.com/in/vijaykumarvaswani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 h-12 hover:bg-blue-50 border-slate-300 hover:border-blue-300 text-slate-700 hover:text-blue-600 transition-all"
                    >
                      <div className="p-1 bg-blue-100 rounded-md text-blue-600">
                        <Linkedin className="h-4 w-4" />
                      </div>
                      LinkedIn Profile
                    </Button>
                  </a>

                  <a
                    href="https://github.com/VijayDvaswani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 h-12 hover:bg-slate-50 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-800 transition-all"
                    >
                      <div className="p-1 bg-slate-100 rounded-md text-slate-600">
                        <Github className="h-4 w-4" />
                      </div>
                      GitHub Portfolio
                    </Button>
                  </a>

                  <a
                    href="/resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 h-12 hover:bg-green-50 border-slate-300 hover:border-green-300 text-slate-700 hover:text-green-600 transition-all"
                    >
                      <div className="p-1 bg-green-100 rounded-md text-green-600">
                        <Download className="h-4 w-4" />
                      </div>
                      Download Resume
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Form */}
            <div className="flex-1 max-w-2xl">
              <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg rounded-xl overflow-hidden h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-200/50">
                  <CardTitle className="flex items-center gap-3 text-slate-800">
                    <Send className="h-5 w-5 text-blue-600" />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Send a Message
                    </span>
                  </CardTitle>
                  <p className="text-slate-600">
                    Have a project in mind or want to discuss QA opportunities?
                    I&apos;d love to hear from you!
                  </p>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
