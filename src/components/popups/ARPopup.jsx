import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFScrollViewer from '../../lib/PDFScrollViewer';
import MarkdownViewer from '../../lib/MarkdownViewer';

function ARPopup({ onClose }) {

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
          <h1 className='text-2xl font-bold text-primary'>IndigiPRINTS AR Storytelling + AR Wayfinding Projects</h1>
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
                One of the projects I had the pleasure of working on as an undergrad student involved collaborating with the Urban Society for Aboriginal Youth (USAY) here in Calgary. This project was part of their IndigiPRINTS initiative, which involved augmented reality (AR) experiences combined with Indigenous-published artworks and publications to enhance the story behind the works.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                My task was to create a poster filled with infographics and data visualization examples, based on a literature review and my personal experiences using the IndigiPRINTS AR app. The goal of this design was to promote IndigiPRINTS to a broader audience and show the benefits and potential of using AR for storytelling and educational purposes.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                 To start, I conducted my preliminary research through a literature review of AR-related research papers and online articles. This helped me understand the current technical landscape of AR technology, its potential in storytelling and information retention, and how it can be used as a legitimate educational medium with the power to create emotional exhibits that stick with people and allow them to connect with stories being told on a deeper level.
              </p>
            </section>

            <section className='px-8'>
            <div className="flex justify-center bg-stone-100 rounded-lg">
                <MarkdownViewer basePath="/projects/ar/indigiprints/research.md" />
              </div>
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Additionally, I spent some time using the IndigiPRINTS app for myself, experiencing 2 different Indigenous-published stories and articles that utilized AR to enhance their storytelling and learning experiences. This hands-on interaction allowed me to gain a more intimate and personal understanding of how AR can be used to generate an emotional connection with an audience and create memorable experiences that stick with people long after the experience is over. The recordings of my experience can be read below.
              </p>
            </section>

            <section className='px-8'>
            <div className="flex justify-center bg-stone-100 rounded-lg">
                <MarkdownViewer basePath="/projects/ar/indigiprints/indigiprints.md" />
              </div>
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                With my background research complete, I gathered some related quantitative data, from the articles I referenced, along with USAY's own data sink, to create these infographics below, showing that AR has potential to improve memory retention, engage an audience, as well as showing that IndigiPRINTS itself has a viable audience through its total application download statistics.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/ar/indigiprints/infographics" 
                totalPages={3}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I continued work on the final poster design, filling in the space with the infographics and supporting text from my research. The main challenge I encountered was fitting everything I needed within the limited space of the poster. Additionally, I also grappled with the challenge of determining what the most important information to feature was going to be and where I should place it within the limited real estate of the poster.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Additionally, I experimented with different page layouts and themes, which you can see within the paper sketches below. I chose the theme of an open book or magazine, as I feel that this theme fit with the content I was examining, as well as allowed me the most real estate for content. Along with the theme of the poster, many visual elements and containers had to be resized or cut completely to allow space for all of the content I felt necessary to include. This project was a good test of my print design skills.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/ar/indigiprints/drafts" 
                totalPages={5}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Using the design process and multiple steps of iteration, the final poster design was complete.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/ar/indigiprints/final" 
                totalPages={1}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                My IndigiPRINTS poster was not the only experience I had with AR research and application development. For another class, I was tasked with designing an AR wayfinding application wireframe design. I chose to take the approach of a wayfinding application that helps a customer find the physical location of a product in a store, which they interact with through an AR viewport using their phone. Below is some information and specifications for the idea I had for this project.
              </p>
            </section>

            <section className='px-8'>
            <div className="flex justify-center bg-stone-100 rounded-lg">
                <MarkdownViewer basePath="/projects/ar/wayfinding/wayfinding.md" />
              </div>
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I started visualizing how the user flow within this app would look like, documenting each user action and drawing a sketch of what completing each task within the app would look like.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/ar/wayfinding/draft" 
                totalPages={1}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Based on this user flow sketch, I conducted a sample "user flow" for myself, going to a real Canadian Tire store and taking pictures to represent what a real use for this app might be. Taking these pictures into Figma, I overlaid UI elements that would be found within an AR viewport to complete a wireframe draft for what this app could look like. Unfortunately, I was unable to add any functionality to this wireframe, as I did not have the technical skills at the time to facilitate this, however I consider this wireframe draft a good representation of what might be possible should this application evolve further than the "proof of concept" stage.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/ar/wayfinding/final" 
                totalPages={1}
              />
            </section>

            <section className='px-8 py-5'>
              <h2 className='font-bold text-gray-900 pb-5 text-2xl'>Skills I Developed</h2>
              <div className='bg-stone-100 rounded-lg p-8'>
                <ul className='space-y-6 text-primary flex flex-col'>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Poster and print design fundamentals
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Literature review and scholarly research skills
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Data visualization experience with both qualitative and quantitative datasets
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Basic AR wireframing using Figma and Adobe Illustrator
                  </li>
                </ul>
              </div>
            </section>

            <section className='text-start pb-8 px-8'>
              <p className='text-black text-lg'>
                These 2 AR-related projects were the catalyst for my passion and enthusiasm for mixed reality and its connection with Information Design. Through working on these projects, I realised that there is a lot of crossover between UX design and mixed reality development and that my skills as an Information Designer are relevant and impactful within a more technical environment.
              </p>
            </section>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ARPopup;