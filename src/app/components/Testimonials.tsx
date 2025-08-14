import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Vijay consistently delivers thorough test coverage and finds issues others miss. His attention to detail has saved multiple releases from costly post-launch bugs.",
      author: "Senior Product Manager",
      company: "FinTech Startup",
      rating: 5,
    },
    {
      id: 2,
      quote: "Very fast on finding bugs. Great work, Thanks a lot!",
      author: "CTO",
      company: "SaaS Platform",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Working with Vijay improved our QA process significantly. His expertise in test automation reduced our regression testing time by 60%.",
      author: "Engineering Lead",
      company: "E-commerce Platform",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-1/5 left-1/4 w-8 h-8 bg-blue-400/20 rounded-full animate-float1 blur-sm shadow-sm"></div>
        <div className="absolute top-1/2 right-1/5 w-6 h-6 bg-indigo-400/20 rounded-full animate-float2 blur-sm shadow-sm"></div>
        <div className="absolute bottom-1/5 left-1/2 w-5 h-5 bg-purple-400/20 rounded-full animate-float3 blur-sm shadow-sm"></div>

        {/* Large Glowing Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-transparent rounded-full blur-3xl animate-pulse shadow-xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-400/8 to-transparent rounded-full blur-3xl animate-pulse delay-1000 shadow-xl"></div>
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
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-float1 { animation: float1 20s ease-in-out infinite; }
        .animate-float2 { animation: float2 16s ease-in-out infinite; }
        .animate-float3 { animation: float3 24s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>

      <div className="px-6 md:px-12 mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4" style={{ animationDelay: "0.1s" }}>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              Client Feedback
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Professional Testimonials
            </span>
          </h2>
          <p
            className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            What industry leaders say about working with me
          </p>
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-8 rounded-full"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <Card className="bg-white/80 backdrop-blur-xl border-2 border-slate-200/50 shadow-xl rounded-3xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full relative overflow-hidden group">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-slate-700 mb-6 flex-grow">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="mt-auto">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-slate-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-slate-500">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 animate-fadeInUp"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-slate-500 text-lg mb-6">
            Want to discuss how I can contribute to your project?
          </p>
          <a href="#contact">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
