import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import CalumetRavine from "../../assets/images/gallery/calumet_ravine.png";
import Colter from "../../assets/images/gallery/colter.png";
import East from "../../assets/images/gallery/grizzlies_east.png";
import West from "../../assets/images/gallery/grizzlies_west.png";
import Moonstone from "../../assets/images/gallery/moonstone_pond.png";
import Lagras from "../../assets/images/gallery/lagras_bait_shop.png";
import RhodesStation from "../../assets/images/gallery/rhodes_station.png";
import Rhodes from "../../assets/images/gallery/rhodes_station2.png";
import SaintDenis from "../../assets/images/gallery/saint_denis.png";
import ArmadilloStation from "../../assets/images/gallery/armadillo_station.png";
import BenedictPoint from "../../assets/images/gallery/benedict_point.png";
import Tumbleweed from "../../assets/images/gallery/tumbleweed.png";
import Annesburg from "../../assets/images/gallery/annesburg.png";
import ButcherCreek from "../../assets/images/gallery/butcher_creek.png";
import Church from "../../assets/images/gallery/valentine_church.png";
import Valentine from "../../assets/images/gallery/valentine.png";
import VanHorn from "../../assets/images/gallery/van_horn.png";
import Trading from "../../assets/images/gallery/van_horn_trading.png";
import Blackwater from "../../assets/images/gallery/blackwater.png";
import Riggs from "../../assets/images/gallery/riggs_station.png";
import Strawberry from "../../assets/images/gallery/strawberry.png";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: CalumetRavine,
    alt: "Calumet Ravine",
    caption: " ",
    location: "Grizzlies East, Ambarino",
  },
  {
    src: Colter,
    alt: "Colter",
    caption: " ",
    location: "Grizzlies West, Ambarino",
  },
  {
    src: East,
    alt: "Moonstone Pond",
    caption: " ",
    location: "Grizzlies East, Ambarino",
  },
  {
    src: West,
    alt: "Grizzlies Mountains",
    caption: " ",
    location: "Grizzlies West, Ambarino",
  },
  {
    src: Moonstone,
    alt: "Moonstone pond",
    caption: " ",
    location: "Grizzlies East, Ambarino",
  },
  {
    src: Lagras,
    alt: "Lagras Bait Shop",
    caption: " ",
    location: "Lagras, Lemoyne",
  },
  {
    src: RhodesStation,
    alt: "Rhodes Station",
    caption: " ",
    location: "Rhodes, Lemoyne",
  },
  {
    src: Rhodes,
    alt: "Rhodes Station other view",
    caption: " ",
    location: "Rhodes, Lemoyne",
  },
  {
    src: SaintDenis,
    alt: "Saint Denis",
    caption: " ",
    location: "Saint Denis, Lemoyne",
  },
  {
    src: ArmadilloStation,
    alt: "Armadillo train station",
    caption: " ",
    location: "Armadillo, New Austin",
  },
  {
    src: BenedictPoint,
    alt: "Benedict Point",
    caption: " ",
    location: "Benedict Point, New Austin",
  },
  {
    src: Tumbleweed,
    alt: "View of Tumbleweed",
    caption: " ",
    location: "Tumbleweed, New Austin",
  },
  {
    src: Annesburg,
    alt: "Annesburg",
    caption: " ",
    location: "Annesburg, New Hanover",
  },
  {
    src: ButcherCreek,
    alt: "Butcher Creek",
    caption: " ",
    location: "Butcher Creek, New Hanover",
  },
  {
    src: Valentine,
    alt: "Valentine",
    caption: " ",
    location: "Valentine, New Hanover",
  },
  {
    src: Church,
    alt: "Church in Valentine",
    caption: " ",
    location: "Valentine, New Hanover",
  },
  {
    src: VanHorn,
    alt: "Van Horn",
    caption: " ",
    location: "Van Horn, New Hanover",
  },
  {
    src: Trading,
    alt: "Trading Co. in Van Horn",
    caption: " ",
    location: "Van Horn, New Hanover",
  },
  {
    src: Blackwater,
    alt: "Blackwater",
    caption: " ",
    location: "Blackwater, West Elizabeth",
  },
  {
    src: Riggs,
    alt: "Riggs Station",
    caption: " ",
    location: "Riggs Station, West Elizabeth",
  },
  {
    src: Strawberry,
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
              <p className="text-amber-500/80 text-sm text-center mt-1">
                Location: {galleryImages[currentIndex].location}
              </p>
            )}
          </motion.div>

          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-700"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-700"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setLoading(true);
                }}
                aria-label={`Show image ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-amber-700" : "bg-stone-400"
                } hover:bg-amber-500`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
