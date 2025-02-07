import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Trees as Tree, Wind, Droplets } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const mockData = {
  plantations: [
    { month: 'Jan', trees: 4 },
    { month: 'Feb', trees: 7 },
    { month: 'Mar', trees: 5 },
    { month: 'Apr', trees: 12 },
    { month: 'May', trees: 8 },
  ],
  aqi: [
    { time: '8am', value: 85 },
    { time: '10am', value: 92 },
    { time: '12pm', value: 98 },
    { time: '2pm', value: 95 },
    { time: '4pm', value: 88 },
  ],
  waterCredits: [
    { month: 'Jan', credits: 50 },
    { month: 'Feb', credits: 60 },
    { month: 'Mar', credits: 70 },
    { month: 'Apr', credits: 80 },
    { month: 'May', credits: 90 },
  ],
  greenCredits: [
    { month: 'Jan', credits: 30 },
    { month: 'Feb', credits: 40 },
    { month: 'Mar', credits: 50 },
    { month: 'Apr', credits: 60 },
    { month: 'May', credits: 70 },
  ],
  rewardPoints: 250, // Added reward points
  certificatesEarned: 5 // Added certificates earned
};

const Dashboard = () => {
  const [plantationData, setPlantationData] = useState(mockData.plantations);
  const [aqiData, setAqiData] = useState(mockData.aqi);
  const [waterCreditData, setWaterCreditData] = useState(mockData.waterCredits);
  const [greenCreditData, setGreenCreditData] = useState(mockData.greenCredits);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const plantationResponse = await fetch('https://api.example.com/plantation-data'); // Replace with your API endpoint
        const aqiResponse = await fetch('https://api.example.com/aqi-data'); // Replace with your API endpoint
        const plantationResult = await plantationResponse.json();
        const aqiResult = await aqiResponse.json();
        
        // Set data from API or fallback to mock data
        setPlantationData(plantationResult.length ? plantationResult : mockData.plantations);
        setAqiData(aqiResult.length ? aqiResult : mockData.aqi);
        setWaterCreditData(mockData.waterCredits); // Keep using mock data for water credits
        setGreenCreditData(mockData.greenCredits); // Keep using mock data for green credits
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {[
            {
              icon: <Tree className="h-8 w-8" />,
              title: "Total Trees",
              value: plantationData.reduce((acc, curr) => acc + curr.trees, 0).toString(), // Calculate total trees
              color: "text-green-600",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80" 
            },
            {
              icon: <Wind className="h-8 w-8" />,
              title: "Air Quality",
              value: aqiData[aqiData.length - 1]?.value.toString() || "N/A", // Latest AQI value
              color: "text-blue-600",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80" // Add image path
            },
            {
              icon: <Droplets className="h-8 w-8" />,
              title: "Water Credits",
              value: mockData.waterCredits[mockData.waterCredits.length - 1].credits.toString(), // Latest water credits
              color: "text-cyan-600",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80" // Add image path
            },
            {
              icon: <Droplets className="h-8 w-8" />,
              title: "Green Credits",
              value: mockData.greenCredits[mockData.greenCredits.length - 1].credits.toString(), // Latest green credits
              color: "text-green-600",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80" // Add image path
            },
            {
              icon: <Droplets className="h-8 w-8" />,
              title: "Reward Points",
              value: mockData.rewardPoints.toString(), // Display reward points
              color: "text-yellow-600",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80" // Add image path
            },
            {
              icon: <Droplets className="h-8 w-8" />,
              title: "Certificates Earned",
              value: mockData.certificatesEarned.toString(), // Display certificates earned
              color: "text-purple-600",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80" // Add image path
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center"
            >
              <div className={`${stat.color} mb-4`}>{stat.icon}</div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <img src={stat.image} alt={stat.title} className="h-16 w-16 object-cover rounded-full" /> {/* Image on the right */}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Plantation History</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={plantationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="trees" fill="#059669" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Air Quality Index</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={aqiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Water Credits</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={waterCreditData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="credits" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Green Credits</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={greenCreditData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="credits" fill="#4ade80" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;