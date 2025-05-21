import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="px-4 py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-600/20 bg-blue-50 text-blue-700 text-sm font-medium">
              Introducing PAWS Learning Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Your Academic <span className="text-blue-600">Success Partner</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              PAWS helps students excel with intelligent study planning, collaboration tools, 
              AI-powered summarization, and interactive quizzes - all in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center"
              >
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-3 rounded-lg flex items-center justify-center"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <video
                className="w-full h-full object-cover"
                poster="https://plus.unsplash.com/premium_photo-1658506891404-bfb50c7415f0?q=80&w=800&auto=format&fit=crop"
                controls
              >
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
