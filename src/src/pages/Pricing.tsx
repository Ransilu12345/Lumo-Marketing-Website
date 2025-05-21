import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


const Pricing: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false);
  
    const togglePricingPeriod = () => {
      setIsYearly(!isYearly);
    };
  
    const getPlanPrice = (monthlyPrice: number) => {
      return isYearly ? (monthlyPrice * 12 * 0.8).toFixed(2) : monthlyPrice.toFixed(2);
    };

    return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
    <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8"> 
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-600/20 bg-blue-50 text-blue-700 text-sm font-medium">
              Pricing Plans
            </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Choose the Perfect Plan for<span className="text-blue-600"> Your Learning Journey</span>
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                Flexible pricing options designed to support students at every stage. No hidden fees.
              </p>
            </div>

            {/* Pricing Toggle - Monthly/Yearly */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm font-medium ${!isYearly ? "font-bold" : ""}`}>Monthly</span>
              <div className="relative inline-flex h-6 w-12 rounded-full bg-gray-200 cursor-pointer" onClick={togglePricingPeriod}>
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300`}>
                  <div className={`h-5 w-5 rounded-full bg-[#111827] transform transition-transform ${isYearly ? "translate-x-2" : "translate-x"}`}></div>
                </div>
              </div>
              <span className={`text-sm font-medium ${isYearly ? "font-bold" : ""}`}>
                Yearly <Badge variant="outline" className="ml-1 text-xs">Save 20% for Yearly Plans</Badge>
              </span>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Free Plan */}
              <Card className="border-gray-200 shadow-sm flex flex-col h-full">
                <CardHeader className="pb-8 pt-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Free</h3>
                    <p className="text-sm text-muted-foreground">Perfect for trying out PAWS</p>
                  </div>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $0
                    <span className="ml-1 text-lg font-normal text-muted-foreground">{isYearly ? '/year' : '/month'}</span>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Basic study planning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>5 interactive quizzes per month</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Content summarization (limited)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Community forum access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full" variant="outline" onClick={() => window.location.href = '/signup'}>
                    Sign up free
                  </Button>
                </CardFooter>
              </Card>

              {/* Standard Plan */}
              <Card className="border-2 border-primary relative shadow-md flex flex-col h-full">
              <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-4 py-1 bg-[#111827] text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
                <CardHeader className="pb-8 pt-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Standard</h3>
                    <p className="text-sm text-muted-foreground">For dedicated students</p>
                  </div>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                  ${getPlanPrice(9.99)}
                    <span className="ml-1 text-lg font-normal text-muted-foreground">{isYearly ? '/year' : '/month'}</span>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Advanced study planning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Unlimited interactive quizzes</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Enhanced content summarization</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Basic collaboration tools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Priority forum support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Study progress tracking</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full" variant="outline">Get started</Button>
                </CardFooter>
              </Card>

              {/* Premium Plan */}
              <Card className="border-gray-200 shadow-sm">
                <CardHeader className="pb-8 pt-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Premium</h3>
                    <p className="text-sm text-muted-foreground">For serious academic achievers</p>
                  </div>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                  ${getPlanPrice(19.99)}
                    <span className="ml-1 text-lg font-normal text-muted-foreground">{isYearly ? '/year' : '/month'}</span>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>All Standard features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Advanced collaboration tools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>AI-powered study recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>1-on-1 academic advisor sessions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Offline mode for mobile app</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Premium learning resources</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>24/7 priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Get started
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Compare All Features</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Features</th>
                    <th className="p-3 text-center">Free</th>
                    <th className="p-3 text-center bg-gray-100">Standard</th>
                    <th className="p-3 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Study Planning</td>
                    <td className="p-3 text-center">Basic</td>
                    <td className="p-3 text-center bg-gray-100">Advanced</td>
                    <td className="p-3 text-center">Advanced+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Interactive Quizzes</td>
                    <td className="p-3 text-center">5/month</td>
                    <td className="p-3 text-center bg-gray-100">Unlimited</td>
                    <td className="p-3 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Content Summarization</td>
                    <td className="p-3 text-center">Limited</td>
                    <td className="p-3 text-center bg-gray-100">Enhanced</td>
                    <td className="p-3 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Collaboration Tools</td>
                    <td className="p-3 text-center">—</td>
                    <td className="p-3 text-center bg-gray-100">Basic</td>
                    <td className="p-3 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Study Progress Tracking</td>
                    <td className="p-3 text-center">—</td>
                    <td className="p-3 text-center bg-gray-100">
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                    </td>
                    <td className="p-3 text-center">
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">AI Study Recommendations</td>
                    <td className="p-3 text-center">—</td>
                    <td className="p-3 text-center bg-gray-100">—</td>
                    <td className="p-3 text-center">
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Academic Advisor Sessions</td>
                    <td className="p-3 text-center">—</td>
                    <td className="p-3 text-center bg-gray-100">—</td>
                    <td className="p-3 text-center">
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Support</td>
                    <td className="p-3 text-center">Community</td>
                    <td className="p-3 text-center bg-gray-100">Priority</td>
                    <td className="p-3 text-center">24/7 Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Find answers to common questions about our pricing plans.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Can I switch plans later?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Is there a student discount?</h3>
                <p className="text-muted-foreground">
                  Yes! Students with a valid ID can receive a 15% discount on any paid plan. Contact our support team to apply.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Do you offer a free trial?</h3>
                <p className="text-muted-foreground">
                  We offer a 14-day free trial of our Standard plan so you can experience all the features before committing.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and Apple Pay. For annual plans, we also offer invoicing options.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Can I get a refund?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee for all new subscriptions if you're not satisfied with our service.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Do you offer plans for educational institutions?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer special pricing for schools and universities. Please contact our sales team for more information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your learning experience?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students already using PAWS to achieve academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Start your free trial
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="text-white border-white hover:bg-blue-700"
                onClick={() => window.location.href = '/contact'}>
                Contact sales
              </Button>
            </div>
          </div>
    </section>
        </main>
        <Footer />
    </div>
    );};

export default Pricing;