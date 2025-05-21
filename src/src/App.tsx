import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";                    
import Signup from "./pages/Signup";
import StudyPlan from "./pages/StudyPlan";
import Collaboration from "./pages/Collaboration";
import SummarizationQuizzes from "./pages/SummarizationQuizzes";


const queryClient = new QueryClient();

// Wrap the entire application in QueryClientProvider first
const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {/* Move TooltipProvider inside the router to ensure it's rendered within a valid React component tree */}
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/studyplan" element={<StudyPlan />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/summarizationquizzes" element={<SummarizationQuizzes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
