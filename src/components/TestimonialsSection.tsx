
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "PAWS has completely transformed how I manage my study time. The planning tools helped me improve my grades significantly.",
      author: "Kalindu Kassapa, Computer Science Student"
    },
    {
      quote: "The collaboration features made our group project so much easier to manage. Sharing resources and communicating has never been this seamless.",
      author: "Akmal Iqbhar, Engineering Major"
    },
    {
      quote: "The summarization tool is like having a personal tutor. It helped me understand complex topics quickly and efficiently.",
      author: "Vimukthi Prashan, Medical Student"
    },
    {
      quote: "As a professor, I recommend PAWS to all my students. It's an incredible tool that helps them stay organized and engaged.",
      author: "Dr. Pasindi, Psychology Professor"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Students and educators love how PAWS enhances the learning experience.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="border-blue-100">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>
                      <blockquote className="text-gray-700 italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="mt-auto text-sm font-medium text-gray-900">
                        {testimonial.author}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
