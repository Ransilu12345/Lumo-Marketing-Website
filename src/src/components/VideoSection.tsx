import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const VideoSection = () => {
  const videos = [
    {
      title: "Study Planning Demo",
      description: "Learn how to optimize your study schedule with PAWS planning tools.",
      poster: "https://plus.unsplash.com/premium_photo-1661375427386-64ac35086427?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Collaboration Features",
      description: "See how PAWS facilitates seamless collaboration between students.",
      poster: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Summarization & Quizzes",
      description: "Watch how our AI-powered tools help you retain more information.",
      poster: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See PAWS in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our feature demonstrations to see how PAWS can transform your academic journey.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                      {/* Video Section */}
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          poster={video.poster}
                        >
                          <source src="#" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      {/* Video Details */}
                      <div className="px-6 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                        <p className="text-gray-600">{video.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Navigation */}
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition" />
              <CarouselNext className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
