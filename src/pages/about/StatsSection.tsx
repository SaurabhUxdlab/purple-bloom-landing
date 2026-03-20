import { motion } from "framer-motion";
import { Utensils, Brain, Users, Target } from "lucide-react";
import ladyImg from "@/assets/lady.png";

const StatsSection = () => {
  const stats = [
    {
      icon: Utensils,
      value: "5+",
      label: "Meals tracked",
      keyword: "Meals",
      delay: 0.1,
    },
    {
      icon: Brain,
      value: "2+",
      label: "Smart AI Sessions",
      keyword: "Smart AI",
      delay: 0.2,
    },
    {
      icon: Users,
      value: "8+",
      label: "Builds trust & scale",
      keyword: "Builds",
      delay: 0.3,
    },
    {
      icon: Target,
      value: "4+",
      label: "Goals Achieved",
      keyword: "Goals",
      delay: 0.4,
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 border-t-2 bg-white">
      <div className="container mx-auto px-4">

        {/* STATS GRID */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 max-w-5xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 sm:gap-4 lg:gap-4 p-3 sm:p-4 lg:p-6 border border-purple-300 rounded-xl lg:rounded-2xl bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center sm:text-left lg:text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
            >
              {/* ICON */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-purple-100 rounded-full shrink-0">
                <stat.icon
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-700"
                  strokeWidth={1.5}
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {stat.value}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  <span className="text-purple-700 font-semibold">
                    {stat.keyword}
                  </span>{" "}
                  {stat.label.replace(stat.keyword, "")}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM CARD */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-xl overflow-hidden px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-8 shadow-lg 
            bg-gradient-to-r from-[#4B014F] to-[#8E6C8F] min-h-[340px] sm:min-h-[300px] md:min-h-[300px]">

            {/* Mobile: Stacked layout */}
            <div className="md:hidden mb-4">
              <h2 className="text-base font-bold text-white leading-snug mb-2">
                Your Personalized Health Hub
              </h2>
              <p className="text-white/90 text-xs leading-relaxed">
                Track your progress, get meal plans, and access expert guidance — all in one place.
              </p>
            </div>

            {/* Desktop: Absolute positioned text */}
            <div className="hidden md:block">
              {/* LEFT TEXT */}
              <div className="max-w-[38%]">
                <h2 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Your Personalized <br /> Health Hub
                </h2>
              </div>

              {/* RIGHT TEXT */}
              <div className="absolute right-8 top-6 max-w-[40%] text-right">
                <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                  Track your progress, get meal plans, and access expert guidance — all in one place.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <img
                src={ladyImg}
                className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[220px] object-contain"
                alt="lady"
              />
            </div>

            {/* DATA CARD - Mobile optimized */}
            <div className="absolute left-[8%] sm:left-[12%] md:left-[20%] bottom-[12%] sm:bottom-[15%] md:bottom-[18%] bg-white rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-none px-2 sm:px-3 md:px-4 py-2 sm:py-2 md:py-3 shadow-md w-[120px] sm:w-[140px] md:w-[160px]">
              
              <p className="text-[8px] sm:text-[9px] text-gray-400 truncate">Data label</p>

              <div className="flex items-center justify-between mt-0.5 sm:mt-1">
                <p className="text-base sm:text-lg font-bold text-gray-900">23,000</p>

                <div className="bg-purple-700 text-white rounded-md w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[8px] sm:text-[10px]">
                  😊
                </div>
              </div>

              <p className="text-[8px] sm:text-[10px] text-green-500 mt-0.5 sm:mt-1">
                ▲ 5.39% <span className="text-gray-400">Health food</span>
              </p>
            </div>

            {/* RIGHT FLOATING CARDS - Mobile optimized */}
            <div className="absolute right-[8%] sm:right-[12%] md:right-[22%] top-[35%] sm:top-[40%] md:top-[45%] flex flex-col gap-2 sm:gap-3">

              {/* KPI CARD */}
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2 shadow-md text-xs sm:text-sm
                rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-br-none">

                {/* CART ICON */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="sm:w-4 sm:h-4">
                  <path d="M6 6h15l-1.5 9h-13z" stroke="#4B014F" strokeWidth="1.5"/>
                  <circle cx="9" cy="20" r="1" fill="#4B014F"/>
                  <circle cx="18" cy="20" r="1" fill="#4B014F"/>
                </svg>

                <span className="text-gray-800 font-medium">+56.000</span>
              </div>

              {/* FACEBOOK CARD */}
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2 shadow-md text-xs sm:text-sm
                rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-br-none">

                {/* FACEBOOK ICON */}
                <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center rounded-full bg-purple-700 text-white text-[8px] sm:text-xs font-bold">
                  f
                </div>

                <span className="text-gray-800 font-medium">+123K</span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;