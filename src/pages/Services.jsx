// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wrench,
  Cpu,
  Building,
  GraduationCap,
  Lightbulb,
  Shield,
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: Wrench,
      title: "Solar EPC Services",
      description:
        "End-to-end Engineering, Procurement, and Construction services for solar projects.",
      features: [
        "Custom Design",
        "Quality Procurement",
        "Professional Installation",
      ],
    },
    {
      icon: Cpu,
      title: "Solar BOS",
      description:
        "High-quality Balance of System components including mounting structures and safety equipment.",
      features: ["Mounting Structures", "Switchgear", "Monitoring Systems"],
    },
    {
      icon: Building,
      title: "Pre-engineered Structures",
      description:
        "Customized pre-fabricated structures for faster, cost-effective construction.",
      features: ["Fast Construction", "Durable", "Cost Effective"],
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      description:
        "Comprehensive training programs for solar industry professionals.",
      features: ["Hands-on Training", "Industry Experts", "Career Growth"],
    },
    {
      icon: Lightbulb,
      title: "Consultancy Services",
      description:
        "Expert advice for planning, design, and implementation of solar projects.",
      features: [
        "Feasibility Study",
        "Project Management",
        "Performance Monitoring",
      ],
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance packages and after-sales support.",
      features: ["Online Monitoring", "Regular Maintenance", "24/7 Support"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solar energy solutions from concept to commissioning
            and beyond
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
