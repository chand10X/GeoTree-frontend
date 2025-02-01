import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, TreePine, Users, ArrowRight, PlayCircle } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <GraduationCap className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
              Educational Programs
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering the next generation with environmental knowledge and practical conservation skills.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Book className="h-8 w-8" />,
              title: "School Programs",
              description: "Curriculum-aligned environmental education for K-12 students"
            },
            {
              icon: <TreePine className="h-8 w-8" />,
              title: "Hands-on Workshops",
              description: "Practical conservation and planting workshops"
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Community Learning",
              description: "Group sessions for environmental awareness"
            }
          ].map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-green-600 mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Courses */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Environmental Science Basics",
                duration: "6 weeks",
                level: "Beginner",
                image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80"
              },
              {
                title: "Advanced Conservation Techniques",
                duration: "8 weeks",
                level: "Advanced",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Book className="h-4 w-4 mr-2" />
                    <span className="mr-4">{course.duration}</span>
                    <GraduationCap className="h-4 w-4 mr-2" />
                    <span>{course.level}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    Enroll Now
                  </motion.button>
                </div>
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
          <h2 className="text-3xl font-bold mb-6">Start Learning Today</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our educational programs and become a certified environmental steward.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center"
          >
            Browse All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;