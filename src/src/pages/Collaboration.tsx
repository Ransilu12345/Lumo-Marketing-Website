import { useState, useEffect  } from 'react';
import { Users, MessageSquare, Share2, Plus, Search, Star, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocation } from "react-router-dom";

const Collaboration = () => {
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

  const [activeTab, setActiveTab] = useState('groups');

  const benefits = [
    { id: 1, title: "Peer Learning", description: "Learn from classmates and gain new perspectives on complex topics." },
    { id: 2, title: "Resource Sharing", description: "Exchange study materials, notes, and helpful resources instantly." },
    { id: 3, title: "Project Coordination", description: "Coordinate group projects efficiently with real-time communication." },
    { id: 4, title: "Global Networking", description: "Connect with students and experts from around the world." }
  ];

  const testimonials = [
    { id: 1, name: "Customer 01", role: "", content: "", rating: 0 },
    { id: 2, name: "Customer 02", role: "", content: "", rating: 0 },
    { id: 3, name: "Customer 03", role: "", content: "", rating: 0 }
  ];

  const analytics = {
    activeGroups: 0,
    messagesPerDay: 0,
    filesShared: 0,
    countriesRepresented: 0
  };

  return (
    <div id = "collaboration-section2" className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Collaboration Tools</h1>
              <p className="text-xl text-gray-600">
                Connect with classmates, share resources, and work together effectively
              </p>
            </div>
            
            {/* Feature Benefits Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">Why Collaborate?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map(benefit => (
                  <Card key={benefit.id} className="border-l-4 border-l-orange-500">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Analytics Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">Collaboration Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h3 className="text-sm font-medium text-gray-500">Active Groups</h3>
                    <p className="text-2xl font-bold">{analytics.activeGroups.toLocaleString()}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <h3 className="text-sm font-medium text-gray-500">Messages/Day</h3>
                    <p className="text-2xl font-bold">{analytics.messagesPerDay}M</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Share2 className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <h3 className="text-sm font-medium text-gray-500">Files Shared</h3>
                    <p className="text-2xl font-bold">{analytics.filesShared.toLocaleString()}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Globe className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                    <h3 className="text-sm font-medium text-gray-500">Countries</h3>
                    <p className="text-2xl font-bold">{analytics.countriesRepresented}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">Student Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map(testimonial => (
                  <Card key={testimonial.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold mr-3">
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
            

            <div id="collaboration-section" className="py-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Want a Sneak Peek? Try the Demo!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
              <Card className="h-full">
                <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" /> My Groups
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex mb-4">
                  <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    className="rounded-r-none border-r-0 pl-10"
                    placeholder="Search groups..."
                  />
                  </div>
                  <Button className="rounded-l-none bg-[#111827] text-white hover:bg-[#1f2937]">
                  <Search className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button className="w-full mb-4 bg-[#111827] text-white hover:bg-[#1f2937]">
                  <Plus className="h-4 w-4 mr-2" /> Create New Group
                </Button>
                </CardContent>
              </Card>
              </div>
              
              <div className="md:col-span-2">
              <Card className="h-full flex flex-col">
                <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Biology Study Group</CardTitle>
                  <Button variant="outline" className="h-8">
                  <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>
                </div>
                <div className="flex space-x-2 text-sm">
                  <button
                  className={`px-3 py-1 rounded-md ${activeTab === 'groups' ? 'bg-gray-100 font-medium' : ''}`}
                  onClick={() => setActiveTab('groups')}
                  >
                  Chat
                  </button>
                  <button
                  className={`px-3 py-1 rounded-md ${activeTab === 'files' ? 'bg-gray-100 font-medium' : ''}`}
                  onClick={() => setActiveTab('files')}
                  >
                  Files
                  </button>
                  <button
                  className={`px-3 py-1 rounded-md ${activeTab === 'tasks' ? 'bg-gray-100 font-medium' : ''}`}
                  onClick={() => setActiveTab('tasks')}
                  >
                  Tasks
                  </button>
                </div>
                </CardHeader>
                <CardContent className="flex-grow">
                <div className="flex flex-col h-full">                  
                  <div className="border-t pt-4 mt-auto">
                  <div className="flex gap-2">
                    <Input 
                    className="flex-grow"
                    placeholder="Type your message..."
                    />
                    <Button className="bg-[#111827] text-white hover:bg-[#1f2937]">
                    <MessageSquare className="h-4 w-4 mr-2" /> Send
                    </Button>
                  </div>
                  </div>
                </div>
                </CardContent>
              </Card>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collaboration;
