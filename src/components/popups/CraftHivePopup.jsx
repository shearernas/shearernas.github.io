import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFScrollViewer from '../../lib/PDFScrollViewer';

function CraftHivePopup({ onClose }) {

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
          <h1 className='text-2xl font-bold text-primary'>CraftHive: Business Tools Suite for Local Artists</h1>
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
                During my 4th and final year in my Information Design degree, I was graciously accepted into MRU's Institute for Innovation and Entrepreneurship and their Tech LiftOff program. This program allowed me to work together with fellow MRU students in business and computer science and challenged us to find a real-world problem and develop a software solution to help mitigate this problem.
              </p>
              <p className='text-start leading-relaxed px-4 pt-2 pb-10 text-black text-lg'>
                My team, named Team Byte Brigade, conducted preliminary problem discovery research, using in person and online methods, to figure out what problem we would like to tackle over the next 8 months in the program. We leveraged some of the connections we had with local artists and friends, as well as created discussions with others online using websites like Reddit, to help us discover that a very real problem exists in a niche that we had not thought about initially: <span className='text-primary font-medium'>small, local artists and crafters.</span>
              </p>

              <div className='bg-stone-100 rounded-lg px-8 py-8'>
                <ul className='space-y-6 text-primary flex flex-col'>
                  <p className='text-start leading-relaxed px-4 text-black text-lg'>
                    The issue we discovered is that, while many of these artists love their craft, they felt somewhat intimidated by the business side of things. 
                    
                    <li className='flex items-start px-3 py-4'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Many of them had little to no experience with marketing, accounting, tracking inventory, or other business-related tasks and felt overwhelmed by the prospect of having to learn these skills on top of their craft.
                    </li>
                    <li className='flex items-start px-3 pb-4'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Many artists we talked to during customer discovery at local conventions, markets, and art fairs used their passion to create a side-hustle, going to such events to supplement their income and share their art, on top of working full time jobs and attending school/universtiy, leaving them with very little time to manage the complicated business side of their passion.
                    </li>
                    <li className='flex items-start px-4'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Additionally, they considered learning these skills to be necessary for any sort of growth in the future, wether they would like to turn their hobby into a full-time business or simply expand their side-hustle into new markets.
                    </li>
                  </p>
                </ul>
              </div>
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                The majority of the teams customer discovery was conducted by myself in person, over the entire program length of 8 months, at local art fairs and conventions (Ebi Con, Rakku Con, Calgary Farmer's Market, SAMRU Art Market, etc.), where I spoke to over 20 local artists and small business owners about their experiences selling their art, the challenges they faced, and what features they would like to see from a software product that could help them alleviate their stress. Additionally, I contacted more local artists and small business owners through mutual connections over email, asking similar questions.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                After completing a good initial amount of problem identification and primary customer discovery research, we had a better idea as a team of what features we would like to include for our minimum viable product (MVP) build of CraftHive. We presented these features, along with our development roadmap and business model, during our Demo Day 1 presentation, which you can view below.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/crafthive/demoday1" 
                totalPages={15}
              />
            </section>

            <section className='text-start px-8 pt-4'>
               <div className='bg-stone-100 rounded-lg px-8 py-8'>
                <ul className='space-y-6 text-primary flex flex-col'>
                  <p className='text-start leading-relaxed px-4 text-black text-lg'>
                  As you can see from our presentation, we determined our three main features for CraftHive's MVP build to be:
                    
                    <li className='flex items-start px-3 py-4'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Basic inventory tracking of raw materials that an artist would purchase and use to create their products.
                    </li>
                    <li className='flex items-start px-3 pb-4'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Time tracking to ensure that artists compensate themselves in their product pricing for the hard work it takes to handmake their art.
                    </li>
                    <li className='flex items-start px-4'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Price suggestion to help artists determine a fair price for their products based on material costs, time spent, and competitor pricing.
                    </li>
                  </p>
                </ul>
              </div>
              <p className='text-start leading-relaxed px-4 pt-8 pb-2 text-black text-lg'>
                With these core features in mind, we had the scope of our project laid out for us. Our next step was facilitating the user experience design of our web app. This is where the first majority of my work lay herein. I created CraftHives user journey maps and user flow diagrams for each of our features, backed by our further customer discovery research. Within these user journeys, I focused on each main task and decision a user would need to make to complete a set goal. 
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/crafthive/userflow" 
                totalPages={3}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
               These diagrams showing a user's potential use case for our web app was instrumental for our next step: wireframing. I created low-fidelity wireframes for the first feature we designed (the price suggestion feature), as well as the overall layout and navigation of the web app, using Figma. This wireframe was an interactive, clickable prototype that we could use for further user testing and feedback. 
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/crafthive/prototype" 
                totalPages={8}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
               We used this wireframe as a baseboard to jump right into front- and back-end development. We decided to use React to display the front-end UI of our web app, as we thought this would allow for the most seamless user experience and gave us flexibility to create a back-end codebase, which we developed using JavaScript. I was in charge of front-end development and design, while my two teammates focused on the back-end development and business aspects of CraftHive.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
               Learning React for web development as an Information Design student was a little daunting. I had some previous coding experience with HTML, CSS, Java, and Python, so learning JavaScript and React was a bit more familiar to me, however I still had to learn a lot on the fly. I used online resources like W3Schools, and YouTube tutorials to help me learn the basics of React and JavaScript, as well as leaned on my teammates for help when I got stuck, especially when connecting back-end JS code to the front-end React components.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
               In addition to creating the front-end codebase, I was also in charge of the overall visual design of the web app. Simplicity and user-friendliness were the 2 main design principles for the visual identity of CraftHive, which you can see within the visual identity system and brand guide package that I designed below.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/crafthive/vis" 
                totalPages={17}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
               Our wireframe went through 2 main iterations during the development of CraftHive. I personally found it a little challenging to balance the development of the front-end in React with gathering user feedback and improving the wireframe, however, we managed to finalize the app's design through a second wireframe, including the inventory and time tracking features that we developed following the price suggestion feature. Our final wireframe, along with a user flow visual, can be seen below. This wireframe served as the basis for our functional web app, which we demoed during our Demo Day 2 presentation to community members and sharteholders.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/crafthive/final" 
                totalPages={10}
              />
            </section>

            {/* Results/impact section */}
            <section className='px-8 py-2'>
              <h2 className='font-bold text-gray-900 pb-5 text-2xl'>Skills I Developed</h2>
              <div className='bg-stone-100 rounded-lg p-8'>
                <ul className='space-y-6 text-primary flex flex-col'>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Problem identification and customer discovery research, using in-person interviews and surveys
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Leading UX design efforts, including user journey mapping, user flow diagrams, and wireframing using Figma
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Front-end web development using React and Tailwind 
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Public presentation and pitching to community members and stakeholders
                  </li>
                </ul>
              </div>
            </section>

            {/* Call to action or additional info */}
            <section className='text-start px-8'>
              <p className='text-black text-lg'>
                CraftHive was my most challenging project by far. Constant challenges such as scope creep and a changing team dynamic were present throughout the project's life cycle, but I'm very grateful and glad I had to opportunity to learn how to deal with this issues and face them head on. The vast knowledge I have gained through the Tech LiftOff program is invaluable and I am thankful to the Institute for Innovation and Entrepreneurship for accepting me and giving me this opportunity to learn and grow as a designer.
              </p>
            </section>

            <section className='px-8'>
              <div className='bg-stone-100 rounded-lg p-8'>
              <p className='text-black text-start text-lg'>
                The public GitHub repository for CraftHive can be viewed at this link <a className='text-primary hover:underline' target='_blank' href='https://github.com/Yousif0606/Byte-Brigade'>here.</a> <br />I principally authored the JSX React componenets and screens, as well as the custom CSS.
              </p>
              </div>
            </section>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default CraftHivePopup;