import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  DraftingCompass,
  Shield,
  Factory,
  Monitor,
  Wrench,
  Award,
  Zap,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description:
        "Team of experienced engineers and technicians from renewable energy sector",
    },
    {
      icon: <DraftingCompass className="h-8 w-8" />,
      title: "Precision Design",
      description:
        "2D, 3D drawings and designs for accuracy and optimal system performance",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Materials",
      description:
        "Quality material used considering long term system performance and durability",
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "In-house Manufacturing",
      description:
        "In-house development of GI mounting structure which is 20-30% stronger than MS and lightweight",
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Online Monitoring",
      description:
        "Real-time online monitoring of installed Solar systems for optimal performance",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Comprehensive Support",
      description:
        "Complete maintenance packages and after-sales support throughout project lifetime",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Safety First",
      description:
        "The point of utmost importance - Safety first in all our operations and installations",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Proven Technologies",
      description:
        "Polycrystalline, Mono-crystalline, Half-cut Mono PERC, bifacial panels and all inverter types",
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
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#10a19d]">Navitas Efficens?</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-[#10a19d] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand out in the solar energy industry with our comprehensive
            approach, quality focus, and commitment to customer satisfaction.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
            >
              <div className="w-16 h-16 bg-[#10a19d] rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-[#0d817d] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#10a19d] to-[#0d817d] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have transformed their
              energy infrastructure with our reliable solar solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#10a19d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
            <p className="text-[#10a19d] font-medium">+91 98225 61464</p>
            <p className="text-[#10a19d] font-medium">+91 99229 46677</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
            <p className="text-gray-600 text-sm">
              Shop No. 6-7, Durgesh Apt, Ganesh Nagar, Satpur, Nashik - 422007
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
            <p className="text-[#10a19d] font-medium">
              info@navitasefficens.in
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
