
import GlassCard from "@/components/ui/GlassCard";
import { ArrowRight, Brain, Globe, LineChart, Users } from "lucide-react";

const features = [
  {
    title: "Diverse Expert Network",
    description: "Access thousands of verified specialists across 120+ industries and specialties.",
    icon: <Users className="w-10 h-10 text-blue-500" />,
    color: "badge-blue",
    badgeText: "Network",
  },
  {
    title: "Personalized Engagements",
    description: "Get matched with experts tailored to your specific needs and challenges.",
    icon: <Globe className="w-10 h-10 text-purple-500" />,
    color: "badge-purple",
    badgeText: "Personalization",
  },
  {
    title: "AI-Powered Research",
    description: "Leverage our AI to analyze trends, identify insights, and enhance decision-making.",
    icon: <Brain className="w-10 h-10 text-green-500" />,
    color: "badge-green",
    badgeText: "Intelligence",
  },
  {
    title: "Data-Driven Insights",
    description: "Visualize market trends and expert recommendations with interactive dashboards.",
    icon: <LineChart className="w-10 h-10 text-blue-500" />,
    color: "badge-blue",
    badgeText: "Analytics",
  },
];

const FeatureCards = () => {
  return (
    <section id="features" className="section-container relative">
      <div className="text-center mb-16">
        <span className="badge badge-green mb-4">Features</span>
        <h2 className="section-title">
          Powerful Tools to <span className="text-gradient">Enhance</span> Your Decisions
        </h2>
        <p className="section-subtitle mx-auto">
          Our platform offers comprehensive features designed to connect you 
          with the right expertise and insights for your specific challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <GlassCard
            key={index}
            className="p-8 h-full animate-fade-in"
            style={{ animationDelay: `${index * 100 + 300}ms` }}
          >
            <div className="mb-4">
              <span className={`badge ${feature.color}`}>{feature.badgeText}</span>
            </div>
            
            <div className="mb-6">{feature.icon}</div>
            
            <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
            
            <p className="text-muted-foreground mb-6">{feature.description}</p>
            
            <button className="flex items-center text-primary font-medium hover:underline group transition-all">
              Learn more
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </GlassCard>
        ))}
      </div>

      {/* Highlight feature */}
      <GlassCard className="mt-12 p-8 md:p-12 animate-fade-in [animation-delay:700ms]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="badge badge-purple mb-4">Premium Feature</span>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Custom Expert Consultation Sessions
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Schedule one-on-one virtual meetings with our top industry experts 
              for personalized advice and insights tailored to your specific challenges.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Direct access to top-tier specialists",
                "Flexible scheduling options",
                "Secure and confidential sessions",
                "Follow-up documentation and recommendations",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="btn-primary">
              Schedule a Session
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-sm">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse-slow" />
              <div className="absolute inset-4 bg-purple-500/10 rounded-full animate-pulse-slow [animation-delay:1s]" />
              <div className="absolute inset-8 bg-blue-500/10 rounded-full animate-pulse-slow [animation-delay:2s]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Users className="w-12 h-12 text-primary" />
                </div>
              </div>
              
              {/* Connection lines animation */}
              <div className="absolute inset-0">
                <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <line x1="100" y1="100" x2="180" y2="30" stroke="#3377ff" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse-slow" />
                  <line x1="100" y1="100" x2="30" y2="50" stroke="#3377ff" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse-slow [animation-delay:1s]" />
                  <line x1="100" y1="100" x2="160" y2="170" stroke="#3377ff" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse-slow [animation-delay:0.5s]" />
                  <line x1="100" y1="100" x2="40" y2="150" stroke="#3377ff" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse-slow [animation-delay:1.5s]" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default FeatureCards;
