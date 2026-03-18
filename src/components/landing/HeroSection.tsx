import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Shield, Users } from "lucide-react";
import heroImg from "@/assets/hero-wellness.jpg";

const badges = [
  { icon: Shield, label: "Doctor Led" },
  { icon: Leaf, label: "Science Backed" },
  { icon: Users, label: "1000+ Transformations" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 z-0">
      <img src={heroImg} alt="Fresh plant-based foods" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-primary/60" />
    </div>

    <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/20">
            🌿 By Ask Dr. J
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Transform Your Health,{" "}
            <span className="text-green-fresh">the Plant-Based Way.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto font-body">
            Doctor-guided care powered by nutrition, science, and lifestyle.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button variant="cta" size="lg" className="text-base px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            💜 Book Appointment
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            🌱 Start Your Journey
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm animate-float"
            >
              <b.icon className="w-4 h-4" />
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
