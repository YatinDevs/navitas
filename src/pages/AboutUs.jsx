// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Users } from "lucide-react";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Navitas Efficens</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Navitas Efficens is an internationally registered brand engaged in
              designing, installation, and commissioning of Solar PV power
              projects. We provide turnkey solutions all under one roof, from
              concept to commissioning and beyond.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team consists of experts from renewable energy sectors,
              capable of executing large-scale Solar PV projects in compliance
              with stringent quality standards and industry best practices.
            </p>

            {/* Vision & Mission Cards */}
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary"
              >
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600">
                  To be a global leader in advancing renewable energy solutions,
                  driving the transition to a sustainable and carbon-free
                  future.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary"
              >
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600">
                  To provide innovative, sustainable, and cost-effective solar
                  energy solutions that empower businesses and communities to
                  reduce their carbon footprint and achieve energy independence.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats & Achievements */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-primary text-white rounded-xl p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-3" />
              <div className="text-2xl font-bold">Award Winning</div>
              <div className="text-primary-light">
                Successful Businessmen Award
              </div>
            </div>

            <div className="bg-primary-dark text-white rounded-xl p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <div className="text-2xl font-bold">Expert Team</div>
              <div className="text-primary-light">
                Renewable Energy Specialists
              </div>
            </div>

            <div className="bg-primary-light text-white rounded-xl p-6 text-center col-span-2">
              <div className="text-3xl font-bold mb-2">2MW+</div>
              <div className="text-xl">Solar Power Installed</div>
              <div className="text-primary-lighter">
                Across Multiple Projects
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
