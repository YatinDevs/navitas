import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();

  const sectionData = {
    section_header: "About Navitas Efficens",
    text_content: `
      <p class="mb-4">Navitas Efficens (NE) is an internationally registered brand and company engaged in designing, installation and commissioning of Solar PV power projects, providing turnkey solutions all under one roof.</p>
      <p class="mb-4">Our comprehensive services span from Concept to Commissioning of Solar power projects and further operating and maintaining them throughout the lifetime of the projects. We focus on designing innovative products and technologies beneficial for society through technology transfer.</p>
      <p>Our team consists of experts from renewable energy sectors, capable of executing large-scale Solar PV projects in compliance with stringent quality standards, industry best practices, and regulatory norms.</p>
    `,
    section_image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  };

  const features = [
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Turnkey Solutions",
      description: "End-to-end solar projects from concept to commissioning",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Renewable energy specialists with years of experience",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Quality Focus",
      description: "Stringent quality standards and best industry practices",
    },
  ];

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {sectionData.section_header}
          </h2>
          <motion.div
            className="h-1 w-16 bg-[#10a19d] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: sectionData.text_content }}
            />

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-[#10a19d] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center text-[#10a19d] hover:text-[#0d817d] font-semibold group transition-colors cursor-pointer"
              >
                Discover Our Full Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={sectionData.section_image}
                alt="Navitas Efficens Solar Projects"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#10a19d] mb-1">
                  2MW+
                </div>
                <div className="text-sm text-gray-600">
                  Solar Capacity Installed
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
