import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFScrollViewer from '../../lib/PDFScrollViewer';
import MarkdownViewer from '../../lib/MarkdownViewer';
import FigmaViewer from '../../lib/FigmaViewer';

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
          <h1 className='text-2xl font-bold text-primary'>Calgary 311 App Usability Case Study</h1>
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
                This project was a user research case study I completed as my final capstone project to end off my Information Design undergrad degree. The goal was to evaluate the usability of the City of Calgary's 311 app, which is used by residents to report issues and request services from the city.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                For this project, I had to pull out all the stops and apply everything I had learned in my undergrad degree, including user research, usability testing, and design thinking methodologies.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                 To start, I began by organizing my research, defining my problem, and presenting my solution by creating a research dossier and project proposal, which you can have a look through below. My research here represents the greatest variety of first and second hand sources I've consulted, from official City of Calgary reports to asking citizens on Reddit.<strong> Considering my findings and initial research, I determined that the biggest issue with Calgary's 311 app was that Calgarians were left feeling excluded and frustrated by the lack of service request progress and helpful feedback from the City's end.</strong>
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/311/proposal" 
                totalPages={15}
              />
            </section>

            <section className='px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                After defining my problem clearly, through a variety of real-world sources and opinions, I proposed my solution, which was to redesign the 311 app's interface and introduce a more visual and informative "service request lifecycle" that helps Calgarians stay informed on the progress of thier requests and keeps them satisfied and trusting of the City's 311 service.
              </p>
              <p className='text-start leading-relaxed px-4 pt-4 pb-12 text-black text-lg'>
                To get a good understanding of how the current 311 app works and how users interact with the app's interface, I used the 311 app for myself to report a couple infrastructure issues around my neighborhood. I then compiled my first hand findings, along with some observations on other people's use of the app, into a small Markdown document, which you can view below.
              </p>
              
              <div className="flex justify-center bg-stone-100 rounded-lg">
                <MarkdownViewer basePath="/projects/311/primary.md" />
              </div>
            </section>

            <section className='px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                The next step was the meat and potatoes of this project: the usability testing. To facilitate a smooth and productive user testing procedure, I devised a protocol/plan to follow over the last 2-3 months of the project's lifecycle.
              </p>
              <p className='text-start leading-relaxed px-4 pt-4 pb-12 text-black text-lg'>
                Firstly, I wanted to get a good idea of what people think about the app's UI and how easy it is to navigate, as well as their thoughts on how effective my initial approach to the solution was. What better way to accomplish this than a card sorting activity and paper UI walkthrough, which is what I conducted with 4 participants (AO,KS,MM,AS) and compiled into a FigJam board for ease of viewing below.  <a className='text-primary hover:underline' target='_blank' href='https://www.figma.com/board/YNFf1Oo0Dqs1TVDv7kIUBe/Card-Sorting-Activity-Results?node-id=0-1&t=kmqhlXLOD2Fy35qU-1'>(This FigJam board is also here if you would like a fullscreen view)</a>
              </p>

              <FigmaViewer link='https://embed.figma.com/board/YNFf1Oo0Dqs1TVDv7kIUBe/Card-Sorting-Activity-Results?node-id=0-1&embed-host=share' />
              

              {/*<div className="flex justify-center rounded-lg bg-stone-100">
                <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="400" height="250" src="https://embed.figma.com/board/YNFf1Oo0Dqs1TVDv7kIUBe/Card-Sorting-Activity-Results?node-id=0-1&embed-host=share" ></iframe>
              </div>*/}
            </section>
                          
              {/*Image grid section below*/}
              {/*<div className="flex flex-col md:flex-row gap-x-8 gap-y-6 justify-center items-start mb-6">
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
              </div>*/}

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