import React, { useState, useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import { Clock, Star, BarChart, Users, BrainCircuit } from 'lucide-react';
import { Card, CardContent} from '@/components/ui/card';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';

const StudyPlanning = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the URL contains a hash (e.g., #collaboration-section)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
      }
    }
  }, [location]);

  const benefits = [
    { id: 1, title: "Improved Time Management", description: "Plan your study sessions efficiently to maximize productivity." },
    { id: 2, title: "Better Organization", description: "Keep track of all your tasks in one place with clear deadlines." },
    { id: 3, title: "Reduced Stress", description: "Feel confident knowing you have a structured plan for your studies." },
    { id: 4, title: "Increased Accountability", description: "Set goals and track your progress to stay motivated." }
  ];

  const testimonials = [
    { id: 1, name: "Customer 01", role: "", content: "", rating: 0 },
    { id: 2, name: "Customer 02", role: "", content: "", rating: 0 },
    { id: 3, name: "Customer 03", role: "", content: "", rating: 0 }
  ];

  const analytics = {
    activeUsers: 0,
    averageTasksPerWeek: 0,
    completionRate: 0,
    averageStudyHours: 0
  };

  return (
    <div id ="studyplan-section" className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Study Planning</h1>
              <p className="text-xl text-gray-600">
                Organize your study schedule and maximize your productivity
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">Why Use Study Planning?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map(benefit => (
                  <Card key={benefit.id} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">Feature Analytics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
                    <p className="text-2xl font-bold">{analytics.activeUsers.toLocaleString()}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <BrainCircuit className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <h3 className="text-sm font-medium text-gray-500">Tasks Per Week</h3>
                    <p className="text-2xl font-bold">{analytics.averageTasksPerWeek}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <BarChart className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <h3 className="text-sm font-medium text-gray-500">Completion Rate</h3>
                    <p className="text-2xl font-bold">{analytics.completionRate}%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                    <h3 className="text-sm font-medium text-gray-500">Avg Study Hours</h3>
                    <p className="text-2xl font-bold">{analytics.averageStudyHours}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center">What Students Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map(testimonial => (
                  <Card key={testimonial.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudyPlanning;