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
  ]
};

const Dashboard = () => {
  const [plantationData, setPlantationData] = useState(mockData.plantations);
  const [aqiData, setAqiData] = useState(mockData.aqi);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const plantationResponse = await fetch('https://api.example.com/plantation-data'); // Replace with your API endpoint
        const aqiResponse = await fetch('https://api.example.com/aqi-data'); // Replace with your API endpoint
        const plantationResult = await plantationResponse.json();
        const aqiResult = await aqiResponse.json();
        
        setPlantationData(plantationResult);
        setAqiData(aqiResult);
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
              value: "36",
              color: "text-green-600"
            },
            {
              icon: <Wind className="h-8 w-8" />,
              title: "Air Quality",
              value: "Good",
              color: "text-blue-600"
            },
            {
              icon: <Droplets className="h-8 w-8" />,
              title: "Water Credits",
              value: "150",
              color: "text-cyan-600"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className={`${stat.color} mb-4`}>{stat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;