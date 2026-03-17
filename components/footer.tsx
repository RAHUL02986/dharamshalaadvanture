import Link from 'next/link';
import { Mountain, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-12 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold text-white">
                Dharamshala Adventure
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your gateway to unforgettable adventures in the beautiful Himalayas of Dharamshala, Himachal Pradesh.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/activities" className="hover:text-orange-600 transition-colors">
                  Adventure Activities
                </Link>
              </li>
              <li>
                <Link href="/accommodations" className="hover:text-orange-600 transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/transport" className="hover:text-orange-600 transition-colors">
                  Transport Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-600 transition-colors">
                  Blog & Travel Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Activities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/activities/paragliding" className="hover:text-orange-600 transition-colors">
                  Paragliding
                </Link>
              </li>
              <li>
                <Link href="/activities/trekking" className="hover:text-orange-600 transition-colors">
                  Trekking
                </Link>
              </li>
              <li>
                <Link href="/activities/rock-climbing" className="hover:text-orange-600 transition-colors">
                  Rock Climbing
                </Link>
              </li>
              <li>
                <Link href="/activities/camping" className="hover:text-orange-600 transition-colors">
                  Camping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>McLeod Ganj, Dharamshala, Himachal Pradesh 176219</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-600" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-600" />
                <span>contact@dharamshalaadventure.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dharamshala Adventure Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
