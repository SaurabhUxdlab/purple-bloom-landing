import React from "react";
import foodImg from "@/assets/food.png";
import detoxImg from "@/assets/detox.png";

const HistorySection: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f7] py-24 px-4 overflow-hidden">
      {/* BACKGROUND DOTTED SHAPES */}
      <div className="absolute top-10 left-0 w-72 h-72 border-2 border-dashed border-purple-300 rounded-full opacity-40 -translate-x-1/2"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 border-2 border-dashed border-purple-300 rounded-full opacity-40 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* TOP TEXT */}
        <p className="text-gray-400 text-sm mb-2">
          Dolore dolore voluptate aliqua ut mi
        </p>

        <h2 className="text-4xl font-bold text-gray-800 mb-20">
          Our History
        </h2>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER DOTTED LINE */}
          <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-purple-300 -translate-x-1/2"></div>

          {/* ITEM 1 */}
          <div className="grid grid-cols-2 items-center mb-24 relative">
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

            {/* BULLET */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2">
              <div className="w-7 h-7 bg-purple-200 rounded-full flex items-center justify-center shadow-md">
                <div className="w-3 h-3 bg-[#4B014F] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="grid grid-cols-2 items-center mb-24 relative">
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

            {/* BULLET */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2">
              <div className="w-7 h-7 bg-purple-200 rounded-full flex items-center justify-center shadow-md">
                <div className="w-3 h-3 bg-[#4B014F] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="grid grid-cols-2 items-center relative">
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

            {/* BULLET */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2">
              <div className="w-7 h-7 bg-purple-200 rounded-full flex items-center justify-center shadow-md">
                <div className="w-3 h-3 bg-[#4B014F] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mt-24">
          {/* CARD 1 */}
          <div className="relative bg-gradient-to-r from-[#4B014F] to-[#7A3B7A] rounded-2xl p-8 flex items-center justify-between overflow-hidden">
            <img src={foodImg} className="w-23 h-23 object-contain" />

            <div className="text-right">
              <h3 className="text-white text-3xl font-semibold">
                Food <br /> Selection
              </h3>
              <p className="text-purple-200 text-sm mt-1">
                Refreshing vibrant healthy choice.
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-black">
              ↗
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-gradient-to-r from-[#4B014F] to-[#7A3B7A] rounded-2xl p-8 flex items-center justify-between overflow-hidden">
            <img src={detoxImg} className="w-23 h-23 object-contain" />

            <div className="text-right">
              <h3 className="text-white text-3xl font-semibold">
                Detox <br /> Delight
              </h3>
              <p className="text-purple-200 text-sm mt-1">
                Cleanse with delicious nutrition
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-black">
              ↗
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;