import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFScrollViewer from '../../lib/PDFScrollViewer';
import MarkdownViewer from '../../lib/MarkdownViewer';

function WoEPopup({ onClose }) {

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
          <h1 className='text-2xl font-bold text-primary'>Where on Earth: The Data Behind Multiculturalism in Richmond, B.C. </h1>
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
                While learning about the fundamentals of data visualization and principles behind storytelling using real data, I researched and designed a illustrated poster spread showcasing the real data behind the unique identity of the City of Richmond, British Columbia.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Data vis can be intimidating and it was for me at first. Finding a topic or story to discuss through visual design, along with finding a related dataset, was difficult for me, so I started by recalling places that I enjoyed visiting in the past. One location that stood out to me was the City of Richmond in British Columbia, which I visited for the first time in 2022. Richmond is such a unique city with a rich multicultural identity, and I was fascinated by the diversity of its population and the various cultural influences that shape its character. I wanted to explore this topic further and use data visualization to tell a compelling story about Richmond's multiculturalism and the factors that contribute to it.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I started by researching this topic and looking for data that supported Richmond's multicultural identity. Thankfully, it didn't take me long to find data directly from Statistics Canada's online database, particularly census data for Richmond describing demographic traits based on location within the City. This dataset included visible minority percentages of population in different communities within the City's urban planning area boundaries, the ethnicities they identify with, the languages they speak at home and at their place of work, and other demographic datasets, all available publicly as .csv spreadsheets from Statistics Canada's website.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                After finding the right datasets, I compiled my planning and research for this poster spread into a Markdown document, which can be viewed below.
              </p>
            </section>

            <section className='px-8'>
              <div className="flex justify-center bg-stone-100 rounded-lg">
                  <MarkdownViewer basePath="/projects/woe/planning.md" />
                </div>
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Organizing my ideas and research into a planning document like this allowed me to hone in on the core message that the data in my poster would support, as well as a solid call to action for the viewer. I wanted the geographically organized data to represent Richmond's multiculturalism by showing how many different languages, ethnicities, and cultures were present within the City's urban planning area, which is pictured below, sourced from publicly available research from the City of Richmond itself.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/woe/map" 
                totalPages={1}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Using Google's Looker Studio data visualization tools, I was able to translate the data found in the .csv spreadsheets into appropriate visual charts. The type of charts and graphs I picked to represent the data were intentional, as I learned through this project that it can be very easy to misrepresent important metrics or data through some types of charts. Making labels too small or spaced unevenly can hurt the credibility of the message you are trying to tell and, in this case where I was dealing with representing demographic data and people's languages and cultures, I was very careful in my decisions to respect this data and the people it represented.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Through Looker Studio, I was able to export the labeled data vis graphs as vector images, which allowed me to place directly into the 2 page poster draft I had wireframed within Adobe Illustrator.  I also worked on using the Urban Planning Area map of Richmond as a visual organizer for the pie charts specifying of minority population within each community. Figuring out how to distribute visual real estate of the poster area between this and other graphs and text content was challenging. My halfway draft of the poster can be viewed below.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/woe/draft" 
                totalPages={2}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                After a few visual tweaks of the data and playing around with the layout of different elements, I worked on filling in the rest of the content for the final draft of my poster spread, which can be viewed below. Additionally, I completed a concept statement, describing my rationale and design process behind the topic I chose and my call to action for the audience, which can be viewed below as a Markdown document.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/woe/final" 
                totalPages={2}
              />
            </section>

            <section className='px-8'>
              <div className="flex justify-center bg-stone-100 rounded-lg">
                  <MarkdownViewer basePath="/projects/woe/rationale.md" />
                </div>
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I believe this poster does an excellent job of representing not just Richmond's multicultural identity through data, but also many other areas within Canada. My call to action implores the audience to do their own research and explore the data behind multiculturalism in their own towns and cities, which is not hard to find, thanks to Statistics Canada and the transparency of their census data.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I was especially proud of the "Languages of the Fraser River" section on the first poster page, as I feel it does the best job of visual storytelling through different ways of representing data. Overall, taking on this project helped me get over my fear of a bigger data vis assignment and taught me important skills in representing information and visual storytelling that I still use when tackling new design project today.
              </p>
            </section>

            {/* Results/impact section */}
            <section className='px-8 py-5'>
              <h2 className='font-bold text-gray-900 pb-5 text-2xl'>Skills I Developed</h2>
              <div className='bg-stone-100 rounded-lg p-8'>
                <ul className='space-y-6 text-primary flex flex-col'>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Storytelling using real demographic data
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Properly representing data through easy to understand visualisation
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Visual design principles for effective communication of information
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WoEPopup;