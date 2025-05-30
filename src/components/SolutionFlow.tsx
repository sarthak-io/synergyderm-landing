import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Calculator,
  Pill,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SolutionFlow = () => {
  // Animation variants for scroll-triggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  // Problem statements data
  const problemStatements = [
    {
      icon: <AlertCircle className="h-10 w-10 text-red-500" />,
      title: "Manual Drug Checks",
      description:
        "Time-consuming pairwise checks lead to errors and missed interactions between multiple medications.",
    },
    {
      icon: <Calculator className="h-10 w-10 text-orange-500" />,
      title: "External Calculators",
      description:
        "Inconsistent pediatric dose calculations across different tools create risk of dosing errors.",
    },
    {
      icon: <Pill className="h-10 w-10 text-amber-500" />,
      title: "Contraindication Risks",
      description:
        "Overlooked drug interactions can lead to adverse effects and unsafe patient outcomes.",
    },
  ];

  // Solution workflow steps
  const workflowSteps = [
    {
      number: 1,
      title: "Input Patient Drugs",
      description: "Enter all current medications the patient is taking.",
      color: "bg-blue-100 border-blue-300",
    },
    {
      number: 2,
      title: "Add New Prescription",
      description: "Add the new medication you're considering prescribing.",
      color: "bg-blue-100 border-blue-300",
    },
    {
      number: 3,
      title: "AI Detects Conflicts",
      description:
        "Our engine automatically identifies potential drug interactions and dosing issues.",
      color: "bg-emerald-100 border-emerald-300",
    },
    {
      number: 4,
      title: "Suggest Alternatives",
      description:
        "Receive AI-powered suggestions for safer alternative medications when conflicts are detected.",
      color: "bg-emerald-100 border-emerald-300",
    },
    {
      number: 5,
      title: "Calculate Pediatric Dose",
      description:
        "Get precise pediatric dosing calculations based on patient parameters.",
      color: "bg-teal-100 border-teal-300",
    },
    {
      number: 6,
      title: "Download Summary",
      description:
        "Generate a comprehensive report of all interactions, calculations, and recommendations.",
      color: "bg-teal-100 border-teal-300",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Problem Statement Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100"
            variants={itemVariants}
          >
            The Challenge for Dermatologists
          </motion.h2>
          <motion.p
            className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Dermatologists face critical challenges when prescribing multiple
            medications, especially for pediatric patients.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemStatements.map((problem, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {problem.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution Visualization Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="pt-10"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100"
            variants={itemVariants}
          >
            The SynergyDerm Solution
          </motion.h2>
          <motion.p
            className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Our AI-powered workflow simplifies drug interaction checking and
            pediatric dosing in one seamless process.
          </motion.p>

          {/* Interactive Workflow Visualization */}
          <div className="relative">
            {/* Workflow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative ${step.color} p-6 rounded-xl border-2 h-full`}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 mt-2 text-gray-800 dark:text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {step.description}
                  </p>

                  {/* Show arrow between steps except for the last one in each row */}
                  {(index + 1) % 3 !== 0 &&
                    index !== workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                      </div>
                    )}

                  {/* Show down arrow for end of first row */}
                  {index === 2 && (
                    <div className="hidden lg:block absolute left-1/2 -bottom-8 transform -translate-x-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400 dark:text-gray-500 transform rotate-90" />
                    </div>
                  )}

                  {/* Show up arrow for start of second row */}
                  {index === 5 && (
                    <div className="hidden lg:block absolute left-1/2 -top-8 transform -translate-x-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400 dark:text-gray-500 transform -rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Results Card */}
          <motion.div
            className="mt-16 max-w-3xl mx-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Card className="border-2 border-primary shadow-lg dark:shadow-primary/20 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 1.2,
                    }}
                  >
                    <CheckCircle className="h-10 w-10 text-green-500 dark:text-green-400 mr-3" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    The Result: Safer Prescriptions
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  SynergyDerm helps dermatologists make safer prescription
                  decisions, reduce medication errors, and improve patient
                  outcomes—all while saving valuable clinical time.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionFlow;
