import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
}

const HeroSection = ({
  headline = "Smarter Drug Decisions for Dermatologists",
  subheadline = "AI-powered multi-drug interaction engine with built-in pediatric dosing.",
  primaryCTA = "Request Demo",
  secondaryCTA = "Try SynergyDerm Free",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Abstract 3D molecules background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200/30 dark:bg-blue-400/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-green-200/30 dark:bg-green-400/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-cyan-200/30 dark:bg-cyan-400/20 blur-3xl"
          />
        </div>

        {/* Blurred UI elements in background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: [-6, -3, -6], y: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[15%] w-64 h-32 rounded-lg bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm shadow-sm transform"
          />
          <motion.div
            animate={{ rotate: [3, 6, 3], y: [0, 5, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-[40%] right-[20%] w-80 h-40 rounded-lg bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm shadow-sm transform"
          />
          <motion.div
            animate={{ rotate: [12, 8, 12], y: [0, -8, 0] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-[25%] left-[25%] w-72 h-36 rounded-lg bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm shadow-sm transform"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6"
          >
            {headline}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto"
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-lg shadow-lg dark:shadow-blue-900/20"
              >
                {primaryCTA}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 px-8 py-6 h-auto text-lg shadow-md dark:shadow-slate-900/10"
              >
                {secondaryCTA}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating molecule illustrations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-[15%] left-[10%] w-16 h-16 opacity-30"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:opacity-80"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                stroke="#0369a1"
                strokeWidth="2"
                className="dark:stroke-blue-400"
              />
              <circle
                cx="50"
                cy="20"
                r="10"
                fill="#0369a1"
                className="dark:fill-blue-400"
              />
              <circle
                cx="80"
                cy="50"
                r="10"
                fill="#0369a1"
                className="dark:fill-blue-400"
              />
              <circle
                cx="35"
                cy="75"
                r="10"
                fill="#0369a1"
                className="dark:fill-blue-400"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-[25%] right-[15%] w-12 h-12 opacity-30"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:opacity-80"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                stroke="#059669"
                strokeWidth="2"
                className="dark:stroke-emerald-400"
              />
              <circle
                cx="20"
                cy="50"
                r="10"
                fill="#059669"
                className="dark:fill-emerald-400"
              />
              <circle
                cx="50"
                cy="80"
                r="10"
                fill="#059669"
                className="dark:fill-emerald-400"
              />
              <circle
                cx="75"
                cy="35"
                r="10"
                fill="#059669"
                className="dark:fill-emerald-400"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-[20%] left-[20%] w-14 h-14 opacity-30"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:opacity-80"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                stroke="#0891b2"
                strokeWidth="2"
                className="dark:stroke-cyan-400"
              />
              <circle
                cx="50"
                cy="20"
                r="10"
                fill="#0891b2"
                className="dark:fill-cyan-400"
              />
              <circle
                cx="80"
                cy="65"
                r="10"
                fill="#0891b2"
                className="dark:fill-cyan-400"
              />
              <circle
                cx="20"
                cy="65"
                r="10"
                fill="#0891b2"
                className="dark:fill-cyan-400"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
