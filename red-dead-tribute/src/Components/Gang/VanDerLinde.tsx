import React, { useState } from "react";
import { motion } from "framer-motion";

const gangMembers = [
  {
    name: "Dutch van der Linde",
    role: "Leader",
    description:
      "A charismatic leader with grand plans and unwavering ideals, Dutch leads the gang with promises of freedom and prosperity",
    image: "/images/gang/dutch.png",
    quote: "The game ain't over... I ain't played my final move",
    specialties: ["Leadership", "Planning", "Manipulation"],
  },
  {
    name: "Arthur Morgan",
    role: "Lead Enforcer",
    description:
      "The gang's most trusted gunslinger, Arthur has been with Dutch since he was a boy. Loyal but increasingly doubtful",
    image: "/images/gang/arthur.png",
    quote: "Be loyal to what matters",
    specialties: ["Gunslinging", "Hunting", "Drawing"],
  },
  {
    name: "Hosea Matthews",
    role: "Co-founder",
    description:
      "The wise veteran outlaw who helps Dutch lead the gang, bringing wisdom and caution to balance Dutch's ambition",
    image: "/images/gang/hosea.png",
    quote: "I wish I had acquired wisdom at less of a price",
    specialties: ["Cons", "Planning", "Mentorship"],
  },
  {
    name: "John Marston",
    role: "Gunslinger",
    description:
      "Found as a young boy, John grew up in the gang alongside Arthur. Despite his loyalty, he struggles to balance gang life with family.",
    image: "/images/gang/john.png",
    quote: "Guess it’s better to fight for something than live for nothing",
    specialties: ["Shooting", "Survival", "Tracking"],
  },
  {
    name: "Sadie Adler",
    role: "Bounty Hunter",
    description:
      "A widow turned fearsome gunslinger, Sadie transformed from a helpless victim to one of the gang's most capable members",
    image: "/images/gang/sadie.png",
    quote: "I ain't nobody's wife no more",
    specialties: ["Bounty Hunting", "Combat", "Determination"],
  },
  {
    name: "Charles Smith",
    role: "Scout",
    description:
      "A skilled hunter and tracker with a strong moral compass, Charles is one of the gang's most reliable and honorable members",
    image: "/images/gang/charles.png",
    quote: "The amount of hell we've raised, we're owed some back, you know?",
    specialties: ["Tracking", "Hunting", "Combat"],
  },
];

const Vanderlinde: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-zinc-900 text-stone-200 overflow-hidden">
      <div className="relative h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/gang/vanderlinde_gang.png")',
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
              The Van der Linde Gang
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-stone-300">
              A family forged in the fires of rebellion and desperation. United
              by a shared dream of freedom, they live on the edge of a world
              rapidly modernizing, clinging to an outlaw code that becomes
              harder to uphold. As the cracks in their ideals deepen, their bond
              is tested by betrayal, loss, and the relentless pursuit of
              survival.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative bg-zinc-900/95 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gangMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-zinc-800 rounded-lg overflow-hidden border border-amber-700/20 hover:border-amber-700/40 transition-all cursor-pointer shadow-lg hover:shadow-amber-700/10"
                onClick={() =>
                  setSelectedMember(selectedMember === index ? null : index)
                }
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-amber-600 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-stone-400 text-sm mb-3">{member.role}</p>
                  <p className="text-stone-300">{member.description}</p>

                  {selectedMember === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-amber-700/20"
                    >
                      <p className="text-amber-500/80 italic mb-3">
                        "{member.quote}"
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-2 py-1 bg-amber-700/20 rounded-full text-xs text-amber-400"
                          >
                            {specialty}
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

export default Vanderlinde;
