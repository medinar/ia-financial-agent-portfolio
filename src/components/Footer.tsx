import { Separator } from "./ui/separator";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-300">
              <p>Sarah Mitchell</p>
              <p>Licensed Insurance Agent</p>
              <p>(555) 123-4567</p>
              <p>sarah.mitchell@ia.ca</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Life Insurance</li>
              <li>Health & Disability</li>
              <li>Home & Auto</li>
              <li>Business Insurance</li>
              <li>Retirement Planning</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Get a Quote</li>
              <li>About Me</li>
              <li>Resources</li>
              <li>Book Appointment</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* IA Financial Group Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm">IA</div>
              <span>IA Financial Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              IA Financial Group is one of the largest insurance and wealth management groups in Canada, 
              with over $200 billion in assets under management.
            </p>
          </div>

          {/* Legal */}
          <div className="text-sm text-gray-300">
            <p className="mb-2">
              <strong>License Information:</strong> BC Life & Health Insurance License #LH456789, 
              BC Property & Casualty License #PC123456
            </p>
            <p>
              Insurance products offered through IA Financial Group. Licensed in British Columbia. Member of IBABC.
            </p>
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
          <p>&copy; 2024 Sarah Mitchell - IA Financial Group. All rights reserved.</p>
        </div>
        
        <div className="flex justify-center items-center mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Powered by:</span>
            <a href="https://site-foundry.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                SF
              </div>
              <span className="text-gray-400 font-medium">Site Foundry</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}