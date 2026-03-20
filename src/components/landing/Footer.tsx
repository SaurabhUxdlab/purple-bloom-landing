import { Instagram, Linkedin, Twitter, Facebook, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo1.png";
import googlePlayImg from "@/assets/googleplay.png"; // Use the actual badges if available
import appStoreImg from "@/assets/appstore.png";
const Footer = () => {
  return (
    <footer className="bg-[#3B0A45] text-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* LEFT SECTION (Logo and App Badges) - Takes up 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img src={logo} alt="The Transition Logo" className="w-22 h-14 object-contain" />
              <div>
               
                
              </div>
            </div>

            <p className="text-xl font-medium">Your Health In Your Hands</p>

            <div className="space-y-3">
              <p className="text-sm font-semibold">Get the App!</p>
              <div className="flex gap-3">
                <img
                  src={googlePlayImg}
                  alt="Google Play"
                  className="h-10 cursor-pointer"
                />
                <img
                  src={appStoreImg}
                  alt="App Store"
                  className="h-10 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* LINKS SECTIONS */}
          <div>
            <h4 className="text-lg font-semibold mb-5">About</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Features</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Pricing</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Articles</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Blog</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Get in Touch</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Plans</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Pricing</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Resources</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Pricing</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Support</li>
            </ul>
          </div>

          {/* CONTACT & SOCIAL */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-5">Content</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm opacity-90">
                <Phone size={18} />
                <span>+1 (123) 456-7893</span>
              </div>

              <div className="flex items-center gap-3 text-sm opacity-90">
                <Mail size={18} />
                <span>stjohnsdpc@gmail.com</span>
              </div>

              <div className="flex gap-4 pt-4">
  {[
    { Icon: Instagram, size: 20 },
    { Icon: Linkedin, size: 20 },
    { Icon: Twitter, size: 20 },
    { Icon: Facebook, size: 20 },
  ].map(({ Icon, size }, i) => (
    <a
      key={i}
      href="#"
      className="bg-white text-[#3B0A45] w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
    >
      <Icon 
        size={size} 
        strokeWidth={2.5} /* Increased thickness to match the image */
        className="shrink-0" 
      />
    </a>
  ))}
</div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;