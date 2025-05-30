import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Server } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const CTASection = ({
  title = "Join the Future of Safer Dermatology",
  subtitle = "Experience how SynergyDerm transforms clinical decision-making with AI-powered insights and pediatric dosing precision.",
  primaryCTA = "Request a Pilot",
  secondaryCTA = "Contact Sales",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
}: CTASectionProps) => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background gradient blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-100/30 dark:bg-emerald-900/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-100/30 dark:bg-blue-900/20 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 h-auto text-base shadow-lg dark:shadow-emerald-900/30"
              onClick={onPrimaryClick}
            >
              {primaryCTA}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-6 h-auto text-base shadow-md dark:shadow-slate-900/10"
              onClick={onSecondaryClick}
            >
              {secondaryCTA}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12"
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              HIPAA Compliant
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              GDPR-Ready
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Server className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Medical-Grade Hosting
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
