import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import type { Wildlife as WildlifeType } from "./wildlifeData";
import { animals } from "./wildlifeData";

interface WildlifeCardProps {
  animal: WildlifeType;
  index: number;
}

const WildlifeCard = ({ animal, index }: WildlifeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="relative overflow-hidden rounded-lg bg-zinc-800/80 border border-amber-700/20 hover:border-amber-700/40 transition-all"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={animal.imagePath}
          alt={animal.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
        <div className="absolute top-2 right-2 flex gap-2">
          <span
            className={`${
              animal.type === "Legendary"
                ? "bg-amber-700/80"
                : animal.type === "Predator"
                ? "bg-red-800/80"
                : "bg-emerald-800/80"
            } text-stone-200 px-3 py-1 rounded-full text-sm border border-stone-500/20`}
          >
            {animal.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-serif text-amber-600 mb-3">
          {animal.name}
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-stone-400">Location:</span>
            <span className="text-stone-200">{animal.location}</span>
          </div>

          {animal.hunting_method && (
            <div className="flex items-center justify-between">
              <span className="text-stone-400">Hunting Method:</span>
              <span className="text-stone-200">{animal.hunting_method}</span>
            </div>
          )}

          {animal.weapon_type && (
            <div className="flex items-center justify-between">
              <span className="text-stone-400">Recommended Weapon:</span>
              <span className="text-stone-200">{animal.weapon_type}</span>
            </div>
          )}
        </div>

        <p className="mt-4 text-stone-400 text-sm leading-relaxed">
          {animal.description}
        </p>
      </div>
    </motion.div>
  );
};

const WildlifeNav = () => {
  const location = useLocation();
  const navItems = [
    { path: "/wildlife", label: "Wildlife", baseColor: "bg-emerald-800/80" },
    { path: "/fish", label: "Fish", baseColor: "bg-blue-800/80" },
    { path: "/legendary", label: "Legendary", baseColor: "bg-amber-700/80" },
  ];

  return (
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
  );
};

const Wildlife = () => {
  return (
    <div className="relative min-h-screen bg-zinc-900 text-stone-200 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
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
            Wildlife Guide
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-stone-400">
            Discover the diverse fauna that roams the heartland, from peaceful
            prey to fierce predators.
          </p>
        </motion.div>

        <WildlifeNav />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal, index) => (
            <WildlifeCard key={animal.id} animal={animal} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wildlife;
