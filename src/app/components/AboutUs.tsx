import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative pt-14 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/6 left-2/3 w-7 h-7 bg-blue-400/20 rounded-full animate-float1 shadow-lg shadow-blue-200/30"></div>
        <div className="absolute top-2/5 right-1/6 w-5 h-5 bg-indigo-400/20 rounded-full animate-float2 shadow-lg shadow-indigo-200/30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-purple-400/20 rounded-full animate-float3 shadow-lg shadow-purple-200/30"></div>
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-blue-400/15 rounded-full animate-float4 shadow-lg shadow-blue-200/30"></div>
        <div className="absolute bottom-2/5 left-3/4 w-9 h-9 bg-indigo-400/45 rounded-full animate-float5 shadow-lg shadow-indigo-200/30"></div>
        <div className="absolute top-1/5 right-2/5 w-4 h-4 bg-purple-400/45 rounded-full animate-float6 shadow-lg shadow-purple-200/30"></div>
        <div className="absolute top-2/3 left-1/5 w-5 h-5 bg-pink-400/20 rounded-full animate-float7 shadow-lg shadow-pink-200/30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-teal-400/20 rounded-full animate-float8 shadow-lg shadow-teal-200/30"></div>
        <div className="absolute top-1/3 left-2/5 w-8 h-8 bg-yellow-400/15 rounded-full animate-float9 shadow-lg shadow-yellow-200/30"></div>
        <div className="absolute bottom-1/5 right-3/5 w-7 h-7 bg-rose-400/15 rounded-full animate-float10 shadow-lg shadow-rose-200/30"></div>
        <div className="absolute top-4/5 left-1/3 w-5 h-5 bg-emerald-400/15 rounded-full animate-float11 shadow-lg shadow-emerald-200/30"></div>
        <div className="absolute bottom-3/4 right-2/3 w-6 h-6 bg-cyan-400/15 rounded-full animate-float12 shadow-lg shadow-cyan-200/30"></div>
        <div className="absolute top-32 left-16 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl animate-pulse shadow-xl shadow-blue-300/20"></div>
        <div className="absolute bottom-32 right-16 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000 shadow-xl shadow-indigo-300/20"></div>
        <div className="absolute top-1/3 left-2/3 w-56 h-56 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500 shadow-xl shadow-purple-300/20"></div>
        <div className="absolute top-2/3 right-2/3 w-64 h-64 bg-purple-400/40 rounded-full blur-2xl animate-pulse delay-700 shadow-xl shadow-purple-300/30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-300 shadow-xl shadow-green-300/20"></div>
        <div className="absolute top-1/4 left-6/6 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1200 shadow-xl shadow-yellow-300/20"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <style>{`
        @keyframes float1 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(35px,45px) rotate(8deg);} }
        @keyframes float2 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-18px,32px) rotate(-3deg);} }
        @keyframes float3 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(28px,-35px) rotate(6deg);} }
        @keyframes float4 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-22px,18px) rotate(-4deg);} }
        @keyframes float5 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(42px,-28px) rotate(9deg);} }
        @keyframes float6 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-15px,-38px) rotate(-6deg);} }
        @keyframes float7 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(25px,22px) rotate(5deg);} }
        @keyframes float8 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-32px,-15px) rotate(-7deg);} }
        @keyframes float9 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(19px,38px) rotate(4deg);} }
        @keyframes float10 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(31px,28px) rotate(-5deg);} }
        @keyframes float11 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-28px,-22px) rotate(7deg);} }
        @keyframes float12 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(24px,19px) rotate(-4deg);} }

        .animate-float1 { animation: float1 17s ease-in-out infinite; }
        .animate-float2 { animation: float2 14s ease-in-out infinite; }
        .animate-float3 { animation: float3 21s ease-in-out infinite; }
        .animate-float4 { animation: float4 16s ease-in-out infinite; }
        .animate-float5 { animation: float5 19s ease-in-out infinite; }
        .animate-float6 { animation: float6 13s ease-in-out infinite; }
        .animate-float7 { animation: float7 18s ease-in-out infinite; }
        .animate-float8 { animation: float8 15s ease-in-out infinite; }
        .animate-float9 { animation: float9 22s ease-in-out infinite; }
        .animate-float10 { animation: float10 20s ease-in-out infinite; }
        .animate-float11 { animation: float11 16s ease-in-out infinite; }
        .animate-float12 { animation: float12 24s ease-in-out infinite; }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300%">
                About Me
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg transition-all duration-300 hover:text-slate-800 hover:scale-105">
              My journey in quality assurance and commitment to excellence
            </p>
          </div>
          <Card className="p-8 md:p-9 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/50 rounded-2xl hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 hover:-translate-y-1">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-slate-700 hover:text-slate-800 transition-colors duration-300">
                Experienced and passionate Software Quality Assurance Engineer
                with a solid background in manual testing across mobile, web,
                and desktop platforms. I bring over 7 years of proven success in
                ensuring software reliability, user experience, and product
                performance through strategic QA processes.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 hover:text-slate-800 transition-colors duration-300">
                Specializing in functional, regression, smoke, and sanity
                testing within agile environments, I&apos;ve contributed to
                fast-paced teams and cross-functional collaboration efforts to
                meet tight deadlines and deliver superior digital products. With
                a strong foundation in API testing, SQL-based validations, and
                test documentation, I thrive in ensuring software is bug-free
                and user-centric.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-slate-800 hover:text-blue-600 transition-colors duration-300">
                    Key Strengths
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Strong knowledge of QA methodologies and SDLC",
                      "Proficient in identifying bugs and improving product usability",
                      "Skilled in communicating issues with clarity",
                      "Organized, detail-oriented, and committed to excellence",
                      "Collaborative approach with developers",
                      "Passionate about clean code and agile practices",
                      "Experience with scalable testing solutions",
                      "Open to global opportunities for growth",
                    ].map((strength, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50/80 transition-all duration-300 hover:shadow-sm"
                      >
                        <span className="text-emerald-500 mt-1 hover:scale-110 transition-transform duration-300">
                          ✔️
                        </span>
                        <span className="text-slate-700 hover:text-slate-900 transition-colors duration-300">
                          {strength}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-slate-800 hover:text-indigo-600 transition-colors duration-300">
                    Professional Approach
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Quality First",
                      "User-Centric",
                      "Detail-Oriented",
                      "Continuous Improvement",
                      "Agile Mindset",
                      "Cross-Functional Collaboration",
                      "Problem Solver",
                    ].map((approach) => (
                      <Badge
                        key={approach}
                        className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 hover:text-blue-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 px-3 py-1 text-sm font-medium"
                      >
                        {approach}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 group">
                <span className="group-hover:text-blue-600 transition-colors duration-300">
                  Let&apos;s connect
                </span>{" "}
                if you&apos;re looking for a QA professional who&apos;s
                passionate about delivering exceptional software quality and
                enhancing user experiences through rigorous testing
                methodologies.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
