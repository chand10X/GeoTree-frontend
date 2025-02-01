import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, TreePine, Users, ArrowRight, Heart } from 'lucide-react';

const GreenCredits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Award className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
              Green Credits Program
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Earn rewards for your environmental contributions and make a lasting impact on our planet.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Leaf className="h-8 w-8" />,
              title: "Earn Credits",
              description: "Get points for every tree you plant and maintain"
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Community Impact",
              description: "Join a network of environmental champions"
            },
            {
              icon: <Award className="h-8 w-8" />,
              title: "Rewards",
              description: "Redeem credits for eco-friendly products and experiences"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-green-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <TreePine className="h-6 w-6" />,
                title: "Plant Trees",
                description: "Start by planting trees through our platform"
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Earn Points",
                description: "Get credits for each verified plantation"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Track Growth",
                description: "Monitor your trees and earn bonus points"
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Redeem Rewards",
                description: "Use credits for eco-friendly rewards"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-green-600 mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-green-500 hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Join Green Credits Program
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default GreenCredits;