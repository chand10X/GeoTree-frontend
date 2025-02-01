import { motion } from 'framer-motion';
import { User, Mail, Phone, Award, Trees as Tree } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'Chandan Kumar',
    email: 'chand@gmail.com',
    phone: '+91 8789077955',
    treesPlanted: 45,
    badge: 'Green Warrior Badge',
    recentActivity: [
      { date: '2024-03-15', action: 'Planted a Neem tree' },
      { date: '2024-03-10', action: 'Earned Green Credit Badge' },
      { date: '2024-03-05', action: 'Updated tree growth data' }
    ]
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.example.com/user-profile'); // Replace with your API endpoint
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-32"></div>
            <div className="px-6 py-8">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative -mt-20">
                  <div className="bg-white p-2 rounded-full">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-1">
                      <User className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
                  <p className="text-green-600 font-bold">Environmental Enthusiast</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{userData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{userData.phone}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Tree className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{userData.treesPlanted} Trees Planted</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{userData.badge}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {userData.recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-600">{activity.action}</span>
                      <span className="text-sm text-gray-500">{activity.date}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;