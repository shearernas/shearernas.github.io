import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFScrollViewer from '../../lib/PDFScrollViewer';
import MarkdownViewer from '../../lib/MarkdownViewer';

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
          <h1 className='text-2xl font-bold text-primary'>SQL Simpl: Making MySQL simple for everyone!</h1>
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
                For a class focused on designing for interactivity, I created a project that focused on universal accessiblity for technical knowledge.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I was tasked with doing preliminary customer discovery research and designing a resulting product wireframe and prototype that addresses a problem I discovered from my research. What I found is that, despite being an increasingly desirable skill for employers, many people find learning SQL to be intimidating and difficult due to prior technical inexperience or misonceptions that it is an incredibly complex programming language. 
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                To address this problem, I designed "SQLSimpl", a web-based application that simplifies SQL concepts and syntax through detailed, step-by-step tutorials, visual aids, and practical examples. The goal of SQLSimpl is to make learning SQL more accessible and less daunting for everyone, regardless of prior technical knowledge or experience, ultimately empowering more individuals to acquire this valuable skill.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                My background research and project proposal can be viewed in the Markdown document below.
              </p>
            </section>

            <section className='px-8'>
              <div className="flex justify-center bg-stone-100 rounded-lg">
                  <MarkdownViewer basePath="/projects/sqlsimpl/research.md" />
                </div>
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Designing a learning plan for the website's contents was my next focus. I decided to take a strategy I had learned in another class focused on instructional design to help, called the ADDIE model. By following this model, I was able to create a structured and effective learning plan for SQLSimpl that would meet the needs of my target audience.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I decided to split the course content into 4 progressive modules, each building upon the previous one to gradually increase the learner's understanding and proficiency in SQL. A draft of the learning journey for SQLSimpl can be viewed below.
              </p>
            </section>

            <section className='px-8'>
              <div className="flex justify-center bg-stone-100 rounded-lg">
                  <MarkdownViewer basePath="/projects/sqlsimpl/learningjourney.md" />
                </div>
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Once the learning plan and content roadmap for the website was complete, I had to build the website itself. To save me some time, I decicded to use Bootsrap to provide me with a boilerplate and plug-and-play layout components. I kept the CSS basic and quick, to make sure the website was accessible for anyone to view, avoiding animations, contraasting colours, and fancy fonts. Some screenshots of the first draft of my website can be viewed below.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/sqlsimpl/website" 
                totalPages={5}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Additionally, to provide context, I created a presentation to introduce my project concept, summarize my research findings, and explain some of the design decisions that went into the first draft of SQLSimpl.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/sqlsimpl/presentation" 
                totalPages={6}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                As I progressed through this project, adding content to Module 1, I made contant iterations and changes to the website based on feedback from my peers, as well as WCAG accessibility guidelines. Some of the changes I made are listed below as part of my final presentation, in addition to screenshots of the current live website, for comparison.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/sqlsimpl/changes" 
                totalPages={5}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Overall, this project allowed me to combine my interests in web design, technical writing, and instructional design to create a product that addresses a real-world problem. Through research, planning, and iteration, I was able to develop SQLSimpl into a functional prototype that has the potential to make learning SQL more accessible and less intimidating for a wide range of learners. I'm incredibly proud of this project, as it kickstarted my enthusiasm for making technical knowledge more friendly and approachable for everyone.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Even though SQLSimpl started as a project for school, I still continue to work on it in my free time, adding content to the other modules and improving the website design and functionality for universal accessibility. I'm only completed with Module 1 at the moment, but I plan to have the other modules finished and the website fully launched in the near future! This website is live and the link can be found below.
              </p>
            </section>

            {/* Results/impact section */}
            <section className='px-8 py-5'>
              <h2 className='font-bold text-gray-900 pb-5 text-2xl'>Skills I Developed</h2>
              <div className='bg-stone-100 rounded-lg p-8'>
                <ul className='space-y-6 text-primary flex flex-col'>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Instructional design principles and practices
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Further developing my web design skills using Bootstrap, CSS, and basic JavaScript
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Technical writing for a universal audience
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    UX-focused web design, paying particular attention to accessibility
                  </li>
                </ul>
              </div>
            </section>

            <section className='px-8 pb-6'>
              <div className='bg-stone-100 rounded-lg p-8'>
                <p className='text-black text-start text-lg pb-4'>
                  SQLSimpl is live and can be accessed <a className='text-primary hover:underline' target='_blank' href='https://nateshearer.com/SQLSimpl'>here!</a>
                </p>
                <p className='text-black text-start text-lg'>
                  The public GitHub repository for SQLSimpl can be viewed at this link <a className='text-primary hover:underline' target='_blank' href='https://github.com/shearernas/SQLSimpl'>here.</a> <br />All HTML markup, CSS code, and JS code is authored by myself without the use of AI help.
                </p>
              </div>
            </section>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default NordiqPopup;