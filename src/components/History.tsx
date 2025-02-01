import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Ruler, User, Phone, TreePine } from 'lucide-react';

interface PlantationHistory {
  id: string;
  plantName: string;
  height: number;
  area: string;
  event: string;
  userName: string;
  userMobile: string;
  plantedDate: string;
  prePlantationImage: string;
  plantationImage: string;
  location: string;
}

const mockHistory: PlantationHistory[] = [
  {
    id: '1',
    plantName: 'Neem',
    height: 45,
    area: 'Urban',
    event: 'Birthday',
    userName: 'John Doe',
    userMobile: '9876543210',
    plantedDate: '2024-03-15',
    prePlantationImage: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80',
    plantationImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
    location: 'City Park, Mumbai'
  },
  {
    id: '2',
    plantName: 'Banyan',
    height: 60,
    area: 'Rural',
    event: 'Independence Day',
    userName: 'Jane Smith',
    userMobile: '9876543211',
    plantedDate: '2024-03-10',
    prePlantationImage: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80',
    plantationImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
    location: 'Village Green, Delhi'
  }
];

const History = () => {
  const [historyData, setHistoryData] = useState<PlantationHistory[]>(mockHistory);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch('https://api.example.com/plantation-history'); // Replace with your API endpoint
        const data = await response.json();
        setHistoryData(data);
      } catch (error) {
        console.error('Failed to fetch plantation history:', error);
      }
    };

    fetchHistoryData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <TreePine className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
              Plantation History
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your contribution to a greener future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {historyData.map((plantation, index) => (
            <motion.div
              key={plantation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                  <h3 className="text-2xl font-bold mb-4">{plantation.plantName}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5" />
                      <span>{plantation.plantedDate}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5" />
                      <span>{plantation.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Ruler className="h-5 w-5" />
                      <span>{plantation.height} cm</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-4">Planter Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-gray-600">
                          <User className="h-5 w-5" />
                          <span>{plantation.userName}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Phone className="h-5 w-5" />
                          <span>{plantation.userMobile}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-4">Additional Info</h4>
                      <div className="space-y-2 text-gray-600">
                        <p><span className="font-medium">Area:</span> {plantation.area}</p>
                        {plantation.event && (
                          <p><span className="font-medium">Event:</span> {plantation.event}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-700 mb-4">Progress Images</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Pre-Plantation Image</p>
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          src={plantation.prePlantationImage}
                          alt="Pre-plantation"
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Plantation Image</p>
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          src={plantation.plantationImage}
                          alt="Post-plantation"
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;