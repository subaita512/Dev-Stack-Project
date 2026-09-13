import type { Dispatch, SetStateAction } from "react";
import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";
fetch("/data/technologies.json")

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

type TechnologySectionProps = {
  stack: Technology[];
  setStack: Dispatch<SetStateAction<Technology[]>>;
};

function TechnologySection({
  stack,
  setStack,
}: TechnologySectionProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-2">
        Explore the{" "}
        <span className="text-pink-500">Technologies</span>
      </h2>

      <p className="text-gray-500 mb-8">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            stack={stack}
            setStack={setStack}
          />
        ))}
      </div>
    </section>
  );
}

export default TechnologySection;