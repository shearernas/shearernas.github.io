import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFViewer from '../../lib/pdfviewer'; 


function NordiqPopup({ onClose }) {
  // Prevent background scrolling when popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // State for PDF viewer
  const [showPDF, setShowPDF] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  
  // Function to open PDF popup
  const openPDF = (url) => {
    setPdfUrl(url);
    setShowPDF(true);
  };
  
  // Function to close PDF popup
  const closePDF = () => {
    setShowPDF(false);
    setPdfUrl('');
  };

  return (
    // Animated backdrop
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className='fixed inset-0 bg-black/50 flex items-center justify-center z-60 p-4'
      onClick={onClose}
    >
      {/* Animated popup content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className='bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className='sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10'>
          <h1 className='text-2xl font-bold text-primary'>Nordiq Alberta</h1>
          <button 
            className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group'
            onClick={onClose}
          >
            <X className='w-5 h-5 text-gray-600 group-hover:text-gray-800'/>
          </button>
        </div>
        
        {/* Scrollable content area */}
        <div className='overflow-y-auto max-h-[calc(90vh-80px)]'>
          <div className='p-6 space-y-8'>
            
            {/* Project overview section */}
            <section>
              <p className='text-start leading-relaxed p-4 text-black text-lg'>
                <span className='text-primary'>For my undergrad program, I was required to work a certain amount of hours in a real-world work experience. I had the pleasure of working with Nordiq Alberta, the provincial authority for cross-country skiing in Alberta.</span> During my work experience co-op, I collaborated with the small marketing team to create compelling visual content that enhanced their brand presence and supported their mission of promoting cross-country skiing in Alberta.
              </p>
              <p className='text-start leading-relaxed p-4 text-black text-lg'>
                 I compiled my work into a design scrapbook that you can flip through as a PDF below.
              </p>
            </section>

            <section>
               {/* PDF Popup - only shows when showPDF is true */}
                {showPDF && (
                  <PDFViewer 
                    openPDF={() => openPDF('/nordiq/nordiq.pdf')}
                    pdfUrl={pdfUrl} 
                    onClose={closePDF}
                  />
                )}
            </section>

            {/* Image gallery section */}
            <section>
            <p className='text-start leading-relaxed px-4 pt-4 pb-12 text-black text-lg'>
                 Additionally, here are some examples of my work in print. To say it felt nice to see my own visual design examples in real-life print would be a bit of an understatement.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 place-items-center-safe'>
                <div className='space-y-3'>
                  <img 
                    src="/projects/nordiq/nordiq_3.jpeg" 
                    alt="Nordiq Alberta BABS ranking banner" 
                    className='w-60 h-60 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                    loading="lazy"
                  />
                  <p className='text-sm text-gray-600'>Marketing campaign design for winter events</p>
                </div>
                <div className='space-y-3'>
                  <img 
                    src="/projects/nordiq/nordiq_4.jpg" 
                    alt="Nordiq Alberta printed donation cards" 
                    className='w-60 h-60 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                    loading="lazy"
                  />
                  <p className='text-sm text-gray-600'>Social media content for athlete spotlights</p>
                </div>
              </div>
            </section>

            {/* Skills and tools section */}
            {/*<section>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>Skills & Tools Used</h2>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Graphic Design", "Marketing", "Canva", "Adobe Illustrator", "Adobe Aero", "Print Design", "Content Creation"].map((skill, index) => (
                  <span 
                    key={index}
                    className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>*/}

            {/* Results/impact section */}
            <section>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>Impact & Results</h2>
              <div className='bg-gray-50 rounded-lg p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Increased social media engagement by creating visually appealing content that resonated with the skiing community
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Developed consistent brand materials that strengthened Nordiq Alberta's visual identity across multiple platforms
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Collaborated effectively with the marketing team to deliver projects on tight deadlines during peak season
                  </li>
                </ul>
              </div>
            </section>

            {/* Call to action or additional info */}
            <section className='text-center py-4'>
              <p className='text-gray-600'>
                This project showcases my ability to work in a professional environment and create 
                impactful visual content that serves real business objectives.
              </p>
            </section>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default NordiqPopup;