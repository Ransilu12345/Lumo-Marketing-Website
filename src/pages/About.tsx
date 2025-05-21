
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">About PAWS</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  PAWS (Plan Action Work success) was created with a single mission: to help students excel in their academic journey through innovative technology and intuitive design.
                </p>
                
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2025 by the IIT InfoSchol Team, PAWS emerged from our founders' observations that students were struggling to manage their academic workload efficiently. They noticed a gap between the digital tools available and what students actually needed.
                </p>
                
                <div className="bg-white rounded-xl shadow-md p-8 my-8 border border-blue-100">
                  <h3 className="text-xl font-medium text-blue-700 mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower students worldwide with accessible, intelligent tools that transform how they learn, collaborate, and achieve academic success.
                  </p>
                </div>
                
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">Core Values</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">Innovation:</span>
                    <span className="text-gray-600">We constantly explore new technologies to enhance the learning experience.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">Accessibility:</span>
                    <span className="text-gray-600">We believe quality education tools should be available to all students.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">Privacy:</span>
                    <span className="text-gray-600">We maintain the highest standards for protecting student data.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">Community:</span>
                    <span className="text-gray-600">We foster collaboration and support among learners worldwide.</span>
                  </li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">Our Team</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our diverse team consists of educators, software engineers, UX designers, and academic researchers - all passionate about transforming education through technology.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
