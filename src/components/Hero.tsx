import { motion } from 'framer-motion';
import { Trees as Tree, Wind, Leaf, Globe, Award, Users, Droplets, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80"
            alt="Forest background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <Tree className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
                GeoTree: Technology Meets Conservation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in our mission to create a greener future through advanced geospatial technology
              and community engagement. Together, we can make a difference.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Link
                to="/plant"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
              >
                <Leaf className="h-5 w-5" />
                <span>Plant a Tree Now</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose GeoTree?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with environmental conservation to create
              meaningful impact and sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Geospatial Technology",
                description: "Advanced mapping and monitoring systems for precise tracking of plantation progress"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Green Credits",
                description: "Earn rewards for your environmental contributions and track your impact"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community Impact",
                description: "Join a growing network of environmental stewards making real change"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20 bg-gradient-to-br from-blue-800 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Environmental Impact</h2>
              <p className="text-blue-200">
                Through our collective efforts, we've made significant strides in environmental conservation
                and community engagement. Every tree planted contributes to a healthier planet.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-blue-300">Trees Planted</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold">5K+</div>
                  <div className="text-blue-300">Active Users</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                alt="Tree planting" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Special Events Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Plant for Special Occasions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make your special moments more meaningful by contributing to the environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1530092285049-1c42085fd395?auto=format&fit=crop&q=80",
                title: "Birthdays & Anniversaries",
                description: "Celebrate life's milestones with a lasting green tribute"
              },
              {
                image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80",
                title: "National Celebrations",
                description: "Honor occasions like Independence Day and Gandhi Jayanti"
              },
              {
                image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80",
                title: "Memorial Plantations",
                description: "Create living memorials for your loved ones"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-200">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tree Benefits Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Benefits of Your Tree</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When you plant a tree with GeoTree, you're not just growing a plant – you're creating a legacy of environmental impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Carbon Absorption",
                value: "21.6 kg",
                description: "CO2 absorbed per year",
                icon: <Wind className="h-6 w-6" />
              },
              {
                title: "Oxygen Generation",
                value: "118 kg",
                description: "Oxygen produced per year",
                icon: <Leaf className="h-6 w-6" />
              },
              {
                title: "Soil Conservation",
                value: "2.5 tons",
                description: "Soil preserved per year",
                icon: <Globe className="h-6 w-6" />
              },
              {
                title: "Water Conservation",
                value: "4,000 L",
                description: "Water conserved per year",
                icon: <Droplets className="h-6 w-6" />
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                <div className="text-2xl font-bold text-green-600 mb-1">{benefit.value}</div>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Credit Programs Section */}
      <div className="py-20 bg-gradient-to-br from-green-900 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Credit Programs</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Earn credits for your environmental contributions and be part of the solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            >
              <Award className="h-12 w-12 text-green-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Green Credits</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-green-300" />
                  <span>Earn points for every tree planted</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-300" />
                  <span>Redeem for eco-friendly products</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-300" />
                  <span>Join exclusive environmental programs</span>
                </li>
              </ul>
              <Link
                to="/green-credits"
                className="inline-flex items-center space-x-2 text-green-300 hover:text-green-200 transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            >
              <Droplets className="h-12 w-12 text-blue-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Water Credits</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <Droplets className="h-5 w-5 text-blue-300" />
                  <span>Credits for water conservation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-300" />
                  <span>Support water preservation projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-300" />
                  <span>Earn water sustainability badges</span>
                </li>
              </ul>
              <Link
                to="/water-credits"
                className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of others who are already contributing to a greener planet.
              Every tree counts, and every action matters.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Link
                to="/plant"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
              >
                <Tree className="h-5 w-5" />
                <span>Start Planting Today</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Tree className="h-8 w-8 text-green-500" />
                <span className="text-xl font-bold">GeoTree</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering environmental conservation through technology and community engagement.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/plant" className="text-gray-400 hover:text-white transition-colors">
                    Plant a Tree
                  </Link>
                </li>
                <li>
                  <Link to="/green-credits" className="text-gray-400 hover:text-white transition-colors">
                    Green Credits
                  </Link>
                </li>
                <li>
                  <Link to="/water-credits" className="text-gray-400 hover:text-white transition-colors">
                    Water Credits
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/community" className="text-gray-400 hover:text-white transition-colors">
                    Community Initiatives
                  </Link>
                </li>
                <li>
                  <Link to="/corporate" className="text-gray-400 hover:text-white transition-colors">
                    Corporate Partnership
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="text-gray-400 hover:text-white transition-colors">
                    Educational Programs
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-gray-400 hover:text-white transition-colors">
                    Special Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <span className="text-gray-400">123 Green Street, Eco City</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-500" />
                  <a href="mailto:contact@geotree.com" className="text-gray-400 hover:text-white transition-colors">
                    contact@geotree.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-500" />
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GeoTree. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;