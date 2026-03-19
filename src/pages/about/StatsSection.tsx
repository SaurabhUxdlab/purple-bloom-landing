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
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* STATS GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-6 p-6 border border-purple-300 rounded-2xl bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
            >
              {/* ICON */}
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full">
                <stat.icon
                  className="w-8 h-8 text-purple-700"
                  strokeWidth={1.5}
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {stat.value}
                </h3>

                <p className="text-gray-600 text-sm md:text-base">
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
  <div className="relative rounded-xl overflow-hidden px-8 py-8 shadow-lg 
    bg-gradient-to-r from-[#4B014F] to-[#8E6C8F] min-h-[260px] md:min-h-[300px]">

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

    {/* IMAGE */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
      <img
        src={ladyImg}
        className="h-[180px] md:h-[220px] object-contain"
        alt="lady"
      />
    </div>

    {/* DATA CARD */}
    <div className="absolute left-[20%] bottom-[18%] bg-white rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-none px-4 py-3 shadow-md w-[160px]">
      
      <p className="text-[9px] text-gray-400">Data label</p>

      <div className="flex items-center justify-between mt-1">
        <p className="text-lg font-bold text-gray-900">23,000</p>

        <div className="bg-purple-700 text-white rounded-md w-5 h-5 flex items-center justify-center text-[10px]">
          😊
        </div>
      </div>

      <p className="text-[10px] text-green-500 mt-1">
        ▲ 5.39% <span className="text-gray-400">Health food</span>
      </p>
    </div>

    {/* RIGHT FLOATING CARDS (FIXED) */}
    <div className="absolute right-[22%] top-[45%] flex flex-col gap-3">

      {/* KPI CARD */}
      <div className="flex items-center gap-2 bg-white px-4 py-2 shadow-md text-sm
        rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-br-none">

        {/* CART ICON */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M6 6h15l-1.5 9h-13z" stroke="#4B014F" strokeWidth="1.5"/>
          <circle cx="9" cy="20" r="1" fill="#4B014F"/>
          <circle cx="18" cy="20" r="1" fill="#4B014F"/>
        </svg>

        <span className="text-gray-800 font-medium">+56.000</span>
      </div>

      {/* FACEBOOK CARD */}
      <div className="flex items-center gap-2 bg-white px-4 py-2 shadow-md text-sm
        rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-br-none">

        {/* FACEBOOK ICON */}
        <div className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-700 text-white text-xs font-bold">
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