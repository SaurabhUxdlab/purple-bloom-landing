import React from "react";
import { motion } from "framer-motion";
import googlePlayImg from "@/assets/googleplay.png"; // Use the actual badges if available
// Replace these with your actual local paths
import hero3 from "@/assets/hero3.jpg"; // The AI Assistant screen
import iphoneFrame from "@/assets/iphone-frame.png";
import hero1 from "@/assets/hero1.png"; // The meal tracking screen
import appStoreImg from "@/assets/appstore.png";

const WhyTransitionSection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN - Three Overlapping iPhones */}
          <motion.div
            className="relative flex justify-center items-center h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] order-last lg:order-first"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] flex items-center justify-center">
              
              {/* Back Left Phone - Hidden on small mobile, visible on sm+ */}
              <div className="hidden sm:block absolute left-[5%] z-10 w-[140px] md:w-[180px] lg:w-[240px] transform -translate-x-1/4">
                <div className="relative drop-shadow-2xl">
                  <img src={iphoneFrame} alt="frame" className="relative z-20 w-full" />
                  <div className="absolute top-[2%] left-[4.5%] w-[91%] h-[96%] overflow-hidden rounded-[2.5rem] bg-[#F9F9F9]">
                     {/* Mockup for the left screen */}
                    <img 
                      src={hero1} 
                      alt="AI Assistant screen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Middle Phone (Purple) - Hidden on small mobile, visible on sm+ */}
              <div className="hidden sm:block absolute left-[20%] z-20 w-[150px] md:w-[200px] lg:w-[260px] transform -translate-x-1/4">
                <div className="relative drop-shadow-2xl">
                  <img src={iphoneFrame} alt="frame" className="relative z-20 w-full" />
                  <div className="absolute top-[2%] left-[4.5%] w-[91%] h-[96%] overflow-hidden rounded-[2.5rem] bg-[#4A154B]">
                    {/* Centered Logo/Brand mockup */}
                    <img 
                      src={hero3} 
                      alt="AI Assistant screen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Front Main Phone (AI Assistant) - Always visible */}
              <div className="relative z-30 w-[160px] sm:w-[220px] md:w-[260px] lg:w-[280px] ml-auto sm:ml-0">
                <div className="relative drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                  <img src={iphoneFrame} alt="frame" className="relative z-20 w-full" />
                  <div className="absolute top-[2%] left-[4.5%] w-[91%] h-[96%] overflow-hidden rounded-[2.5rem] bg-white">
                    <img 
                      src={hero1} 
                      alt="AI Assistant screen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 md:mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A154B] leading-tight mb-4 md:mb-6">
                Why TheTransition
              </h2>
              <p className="text-base md:text-lg text-gray-900 font-bold mb-6 md:mb-8">
                Track your habits and see real progress with <br className="hidden md:block"/> clear, visual data.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              {[
                "Talk to a humanoid AI that understands your needs and gives real-time nutrition guidance.",
                "Log meals effortlessly with intelligent tracking and accurate nutritional insights.",
                "Set and achieve goals tailored to your lifestyle — weight loss, fitness, or balance."
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 md:gap-5">
                  <div className="flex-shrink-0 mt-0.5 md:mt-1">
                    <div className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full border-[3px] border-[#4A154B]/20">
                      <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-[#4A154B]"></div>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm md:text-[16px] leading-snug">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-900 font-bold text-base md:text-lg mb-6 md:mb-8">
              Take the first step toward a healthier, stress-free life.
            </p>

           <p className="text-gray-900 font-semibold mb-3 md:mb-4">
  Download the app now!
</p>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
  {/* GOOGLE PLAY */}
  <a
    href="#"
    className="bg-white border border-gray-300 rounded-md px-3 py-2 flex items-center justify-center hover:shadow-sm transition w-full sm:w-auto"
  >
    <img
      src={googlePlayImg}
      alt="Google Play"
      className="h-6 md:h-8"
    />
  </a>

  {/* APP STORE */}
  <a
    href="#"
    className="bg-white border border-gray-300 rounded-md px-3 py-2 flex items-center justify-center hover:shadow-sm transition w-full sm:w-auto"
  >
    <img
      src={appStoreImg}
      alt="App Store"
      className="h-6 md:h-8"
    />
  </a>
</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyTransitionSection;