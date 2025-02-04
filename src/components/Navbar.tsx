import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, LineChart, User, Leaf, Menu, X, History } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../Public/assets/image';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: <Home className="h-5 w-5" />, label: 'Home' },
    { path: '/plant', icon: <Leaf className="h-5 w-5" />, label: 'Plant' },
    { path: '/dashboard', icon: <LineChart className="h-5 w-5" />, label: 'Dashboard' },
    { path: '/history', icon: <History className="h-5 w-5" />, label: 'History' },
    { path: '/profile', icon: <User className="h-5 w-5" />, label: 'Profile' },
  ];

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <img src={images.logo} alt="GeoTree Logo" className="h-12 w-15" /> 
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all hover:scale-105 ${
                  isActive(path)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogin}
            className="hidden md:block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Login
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute left-0 right-0 bg-white shadow-lg"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map(({ path, icon, label }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                      isActive(path)
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    {icon}
                    <span>{label}</span>
                  </Link>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  Login
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;