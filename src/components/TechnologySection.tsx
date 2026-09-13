import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

function TechnologySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-2">
        Explore the{" "}
        <span className="text-pink-500">
          Technologies
        </span>
      </h2>

      <p className="text-gray-500 mb-8">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        ))}
      </div>
    </section>
  );
}

export default TechnologySection;