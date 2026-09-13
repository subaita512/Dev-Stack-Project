import type { Dispatch, SetStateAction } from "react";

type Technology = {
  id: string;
  name: string;
  category: string;
  icon: string;
};

type StackSidebarProps = {
  stack: Technology[];
  setStack: Dispatch<SetStateAction<Technology[]>>;
};

function StackSidebar({
  stack,
  setStack,
}: StackSidebarProps) {
  
  const handleRemove = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white">
      <h2 className="font-bold text-xl">
        Your Stack
      </h2>

      <p className="text-gray-500 text-sm mt-1">
        {stack.length} Technology Selected
      </p>

      <div className="mt-4">
        {stack.length === 0 ? (
          <p className="text-gray-400 text-sm">
            Your stack is empty
          </p>
        ) : (
          stack.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-3 mb-3 flex items-center gap-3"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-medium">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {item.category}
                </p>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-gray-400 hover:text-red-500 text-lg"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <button
        onClick={handleRemoveAll}
        disabled={stack.length === 0}
        className="w-full border border-red-300 text-red-500 py-2 rounded-lg mt-4 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Remove All
      </button>
    </div>
  );
}

export default StackSidebar;