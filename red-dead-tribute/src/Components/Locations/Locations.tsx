import { motion } from "framer-motion";

interface Location {
  description: string;
  imagePath: string;
  towns: {
    name: string;
    description: string;
    imagePath?: string;
  }[];
  climate: string;
  keyFeatures: string[];
}

const locationsData: Record<string, Location> = {
  Ambarino: {
    description:
      "A rugged, mountainous territory dominated by the towering peaks of the Grizzlies. The harsh climate and treacherous terrain make it one of the least populated regions.",
    imagePath: "/images/locations/ambarino.png",
    climate: "Alpine climate with heavy snowfall and harsh winters",
    keyFeatures: [
      "Mount Hagen",
      "Lake Isabella",
      "Deadboot Creek",
      "Barrow Lagoon",
    ],
    towns: [
      {
        name: "Grizzlies West",
        description:
          "A treacherous mountainous region known for its dangerous wildlife and harsh conditions.",
      },
      {
        name: "Grizzlies East",
        description:
          "Slightly more hospitable than the west, featuring the remnants of mining operations.",
      },
      {
        name: "Colter",
        description:
          "An abandoned mining town, now frozen in time under constant snowfall.",
      },
    ],
  },
  Lemoyne: {
    description:
      "A southern state that captures the essence of the Deep South, with its plantation houses, swamps, and bustling city life.",
    imagePath: "/images/locations/lemoyne.png",
    climate: "Humid subtropical climate with warm temperatures year-round",
    keyFeatures: [
      "Braithwaite Manor",
      "Saint Denis Port",
      "Bayou Nwa",
      "Bolger Glade",
    ],
    towns: [
      {
        name: "Saint Denis",
        description:
          "The largest and most industrialized city in the region, featuring a busy port and diverse population.",
      },
      {
        name: "Rhodes",
        description:
          "A small town caught between two feuding families, the Braithwaites and the Grays.",
      },
      {
        name: "Lagras",
        description: "A remote fishing village deep in the bayou.",
      },
    ],
  },
  "New Austin": {
    description:
      "The westernmost state in the territory, characterized by its arid desert landscape and frontier settlements.",
    imagePath: "/images/locations/new_austin.png",
    climate: "Hot desert climate with minimal rainfall",
    keyFeatures: [
      "Fort Mercer",
      "Gaptooth Ridge",
      "Rio Bravo",
      "Cholla Springs",
    ],
    towns: [
      {
        name: "Armadillo",
        description: "A frontier town plagued by disease and lawlessness.",
      },
      {
        name: "Tumbleweed",
        description:
          "The last remaining active settlement in the region, holding out against bandits.",
      },
      {
        name: "Benedict Point",
        description:
          "A railway station serving as a vital connection to civilization.",
      },
    ],
  },
  "New Hanover": {
    description:
      "A diverse territory ranging from open plains to dense forests, representing the heart of the frontier.",
    imagePath: "/images/locations/new_hanover.png",
    climate: "Variable continental climate with distinct seasons",
    keyFeatures: [
      "Heartland Oil Fields",
      "Cumberland Forest",
      "Dakota River",
      "Brandywine Drop",
    ],
    towns: [
      {
        name: "Valentine",
        description:
          "A busy livestock town known for its muddy streets and lively saloon.",
      },
      {
        name: "Annesburg",
        description:
          "A mining town with harsh working conditions and polluted surroundings.",
      },
      {
        name: "Van Horn Trading Post",
        description:
          "A lawless settlement serving as a port for passing ships.",
      },
    ],
  },
  "West Elizabeth": {
    description:
      "A diverse state featuring everything from bustling settlements to pristine wilderness.",
    imagePath: "/images/locations/west_elizabeth.png",
    climate: "Mixed climate with snowy mountains and temperate forests",
    keyFeatures: [
      "Tall Trees",
      "Great Plains",
      "Little Creek River",
      "Beecher's Hope",
    ],
    towns: [
      {
        name: "Blackwater",
        description:
          "A rapidly modernizing town representing the push of civilization westward.",
      },
      {
        name: "Strawberry",
        description:
          "A small logging town promoting itself as a tourist destination.",
      },
      {
        name: "Riggs Station",
        description:
          "A key railway stop connecting the region to greater civilization.",
      },
    ],
  },
};

const Locations = () => {
  return (
    <div className="bg-zinc-900 text-stone-200 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-serif mb-8 text-center"
        >
          Territories of Red Dead Redemption 2
        </motion.h1>

        <div className="grid gap-12">
          {Object.entries(locationsData).map(([state, data], index) => (
            <motion.div
              key={state}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800/50 rounded-lg p-6 border border-stone-700/50"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                  className="md:w-1/3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={data.imagePath}
                      alt={`${state} territory`}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>

                <div className="md:w-2/3">
                  <h2 className="text-3xl text-amber-700 mb-4 font-serif">
                    {state}
                  </h2>
                  <p className="text-stone-300 mb-6">{data.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl text-amber-700/80 mb-3">
                        Notable Locations
                      </h3>
                      <ul className="space-y-2">
                        {data.towns.map((town) => (
                          <li key={town.name} className="group">
                            <h4 className="text-amber-500/90 group-hover:text-amber-400 transition-colors">
                              {town.name}
                            </h4>
                            <p className="text-sm text-stone-400">
                              {town.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl text-amber-700/80 mb-3">Region</h3>
                      <p className="text-stone-400 mb-2">
                        <span className="text-amber-500/90">Climate: </span>
                        {data.climate}
                      </p>
                      <div className="mt-4">
                        <h4 className="text-amber-500/90 mb-2">Landmarks:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {data.keyFeatures.map((feature) => (
                            <li
                              key={feature}
                              className="text-stone-400 text-sm hover:text-amber-400 transition-colors"
                            >
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
