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
                After defining my problem clearly, through a variety of real-world sources and opinions, I proposed my solution, which was to redesign the 311 app's interface and introduce a more visual and informative "service request lifecycle" that helps Calgarians stay informed on the progress of their requests and keeps them satisfied and trusting of the City's 311 service.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                To get a good understanding of how the current 311 app works and how users interact with the app's interface, I used the 311 app for myself to report a couple infrastructure issues around my neighborhood. I then compiled my first hand findings, along with some observations on other people's use of the app, into a small Markdown document, which you can view below.
              </p>
            </section>

            <section className='px-8'>
            <div className="flex justify-center bg-stone-100 rounded-lg">
                <MarkdownViewer basePath="/projects/311/primary.md" />
              </div>
            </section>

            <section className='px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Firstly, I wanted to get a good idea of what people think about the app's UI and how easy it is to navigate, as well as their thoughts on how effective my initial approach to the solution was. What better way to accomplish this than a card sorting activity and paper UI walkthrough, which is what I conducted with 4 participants and compiled into a FigJam board for ease of viewing below.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Each "page" for this FigJam board contains the card sort for 1 out of my 4 participants (KS, AO, MM, AS). The little white box at the top left corner can be clicked to view another page and see the results from my other participants. <br />
                <a className='text-primary hover:underline' target='_blank' href='https://www.figma.com/board/YNFf1Oo0Dqs1TVDv7kIUBe/Card-Sorting-Activity-Results?node-id=0-1&t=kmqhlXLOD2Fy35qU-1'>(This FigJam board is also here if you would like a bigger fullscreen view)</a>
              </p>
            </section>

            <section className='px-8'>
              <FigmaViewer link='https://embed.figma.com/board/YNFf1Oo0Dqs1TVDv7kIUBe/Card-Sorting-Activity-Results?node-id=0-1&embed-host=share' />
            </section>

            <section className='px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                The goal for this card sort activity was to understand the value my participants (average Calgarian citizens and users of the 311 app) place on report certain service request categories and how to represent these within the UI of the app itself (icons, colours, text, etc.), which with the results I would know how to start organizing the UI of the app to address some user's concerns of "choice paralysis" within the service request category menu. Additionally, I was able to determine how my participants would prefer the revamped system I had planned for a service request timeline.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                The next step was the meat and potatoes of this project: the usability testing. To facilitate a smooth and productive user testing procedure, I devised a protocol/plan to follow over the last 2-3 months of the project's lifecycle.
              </p>
            </section>

            <section className='px-8'>
            <div className="flex justify-center bg-stone-100 rounded-lg">
                <MarkdownViewer basePath="/projects/311/solution.md" />
              </div>
            </section>

            <section className='px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                With these results, I was able to start on designing the wireframe for the app using Figma. My wireframe went through 3 major revisions, each backed with a round of first-hand usability testing with my participants. With each revision, I was able to learn about how my users appreciated the greater transparency of their service request's status in the City's hands, as well as how my users interacted with the wireframe to accomplish the tasks they were given.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Below is my final case study that I prepared for the concluding presentation of this project. It goes over the work I put into completing this project from start to finish, including more details on each revision of the wireframe and the decisions I made leading up to my final revision.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/311/case_study" 
                totalPages={8}
              />
            </section>

            <section className='px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                The final revision on my wireframe on Figma is interactive and viewable below! Feel free to click on the viewport and use the 311 app as my user test participants did to report a service request.
              </p>
            </section>

            <section className='px-8'>
              <FigmaViewer link='https://embed.figma.com/proto/Czil96iF6NQ1zXNuIxzzSI/INFO-4680-User-Test-Wireframes?page-id=137%3A65&node-id=137-66&p=f&viewport=-15%2C325%2C0.38&scaling=scale-down&content-scaling=fixed&starting-point-node-id=137%3A66&embed-host=share' /> 
            </section>
                          
            <section className='px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                At the conclusion of this project, I presented my solution to the general public, my professors, and my classmates for feedback and discussion.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/311/presentation" 
                totalPages={2}
              />
            </section>

            <section className='px-8'>
              <h2 className='font-bold text-gray-900 pb-5 text-2xl'>Skills I Developed</h2>
              <div className='bg-stone-100 rounded-lg p-8'>
                <ul className='space-y-6 text-primary flex flex-col'>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Planning a full-scale capstone project from start to finish completely by myself
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    UX/UI design from a completely informed, researched, and prepared viewpoint
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    In-depth user testing protocol development and execution using real participants
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Turning testing results and feedback into actionable items to improve a UX/UI design
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Presenting my ideas and solutions to real-world problems in a realistic and convincing way
                  </li>
                </ul>
              </div>
            </section>

            <section className='text-start pb-8 px-8'>
              <p className='text-black text-lg'>
                My capstone project was an incredibly satisfying end to my degree and a very valuable opportunity to showcase the information design skills that I'm most passionate about. Usability is incredibly important within our increasingly modernizing world and I believe it is an incredibly valuable outlet to keep out design decisions informed and grounded, serving our most valuable users within a sea of visual confusion and noise.
              </p>
            </section>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Calgary311Popup;