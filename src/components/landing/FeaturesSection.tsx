import React from 'react';
import { motion } from "framer-motion";

// Update these paths to match your project structure
import featureImg1 from "@/assets/feature1.png"; 
import featureImg2 from "@/assets/feature2.png";
import featureImg3 from "@/assets/feature3.png";   

const FeatureSection = () => {
  const brandPurple = "#4a154b";

  return (
    <section className="bg-white py-24 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* HEADER - Precisely matched typography */}
        <div className="text-center mb-28">
          <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 tracking-tight">
            Supporting your health and the Transition
          </h2>
          <p className="text-[#4a154b] text-[22px] md:text-[26px] font-bold">
            goals at every stage
          </p>
        </div>

        {/* ================= 1st SECTION (Dark Grain) ================= */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Texture Container */}
            <div className="bg-[#1a1a1a] rounded-[24px] aspect-[4/3] flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <img src={featureImg1} alt="Meal Tracking" className="w-[52%] z-10 drop-shadow-2xl" />
            </div>

            {/* FLOATING CARD - Exact Icons from SS */}
            <div className="absolute -bottom-8 -right-4 bg-white shadow-2xl rounded-2xl p-5 flex gap-6 z-20 border border-gray-50">
              {[
                { label: "Barcode", icon: "📱" },
                { label: "Quick Track", icon: "❤️" },
                { label: "Help", icon: "❓" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#4a154b] text-white rounded-full text-sm mb-2">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-tighter">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="max-w-[480px]">
            <h3 className="text-[38px] md:text-[46px] font-bold text-[#4a154b] leading-[1.1] mb-6">
              Smarter, faster <br /> meal tracking
            </h3>
            <p className="text-gray-600 text-[17px] leading-relaxed">
              Log your meals effortlessly with intelligent tracking. Snap a photo, speak your input, or add items instantly — all designed to fit your daily routine.
            </p>
          </div>
        </div>

        {/* ================= 2nd SECTION (Purple Grain - Reversed) ================= */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-36">
          <div className="order-2 md:order-1 max-w-[480px]">
            <h3 className="text-[38px] md:text-[46px] font-bold text-[#4a154b] leading-[1.1] mb-6">
              Intelligent <br /> nutrition tracking
            </h3>
            <p className="text-gray-600 text-[17px] leading-relaxed">
              Go beyond basic tracking with AI-driven insights that help you understand, adjust, and optimize your nutrition effortlessly.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="bg-[#5a3b7a] rounded-[24px] aspect-[4/3] flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
              <img src={featureImg2} alt="Nutrition Chat" className="w-[52%] z-10 drop-shadow-2xl" />
            </div>
          </motion.div>
        </div>

        {/* ================= 3rd SECTION (Grey Noise) ================= */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#d1d1d1] rounded-[24px] aspect-[4/3] flex items-center justify-center relative overflow-hidden shadow-2xl">
              
              <img src={featureImg3} alt="AI Guided" className="w-[100%] h-auto drop-shadow-2xl" />
            </div>
          </motion.div>

          <div className="max-w-[480px]">
            <h3 className="text-[38px] md:text-[46px] font-bold text-[#4a154b] leading-[1.1] mb-6">
              Your nutrition, <br /> intelligently guided
            </h3>
            <p className="text-gray-600 text-[17px] leading-relaxed">
              Understand what you eat with detailed insights and let AI suggest smarter adjustments based on your goals.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;