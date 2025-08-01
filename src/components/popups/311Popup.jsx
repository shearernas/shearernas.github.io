import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFScrollViewer from '../../lib/PDFScrollViewer';

function Calgary311Popup({ onClose }) {

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
        <div className='sticky top-0 bg-zinc-100 border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10'>
          <h1 className='text-2xl font-bold text-primary'>Nordiq Alberta</h1>
          <button 
            className='w-10 h-10 rounded-full bg-zinc-200 hover:bg-zinc-300 flex items-center justify-center transition-colors duration-200 group'
            onClick={onClose}
          >
            <X className='w-5 h-5 text-gray-600 group-hover:text-gray-800'/>
          </button>
        </div>
        
        {/* Scrollable content area */}
        <div className='overflow-y-auto max-h-[calc(90vh-80px)]'>
          <div className='p-6 space-y-8'>
            
            {/* Project overview section */}
            <section className='text-start px-8'>
              <p className='text-start leading-relaxed p-4 text-primary text-lg'>
                For my undergrad program, I was required to work a certain amount of hours in a real-world work experience. I had the pleasure of working with Nordiq Alberta, the provincial authority for cross-country skiing in Alberta.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                During my work experience co-op, I collaborated with the small marketing team to create compelling visual content that enhanced their brand presence and supported their mission of promoting cross-country skiing in Alberta.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                 I compiled my work into a design scrapbook that you can scroll through below.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/nordiq/scrapbook" 
                totalPages={7}
              />
            </section>

            <section className='px-8'>
              <p className='text-start leading-relaxed px-4 pt-4 pb-12 text-black text-lg'>
                Additionally, here are some examples of my work in print. To say it felt nice to see my own visual design examples in real-life print would be a bit of an understatement.
              </p>
              <div className="flex flex-col md:flex-row gap-x-8 gap-y-6 justify-center items-start mb-6">
                <div className="space-y-4 w-[350px]">
                  <img 
                    src="/projects/nordiq/nordiq_3.jpeg"
                    alt="Nordiq Alberta BABS ranking banner" 
                    className="w-[350px] h-[350px] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    loading="eager"
                  />
                  <p className="text-sm text-gray-600 text-center text-pretty">Marketing campaign design for winter events</p>
                </div>
                <div className="space-y-4 w-[350px]">
                  <img 
                    src="/projects/nordiq/nordiq_4.jpg"
                    alt="Nordiq Alberta printed donation cards" 
                    className="w-[350px] h-[350px] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    loading="eager"
                  />
                  <p className="text-sm text-gray-600 text-center text-pretty">Social media content for athlete spotlights</p>
                </div>
              </div>
            </section>

            {/* Results/impact section */}
            <section className='px-8 py-5'>
              <h2 className='font-bold text-gray-900 pb-5 text-2xl'>Skills I Developed</h2>
              <div className='bg-stone-100 rounded-lg p-8'>
                <ul className='space-y-6 text-primary flex flex-col'>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Marketing fundamentals within a real-world context, including marketing campaign planning and execution
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Print design and document layout skills, mainly using Adobe InDesign, Illustrator, and Canva
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Video editing for social media, using Canva and Adobe Premiere Pro
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Basic AR development and testing using Adobe Aero
                  </li>
                </ul>
              </div>
            </section>

            {/* Call to action or additional info */}
            <section className='text-start pb-8 px-8'>
              <p className='text-black text-lg'>
                This was the first outlet for me to apply the skills I learned as an undergrad student within a real-world public environment. I'm incredibly grateful to the Nordiq Alberta team for allowing me this opportunity and for their constant support and feedback during my work experience co-op there.
              </p>
              <p className='text-black text-lg pt-4'>
                Overall, I'm incredibly happy with the skills I learned and work I produced at Nordiq and I know I'll look back at my time there with fond memories.
              </p>
            </section>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Calgary311Popup;