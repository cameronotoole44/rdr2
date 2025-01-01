import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import type { Fish as FishType } from "./fishData";
import { fishes } from "./fishData";

interface FishCardProps {
  fish: FishType;
  index: number;
}

const FishCard = ({ fish, index }: FishCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="relative overflow-hidden rounded-lg bg-zinc-800/80 border border-amber-700/20 hover:border-amber-700/40 transition-all"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={fish.imagePath}
          alt={fish.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-serif text-amber-600 mb-3">{fish.name}</h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-stone-400">Location:</span>
            <span className="text-stone-200">{fish.location}</span>
          </div>

          {fish.bestTimeOfDay && (
            <div className="flex items-center justify-between">
              <span className="text-stone-400">Best Time:</span>
              <span className="text-stone-200">{fish.bestTimeOfDay}</span>
            </div>
          )}

          {fish.bestWeather && (
            <div className="flex items-center justify-between">
              <span className="text-stone-400">Weather:</span>
              <span className="text-stone-200">{fish.bestWeather}</span>
            </div>
          )}

          {fish.baitType && (
            <div className="flex items-center justify-between">
              <span className="text-stone-400">Bait:</span>
              <span className="text-stone-200">{fish.baitType}</span>
            </div>
          )}
        </div>

        <p className="mt-4 text-stone-400 text-sm leading-relaxed">
          {fish.description}
        </p>
      </div>
    </motion.div>
  );
};

const Fish = () => {
  const location = useLocation();
  const navItems = [
    { path: "/wildlife", label: "Wildlife", baseColor: "bg-emerald-800/80" },
    { path: "/fish", label: "Fish", baseColor: "bg-blue-800/80" },
    { path: "/legendary", label: "Legendary", baseColor: "bg-amber-700/80" },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-900 text-stone-200 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-110"
        animate={{
          scale: [1.1, 1.15, 1.1],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-serif mb-6 text-stone-200">
            Fishing Guide
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-stone-400">
            Master the art of fishing across the diverse waters of the frontier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-10 flex justify-center space-x-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-3 rounded border transition-all ${
                location.pathname === item.path
                  ? `${item.baseColor} border-stone-500/30 text-stone-200`
                  : "bg-zinc-800/50 border-stone-600 text-stone-400 hover:border-amber-700 hover:bg-amber-700/20"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fishes.map((fish, index) => (
            <FishCard key={fish.id} fish={fish} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fish;
