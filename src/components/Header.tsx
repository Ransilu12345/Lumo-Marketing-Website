
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { GraduationCap, BookOpen, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img 
              src="PAWS.png" 
              alt="PAWS Logo" 
              className="h-10 w-auto rounded-lg" 
            />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
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
                      to="/"
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
                      to="/"
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
                      to="/"
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
            <NavigationMenuItem>
              <Link to="/pricing" className={navigationMenuTriggerStyle()}>
                Pricing
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle()}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
