import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-24 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-primary" />
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(270 50% 60%), transparent 70%)" }} />

    <div className="container relative z-10 mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Your transformation starts today.
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10">
          Join thousands who have reclaimed their health through the power of plants and expert medical guidance.
        </p>
        <Button variant="cta" size="lg" className="text-base px-10 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          💜 Book Your Consultation
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
