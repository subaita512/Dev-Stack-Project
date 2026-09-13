import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TechnologySection from "./components/TechnologySection";
import StackSidebar from "./components/StackSidebar";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  return (
    <>
      <Navbar />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          <div className="lg:col-span-3">
            <TechnologySection
              stack={stack}
              setStack={setStack}
            />
          </div>

          <div className="lg:col-span-1">
            <StackSidebar
              stack={stack}
              setStack={setStack}
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;