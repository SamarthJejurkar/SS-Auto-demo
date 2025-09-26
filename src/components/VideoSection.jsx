import React from 'react'
import { motion } from 'framer-motion'
import { HiEye } from 'react-icons/hi2'

// ✅ Import your video - make sure the path is correct
import videoFile from '../assets/video.mp4'

const VideoSection = () => {
  const videoRef = React.useRef(null)

  // Force play on component mount
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Full Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          {/* Simple Clean Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="max-w-sm" // Reduced width
          >
            {/* Clean Glassmorphism Card - Reduced Height */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">

              {/* Small Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                <HiEye className="h-4 w-4 text-blue-400" />
                <span className="text-blue-400 font-medium text-sm">Inside Our Technology</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl lg:text-2xl font-bold leading-tight text-white mb-4"
              >
                Advanced Circuit Board
                <span className="text-blue-400 block">Manufacturing</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-sm text-white/80 leading-relaxed mb-6"
              >
                Experience precision and innovation behind our circuit board manufacturing.
              </motion.p>

              {/* Stats - Compact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="grid grid-cols-2 gap-3 mb-6"
              >
                <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="text-lg font-bold text-blue-400">50K+</div>
                  <div className="text-white/70 text-xs">Circuits</div>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="text-lg font-bold text-blue-400">99.8%</div>
                  <div className="text-white/70 text-xs">Quality</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-colors duration-300 shadow-lg"
              >
                Explore Technology
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
