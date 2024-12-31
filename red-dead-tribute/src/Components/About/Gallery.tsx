import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/calumet_ravine.png",
    alt: "Calumet Ravine",
    caption: " ",
    location: "Grizzlies East, Ambarino",
  },
  {
    src: "/images/gallery/colter.png",
    alt: "Colter",
    caption: " ",
    location: "Grizzlies West, Ambarino",
  },
  {
    src: "/images/gallery/grizzlies_east.png",
    alt: "Moonstone Pond",
    caption: " ",
    location: "Grizzlies East, Ambarino",
  },
  {
    src: "/images/gallery/grizzlies_west.png",
    alt: "Grizzlies Mountains",
    caption: " ",
    location: "Grizzlies West, Ambarino",
  },
  {
    src: "/images/gallery/moonstone_pond.png",
    alt: "Moonstone pond",
    caption: " ",
    location: "Grizzlies East, Ambarino",
  },
  {
    src: "/images/gallery/lagras_bait_shop.png",
    alt: "Lagras Bait Shop",
    caption: " ",
    location: "Lagras, Lemoyne",
  },
  {
    src: "/images/gallery/rhodes_station.png",
    alt: "Rhodes Station",
    caption: " ",
    location: "Rhodes, Lemoyne",
  },
  {
    src: "/images/gallery/rhodes_station2.png",
    alt: "Rhodes Station other view",
    caption: " ",
    location: "Rhodes, Lemoyne",
  },
  {
    src: "/images/gallery/saint_denis.png",
    alt: "Saint Denis",
    caption: " ",
    location: "Saint Denis, Lemoyne",
  },
  {
    src: "/images/gallery/armadillo_station.png",
    alt: "Armadillo train station",
    caption: " ",
    location: "Armadillo, New Austin",
  },
  {
    src: "/images/gallery/benedict_point.png",
    alt: "Benedict Point",
    caption: " ",
    location: "Benedict Point, New Austin",
  },
  {
    src: "/images/gallery/tumbleweed.png",
    alt: "View of Tumbleweed",
    caption: " ",
    location: "Tumbleweed, New Austin",
  },
  {
    src: "/images/gallery/annesburg.png",
    alt: "Annesburg",
    caption: " ",
    location: "Annesburg, New Hanover",
  },
  {
    src: "/images/gallery/butcher_creek.png",
    alt: "Butcher Creek",
    caption: " ",
    location: "Butcher Creek, New Hanover",
  },
  {
    src: "/images/gallery/valentine.png",
    alt: "Valentine",
    caption: " ",
    location: "Valentine, New Hanover",
  },
  {
    src: "/images/gallery/valentine_church.png",
    alt: "Church in Valentine",
    caption: " ",
    location: "Valentine, New Hanover",
  },
  {
    src: "/images/gallery/van_horn.png",
    alt: "Van Horn",
    caption: " ",
    location: "Van Horn, New Hanover",
  },
  {
    src: "/images/gallery/van_horn_trading.png",
    alt: "Trading Co. in Van Horn",
    caption: " ",
    location: "Van Horn, New Hanover",
  },
  {
    src: "/images/gallery/blackwater.png",
    alt: "Blackwater",
    caption: " ",
    location: "Blackwater, West Elizabeth",
  },
  {
    src: "/images/gallery/riggs_station.png",
    alt: "Riggs Station",
    caption: " ",
    location: "Riggs Station, West Elizabeth",
  },
  {
    src: "/images/gallery/strawberry.png",
    alt: "Strawberry",
    caption: " ",
    location: "Strawberry, West Elizabeth",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setLoading(true);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setLoading(true);
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prevSlide();
      if (event.key === "ArrowRight") nextSlide();
    },
    [nextSlide, prevSlide]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-zinc-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif text-stone-200 mb-12 text-center"
        >
          Gallery
        </motion.h1>

        <div className="relative aspect-video bg-zinc-800/50 rounded-lg overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={currentIndex}
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              onLoad={() => setLoading(false)}
            />
          </AnimatePresence>

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-amber-700 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
          >
            <p className="text-stone-200 text-center text-lg">
              {galleryImages[currentIndex].caption}
            </p>
            {galleryImages[currentIndex].location && (
              <p className="text-center text-sm text-stone-400">
                Location: {galleryImages[currentIndex].location}
              </p>
            )}
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-stone-200 hover:bg-black/70"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-stone-200 hover:bg-black/70"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setLoading(true);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-amber-600"
                  : "bg-stone-600 hover:bg-stone-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
