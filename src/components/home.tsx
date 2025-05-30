import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import SolutionFlow from "./SolutionFlow";
import PlatformFeatures from "./PlatformFeatures";
import CTASection from "./CTASection";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full"
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="w-full"
      >
        <SolutionFlow />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="w-full"
      >
        <PlatformFeatures />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="w-full"
      >
        <CTASection />
      </motion.div>
    </div>
  );
};

export default HomePage;
