

// import React from 'react'
// import { motion } from 'framer-motion'
// import { HiArrowRight, HiCog6Tooth, HiShieldCheck, HiTruck } from 'react-icons/hi2'
// import electricalPartsImage from '../assets/electrical-parts.jpg'

// const ImageSection = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative rounded-2xl overflow-hidden industrial-shadow">
//           <div className="relative h-[600px] lg:h-[500px]">
//             <img
//               src={electricalPartsImage}
//               alt="Electrical and Automation Components"
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 if (!e.target.dataset.fallback) {
//                   e.target.dataset.fallback = 'true'
//                   e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjYwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVsZWN0cmljYWwgQ29tcG9uZW50czwvdGV4dD4KPC9zdmc+'
//                 }
//               }}
//             />
            
//             {/* Text overlay positioned on the blank area of the image */}
//             <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-16">
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//                 className="w-full max-w-md lg:max-w-lg bg-white/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-xl border border-gray-100"
//               >
//                 <motion.div 
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-orange-600 font-bold text-xs lg:text-sm tracking-wider uppercase mb-3"
//                 >
//                   ELECTRICAL & AUTOMATION PARTS
//                 </motion.div>
                
//                 <motion.h2 
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4"
//                 >
//                   Quality Components for
//                   <br />Your Projects
//                 </motion.h2>
                
//                 <motion.p 
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className="text-sm lg:text-base text-gray-700 leading-relaxed mb-5"
//                 >
//                   Arduino boards, sensors, displays, motors and all the components you need for automation and electronics projects.
//                 </motion.p>

//                 <motion.div 
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                   className="space-y-2 mb-6"
//                 >
//                   <div className="flex items-center gap-3">
//                     <HiCog6Tooth className="h-4 w-4 text-orange-600 flex-shrink-0" />
//                     <span className="text-xs lg:text-sm text-gray-800 font-medium">Complete automation solutions</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <HiShieldCheck className="h-4 w-4 text-orange-600 flex-shrink-0" />
//                     <span className="text-xs lg:text-sm text-gray-800 font-medium">Quality guaranteed products</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <HiTruck className="h-4 w-4 text-orange-600 flex-shrink-0" />
//                     <span className="text-xs lg:text-sm text-gray-800 font-medium">Fast delivery across India</span>
//                   </div>
//                 </motion.div>

//                 <motion.a
//                   href="#contact"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 }}
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center gap-2 bg-orange-600 text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-lg font-bold text-sm hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   TALK WITH AN EXPERT
//                   <HiArrowRight className="h-4 w-4" />
//                 </motion.a>
//               </motion.div>
//             </div>

//             {/* Optional: Add a subtle overlay to improve text readability */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-white/20 pointer-events-none"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ImageSection


// import React from 'react'
// import { motion } from 'framer-motion'
// import { HiArrowRight, HiCog6Tooth, HiShieldCheck, HiTruck } from 'react-icons/hi2'
// import electricalPartsImage from '../assets/electrical-parts.jpg'

// const ImageSection = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Image Container with Overlay */}
//         <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//           {/* Background Image */}
//           <div className="relative h-[500px] lg:h-[600px]">
//             <img
//               src={electricalPartsImage}
//               alt="Electrical and Automation Components"
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 if (!e.target.dataset.fallback) {
//                   e.target.dataset.fallback = 'true'
//                   e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjYwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVsZWN0cmljYWwgQ29tcG9uZW50czwvdGV4dD4KPC9zdmc+'
//                 }
//               }}
//             />
            
//             {/* Text Overlay - Positioned in Blank Space */}
//             <div className="absolute inset-0 flex items-center justify-end">
//               <motion.div
//                 initial={{ opacity: 0, x: 50, scale: 0.9 }}
//                 whileInView={{ opacity: 1, x: 0, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//                 whileHover={{ 
//                   scale: 1.02, 
//                   y: -5,
//                   transition: { duration: 0.3 }
//                 }}
//                 className="mr-8 lg:mr-16 w-full max-w-md lg:max-w-lg"
//               >
//                 {/* Glassmorphism Card with White Text */}
//                 <div className="relative group">
//                   {/* Card Background with Glassmorphism */}
//                   <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 group-hover:bg-white/15 transition-all duration-300"></div>
                  
//                   {/* Card Content */}
//                   <div className="relative p-6 lg:p-8 rounded-xl">
                    
//                     {/* Small Title - White */}
//                     <motion.div 
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 }}
//                       className="text-orange-300 font-bold text-xs lg:text-sm tracking-wider uppercase mb-3"
//                     >
//                       ELECTRICAL & AUTOMATION PARTS
//                     </motion.div>
                    
//                     {/* Main Heading - White */}
//                     <motion.h2 
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 }}
//                       className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4 drop-shadow-lg"
//                     >
//                       Quality Components for
//                       <br />Your Projects
//                     </motion.h2>
                    
//                     {/* Description - White */}
//                     <motion.p 
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4 }}
//                       className="text-sm lg:text-base text-white/90 leading-relaxed mb-5 drop-shadow-md"
//                     >
//                       Arduino boards, sensors, displays, motors and all the components you need for automation and electronics projects.
//                     </motion.p>

