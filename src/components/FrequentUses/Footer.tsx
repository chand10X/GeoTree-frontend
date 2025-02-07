import { Link } from 'react-router-dom';
import { Trees as  Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import images from '../../Public/assets/image'; // Importing images

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-center space-x-2 mb-6 bg-white rounded-lg p-2 h-14 w-15">
              <img src={images.logo} alt="GeoTree Logo" className="h-full w-98" /> 
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
                <span className="text-gray-400">408, IVth Floor, JTM Mall, Jagatpura, Jaipur</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <a href="mailto:contact@geotree.com" className="text-gray-400 hover:text-white transition-colors">
                info@geoplanetsolution.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                +91-7976528143, +91-8058477387
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
  );
};

export default Footer;