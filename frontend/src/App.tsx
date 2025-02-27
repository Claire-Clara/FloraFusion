
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Intro from "./pages/Intro";
import GameIntro from "./pages/GameIntro";
import Game from "./pages/Game";
import GardenView from "./pages/GardenView";
import GeoGarden from "./pages/GeoGarden";
import GeoGardenState from "./pages/GeoGardenState";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/game-intro" element={<GameIntro />} />
          <Route path="/game" element={<Game />} />
          <Route path="/garden" element={<GardenView />} />
          <Route path="/geo-garden" element={<GeoGarden />} />
          <Route path="/geo-garden/:stateId" element={<GeoGardenState />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
