import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingPlantButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePlantNow = () => {
    navigate('/plant', {
      state: {
        returnTo: location.pathname,
        // Preserve any relevant state from the current page
        selectedSite: location.state?.selectedSite,
        selectedCategory: location.state?.selectedCategory,
        selectedCampaign: location.state?.selectedCampaign
      }
    });
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handlePlantNow}
      className="fixed bottom-20 right-8 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
    >
      <Leaf className="h-5 w-5" />
      <span>Plant Now</span>
    </motion.button>
  );
};

export default FloatingPlantButton;