import { motion } from "framer-motion";

interface StorySection {
  title: string;
  content: string;
  imagePath: string;
}

const storySections: StorySection[] = [
  {
    title: "A Dying Era",
    content:
      "Set in 1899, at a pivotal moment in American history. Witness the clash between the old ways of the frontier and the unstoppable march of modernization as railroads, telegraphs, and industrialization transform the West forever.",
    imagePath: "/images/gallery/dying_era.png",
  },
  {
    title: "Living, Breathing World",
    content:
      "Explore vast territories from snowy mountains to swamplands, each filled with unique wildlife, settlements, and secrets. Dynamic weather and day-night cycles create an immersive environment that reacts to your presence.",
    imagePath: "/images/gallery/living_world.png",
  },
  {
    title: "Your Story, Your Choices",
    content:
      "Every decision shapes your journey through this harsh land. Build relationships, make allies or enemies, and face the consequences of your actions. Your choices influence not just the story, but the very world around you.",
    imagePath: "/images/gallery/your_story.png",
  },
];

const Overview = () => {
  return (
    <div className="bg-zinc-900 text-stone-200 min-h-screen">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/gallery/overview_header.png"
            alt="RDR2 Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-serif mb-6">Red Dead Redemption 2</h1>
            <p className="text-xl text-stone-300 mb-8">
              Winner of over 175 Game of the Year Awards and recipient of over
              250 perfect scores, Red Dead Redemption 2 is an epic tale of honor
              and loyalty in the dawn of the modern age.
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-amber-700 rounded">
                97/100 Metacritic
              </div>
              <div className="px-6 py-3 border border-stone-600 rounded">
                175+ GOTY Awards
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="space-y-24">
          {storySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : ""}>
                <img
                  src={section.imagePath}
                  alt={section.title}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-amber-700 mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-stone-300">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-zinc-800/50 rounded-lg p-8 border border-stone-700/50"
        >
          <h2 className="text-3xl font-serif text-amber-700 mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl text-amber-500 mb-3">Authentic World</h3>
              <p className="text-stone-300">
                From bustling cities to remote wilderness, experience a
                meticulously crafted recreation of the American frontier.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-amber-500 mb-3">
                Dynamic Interactions
              </h3>
              <p className="text-stone-300">
                Every NPC has a purpose and routine. Your actions influence how
                the world responds to you, from friendly greetings to fearful
                avoidance.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-amber-500 mb-3">Advanced Systems</h3>
              <p className="text-stone-300">
                Detailed hunting, crafting, and survival mechanics bring the
                frontier experience to life with unprecedented depth.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-amber-500 mb-3">
                Evolving Experience
              </h3>
              <p className="text-stone-300">
                Your choices and actions affect your character's appearance,
                abilities, and reputation throughout the world.
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Overview;
