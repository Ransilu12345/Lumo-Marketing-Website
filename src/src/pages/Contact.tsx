import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MdMail as Mail, MdPhone as Phone, MdLocationOn as MapPin } from "react-icons/md"; // Importing Mail, Phone, and MapPin icons
import {useEffect  } from 'react';
import { useLocation } from "react-router-dom";

const Contact = () => {
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
    return (
    <div id = "contact-section" className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
    <div className="container mx-auto px-4 md:px-0">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form
                  onSubmit={(e) => {
                  e.preventDefault();
                  // Add your form submission logic here
                  console.log("Form submitted");
                  }}
                >
                  <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                    </label>
                    <input
                    id="name"
                    placeholder="Dulneth Ransilu"
                    required
                    className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                    </label>
                    <input
                    id="email"
                    type="email"
                    placeholder="ransilu@gmail.com"
                    required
                    className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                    </label>
                    <input
                    id="subject"
                    placeholder="How can we help you?"
                    required
                    className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                    </label>
                    <textarea
                    id="message"
                    placeholder="Tell us about your inquiry..."
                    className="w-full border border-gray-300 rounded-md p-2 min-h-[120px]"
                    required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#111827] text-white py-2 rounded-md hover:bg-[#1f2937]"
                  >
                    Send Message
                  </button>
                  </div>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#111827]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-600">support@pawslearning.com</p>
                      <p className="text-gray-600">paws.iitgroup06@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#111827]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-gray-600">011 2 540 786</p>
                      <p className="text-gray-600">011 3 467 897</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#111827]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Office</h3>
                      <p className="text-gray-600">Flower Road, Colombo</p>
                      <p className="text-gray-600">Sri Lanka</p>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="mt-8 h-[250px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8418724457624!2d79.85470227350726!3d6.909503418560425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596600364e59%3A0x31c5044b73ea2497!2sFlower%20Rd%2C%20Colombo%2000700!5e0!3m2!1sen!2slk!4v1744796215853!5m2!1sen!2slk" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-0">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our services and platform.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">How can I get started with PAWS?</h3>
                <p className="mt-2 text-gray-600">
                  You can sign up for a free account on our website and immediately start using our basic features. 
                  For advanced features, check out our pricing page for subscription options.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Do you offer student discounts?</h3>
                <p className="mt-2 text-gray-600">
                  Yes! We offer special pricing for students. You'll need to verify your student status 
                  using your school email address or student ID during registration.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Can I use PAWS on my mobile device?</h3>
                <p className="mt-2 text-gray-600">
                  Absolutely! PAWS is accessible on all devices with a web browser. We also have dedicated
                  mobile apps for iOS and Android for a better mobile experience.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">How do I cancel my subscription?</h3>
                <p className="mt-2 text-gray-600">
                  You can cancel your subscription at any time from your account settings. Your subscription
                  will remain active until the end of your current billing period.
                </p>
              </div>
            </div>
          </div>        
    </section>
      </main>
      <Footer />
    </div>
    );};





export default Contact;