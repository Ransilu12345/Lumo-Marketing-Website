import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GraduationCap, BookOpen, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-6">
        {/* Logo Section */}
        <Link to="/" className="mr-12">
          <img
            src="PAWS.png"
            alt="PAWS Logo"
            className="h-10 w-auto rounded-lg"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md sm:static sm:block sm:w-auto sm:shadow-none`}
        >
          <NavigationMenu className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-0">
            <NavigationMenuList className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Home */}
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent focus:bg-transparent`}
                >
                  Home
                </Link>
              </NavigationMenuItem>

              {/* Features */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2 bg-white">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                          to="/"
                        >
                          <GraduationCap className="h-6 w-6 text-blue-500" />
                          <div className="mb-2 mt-4 text-lg font-medium text-blue-900">
                            PAWS Learning Platform
                          </div>
                          <p className="text-sm leading-tight text-blue-700">
                            Empowering students with advanced study tools and collaborative features.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/studyplan#studyplan-section"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50"
                      >
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-500" />
                          <div className="text-sm font-medium leading-none">Study Planning</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Organize and optimize your study schedule efficiently.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/collaboration#collaboration-section2"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50"
                      >
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-500" />
                          <div className="text-sm font-medium leading-none">Collaboration</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Connect with classmates and share resources seamlessly.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/summarizationquizzes#summarization-section2"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50"
                      >
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-blue-500" />
                          <div className="text-sm font-medium leading-none">Summarization & Quizzes</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Generate content summaries and test your knowledge.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing */}
              <NavigationMenuItem>
                <Link
                  to="/pricing"
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent focus:bg-transparent`}
                >
                  Pricing
                </Link>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent focus:bg-transparent`}
                >
                  About
                </Link>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent focus:bg-transparent`}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Buttons Section */}
        <div className="hidden sm:flex items-center gap-6">
          <Link to="/login">
            <Button className="border border-gray text-black-700">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button className="border border-black-300 text-white bg-black">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
