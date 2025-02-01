import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MobileModalProps {
  onClose: () => void;
}

const MobileModal: React.FC<MobileModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState<string>('');
  const navigate = useNavigate();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Generate a random 6-digit OTP
      const otpToSend = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otpToSend);
      console.log(`Generated OTP: ${otpToSend}`); // Log OTP to terminal
      setStep('otp');
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(otp)) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Verify the OTP
      if (otp === generatedOtp) {
        onClose();
        alert('You have successfully logged in!'); // Show success modal
        navigate('/'); // Navigate to main page
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setError('An error occurred during verification. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-xl p-6 w-full max-w-md relative"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              {step === 'phone' ? 'Login with Mobile' : 'Enter OTP'}
            </h3>
            <p className="text-gray-600 mt-2">
              {step === 'phone'
                ? 'Enter your mobile number to receive OTP'
                : `We've sent an OTP to ${mobile}`}
            </p>
          </div>

          {step === 'phone' ? (
            <form onSubmit={handleSendOTP}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                      setMobile(value);
                    }}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your mobile number"
                    maxLength={10}
                  />
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-500">{error}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                    Sending OTP...
                  </div>
                ) : (
                  'Send OTP'
                )}
              </motion.button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter OTP
                </label>
                <div className="flex justify-between gap-2">
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      value={otp[index] || ''}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        if (value) {
                          const newOtp = otp.split('');
                          newOtp[index] = value;
                          setOtp(newOtp.join(''));
                          if (index < 5 && value) {
                            const nextInput = document.querySelector(
                              `input[name=otp-${index + 1}]`
                            ) as HTMLInputElement;
                            if (nextInput) nextInput.focus();
                          }
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !otp[index] && index > 0) {
                          const prevInput = document.querySelector(
                            `input[name=otp-${index - 1}]`
                          ) as HTMLInputElement;
                          if (prevInput) prevInput.focus();
                        }
                      }}
                      name={`otp-${index}`}
                      className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg font-semibold"
                    />
                  ))}
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-500">{error}</p>
                )}
              </div>

              <div className="flex justify-between items-center mb-4">
                <button
                  type="button"
                  onClick={() => setStep('phone')}
                  className="text-sm text-green-600 hover:text-green-500"
                >
                  Change Number
                </button>
                <button
                  type="button"
                  onClick={handleSendOTP}
                  className="text-sm text-green-600 hover:text-green-500"
                >
                  Resend OTP
                </button>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                    Verifying...
                  </div>
                ) : (
                  'Verify OTP'
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MobileModal;