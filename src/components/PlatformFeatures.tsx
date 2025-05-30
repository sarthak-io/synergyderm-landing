import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Database,
  Layers,
  Cpu,
  Zap,
  Brain,
  Server,
  Shield,
  Code,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <motion.div
    variants={fadeIn}
    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="p-3 rounded-full bg-blue-50 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-sm text-center">{description}</p>
  </motion.div>
);

interface AgentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AgentCard = ({ title, description, icon }: AgentCardProps) => (
  <Card className="overflow-hidden">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-2">
        {icon}
        <CardTitle className="text-md">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const PlatformFeatures = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Platform Capabilities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            SynergyDerm combines advanced AI technologies with medical expertise
            to deliver a comprehensive solution for dermatologists.
          </p>
        </motion.div>

        {/* Core Technologies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <FeatureCard
            title="Multi-drug Interaction Engine"
            description="Analyzes complex interactions between multiple medications simultaneously, identifying potential conflicts."
            icon={<Zap size={24} className="text-blue-600" />}
          />
          <FeatureCard
            title="Pediatric Dose Calculator"
            description="Automatically calculates safe and accurate pediatric dosages based on weight, age, and medical context."
            icon={<Cpu size={24} className="text-blue-600" />}
          />
          <FeatureCard
            title="LLM Assistant"
            description="AI-powered assistant that provides contextual information and suggestions based on clinical data."
            icon={<Brain size={24} className="text-blue-600" />}
          />
          <FeatureCard
            title="Medical Contextual Processor"
            description="Understands and processes medical terminology and context for more accurate results."
            icon={<Code size={24} className="text-blue-600" />}
          />
          <FeatureCard
            title="Drug Suggestion Agent"
            description="Recommends alternative medications when conflicts or contraindications are detected."
            icon={<Database size={24} className="text-blue-600" />}
          />
          <FeatureCard
            title="Severity Classification"
            description="Categorizes interactions by severity level to help prioritize clinical decision-making."
            icon={<Shield size={24} className="text-blue-600" />}
          />
        </motion.div>

        {/* Technical Architecture */}
        <div className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Technical Architecture
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A simplified view of our robust and scalable architecture designed
              for healthcare environments.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Architecture Diagram */}
              <div className="w-full lg:w-2/3">
                <div className="relative h-[400px] bg-blue-50 rounded-lg p-6 overflow-hidden">
                  {/* API Gateway */}
                  <div className="absolute top-6 left-0 right-0 mx-auto w-3/4 bg-white p-4 rounded-lg shadow-sm border border-blue-100 text-center">
                    <Server size={24} className="mx-auto mb-2 text-blue-600" />
                    <p className="font-medium">API Gateway</p>
                  </div>

                  {/* Connecting Line */}
                  <div className="absolute top-[100px] left-1/2 w-0.5 h-16 bg-blue-200 transform -translate-x-1/2"></div>

                  {/* Middle Layer */}
                  <div className="absolute top-[140px] left-0 right-0 mx-auto w-4/5 flex justify-between gap-4">
                    <div className="flex-1 bg-white p-3 rounded-lg shadow-sm border border-blue-100 text-center">
                      <Layers
                        size={20}
                        className="mx-auto mb-1 text-blue-600"
                      />
                      <p className="text-sm font-medium">Interaction Engine</p>
                    </div>
                    <div className="flex-1 bg-white p-3 rounded-lg shadow-sm border border-blue-100 text-center">
                      <Brain size={20} className="mx-auto mb-1 text-blue-600" />
                      <p className="text-sm font-medium">Agent Layer</p>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <div className="absolute top-[210px] left-1/4 w-0.5 h-16 bg-blue-200 transform -translate-x-1/2"></div>
                  <div className="absolute top-[210px] left-3/4 w-0.5 h-16 bg-blue-200 transform -translate-x-1/2"></div>

                  {/* Bottom Layer */}
                  <div className="absolute bottom-6 left-0 right-0 mx-auto w-4/5 flex justify-between gap-4">
                    <div className="flex-1 bg-white p-3 rounded-lg shadow-sm border border-blue-100 text-center">
                      <Database
                        size={20}
                        className="mx-auto mb-1 text-blue-600"
                      />
                      <p className="text-sm font-medium">Drug Database</p>
                    </div>
                    <div className="flex-1 bg-white p-3 rounded-lg shadow-sm border border-blue-100 text-center">
                      <Code size={20} className="mx-auto mb-1 text-blue-600" />
                      <p className="text-sm font-medium">External APIs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture Description */}
              <div className="w-full lg:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Modular Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-blue-100 p-1">
                      <Server size={14} className="text-blue-600" />
                    </div>
                    <span className="text-sm">
                      Secure API gateway with authentication and rate limiting
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-blue-100 p-1">
                      <Layers size={14} className="text-blue-600" />
                    </div>
                    <span className="text-sm">
                      Proprietary interaction and rule engine for accurate
                      analysis
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-blue-100 p-1">
                      <Brain size={14} className="text-blue-600" />
                    </div>
                    <span className="text-sm">
                      AI agent layer combining NLP, LLM, and medical context
                      processing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-blue-100 p-1">
                      <Database size={14} className="text-blue-600" />
                    </div>
                    <span className="text-sm">
                      Comprehensive drug database with regular updates
                    </span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="mt-6 flex items-center gap-2"
                >
                  Technical Documentation <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI Agents */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">AI Agents</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Specialized AI agents working together to provide comprehensive
              clinical decision support.
            </p>
          </motion.div>

          <Tabs defaultValue="interaction" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="interaction">Interaction Agents</TabsTrigger>
              <TabsTrigger value="calculation">Calculation Agents</TabsTrigger>
              <TabsTrigger value="nlp">NLP & Context</TabsTrigger>
            </TabsList>

            <TabsContent value="interaction" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div variants={fadeIn}>
                  <AgentCard
                    title="Interaction Resolver Agent"
                    description="Identifies and resolves complex drug interactions using our proprietary algorithm and medical knowledge base."
                    icon={<Zap size={20} className="text-blue-600" />}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <AgentCard
                    title="Suggestion Agent"
                    description="Recommends alternative medications when conflicts are detected, considering patient history and clinical context."
                    icon={<Database size={20} className="text-blue-600" />}
                  />
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="calculation" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div variants={fadeIn}>
                  <AgentCard
                    title="Pediatric Calculation Agent"
                    description="Calculates precise pediatric dosages based on weight, age, and other clinical factors."
                    icon={<Cpu size={20} className="text-blue-600" />}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <AgentCard
                    title="Severity Classification Agent"
                    description="Evaluates and classifies the severity of potential drug interactions to prioritize clinical decisions."
                    icon={<Shield size={20} className="text-blue-600" />}
                  />
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="nlp" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div variants={fadeIn}>
                  <AgentCard
                    title="Medical NLP Engine"
                    description="Processes and understands natural language in medical contexts, extracting key clinical information."
                    icon={<Code size={20} className="text-blue-600" />}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <AgentCard
                    title="LLM Orchestrator"
                    description="Coordinates multiple language models to provide comprehensive and accurate clinical insights."
                    icon={<Brain size={20} className="text-blue-600" />}
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Customer Benefits
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Safer Prescriptions
              </h3>
              <p className="text-gray-600 text-sm">
                Reduce medication errors and adverse events
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Faster Decisions</h3>
              <p className="text-gray-600 text-sm">
                Streamline clinical workflow and save time
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Built-in Pediatric Tools
              </h3>
              <p className="text-gray-600 text-sm">
                Specialized calculations for pediatric patients
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Future-ready CDSS</h3>
              <p className="text-gray-600 text-sm">
                Clinical decision support system powered by AI
              </p>
            </div>
          </div>
          <Separator className="my-10" />
          <Button size="lg" className="mt-4">
            Explore All Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
