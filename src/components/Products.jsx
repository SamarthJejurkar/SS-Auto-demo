



// import React from 'react'
// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
// import { productsData } from '../data/productsData'

// const Products = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   }

//   const handleImageError = (e) => {
//     if (!e.target.dataset.fallback) {
//       e.target.dataset.fallback = 'true'
//       e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRTVFN0VCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+UHJvZHVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+'
//     }
//   }

//   return (
//     <section id="products" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Our Products
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive range of industrial electrical and automation components 
//             designed to enhance efficiency and reliability in your operations.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {productsData.map((product) => (
//             <motion.div
//               key={product.id}
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl group cursor-pointer transition-all duration-300"
//             >
//               <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   onError={handleImageError}
//                 />
                
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {product.category}
//                   </span>
//                 </div>

//                 {/* Hover Overlay with Link */}
//                 <Link 
//                   to={`/product/${product.id}`}
//                   className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
//                 >
//                   <HiArrowTopRightOnSquare className="text-white h-8 w-8" />
//                 </Link>
//               </div>

//               <div className="p-6">
//                 <Link to={`/product/${product.id}`}>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                     {product.title}
//                   </h3>
//                 </Link>
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   {product.shortDescription}
//                 </p>
                
//                 <Link 
//                   to={`/product/${product.id}`}
//                   className="inline-flex items-center gap-1 text-blue-600 font-medium hover:text-blue-700 transition-colors"
//                 >
//                   View Details
//                   <HiArrowTopRightOnSquare className="h-4 w-4" />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center mt-16"
//         >
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
//           >
//             Request Product Catalog
//             <HiArrowTopRightOnSquare className="h-5 w-5" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Products

import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { productsData } from '../data/productsData'

const Products = () => {
  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRTVFN0VCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+UHJvZHVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+'
  }

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of industrial electrical and automation components 
            designed to enhance efficiency and reliability in your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl group cursor-pointer transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={handleImageError}
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>

                <Link 
                  to={`/product/${product.id}`}
                  className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                >
                  <HiArrowTopRightOnSquare className="text-white h-8 w-8" />
                </Link>
              </div>

              <div className="p-6">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                </Link>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.shortDescription}
                </p>
                
                <Link 
                  to={`/product/${product.id}`}
                  className="inline-flex items-center gap-1 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  View Details
                  <HiArrowTopRightOnSquare className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Request Product Catalog
            <HiArrowTopRightOnSquare className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products

