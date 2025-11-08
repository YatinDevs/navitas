import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Cpu,
  Building,
  GraduationCap,
  Lightbulb,
  Shield,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  // Static services data
  const services = [
    {
      id: 1,
      icon: Wrench,
      title: "Solar EPC Services",
      description:
        "End-to-end Engineering, Procurement, and Construction services for solar projects with complete turnkey solutions.",
      features: [
        "Custom Design & Planning",
        "Quality Material Procurement",
        "Professional Installation",
        "Commissioning & Handover",
      ],
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      delay: 0.1,
    },
    {
      id: 2,
      icon: Cpu,
      title: "Solar BOS Components",
      description:
        "High-quality Balance of System components including mounting structures, inverters, and safety equipment.",
      features: [
        "Mounting Structures",
        "Inverters & Switchgear",
        "Monitoring Systems",
        "Safety Equipment",
      ],
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      delay: 0.2,
    },
    {
      id: 3,
      icon: Building,
      title: "Pre-engineered Structures",
      description:
        "Customized pre-fabricated structures for faster, cost-effective, and durable construction solutions.",
      features: [
        "Fast Construction",
        "Durable Materials",
        "Cost Effective",
        "Custom Designs",
      ],
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      delay: 0.3,
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Skill Development Training",
      description:
        "Comprehensive training programs for solar industry professionals, technicians, and engineers.",
      features: [
        "Hands-on Training",
        "Industry Experts",
        "Certification Programs",
        "Career Placement",
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      delay: 0.4,
    },
    {
      id: 5,
      icon: Lightbulb,
      title: "Consultancy Services",
      description:
        "Expert advice and support throughout the planning, design, and implementation of solar energy systems.",
      features: [
        "Feasibility Study",
        "System Design",
        "Project Management",
        "Performance Monitoring",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      delay: 0.5,
    },
    {
      id: 6,
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance packages and after-sales support with online monitoring capabilities.",
      features: [
        "Online Monitoring",
        "Regular Maintenance",
        "24/7 Support",
        "Performance Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      delay: 0.6,
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
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
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
            Our <span className="text-[#10a19d]">Services</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-[#10a19d] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solar energy solutions from concept to commissioning
            and beyond. We provide end-to-end services to meet all your
            renewable energy needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-[#10a19d] rounded-lg flex items-center justify-center text-white shadow-lg">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#10a19d] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-[#10a19d] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-[#10a19d] font-semibold text-sm group/btn hover:text-[#0d817d] transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
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
              Ready to Harness Solar Energy?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get a personalized consultation and discover how our solar
              solutions can transform your energy infrastructure and reduce
              costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#10a19d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#10a19d] transition-colors"
              >
                View Our Projects
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Features Highlight */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#10a19d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Quality Assured
            </h4>
            <p className="text-gray-600">
              Stringent quality standards and industry best practices
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#10a19d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Expert Team
            </h4>
            <p className="text-gray-600">
              Experienced professionals with renewable energy expertise
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#10a19d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Innovation
            </h4>
            <p className="text-gray-600">
              Cutting-edge technology and sustainable solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
