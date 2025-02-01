import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Trees as Tree, Check, Camera, X } from 'lucide-react'; // Added X for close button
import { useNavigate } from 'react-router-dom';
import { publicIp } from 'public-ip';

interface FormData {
  plantName: string;
  height: string;
  prePlantationImage: File | null;
  plantationImage: File | null;
  area: string;
  event: string;
  userName: string;
  userMobile: string;
  userIp: string;
  userLocation: string; // Added userLocation to store location
}

// Mock user database - replace with actual database
const mockUsers = [
  { mobile: '9876543210', name: 'John Doe' },
  { mobile: '9876543211', name: 'Jane Smith' }
];

const PlantationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    plantName: '',
    height: '',
    prePlantationImage: null,
    plantationImage: null,
    area: '',
    event: '',
    userName: '',
    userMobile: '',
    userIp: '',
    userLocation: '' // Initialize userLocation
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [showPreImage, setShowPreImage] = useState(false); // State to manage pre-image visibility
  const [showPostImage, setShowPostImage] = useState(false); // State to manage post-image visibility

  const quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Someone's sitting in the shade today because someone planted a tree a long time ago.",
    "A tree is like a legacy that grows with time.",
    "Plant dreams, grow miracles."
  ];
  const [selectedQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  useEffect(() => {
    const fetchIpAndLocation = async () => {
      try {
        const ip = await publicIp();
        setFormData(prev => ({ ...prev, userIp: ip }));

        // Request location permission
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setFormData(prev => ({ ...prev, userLocation: `${latitude}, ${longitude}` }));
            },
            (error) => {
              console.error('Error getting location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      } catch (error) {
        console.error('Failed to fetch IP:', error);
      }
    };
    fetchIpAndLocation();
  }, []);

  // Check if user exists when mobile number is entered
  useEffect(() => {
    if (formData.userMobile.length === 10) {
      const existingUser = mockUsers.find(user => user.mobile === formData.userMobile);
      if (existingUser) {
        setIsExistingUser(true);
        navigate('/login', { state: { returnTo: '/plant' } });
      } else {
        setIsExistingUser(false);
      }
    }
  }, [formData.userMobile, navigate]);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!/^[a-zA-Z\s]+$/.test(formData.plantName)) {
      newErrors.plantName = 'Plant name should only contain alphabets';
    }

    if (!/^\d+$/.test(formData.height)) {
      newErrors.height = 'Height should be a numeric value';
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.userName)) {
      newErrors.userName = 'Name should only contain alphabets';
    }

    if (!/^\d{10}$/.test(formData.userMobile)) {
      newErrors.userMobile = 'Mobile number should be 10 digits';
    }

    if (!formData.area) newErrors.area = 'Area is required';
    if (!formData.prePlantationImage) newErrors.prePlantationImage = 'Pre-plantation image is required';
    if (!formData.plantationImage) newErrors.plantationImage = 'Plantation image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageCapture = (type: 'pre' | 'post') => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment'; // This will open the camera directly
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setFormData(prev => ({
          ...prev,
          [type === 'pre' ? 'prePlantationImage' : 'plantationImage']: file
        }));
        if (type === 'pre') setShowPreImage(true);
        if (type === 'post') setShowPostImage(true);
      }
    };
    input.click();
  };

  const handleImageRemove = (type: 'pre' | 'post') => {
    setFormData(prev => ({
      ...prev,
      [type === 'pre' ? 'prePlantationImage' : 'plantationImage']: null
    }));
    if (type === 'pre') setShowPreImage(false);
    if (type === 'post') setShowPostImage(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Prepare form data for API submission
      const formDataToSend = new FormData();
      formDataToSend.append('plantName', formData.plantName);
      formDataToSend.append('height', formData.height);
      formDataToSend.append('prePlantationImage', formData.prePlantationImage as Blob);
      formDataToSend.append('plantationImage', formData.plantationImage as Blob);
      formDataToSend.append('area', formData.area);
      formDataToSend.append('event', formData.event);
      formDataToSend.append('userName', formData.userName);
      formDataToSend.append('userMobile', formData.userMobile);
      formDataToSend.append('userIp', formData.userIp);
      formDataToSend.append('userLocation', formData.userLocation);

      // Send data to API
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // If user doesn't exist, register them
      if (!isExistingUser) {
        // Simulate user registration
        mockUsers.push({
          mobile: formData.userMobile,
          name: formData.userName
        });
      }

      setShowSuccessModal(true);
      
      // Navigate to main page after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isExistingUser) {
    return null; // The user will be redirected to login
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg shadow-green-100/50 mt-8 mb-8"
      >
        <div className="flex items-center justify-center mb-6">
          <Tree className="h-8 w-8 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Plant a Tree</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Plant Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`mt-1 block w-full rounded-md border ${
                  errors.plantName ? 'border-red-500' : 'border-gray-300'
                } shadow-sm focus:border-green-500 focus:ring-green-500`}
                value={formData.plantName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                  setFormData({ ...formData, plantName: value });
                }}
                required
              />
              {errors.plantName && (
                <p className="mt-1 text-sm text-red-500">{errors.plantName}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Height (cm) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`mt-1 block w-full rounded-md border ${
                  errors.height ? 'border-red-500' : 'border-gray-300'
                } shadow-sm focus:border-green-500 focus:ring-green-500`}
                value={formData.height}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  setFormData({ ...formData, height: value });
                }}
                required
              />
              {errors.height && (
                <p className="mt-1 text-sm text-red-500">{errors.height}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pre-Plantation Image <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleImageCapture('pre')}
                  className="mt-1 flex justify-center items-center w-full px-4 py-4 border-2 border-gray-300 border-dashed rounded-md hover:border-green-500 transition-colors"
                >
                  {formData.prePlantationImage ? (
                    <div className="text-center">
                      <img src={URL.createObjectURL(formData.prePlantationImage)} alt="Pre-Plantation" className="h-20 w-20 object-cover mx-auto" />
                      <button
                        type="button"
                        onClick={() => handleImageRemove('pre')}
                        className="absolute top-2 right-2 text-red-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Camera className="mx-auto h-8 w-8 text-gray-400" />
                      <span className="mt-2 block text-sm text-gray-600">Take Photo</span>
                    </div>
                  )}
                </button>
              </div>
              {errors.prePlantationImage && (
                <p className="mt-1 text-sm text-red-500">{errors.prePlantationImage}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Plantation Image <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleImageCapture('post')}
                  className="mt-1 flex justify-center items-center w-full px-4 py-4 border-2 border-gray-300 border-dashed rounded-md hover:border-green-500 transition-colors"
                >
                  {formData.plantationImage ? (
                    <div className="text-center">
                      <img src={URL.createObjectURL(formData.plantationImage)} alt="Plantation" className="h-20 w-20 object-cover mx-auto" />
                      <button
                        type="button"
                        onClick={() => handleImageRemove('post')}
                        className="absolute top-2 right-2 text-red-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Camera className="mx-auto h-8 w-8 text-gray-400" />
                      <span className="mt-2 block text-sm text-gray-600">Take Photo</span>
                    </div>
                  )}
                </button>
              </div>
              {errors.plantationImage && (
                <p className="mt-1 text-sm text-red-500">{errors.plantationImage}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Area <span className="text-red-500">*</span>
            </label>
            <select
              className={`mt-1 block w-full rounded-md border ${
                errors.area ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:border-green-500 focus:ring-green-500`}
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              required
            >
              <option value="">Select Area</option>
              <option value="urban">Urban</option>
              <option value="rural">Rural</option>
            </select>
            {errors.area && (
              <p className="mt-1 text-sm text-red-500">{errors.area}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Special Event
            </label>
            <select
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.event}
              onChange={(e) => {
                const value = e.target.value.replace(/[^a-zA-Z\s-]/g, '');
                setFormData({ ...formData, event: value });
              }}
            >
              <option value="">Select an event</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="memorial">Memorial</option>
              <option value="gandhi-jayanti">Gandhi Jayanti</option>
              <option value="independence-day">Independence Day</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`mt-1 block w-full rounded-md border ${
                  errors.userName ? 'border-red-500' : 'border-gray-300'
                } shadow-sm focus:border-green-500 focus:ring-green-500`}
                value={formData.userName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                  setFormData({ ...formData, userName: value });
                }}
                required
              />
              {errors.userName && (
                <p className="mt-1 text-sm text-red-500">{errors.userName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className={`mt-1 block w-full rounded-md border ${
                  errors.userMobile ? 'border-red-500' : 'border-gray-300'
                } shadow-sm focus:border-green-500 focus:ring-green-500`}
                value={formData.userMobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                  setFormData({ ...formData, userMobile: value });
                }}
                required
                maxLength={10}
              />
              {errors.userMobile && (
                <p className="mt-1 text-sm text-red-500">{errors.userMobile}</p>
              )}
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </div>
            ) : (
              'Submit Plantation'
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-sm mx-4 text-center shadow-xl"
            >
              <div className="mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <Check className="h-8 w-8 text-green-600" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {isExistingUser ? 'Welcome Back!' : 'Registration Successful!'}
              </h3>
              <p className="text-gray-600 italic mb-4">"{selectedQuote}"</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlantationForm;