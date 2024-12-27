import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

interface NavDropdownLinkProps extends NavLinkProps {
  highlighted?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  external = false,
}) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="text-stone-200 hover:text-amber-700 transition-colors tracking-wide"
  >
    {children}
  </a>
);

const NavDropdownLink: React.FC<NavDropdownLinkProps> = ({
  href,
  children,
  highlighted = false,
}) => (
  <a
    href={href}
    className={`block px-4 py-2 text-sm hover:bg-stone-800/50 transition-colors ${
      highlighted ? "text-amber-700" : "text-stone-200"
    }`}
  >
    {children}
  </a>
);

const MobileNavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  external = false,
}) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="block text-stone-200 hover:text-amber-700 transition-colors tracking-wide py-2"
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExploreOpen &&
        !(event.target as Element).closest(".explore-menu")
      ) {
        setIsExploreOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isExploreOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-900/95 backdrop-blur-sm border-b border-stone-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <a
              href="/"
              className="font-serif text-xl tracking-wide text-stone-200 hover:text-amber-700 transition-colors"
            >
              Red Dead Redemption 2
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <NavLink href="/overview">Overview</NavLink>

            <div className="relative explore-menu">
              <button
                className="flex items-center space-x-1 text-stone-200 hover:text-amber-700 transition-colors tracking-wide"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExploreOpen(!isExploreOpen);
                }}
              >
                <span>Explore</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isExploreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isExploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-48 bg-zinc-900/95 backdrop-blur-sm rounded-md border border-stone-800/50 shadow-xl py-2 mt-2"
                  >
                    <NavDropdownLink href="/locations" highlighted>
                      Locations
                    </NavDropdownLink>
                    <div className="border-t border-stone-800/50 my-2"></div>
                    <NavDropdownLink href="/gallery">Gallery</NavDropdownLink>
                    <NavDropdownLink href="/the-gang">The Gang</NavDropdownLink>
                    <NavDropdownLink href="/wildlife">Wildlife</NavDropdownLink>
                    <NavDropdownLink href="/weaponry">Weaponry</NavDropdownLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              href="https://www.rockstargames.com/reddeadredemption2"
              external
            >
              Official
            </NavLink>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-stone-200 hover:text-amber-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900/95 backdrop-blur-sm border-t border-stone-800/50"
          >
            <div className="px-4 py-4 space-y-4">
              <MobileNavLink href="/overview">Overview</MobileNavLink>
              <MobileNavLink href="/locations">Locations</MobileNavLink>
              <MobileNavLink href="/wildlife">Wildlife</MobileNavLink>
              <MobileNavLink href="/weaponry">Weaponry</MobileNavLink>
              <MobileNavLink href="/the-gang">The Gang</MobileNavLink>
              <MobileNavLink
                href="https://www.rockstargames.com/reddeadredemption2"
                external
              >
                Official
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
