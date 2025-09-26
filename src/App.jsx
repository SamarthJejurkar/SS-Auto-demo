


// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import ImageSection from './components/ImageSection'
// import Products from './components/Products'
// import VideoSection from './components/VideoSection'
// import ProductDetailPage from './pages/ProductDetailPage'
// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

// // Simple Home Page Component
// const HomePage = () => {
//   return (
//     <div className="w-full">
//       <Hero />           {/* BLUE - Hero section */}
//       <ImageSection />   {/* WHITE - Electrical parts */}
//       <Products />       {/* GRAY - Product grid */}
//       <VideoSection />   {/* DARK - Manufacturing video */}
//       <About />          {/* WHITE - Company info */}
//       <Contact />        {/* GRAY - Contact form */}
//     </div>
//   )
// }

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white">
//         <Navbar />
        
//         <main className="relative">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/product/:id" element={<ProductDetailPage />} />
//             <Route path="*" element={
//               <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
//                 <div className="text-center">
//                   <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
//                   <a href="/" className="text-blue-600 hover:text-blue-700">Back to Home</a>
//                 </div>
//               </div>
//             } />
//           </Routes>
//         </main>
        
//         <Footer />
//       </div>
//     </Router>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImageSection from './components/ImageSection'
import Products from './components/Products'
import VideoSection from './components/VideoSection'
import ProductDetailPage from './pages/ProductDetailPage'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Simple Home Page Component
const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />           {/* BLUE - Hero section */}
      <ImageSection />   {/* WHITE - Electrical parts */}
      <Products />       {/* GRAY - Product grid */}
      <VideoSection />   {/* DARK - Manufacturing video */}
      <About />          {/* WHITE - Company info */}
      <Contact />        {/* GRAY - Contact form */}
    </div>
  )
}

// INSTANT Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation()
  
  React.useLayoutEffect(() => {
    // INSTANT scroll to top - no animation
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                  <a href="/" className="text-blue-600 hover:text-blue-700">Back to Home</a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
