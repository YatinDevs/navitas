// src/components/Products.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SolarPanel, Settings, Zap, Cpu } from "lucide-react";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const products = [
    {
      icon: SolarPanel,
      title: "Solar Panels",
      types: [
        "Polycrystalline",
        "Mono-crystalline",
        "Half-cut Mono PERC",
        "Bifacial",
      ],
      description: "High-efficiency solar panels from trusted manufacturers",
    },
    {
      icon: Cpu,
      title: "Inverters",
      types: [
        "String Inverters",
        "Micro Inverters",
        "Central Inverters",
        "Hybrid Inverters",
      ],
      description: "All types and brands for optimal energy conversion",
    },
    {
      icon: Settings,
      title: "Mounting Systems",
      types: [
        "Fixed Stands",
        "Solar Trackers",
        "Roof Mounting",
        "Ground Mounting",
      ],
      description: "Durable and reliable mounting solutions",
    },
    {
      icon: Zap,
      title: "Balance of System",
      types: [
        "Combiner Boxes",
        "Monitoring Systems",
        "Safety Equipment",
        "Cabling",
      ],
      description: "Complete BOS components for system integration",
    },
  ];

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
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality components and innovative technologies for superior solar
            energy systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Available Types:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.types.map((type, typeIndex) => (
                    <span
                      key={typeIndex}
                      className="px-3 py-1 bg-white text-primary rounded-full text-sm border border-primary/20"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-primary rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">20-30%</div>
              <div className="text-primary-light">Stronger GI Structures</div>
              <div className="text-sm mt-1">
                Lightweight yet more durable than MS
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-primary-light">Quality Assured</div>
              <div className="text-sm mt-1">
                Industry best practices followed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-primary-light">Online Monitoring</div>
              <div className="text-sm mt-1">
                Real-time system performance tracking
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
