import React from "react";
import foodImg from "@/assets/food.png";
import detoxImg from "@/assets/detox.png";

const HistorySection: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f7] py-12 md:py-24 px-4 overflow-hidden">
      {/* BACKGROUND DOTTED SHAPES */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-72 md:h-72 border-2 border-dashed border-purple-300 rounded-full opacity-40 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 border-2 border-dashed border-purple-300 rounded-full opacity-40 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* TOP TEXT */}
        <p className="text-gray-400 text-sm mb-2">
          Dolore dolore voluptate aliqua ut mi
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 md:mb-20">
          Our History
        </h2>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER DOTTED LINE - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full border-l-2 border-dotted border-purple-300 -translate-x-1/2"></div>

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 top-0 h-full border-l-2 border-dotted border-purple-300"></div>

          {/* ITEM 1 */}
          <div className="mb-12 md:mb-24 relative">
            {/* Mobile Layout */}
            <div className="md:hidden flex items-start pl-14 text-left">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#4B014F] mb-2">
                  2018
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Transition adapts to your daily routine. Whether you're busy,
                  active, or just starting your health journey, our app fits
                  seamlessly into your lifestyle with personalized
                  recommendations and simple tracking.
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 md:items-center relative">
              <div className="text-right pr-14">
                <h3 className="text-2xl font-bold text-[#4B014F] mb-2">
                  2018
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-md ml-auto">
                  Transition adapts to your daily routine. Whether you're busy,
                  active, or just starting your health journey, our app fits
                  seamlessly into your lifestyle with personalized
                  recommendations and simple tracking.
                </p>
              </div>
              <div></div>
            </div>

            {/* BULLET */}
            <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 md:translate-x-0">
              <div className="w-6 h-6 md:w-7 md:h-7 bg-purple-200 rounded-full flex items-center justify-center shadow-md">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#4B014F] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="mb-12 md:mb-24 relative">
            {/* Mobile Layout */}
            <div className="md:hidden flex items-start pl-14 text-left">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#4B014F] mb-2">
                  2020
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our humanoid AI assistant goes beyond tracking. It listens,
                  learns, and guides you helping you make smarter food choices,
                  stay consistent, and stay motivated every day.
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 md:items-center relative">
              <div></div>
              <div className="text-left pl-14">
                <h3 className="text-2xl font-bold text-[#4B014F] mb-2">
                  2020
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                  Our humanoid AI assistant goes beyond tracking. It listens,
                  learns, and guides you helping you make smarter food choices,
                  stay consistent, and stay motivated every day.
                </p>
              </div>
            </div>

            {/* BULLET */}
            <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 md:translate-x-0">
              <div className="w-6 h-6 md:w-7 md:h-7 bg-purple-200 rounded-full flex items-center justify-center shadow-md">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#4B014F] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="relative">
            {/* Mobile Layout */}
            <div className="md:hidden flex items-start pl-14 text-left">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#4B014F] mb-2">
                  2022
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our AI assistant learns from you and provides smart,
                  personalized guidance to help you eat better, stay consistent,
                  and reach your goals.
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 md:items-center relative">
              <div className="text-right pr-14">
                <h3 className="text-2xl font-bold text-[#4B014F] mb-2">
                  2022
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-md ml-auto">
                  Our AI assistant learns from you and provides smart,
                  personalized guidance to help you eat better, stay consistent,
                  and reach your goals.
                </p>
              </div>
              <div></div>
            </div>

            {/* BULLET */}
            <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 md:translate-x-0">
              <div className="w-6 h-6 md:w-7 md:h-7 bg-purple-200 rounded-full flex items-center justify-center shadow-md">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#4B014F] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-24">
          {/* CARD 1 */}
          <div className="relative bg-gradient-to-r from-[#4B014F] to-[#7A3B7A] rounded-2xl p-5 md:p-8 flex items-center justify-between overflow-hidden">
            <img 
              src={foodImg} 
              alt="Food Selection" 
              className="w-16 h-16 md:w-24 md:h-24 object-contain ml-2 md:ml-0" 
            />

            <div className="text-right flex-1 mr-2 md:mr-0">
              <h3 className="text-white text-xl md:text-3xl font-semibold">
                Food <br className="hidden md:block" /> Selection
              </h3>
              <p className="text-purple-200 text-xs md:text-sm mt-1">
                Refreshing vibrant healthy choice.
              </p>
            </div>

            <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center text-black text-sm md:text-base">
              ↗
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-gradient-to-r from-[#4B014F] to-[#7A3B7A] rounded-2xl p-5 md:p-8 flex items-center justify-between overflow-hidden">
            <img 
              src={detoxImg} 
              alt="Detox Delight" 
              className="w-16 h-16 md:w-24 md:h-24 object-contain ml-2 md:ml-0" 
            />

            <div className="text-right flex-1 mr-2 md:mr-0">
              <h3 className="text-white text-xl md:text-3xl font-semibold">
                Detox <br className="hidden md:block" /> Delight
              </h3>
              <p className="text-purple-200 text-xs md:text-sm mt-1">
                Cleanse with delicious nutrition
              </p>
            </div>

            <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center text-black text-sm md:text-base">
              ↗
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;