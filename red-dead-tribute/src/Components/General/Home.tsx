import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-900 text-stone-200 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60 scale-110"
        style={{
          backgroundImage: 'url("/images/rdr2-landscape.jpg")',
          backgroundAttachment: "fixed",
        }}
        animate={{
          scale: [1.1, 1.15, 1.1],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-serif mb-6 text-stone-200"
        >
          Red Dead Redemption 2
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl text-xl md:text-2xl mb-10 text-stone-400 tracking-wide"
        >
          Set in 1899, at the end of the Wild West era, America is changing.
          Federal agents, bounty hunters, and internal conflict threaten your
          gang's survival. Rob, steal, and fight your way across the rugged
          heartland to endure in an unforgiving world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-4"
        >
          <a
            href="/overview"
            className="px-8 py-3 bg-amber-700/80 hover:bg-amber-700 rounded border border-amber-600/30 transition-all"
          >
            Overview
          </a>
          <a
            href="/gallery"
            className="px-8 py-3 border border-stone-600 hover:border-amber-700 hover:bg-amber-700/20 rounded transition-all"
          >
            Gallery
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 bg-zinc-900/95 py-20 text-center">
        <img
          src="/images/rating.png"
          alt="Red Dead Redemption 2 Rating"
          className="mx-auto max-w-sm rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
