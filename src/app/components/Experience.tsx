import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Danat FZ LLC (owned by Argaam)",
      position: "SQA Engineer",
      duration: "Jan 2023 - Present",
      location: "Karāchi, Sindh, Pakistan (On-site)",
      description:
        "Conducting quality assurance for mobile and web applications, ensuring software reliability through comprehensive testing methodologies.",
      achievements: [
        "Conducted thorough manual testing for Android/iOS apps, responsive web, and desktop applications",
        "Regularly updated test progress and roadblocks to QA Lead, ensuring project alignment",
        "Executed database validations with SQL for back-end data accuracy",
        "Collaborated in refining software requirements and contributed to release roadmaps",
        "Authored detailed bug reports and QA documentation for traceability",
        "Actively participated in Agile ceremonies and sprint planning discussions",
      ],
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      shadowColor: "shadow-green-100/40",
    },
    {
      company: "Danat Forward Productions",
      position: "SQA Engineer",
      duration: "Jul 2019 - Dec 2022",
      location: "Karāchi, Sindh, Pakistan",
      description:
        "Ensured software quality through systematic testing processes and collaboration with development teams.",
      achievements: [
        "Designed and executed detailed test cases for mobile and web platforms",
        "Ensured smooth functionality through continuous regression and sanity testing",
        "Logged reproducible bugs using tracking tools like JIRA and coordinated resolutions",
        "Partnered with cross-functional teams to improve quality during product lifecycles",
        "Maintained evolving test documentation aligned with updated features",
      ],
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-100",
      shadowColor: "shadow-indigo-100/40",
    },
    {
      company: "Contractor Foreman",
      position: "SQA Engineer",
      duration: "Jun 2018 - Jul 2019",
      location: "Karachi, Pakistan",
      description:
        "Performed quality assurance for early-stage features and contributed to product improvement cycles.",
      achievements: [
        "Tested early-stage feature sets through exploratory and structured test cases",
        "Identified usability and critical issues before beta releases, enhancing user satisfaction",
        "Submitted precise and traceable defect logs, accelerating fix cycles",
        "Supported developers by verifying resolved bugs before production deployment",
        "Contributed to QA feedback loops for continuous product improvement",
      ],
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      shadowColor: "shadow-orange-100/40",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-17 pb-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Balls */}
        <div className="absolute top-3/3 left-2/5 w-5 h-5 bg-blue-400/40 rounded-full animate-float1"></div>
        <div className="absolute top-2/3 right-1/3 w-7 h-7 bg-indigo-400/20 rounded-full animate-float2"></div>
        <div className="absolute bottom-2/4 left-3/5 w-6 h-6 bg-purple-400/20 rounded-full animate-float3"></div>
        <div className="absolute top-1/4 right-1/6 w-8 h-8 bg-blue-400/15 rounded-full animate-float4"></div>
        <div className="absolute bottom-1/2 left-2/3 w-5 h-5 bg-indigo-400/45 rounded-full animate-float5"></div>
        <div className="absolute top-4/5 right-1/4 w-6 h-6 bg-purple-400/15 rounded-full animate-float6"></div>
        <div className="absolute top-1/6 left-4/4 w-7 h-7 bg-pink-400/20 rounded-full animate-float7"></div>
        <div className="absolute bottom-1/6 right-2/3 w-4 h-4 bg-teal-400/50 rounded-full animate-float8"></div>
        <div className="absolute top-2/5 left-1/3 w-9 h-9 bg-yellow-400/15 rounded-full animate-float9"></div>
        <div className="absolute bottom-2/5 right-1/5 w-6 h-6 bg-rose-400/15 rounded-full animate-float10"></div>
        <div className="absolute top-3/5 left-2/5 w-5 h-5 bg-emerald-400/15 rounded-full animate-float11"></div>
        <div className="absolute bottom-3/4 left-1/4 w-8 h-8 bg-cyan-400/15 rounded-full animate-float12"></div>
        <div className="absolute top-28 left-28 w-76 h-76 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-28 right-28 w-84 h-84 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/6 w-60 h-60 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/6 w-68 h-68 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/2 w-52 h-52 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-88 h-88 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1200"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <style>{`
                @keyframes float1 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(26px,33px) rotate(5deg);} }
                @keyframes float2 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-28px,19px) rotate(-6deg);} }
                @keyframes float3 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(21px,-31px) rotate(4deg);} }
                @keyframes float4 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-19px,24px) rotate(-3deg);} }
                @keyframes float5 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(34px,-17px) rotate(7deg);} }
                @keyframes float6 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-16px,-29px) rotate(-5deg);} }
                @keyframes float7 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(23px,16px) rotate(6deg);} }
                @keyframes float8 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-31px,-12px) rotate(-4deg);} }
                @keyframes float9 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(17px,35px) rotate(3deg);} }
                @keyframes float10 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(29px,21px) rotate(-5deg);} }
                @keyframes float11 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-24px,-26px) rotate(8deg);} }
                @keyframes float12 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(20px,18px) rotate(-3deg);} }

                .animate-float1 { animation: float1 18s ease-in-out infinite; }
                .animate-float2 { animation: float2 15s ease-in-out infinite; }
                .animate-float3 { animation: float3 22s ease-in-out infinite; }
                .animate-float4 { animation: float4 17s ease-in-out infinite; }
                .animate-float5 { animation: float5 21s ease-in-out infinite; }
                .animate-float6 { animation: float6 14s ease-in-out infinite; }
                .animate-float7 { animation: float7 19s ease-in-out infinite; }
                .animate-float8 { animation: float8 26s ease-in-out infinite; }
                .animate-float9 { animation: float9 16s ease-in-out infinite; }
                .animate-float10 { animation: float10 23s ease-in-out infinite; }
                .animate-float11 { animation: float11 20s ease-in-out infinite; }
                .animate-float12 { animation: float12 25s ease-in-out infinite; }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-fadeIn">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg animate-fadeIn delay-100">
            My journey through various roles in Software Quality Assurance and
            Test Engineering.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `fadeIn ${0.5 + index * 0.2}s ease-out forwards`,
              }}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute -inset-1 rounded-2xl ${exp.shadowColor} opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300`}
              ></div>

              <Card
                className={`${exp.bgColor} ${exp.borderColor} backdrop-blur-xl border border-opacity-50 shadow-lg  rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl relative overflow-hidden`}
              >
                {/* Animated border on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none ${exp.borderColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mt-1 transition-transform duration-300 group-hover:scale-125`}
                    />
                    {index !== experiences.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 my-2" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <p className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors duration-300">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-row md:flex-col md:items-end gap-1">
                        <Badge className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-100/30">
                          {exp.duration}
                        </Badge>
                        <Badge className="bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-all duration-300 group-hover:shadow-md group-hover:shadow-indigo-100/30">
                          {exp.location}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-slate-700 mb-4 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                      {exp.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start transition-all duration-200 hover:translate-x-1"
                          >
                            <span className="mr-2 mb-0.5 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300">
                              •
                            </span>
                            <span className="text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
