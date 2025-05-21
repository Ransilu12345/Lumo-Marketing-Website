import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "PAWS has completely transformed how I manage my study time. The planning tools helped me improve my grades significantly.",
      author: "Kalindu Kassapa, Computer Science Student",
    },
    {
      quote: "The collaboration features made our group project so much easier to manage. Sharing resources and communicating has never been this seamless.",
      author: "Akmal Iqbhar, Engineering Major",
    },
    {
      quote: "The summarization tool is like having a personal tutor. It helped me understand complex topics quickly and efficiently.",
      author: "Vimukthi Prashan, Medical Student",
    },
    {
      quote: "As a professor, I recommend PAWS to all my students. It's an incredible tool that helps them stay organized and engaged.",
      author: "Dr. Pasindi, Psychology Professor",
    },
  ];

  // State to track the active slide
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go to the next slide
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous slide
  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Students and educators love how PAWS enhances the learning experience.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="relative h-64">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <div className="p-4">
                    <Card className="border border-gray-200 shadow-lg rounded-lg">
                      <CardContent className="flex flex-col p-6">
                        {/* Star Ratings */}
                        <div className="mb-4 flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-lg">
                              ★
                            </span>
                          ))}
                        </div>
                        {/* Quote */}
                        <blockquote className="text-gray-700 italic mb-4 text-center">
                          "{testimonial.quote}"
                        </blockquote>
                        {/* Author */}
                        <div className="mt-auto text-sm font-medium text-gray-900 text-center">
                          {testimonial.author}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handlePrevious}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition ml-4"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
