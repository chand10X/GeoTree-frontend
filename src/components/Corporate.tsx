import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TreePine, Users, Target, ArrowRight, CheckCircle } from 'lucide-react';

const Corporate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Building2 className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
              Corporate Partnership
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join forces with GeoTree to create sustainable impact and strengthen your corporate social responsibility.
          </p>
        </motion.div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <TreePine className="h-8 w-8" />,
              title: "Environmental Impact",
              description: "Make a measurable difference in environmental conservation"
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Employee Engagement",
              description: "Boost team morale through meaningful environmental initiatives"
            },
            {
              icon: <Target className="h-8 w-8" />,
              title: "Brand Recognition",
              description: "Enhance your brand's sustainability credentials"
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

        {/* Partnership Programs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Partnership Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Corporate Forest Initiative",
                features: [
                  "Dedicated forest area for your company",
                  "Regular progress reports",
                  "Employee planting events",
                  "Custom branding opportunities"
                ],
                price: "Starting at $5,000"
              },
              {
                title: "Green Team Program",
                features: [
                  "Employee engagement platform",
                  "Monthly sustainability challenges",
                  "Impact tracking dashboard",
                  "Recognition program"
                ],
                price: "Starting at $3,000"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="border border-green-100 rounded-lg p-6"
              >
                <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-green-600 mb-4">{program.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  Learn More
                </motion.button>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a customized partnership program for your organization.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Corporate;