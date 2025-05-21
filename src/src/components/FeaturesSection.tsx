import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, MessageSquare, Check } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      title: "Study Planning",
      description: "Create personalized study schedules, track progress, and optimize your learning journey.",
      benefits: [
        "Smart scheduling algorithms",
        "Progress tracking",
        "Deadline reminders",
        "Priority management",
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Student Collaboration",
      description: "Connect with classmates, share resources, and collaborate on projects through email integration.",
      benefits: [
        "Secure file sharing",
        "Email notifications",
        "Group discussions",
        "Project management",
      ],
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      title: "Summarization & Quizzes",
      description: "Generate smart summaries of complex content and test your knowledge with interactive quizzes.",
      benefits: [
        "AI-powered summarization",
        "Custom quiz generation",
        "Performance analytics",
        "Knowledge retention tracking",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Academic Excellence
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            PAWS combines innovative tools to transform how students learn, collaborate, and succeed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow rounded-lg"
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900 text-center">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-center">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-1">
                        <Check className="h-4 w-4 text-green-500" />
                      </span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
