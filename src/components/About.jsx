import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiCheckCircle, 
  HiCog6Tooth, 
  HiShieldCheck, 
  HiGlobeAlt,
  HiUsers,
  HiTrophy
} from 'react-icons/hi2'

const About = () => {
  const features = [
    {
      icon: HiCog6Tooth,
      title: "Advanced Technology",
      description: "Cutting-edge automation solutions with latest industrial IoT integration"
    },
    {
      icon: HiShieldCheck,
      title: "Quality Assurance",
      description: "ISO certified products with rigorous testing and quality control processes"
    },
    {
      icon: HiGlobeAlt,
      title: "Global Reach",
      description: "Serving industries worldwide with local support and international standards"
    },
    {
      icon: HiUsers,
      title: "Expert Support",
      description: "Dedicated technical team providing 24/7 customer support and consultation"
    }
  ]

  const stats = [
    { number: "500+", label: "Products" },
    { number: "1000+", label: "Clients Served" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Countries" }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-industrial-dark mb-4">
            About SS Automations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in industrial electrical and automation solutions, 
            driving efficiency and innovation across industries worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-industrial-dark">
                Leading Industrial Solutions Provider
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                SS Automations has been at the forefront of industrial electrical and automation 
                technology for over a decade. We specialize in providing comprehensive solutions 
                that enhance operational efficiency, reduce downtime, and drive sustainable growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, combined with deep industry expertise, makes us 
                the preferred choice for businesses seeking reliable, innovative automation solutions.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              {[
                "ISO 9001:2015 certified manufacturing processes",
                "Comprehensive technical support and training",
                "Custom solutions for unique industrial requirements",
                "Sustainable and energy-efficient products"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <HiCheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl industrial-shadow"
              >
                <div className="text-3xl lg:text-4xl font-bold text-industrial-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:border-industrial-blue transition-colors hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-industrial-blue/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-industrial-blue" />
              </div>
              <h4 className="text-xl font-semibold text-industrial-dark mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-industrial-blue to-blue-600 rounded-2xl text-white"
        >
          <HiTrophy className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Why Choose SS Automations?
          </h3>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We combine technical expertise with customer-centric approach to deliver solutions 
            that not only meet your current needs but also prepare your business for future growth. 
            Partner with us for reliable, innovative, and sustainable industrial automation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