//                     {/* Features List - White */}
//                     <motion.div 
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.5 }}
//                       className="space-y-2 mb-6"
//                     >
//                       <motion.div 
//                         whileHover={{ x: 5 }}
//                         className="flex items-center gap-3"
//                       >
//                         <HiCog6Tooth className="h-4 w-4 text-orange-300 flex-shrink-0 drop-shadow-md" />
//                         <span className="text-xs lg:text-sm text-white/90 font-medium drop-shadow-sm">Complete automation solutions</span>
//                       </motion.div>
//                       <motion.div 
//                         whileHover={{ x: 5 }}
//                         className="flex items-center gap-3"
//                       >
//                         <HiShieldCheck className="h-4 w-4 text-orange-300 flex-shrink-0 drop-shadow-md" />
//                         <span className="text-xs lg:text-sm text-white/90 font-medium drop-shadow-sm">Quality guaranteed products</span>
//                       </motion.div>
//                       <motion.div 
//                         whileHover={{ x: 5 }}
//                         className="flex items-center gap-3"
//                       >
//                         <HiTruck className="h-4 w-4 text-orange-300 flex-shrink-0 drop-shadow-md" />
//                         <span className="text-xs lg:text-sm text-white/90 font-medium drop-shadow-sm">Fast delivery across India</span>
//                       </motion.div>
//                     </motion.div>

//                     {/* CTA Button with Enhanced Effects */}
//                     <motion.a
//                       href="#contact"
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.6 }}
//                       whileHover={{ 
//                         scale: 1.05, 
//                         y: -2,
//                         boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-lg font-bold text-sm hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg backdrop-blur-sm border border-orange-400/20"
//                     >
//                       TALK WITH AN EXPERT
//                       <motion.div
//                         whileHover={{ x: 3 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <HiArrowRight className="h-4 w-4" />
//                       </motion.div>
//                     </motion.a>
//                   </div>

//                   {/* Floating Animation Elements */}
//                   <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Enhanced Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30 pointer-events-none"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ImageSection


import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCog6Tooth, HiShieldCheck, HiTruck } from 'react-icons/hi2'
import electricalPartsImage from '../assets/electrical-parts2.jpg'

const ImageSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Container with Overlay */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <img
              src={electricalPartsImage}
              alt="Electrical and Automation Components"
              className="w-full h-full object-cover"
              onError={(e) => {
                if (!e.target.dataset.fallback) {
                  e.target.dataset.fallback = 'true'
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjYwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVsZWN0cmljYWwgQ29tcG9uZW50czwvdGV4dD4KPC9zdmc+'
                }
              }}
            />
            
            {/* TRULY Transparent Card with Black Text + Shadows */}
            <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="mb-6 mr-24 lg:mb-8 lg:mr-32 w-[40%] lg:w-[35%] max-w-[450px]"
              >
                {/* Very Transparent Glassmorphism Card */}
                <div className="relative group">
                  {/* Ultra-Transparent Background */}
                  <div className="absolute inset-0 bg-white/25 backdrop-blur-lg rounded-xl border border-white/40 group-hover:bg-white/35 transition-all duration-300 shadow-2xl"></div>
                  
                  {/* Card Content with Black Text + Strong Shadows */}
                  <div className="relative p-5 lg:p-6 rounded-xl">
                    
                    {/* Small Title - Orange with Shadow */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-orange-600 font-bold text-xs tracking-wider uppercase mb-2 drop-shadow-lg filter"
                      style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}
                    >
                      ELECTRICAL & AUTOMATION
                    </motion.div>
                    
                    {/* Main Heading - Black with Strong White Shadow */}
                    <motion.h2 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-3"
                      style={{ textShadow: '2px 2px 6px rgba(255,255,255,0.9), -1px -1px 3px rgba(255,255,255,0.7)' }}
                    >
                      Quality Components for Your Projects
                    </motion.h2>
                    
                    {/* Description - Dark Gray with White Shadow */}
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm text-gray-800 leading-relaxed mb-4 font-medium"
                      style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.8)' }}
                    >
                      Arduino boards, sensors, displays, motors and all components for automation projects.
                    </motion.p>

                    {/* Features List - Black with Shadows */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-1.5 mb-4"
                    >
                      <motion.div 
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-2"
                      >
                        <HiCog6Tooth className="h-3.5 w-3.5 text-orange-600 flex-shrink-0 drop-shadow-md" />
                        <span 
                          className="text-xs text-gray-900 font-semibold"
                          style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
                        >
                          Complete automation solutions
                        </span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-2"
                      >
                        <HiShieldCheck className="h-3.5 w-3.5 text-orange-600 flex-shrink-0 drop-shadow-md" />
                        <span 
                          className="text-xs text-gray-900 font-semibold"
                          style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
                        >
                          Quality guaranteed products
                        </span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-2"
                      >
                        <HiTruck className="h-3.5 w-3.5 text-orange-600 flex-shrink-0 drop-shadow-md" />
                        <span 
                          className="text-xs text-gray-900 font-semibold"
                          style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
                        >
                          Fast delivery across India
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.a
                      href="#contact"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-bold text-sm hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
                    >
                      TALK WITH AN EXPERT
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiArrowRight className="h-3.5 w-3.5" />
                      </motion.div>
                    </motion.a>
                  </div>

                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/10 to-blue-400/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </div>
              </motion.div>
            </div>

            {/* Minimal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageSection
