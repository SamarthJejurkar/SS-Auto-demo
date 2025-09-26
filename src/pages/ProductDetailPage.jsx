

// import React from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { HiArrowLeft, HiCheckCircle, HiShieldCheck, HiCog6Tooth } from 'react-icons/hi2'
// import { productsData } from '../data/productsData'

// const ProductDetailPage = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const product = productsData.find(p => p.id === parseInt(id))

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center pt-20">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
//           <button 
//             onClick={() => navigate('/')}
//             className="text-blue-600 hover:text-blue-700 font-medium"
//           >
//             Return to Home
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
//         {/* Back Button */}
//         <div className="mb-8">
//           <button 
//             onClick={() => navigate('/')}
//             className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
//           >
//             <HiArrowLeft className="h-5 w-5" />
//             Back to Home
//           </button>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
//           {/* Product Image */}
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-96 object-cover"
//               onError={(e) => {
//                 e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRTVFN0VCIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+UHJvZHVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+'
//               }}
//             />
            
//             <div className="absolute top-6 left-6">
//               <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium">
//                 {product.category}
//               </span>
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-8">
            
//             <div>
//               <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                 {product.title}
//               </h1>
//               <p className="text-xl text-gray-700 leading-relaxed">
//                 {product.fullDescription || product.shortDescription}
//               </p>
//             </div>

//             {/* Features */}
//             {product.features && (
//               <div>
//                 <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
//                   <HiCog6Tooth className="h-6 w-6 text-blue-600" />
//                   Features
//                 </h3>
//                 <div className="space-y-3">
//                   {product.features.map((feature, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <HiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Protections */}
//             {product.protections && (
//               <div>
//                 <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
//                   <HiShieldCheck className="h-6 w-6 text-blue-600" />
//                   Protections & Functions
//                 </h3>
//                 <div className="space-y-3">
//                   {product.protections.map((protection, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <HiShieldCheck className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700">{protection}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Contact CTA */}
//             <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Interested in this product?
//               </h3>
//               <p className="text-gray-700 mb-6">
//                 Get detailed specifications, pricing, and technical support.
//               </p>
//               <button
//                 onClick={() => {
//                   navigate('/')
//                   setTimeout(() => {
//                     document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
//                   }, 100)
//                 }}
//                 className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
//               >
//                 Get Quote & Support
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetailPage


import React, { useState, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { HiArrowLeft, HiCheckCircle, HiShieldCheck, HiCog6Tooth } from 'react-icons/hi2'
import { productsData } from '../data/productsData'

const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)
  const product = productsData.find(p => p.id === parseInt(id))

  // PREVENT any layout shift by hiding until ready
  useLayoutEffect(() => {
    // Force immediate top position
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Show content after positioning is set
    setTimeout(() => {
      setIsLoaded(true)
    }, 50)
  }, [])

  if (!product) {
    return (
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#111827' }}>
            Product Not Found
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '24px' }}>
            The product you're looking for doesn't exist.
          </p>
          <button 
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Return to Home
          </button>
        </div>
      </div>
    )
  }

  // Show loading overlay until content is ready
  if (!isLoaded) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#f9fafb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #e5e7eb',
            borderTop: '4px solid #2563eb',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p style={{ color: '#6b7280' }}>Loading product details...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      <div style={{ 
        backgroundColor: '#f9fafb', 
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '40px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          animation: 'fadeIn 0.5s ease-in-out'
        }}>
          
          {/* Back Button */}
          <div style={{ marginBottom: '32px' }}>
            <button 
              onClick={() => navigate('/')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#2563eb',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '8px 0'
              }}
            >
              <HiArrowLeft style={{ width: '20px', height: '20px' }} />
              Back to Home
            </button>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '48px',
            alignItems: 'start'
          }}>
            
            {/* Product Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#e5e7eb'
              }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ 
                    width: '100%', 
                    height: '400px', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRTVFN0VCIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+UHJvZHVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+'
                  }}
                />
              </div>
              
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                <span style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Title & Description */}
              <div>
                <h1 style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '24px',
                  lineHeight: '1.1'
                }}>
                  {product.title}
                </h1>
                <p style={{
                  fontSize: '20px',
                  color: '#374151',
                  lineHeight: '1.7'
                }}>
                  {product.fullDescription || product.shortDescription}
                </p>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#111827',
                    marginBottom: '24px'
                  }}>
                    <HiCog6Tooth style={{ width: '24px', height: '24px', color: '#2563eb' }} />
                    Features
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {product.features.map((feature, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <HiCheckCircle style={{ 
                          width: '20px', 
                          height: '20px', 
                          color: '#10b981',
                          marginTop: '2px',
                          flexShrink: 0
                        }} />
                        <span style={{ color: '#374151', fontSize: '16px', lineHeight: '1.6' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Protections */}
              {product.protections && product.protections.length > 0 && (
                <div>
                  <h3 style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#111827',
                    marginBottom: '24px'
                  }}>
                    <HiShieldCheck style={{ width: '24px', height: '24px', color: '#2563eb' }} />
                    Protections & Functions
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {product.protections.map((protection, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <HiShieldCheck style={{ 
                          width: '20px', 
                          height: '20px', 
                          color: '#3b82f6',
                          marginTop: '2px',
                          flexShrink: 0
                        }} />
                        <span style={{ color: '#374151', fontSize: '16px', lineHeight: '1.6' }}>
                          {protection}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact CTA */}
              <div style={{
                backgroundColor: '#eff6ff',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid #dbeafe'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '16px'
                }}>
                  Interested in this product?
                </h3>
                <p style={{
                  color: '#374151',
                  marginBottom: '24px',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>
                  Get detailed specifications, pricing, and technical support for {product.title}.
                </p>
                <button
                  onClick={() => {
                    navigate('/')
                    setTimeout(() => {
                      const contactSection = document.querySelector('#contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }, 100)
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  Get Quote & Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailPage
