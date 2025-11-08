import React from "react";
import { MapPin, Clock, Phone, Mail, Star, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ContactLocationSection = () => {
  // Static JSON data for Navitas Efficens
  const contactData = {
    company: {
      name: "Navitas Efficens",
      tagline: "Your Smart Energy Partner",
      description:
        "Visit our office for expert solar consultation, project discussions, and to explore our innovative solar energy solutions.",
    },
    locations: [
      {
        type: "Registered Office",
        address: {
          line1: "Shop No. 6-7, Durgesh Apt,",
          line2: "Ganesh Nagar, Satpur,",
          line3: "Nashik - 422007, Maharashtra",
        },
      },
      {
        type: "Branch Office",
        address: {
          line1: "Pune Branch Office",
          line2: "Pune, Maharashtra",
        },
      },
      {
        type: "Branch Office",
        address: {
          line1: "Kopargaon Branch Office",
          line2: "Kopargaon, Maharashtra",
        },
      },
    ],
    contact: {
      phones: ["+91 98225 61464", "+91 99229 46677"],
      email: "info@navitasefficens.in",
      hours: {
        weekdays: "Monday - Saturday: 9:00 AM - 6:00 PM",
        sunday: "Sunday: Closed",
      },
    },
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.396456426012!2d73.7621123!3d19.9970271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebffffffffff%3A0x7c0b8b0b0b0b0b0b!2sNavitas%20Efficens!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
      directionsUrl: "https://goo.gl/maps/abc123def456",
      reviewsUrl: "https://g.page/r/Cg-1234567890/review",
    },
    certifications: [
      "MNRE Empanelled Agency",
      "MSEDCL Approved",
      "ISO 9001:2015 Certified",
    ],
  };

  const handleGetDirections = () => {
    window.open(
      contactData.maps.directionsUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleGoogleReviewsClick = () => {
    window.open(contactData.maps.reviewsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Office
          </h2>
          <motion.div
            className="h-1 w-16 bg-[#10a19d] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our solar energy experts for personalized
            consultation and project discussions
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Map Section */}
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <iframe
                src={contactData.maps.embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                aria-hidden="false"
                tabIndex="0"
                title="Navitas Efficens Office Location"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 border border-gray-200">
                <div className="w-10 h-10 bg-[#10a19d] rounded-lg flex items-center justify-center">
                  <Sun className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">
                    {contactData.company.name}
                  </span>
                  <span className="text-sm text-[#10a19d] font-medium">
                    {contactData.company.tagline}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {contactData.company.description}
                </p>

                <div className="space-y-6">
                  {/* Office Locations */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      Our Offices
                    </h4>
                    {contactData.locations.map((location, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#10a19d] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {location.type}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {location.address.line1}
                            <br />
                            {location.address.line2}
                            <br />
                            {location.address.line3}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#10a19d] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        {contactData.contact.hours.weekdays}
                        <br />
                        {contactData.contact.hours.sunday}
                      </p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#10a19d] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        Contact Details
                      </h4>
                      <div className="space-y-2">
                        {contactData.contact.phones.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="block text-gray-600 hover:text-[#10a19d] transition-colors font-medium"
                          >
                            {phone}
                          </a>
                        ))}
                        <a
                          href={`mailto:${contactData.contact.email}`}
                          className="block text-gray-600 hover:text-[#10a19d] transition-colors font-medium"
                        >
                          {contactData.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 text-lg mb-3">
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {contactData.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="bg-[#10a19d] text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.button
                    onClick={handleGetDirections}
                    className="flex items-center justify-center gap-2 bg-[#10a19d] hover:bg-[#0d817d] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MapPin className="w-5 h-5" />
                    Get Directions
                  </motion.button>

                  <motion.button
                    onClick={handleGoogleReviewsClick}
                    className="flex items-center justify-center gap-2 border-2 border-[#10a19d] text-[#10a19d] hover:bg-[#10a19d] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Star className="w-5 h-5" />
                    Leave a Review
                  </motion.button>
                </div>

                {/* Quick Contact */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">
                      Quick connect:
                    </span>
                    <div className="flex gap-4">
                      <a
                        href={`tel:${contactData.contact.phones[0].replace(
                          /\s/g,
                          ""
                        )}`}
                        className="text-[#10a19d] hover:text-[#0d817d] font-medium transition-colors flex items-center gap-1 text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a
                        href={`mailto:${contactData.contact.email}`}
                        className="text-[#10a19d] hover:text-[#0d817d] font-medium transition-colors flex items-center gap-1 text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </div>
                  </div>

                  {/* Social Proof */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span>50+ Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-[#10a19d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
            <p className="text-gray-600 text-sm">
              Get response within 2 hours during business days
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-[#10a19d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Free Consultation
            </h4>
            <p className="text-gray-600 text-sm">
              Complimentary site assessment and project consultation
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-[#10a19d] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Multiple Locations
            </h4>
            <p className="text-gray-600 text-sm">
              Serving across Maharashtra with branch offices
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLocationSection;
