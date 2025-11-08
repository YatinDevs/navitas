// src/components/Gallery.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "2 MW Solar Power Plant - Akola",
      image: "/api/placeholder/600/400",
      description: "Large-scale ground-mounted solar power plant",
    },
    {
      title: "1 MW Solar Power Plant - Kopargaon",
      image: "/api/placeholder/600/400",
      description: "Commercial solar power installation",
    },
    {
      title: "Solar Tree - Nashik",
      image: "/api/placeholder/600/400",
      description: "First ever SOLAR TREE with Net-metering in Maharashtra",
    },
    {
      title: "100 KW Industrial Rooftop - Nashik",
      image: "/api/placeholder/600/400",
      description: "Industrial rooftop solar project",
    },
    {
      title: "Pre-engineered Structure - Nashik",
      image: "/api/placeholder/600/400",
      description: "10,000 sq.ft. industrial shed structure",
    },
    {
      title: "Canal-top Solar Project - Gujarat",
      image: "/api/placeholder/600/400",
      description: "Feasibility study for innovative canal-top installation",
    },
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

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
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our successful solar energy projects and innovative
            installations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(project.image, index)}
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Click to view
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="relative">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />

                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <button
                      onClick={goToPrevious}
                      className="p-2 text-white hover:text-primary transition-colors"
                    >
                      <ChevronLeft size={32} />
                    </button>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                      onClick={goToNext}
                      className="p-2 text-white hover:text-primary transition-colors"
                    >
                      <ChevronRight size={32} />
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                  <h3 className="text-xl font-semibold">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-300">
                    {projects[currentIndex].description}
                  </p>
                  <div className="mt-2">
                    {currentIndex + 1} / {projects.length}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
