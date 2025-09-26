import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiEnvelope, 
  HiPhone, 
  HiMapPin,
  HiArrowUp
} from 'react-icons/hi2'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const productCategories = [
    'PLCs & Controllers',
    'Motor Control Centers',
    'Industrial Sensors',
    'Power Distribution',
    'HMI & SCADA',
    'Variable Frequency Drives'
  ]

  return (
    <footer className="bg-industrial-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                SS Automations
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Leading supplier of premium industrial electrical and automation components. 
                Powering industrial efficiency with smart electrical & automation solutions 
                for over a decade.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <HiMapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">Industrial Area, Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiPhone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <HiEnvelope className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@ssautomations.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    info@ssautomations.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Product Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-6">Products</h4>
              <ul className="space-y-3">
                {productCategories.map((category, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm block">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-700 py-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 SS Automations. All rights reserved. | ISO 9001:2015 Certified
            </p>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="text-sm">Back to Top</span>
              <HiArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
