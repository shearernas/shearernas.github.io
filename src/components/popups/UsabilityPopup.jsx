import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFScrollViewer from '../../lib/PDFScrollViewer';

function UsabilityPopup({ onClose }) {

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
          <h1 className='text-2xl font-bold text-primary'>Usability Research Project</h1>
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
                As a first introduction to usability and user experience studies within the 3rd year of my Information Design degree, I was tasked, along with a group, to explore prototyping and uncovering multiple user journeys through a fictional food bank donation application. 
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                We designed and realized the application as a solution to commercial businesses who would like to donate their leftovers to their local food bank or shelter organizations. To discover our problem, we performed a problem analysis activity, shown below.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/usability/problem" 
                totalPages={1}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Next was focusing on what features our app should include. We started right off the bat with some usability tests, performing a card sort activity with multiple different users, in which these users are tasked with sorting key terms, which we had organized through the text analysis program Orange, into different groups based on a group topic. Here are the results of my card sort activities I performed with 2 different users.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/usability/card_sort" 
                totalPages={2}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
              Once our results from the first round of user testing was collected, we moved on to compiling our results visually to determine which sets of key terms were grouped together by each of our different users, shown below also.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/usability/orange" 
                totalPages={1}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
              Key terms that were shown more prominently had more users group them together with other terms of the same colour. We used this visual to design the basis of our interactive application, which first started with creating three user journeys then further developing wireframes to allow our users to further test the usability of our app through these three user journeys. 
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
              Simplicity was a major principle taught in this class - keeping things simple, to the point, and visually straightforward was one thing we had to keep in mind while developing and designing the wireframes for the application. Below are the user journeys laid out to inform the development of our app's first wireframe designs.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/usability/user_journey" 
                totalPages={1}
              />
            </section>

            <section className='text-start px-8'>
            <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
              We then used a think-aloud protocol testing approach to further allow us to zone in on pain points within our wireframe's UI
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
              We were able to compile these transcripts from all of our users into incredibly useful categories and visuals, which allowed us to make the changes we needed to further improve usability for our app's navigation, examples of both also shown below.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/usability/transcript" 
                totalPages={2}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
              Using our results, we worked together to change the final UI design for our wireframe. Some changes were minor, such as clearer language used for directions within the app, while others involved removal or change of whole UI elements, such as the example show below.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/usability/change" 
                totalPages={1}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
              Below is the final wireframe for our retail food donation app. We created 3 different wireframe layouts to accurately represent all 3 of the user journeys we created earlier, to best represent the most realistic use-case scenarios we could see ourselves developing this app for. 
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
              Because the focus for this project was mainly on the process of good user testing protocols and practices used within usability studies, and not the end project, our wireframe was lacking a coherent visual design system. Still, we were proud of what we had accomplished as a group, especially considering that our design was backed with first-hand usability research using real test participants.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/usability/wireframe" 
                totalPages={1}
              />
            </section>

            {/* Results/impact section */}
            <section className='px-8'>
              <h2 className='font-bold text-gray-900 pb-5 text-2xl'>Skills I Developed</h2>
              <div className='bg-stone-100 rounded-lg p-8'>
                <ul className='space-y-6 text-start text-primary flex flex-col'>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Problem discovery, using ideation techniques and brainstorming
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Basic UX/UI design within Figma
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Real-world usability testing techniques and approaches, including card sort, think aloud protocol, and controlled user observation
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Use of text analysis and data visualization software AntConc and Orange to process our text data into usable design information
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Formatting user test results and design recommendations into reports and results that developers could appreciate and use effectively
                  </li>
                </ul>
              </div>
            </section>

            {/* Call to action or additional info */}
            <section className='text-start pb-8 px-8'>
              <p className='text-black text-lg pt-4'>
                Overall, the skills I learned from this course might be the most important ones I have gained so far as an Information Design student. The philosophy of putting simplicity first for user design turned out to be a very useful and intuitive principle that we used to guide our UX design. Additionally, we found out that gathering user test text data and compiling it in a way that developers can appreciate is an extremely useful and underappreciated skill.
              </p>
            </section>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default UsabilityPopup;