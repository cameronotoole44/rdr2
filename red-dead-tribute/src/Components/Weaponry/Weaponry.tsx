import React, { useState } from "react";
import { motion } from "framer-motion";

const weaponCategories = [
  {
    name: "Pistols & Revolvers",
    count: 19,
    description:
      "From classic six-shooters to sophisticated semi-automatics, these sidearms are essential tools for any gunslinger.",
    image: "/images/weaponry/cattleman.png",
    examples: [
      "Cattleman Revolver",
      "Volcanic Pistol",
      "Semi-Automatic Pistol",
    ],
    characteristics: ["Quick Draw", "Dual Wielding", "High Rate of Fire"],
  },
  {
    name: "Rifles & Repeaters",
    count: 11,
    description:
      "Long-range weapons perfect for hunting and combat alike, offering superior accuracy and stopping power.",
    image: "/images/weaponry/lancaster_repeater.png",
    examples: ["Lancaster Repeater", "Bolt Action Rifle", "Springfield Rifle"],
    characteristics: ["Long Range", "High Accuracy", "Powerful Impact"],
  },
  {
    name: "Shotguns",
    count: 6,
    description:
      "Devastating at close range, these weapons are perfect for close-quarters combat and hunting large game.",
    image: "/images/weaponry/sawed_off.png",
    examples: [
      "Pump-Action Shotgun",
      "Semi-Auto Shotgun",
      "Double-Barreled Shotgun",
    ],
    characteristics: ["Close Range", "Spread Pattern", "High Damage"],
  },
  {
    name: "Bow",
    count: 1,
    description:
      "A silent and versatile weapon with multiple arrow types for different situations.",
    image: "/images/weaponry/bow.png",
    examples: [
      "Regular Arrows",
      "Fire Arrows",
      "Poison Arrows",
      "Small Game Arrows",
      "Improved Arrows",
      "Dynamite Arrows",
    ],
    characteristics: [
      "Silent",
      "Multiple Arrow Types",
      "Retrievable Ammunition",
    ],
  },
  {
    name: "Melee Weapons",
    count: 10,
    description:
      "For when the fighting gets up close and personal, ranging from knives to tomahawks.",
    image: "/images/weaponry/melee.png",
    examples: ["Hunting Knife", "Machete", "Hatchet"],
    characteristics: ["Close Combat", "Silent Takedowns", "Hunting Utility"],
  },
  {
    name: "Throwables",
    count: 15,
    description:
      "Versatile weapons that can be thrown for strategic advantage or quick damage.",
    image: "/images/weaponry/throwable.png",
    examples: ["Throwing Knives", "Dynamite", "Fire Bottles"],
    characteristics: ["Area Damage", "Strategic Use", "Limited Supply"],
  },
  {
    name: "Mounted Weapons",
    count: 3,
    description:
      "Heavy firepower that can turn the tide of any major confrontation.",
    image: "/images/weaponry/mounted.png",
    examples: ["Gatling Gun", "Cannon", "Browning Gun"],
    characteristics: ["High Power", "Fixed Position", "Rapid Fire"],
  },
];

const Weaponry: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-zinc-900 text-stone-200 overflow-hidden">
      <div className="relative h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/weapons/weapons_bg.jpg")',
          }}
          animate={{
            scale: [1.1, 1.15, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/60 to-zinc-900" />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-serif mb-6 text-stone-200">
              Weaponry
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-stone-300">
              A collection of weapons and tools for survival in the unforgiving
              American frontier.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative bg-zinc-900/95 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weaponCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-zinc-800 rounded-lg overflow-hidden border border-amber-700/20 hover:border-amber-700/40 transition-all cursor-pointer shadow-lg hover:shadow-amber-700/10"
                onClick={() =>
                  setSelectedCategory(selectedCategory === index ? null : index)
                }
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-serif text-amber-600">
                      {category.name}
                    </h3>
                    <span className="text-amber-500/80 text-sm">
                      {category.count}{" "}
                      {category.count === 1 ? "Weapon" : "Weapons"}
                    </span>
                  </div>
                  <p className="text-stone-300 mb-4">{category.description}</p>

                  {selectedCategory === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-amber-700/20"
                    >
                      <div className="mb-4">
                        <h4 className="text-amber-500/80 mb-2">
                          Notable Examples:
                        </h4>
                        <ul className="list-disc list-inside text-stone-300 ml-2">
                          {category.examples.map((example) => (
                            <li key={example} className="mb-1">
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.characteristics.map((characteristic) => (
                          <span
                            key={characteristic}
                            className="px-2 py-1 bg-amber-700/20 rounded-full text-xs text-amber-400"
                          >
                            {characteristic}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weaponry;
