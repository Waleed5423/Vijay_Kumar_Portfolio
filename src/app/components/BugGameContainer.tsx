import { Card } from "@/components/ui/card";
import BugGameClient from "./BugGameClient";

const BugGameContainer = () => {
  return (
    <section
      id="game"
      className="relative pt-17 pb-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-100/40 to-indigo-50/20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-400/20 rounded-full animate-float1"></div>
        <div className="absolute top-2/3 right-1/5 w-6 h-6 bg-indigo-400/20 rounded-full animate-float2"></div>
        <div className="absolute top-28 left-28 w-76 h-76 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Bug Hunter Game
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Test your reflexes by squashing as many bugs as you can in 30
            seconds!
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden">
          {/* Pass the static content as children to client component */}
          <BugGameClient />
        </Card>
      </div>
    </section>
  );
};

export default BugGameContainer;
