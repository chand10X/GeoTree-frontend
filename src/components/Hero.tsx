import { motion } from 'framer-motion';
import { Trees as Tree, Wind, Leaf, Globe, Award, Users, Droplets, Heart ,ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import images from '../Public/assets/image'; 
import videos from '../Public/assets/video';
import Footer from '../components/FrequentUses/Footer';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.Forestbackground} 
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
            
            {/* Video Section */}
            <div className="mt-10">
              <video 
                autoPlay 
                loop 
                muted 
                className="w-full rounded-lg shadow-lg"
              >
                <source src={videos.GeotreeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="mx-auto w-3/5 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-2 text-center">Planting Trees Was Never So Easy!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Now, plant trees from the comfort of your home with a few easy steps!
          </p>
          <img 
            src={images.Main} 
            alt="Main visual" 
            className="w-full object-cover rounded-lg" 
          />
        </div>
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
                image: images.Birthdayplant, 
                title: "Birthdays & Anniversaries",
                description: "Celebrate life's milestones with a lasting green tribute",
                link: "/plant" // Added link for navigation
              },
              {
                image: images.Nationcelebration, 
                title: "National Celebrations",
                description: "Honor occasions like Independence Day and Gandhi Jayanti",
                link: "/plant" // Added link for navigation
              },
              {
                image: images.Memoryplant, 
                title: "Memorial Plantations",
                description: "Create living memorials for your loved ones",
                link: "/plant" // Added link for navigation
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = event.link} // Navigate on click
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

      {/* Credit Programs Section */}
      <div className="py-20 relative bg-gray-800">
        <img 
          src={images.Forest} 
          alt="Forest Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Credit Programs</h2>
            <p className="font-bold  max-w-2xl mx-auto">
              Earn credits for your environmental contributions and be part of the solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl" 
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
              className="bg-white p-8 rounded-xl" 
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

       {/* Programs Section */}
       <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Explore Our Programs</h2>
            <p className="text-gray-600 mb-8">
              Discover various initiatives and programs that contribute to environmental conservation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                src: images.Community, 
                title: "Community Initiatives",
                description: "Engage with local communities to promote sustainability.",
                link: "/community"
              },
              {
                src: images.Corporate, 
                title: "Corporate Partnership",
                description: "Collaborate with businesses for a greener future.",
                link: "/corporate"
              },
              {
                src: images.Education, 
                title: "Educational Programs",
                description: "Educate the next generation about conservation.",
                link: "/education"
              },
              {
                src: images.Sevent, 
                title: "Special Events",
                description: "Special events unite people in celebration and lasting memories.",
                link: "/events"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <Link to={program.link} className="aspect-w-16 aspect-h-9 block">
                  <img 
                    src={program.src} 
                    alt={program.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-sm text-gray-200">{program.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20 relative bg-gray-800">
        <img 
          src={images.Enviornmenteffect} 
          alt="Environmental Effect" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-green-100">Our Environmental Impact</h2>
              <p className="text-green-200">
                Through our collective efforts, we've made significant strides in environmental conservation
                and community engagement. Every tree planted contributes to a healthier planet.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-600/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-green-300">Trees Planted</div>
                </div>
                <div className="bg-green-600/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white">5K+</div>
                  <div className="text-green-300">Active Users</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <img 
                src={images.impact} 
                alt="Tree planting" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
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
            {/* Coverflow Section */}
           
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
     

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Hero;