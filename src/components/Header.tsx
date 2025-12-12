import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const drathosLogo = '/logo/logoDrathos.png';
const drathosText = '/logo/Logo_Title.png';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling 100px
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'domus', label: 'Domus' },
    { id: 'deuses', label: 'Deuses' },
    { id: 'semideuses', label: 'Semideuses' },
    { id: 'lore', label: 'Lore' },
    { id: 'recursos', label: 'Recursos' },
  ];

  // Show navbar if: not on inicio section OR scrolled down
  const shouldShowNavbar = activeSection !== 'inicio' || scrolled;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: shouldShowNavbar ? 1 : 0,
        y: shouldShowNavbar ? 0 : -100,
        backgroundColor: shouldShowNavbar ? 'rgba(10, 10, 15, 0.8)' : 'transparent',
        borderColor: shouldShowNavbar ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      }}
      style={{
        backdropFilter: shouldShowNavbar ? 'blur(16px)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActiveSection('inicio')}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <img src={drathosLogo} alt="Drathos Logo" className="h-12 w-auto object-contain" />
            <img src={drathosText} alt="Drathos" className="h-8 w-auto object-contain" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === item.id
                  ? 'bg-white/10 text-celestial'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${activeSection === item.id
                      ? 'bg-white/10 text-celestial'
                      : 'text-gray-300 hover:bg-white/5'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
