import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  TestTube,
  Code,
  Database,
  Cloud,
  Zap,
  Target,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: TestTube,
      title: "Testing Methodologies",
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Manual Testing", level: 95 },
        { name: "Test Automation", level: 90 },
        { name: "API Testing", level: 92 },
        { name: "Performance Testing", level: 85 },
        { name: "Security Testing", level: 80 },
        { name: "Mobile Testing", level: 88 },
      ],
    },
    {
      icon: Code,
      title: "Automation Tools",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Selenium WebDriver", level: 90 },
        { name: "Cypress", level: 85 },
        { name: "Postman/Newman", level: 92 },
        { name: "Appium", level: 80 },
        { name: "JMeter", level: 85 },
        { name: "REST Assured", level: 88 },
      ],
    },
    {
      icon: Database,
      title: "Technical Skills",
      color: "from-amber-500 to-orange-500",
      skills: [
        { name: "SQL/Database Testing", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Git/Version Control", level: 92 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Docker/Kubernetes", level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: "Platforms & Frameworks",
      color: "from-rose-500 to-pink-500",
      skills: [
        { name: "JIRA/Confluence", level: 95 },
        { name: "TestRail", level: 88 },
        { name: "Jenkins", level: 85 },
        { name: "AWS/Cloud Testing", level: 80 },
        { name: "Agile/Scrum", level: 92 },
        { name: "DevOps Practices", level: 78 },
      ],
    },
  ];

  const certifications = [
    "ISTQB Foundation Level Certified",
    "Agile Testing Certification",
    "Selenium WebDriver Certification",
    "AWS Cloud Practitioner",
    "Scrum Master Certification",
  ];

  const achievements = [
    {
      icon: Target,
      color: "bg-purple-600",
      bgColor: "bg-purple-50",
      metric: "99.5%",
      label: "Test Coverage Achievement",
      description: "Consistently achieved high test coverage across projects",
    },
    {
      icon: TrendingUp,
      color: "bg-emerald-600",
      bgColor: "bg-emerald-50",
      metric: "65%",
      label: "Defect Reduction",
      description: "Average reduction in production defects",
    },
    {
      icon: Zap,
      color: "bg-amber-600",
      bgColor: "bg-amber-50",
      metric: "40%",
      label: "Efficiency Improvement",
      description: "Test execution efficiency gained through automation",
    },
    {
      icon: CheckCircle2,
      color: "bg-blue-600",
      bgColor: "bg-blue-50",
      metric: "150+",
      label: "Projects Delivered",
      description: "Successfully delivered quality software solutions",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Balls */}
        <div className="absolute top-1/5 left-1/4 w-8 h-8 bg-blue-400/20 rounded-full animate-float1"></div>
        <div className="absolute top-1/2 right-1/5 w-6 h-6 bg-indigo-400/20 rounded-full animate-float2"></div>
        <div className="absolute bottom-1/5 left-1/2 w-5 h-5 bg-purple-400/20 rounded-full animate-float3"></div>
        <div className="absolute top-3/5 right-2/3 w-7 h-7 bg-blue-400/15 rounded-full animate-float4"></div>
        <div className="absolute bottom-1/4 left-1/6 w-9 h-9 bg-indigo-400/15 rounded-full animate-float5"></div>
        <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-purple-400/15 rounded-full animate-float6"></div>
        <div className="absolute top-2/3 left-2/3 w-6 h-6 bg-pink-400/20 rounded-full animate-float7"></div>
        <div className="absolute bottom-2/3 right-1/4 w-5 h-5 bg-teal-400/20 rounded-full animate-float8"></div>
        <div className="absolute top-3/6 left-3/4 w-7 h-7 bg-yellow-400/15 rounded-full animate-float9"></div>
        <div className="absolute bottom-1/3 right-2/5 w-8 h-8 bg-rose-400/80 rounded-full animate-float10"></div>
        <div className="absolute top-4/5 left-1/5 w-6 h-6 bg-emerald-400/15 rounded-full animate-float11"></div>
        <div className="absolute bottom-1/6 right-3/4 w-5 h-5 bg-cyan-400/15 rounded-full animate-float12"></div>
        <div className="absolute top-24 left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-88 h-88 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-52 h-52 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-2/3 w-56 h-56 bg-green-400/50 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-2/3 left-1/6 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1200"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <style>{`
          @keyframes float1 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(22px,38px) rotate(6deg);} }
          @keyframes float2 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-30px,15px) rotate(-4deg);} }
          @keyframes float3 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(18px,-42px) rotate(7deg);} }
          @keyframes float4 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-25px,28px) rotate(-5deg);} }
          @keyframes float5 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(38px,-20px) rotate(8deg);} }
          @keyframes float6 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-12px,-32px) rotate(-6deg);} }
          @keyframes float7 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(29px,19px) rotate(4deg);} }
          @keyframes float8 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-35px,-18px) rotate(-7deg);} }
          @keyframes float9 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(16px,41px) rotate(5deg);} }
          @keyframes float10 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(33px,26px) rotate(-3deg);} }
          @keyframes float11 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(-21px,-29px) rotate(6deg);} }
          @keyframes float12 { 0%, 100% { transform: translate(0,0) rotate(0deg);} 50% { transform: translate(27px,17px) rotate(-4deg);} }

          .animate-float1 { animation: float1 16s ease-in-out infinite; }
          .animate-float2 { animation: float2 23s ease-in-out infinite; }
          .animate-float3 { animation: float3 14s ease-in-out infinite; }
          .animate-float4 { animation: float4 18s ease-in-out infinite; }
          .animate-float5 { animation: float5 20s ease-in-out infinite; }
          .animate-float6 { animation: float6 12s ease-in-out infinite; }
          .animate-float7 { animation: float7 17s ease-in-out infinite; }
          .animate-float8 { animation: float8 25s ease-in-out infinite; }
          .animate-float9 { animation: float9 15s ease-in-out infinite; }
          .animate-float10 { animation: float10 21s ease-in-out infinite; }
          .animate-float11 { animation: float11 19s ease-in-out infinite; }
          .animate-float12 { animation: float12 13s ease-in-out infinite; }
        `}</style>

      <div className=" mx-auto px-4 sm:px-6 relative z-10 max-w-9xl container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Comprehensive testing skills and technical expertise across multiple
            domains
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid lg:grid-cols-4 gap-2 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/80 hover:shadow-xl transition-shadow  backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-800">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-slate-600">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className={`h-2 `} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`${achievement.bgColor}  hover:shadow-xl transition-shadow backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/50 rounded-2xl p-6 text-center`}
              >
                <div
                  className={`p-4 rounded-full ${achievement.color}/10 text-${achievement.color} w-fit mx-auto mb-4`}
                >
                  <achievement.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {achievement.metric}
                </div>
                <div className="text-lg font-semibold text-slate-700 mb-2">
                  {achievement.label}
                </div>
                <p className="text-slate-600 text-sm">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
