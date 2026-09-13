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

type TechnologyCardProps = {
  technology: Technology;
};

function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="flex justify-between items-center">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10"
        />

        <span className="text-xs bg-pink-100 text-pink-500 px-2 py-1 rounded-full">
          {technology.badge}
        </span>
      </div>

      <h3 className="font-bold mt-4">
        {technology.name}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {technology.description}
      </p>

      <div className="flex justify-between mt-4 text-xs">
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span>⭐ {technology.rating}</span>

        <button className="bg-black text-white px-3 py-2 rounded-lg text-sm">
          Add to Stack
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;