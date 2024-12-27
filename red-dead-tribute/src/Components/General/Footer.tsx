import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-zinc-900/95 text-stone-200 border-t border-stone-800/50 py-8 relative z-20 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm tracking-wide"
        >
          Tribute to{" "}
          <a
            href="https://www.rockstargames.com/reddeadredemption2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:text-amber-600 transition-colors duration-300 border-b border-transparent hover:border-amber-600"
          >
            Red Dead Redemption 2
          </a>{" "}
          <span className="text-stone-400">
            &copy; {new Date().getFullYear()}
          </span>{" "}
          <span className="text-amber-700/80">Cameron O'Toole</span>
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs text-stone-400 mt-3 tracking-wider font-light"
        >
          This is a fan-made project and is not affiliated with Rockstar Games
          or Take-Two Entertainment.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
