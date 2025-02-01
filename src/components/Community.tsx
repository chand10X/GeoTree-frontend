import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, TreePine, Calendar, ArrowRight } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Users className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
              Community Initiatives
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing community of environmental stewards making real change through collective action.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Planting Day",
                date: "March 25, 2024",
                location: "City Park",
                image: "https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?auto=format&fit=crop&q=80"
              },
              {
                title: "Environmental Workshop",
                date: "April 2, 2024",
                location: "Community Center",
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
              },
              {
                title: "Green Tech Meetup",
                date: "April 15, 2024",
                location: "Innovation Hub",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <TreePine className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Urban Forest Initiative",
                description: "Our community transformed an abandoned lot into a thriving urban forest.",
                impact: "1,000+ trees planted",
                image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80"
              },
              {
                title: "School Garden Program",
                description: "Local schools created sustainable gardens for education and food production.",
                impact: "15 schools participating",
                image: "https://images.unsplash.com/photo-1464638681273-0962e9b53566?auto=format&fit=crop&q=80"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <div className="flex items-center text-green-600">
                      <Heart className="h-5 w-5 mr-2" />
                      {story.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of a growing movement of environmental champions making a real difference in our world.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center"
          >
            Get Involved
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;