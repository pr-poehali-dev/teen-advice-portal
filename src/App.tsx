
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BrainPage from "./pages/BrainPage";
import StudyPage from "./pages/StudyPage";
import FitnessPage from "./pages/FitnessPage";
import TimePage from "./pages/TimePage";
import RelationshipsPage from "./pages/RelationshipsPage";
import MentalHealthPage from "./pages/MentalHealthPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/brain" element={<BrainPage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/fitness" element={<FitnessPage />} />
          <Route path="/time" element={<TimePage />} />
          <Route path="/relationships" element={<RelationshipsPage />} />
          <Route path="/mental-health" element={<MentalHealthPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
