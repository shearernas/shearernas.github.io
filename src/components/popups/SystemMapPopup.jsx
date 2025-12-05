import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFScrollViewer from '../../lib/PDFScrollViewer';
import FigmaViewer from '../../lib/FigmaViewer';

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
          <h1 className='text-xl font-bold text-primary'>Systems Map Project: Unfolding the Relationships Between Homelessness and Crime</h1>
          <button 
            className='w-10 h-10 rounded-full bg-zinc-200 hover:bg-zinc-300 flex items-center justify-center transition-colors duration-200 group'
            onClick={onClose}
          >
            <X className='w-5 h-5 text-gray-600 group-hover:text-gray-800'/>
          </button>
        </div>

        <div className='overflow-y-auto max-h-[calc(90vh-80px)]'>
          <div className='p-6 space-y-8'>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed p-4 text-primary text-lg'>
                This penultimate Information Design project gave me a look into how my skills can be used to explore and understand the connections that make up "wicked problems". For this project, I researched and visualized a set of systems map diagrams that demonstrated the relationships between homelessness and crime in Calgary.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                The goal of this project was to visually represent the complex interactions and feedback loops between various factors contributing to homelessness and crime, helping people to better understand this incredibly deep issue and identify potential intervention points to contribute in ways that will matter.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                 To start, I needed to identify the problem and all of the related factors and parties at work. I conducted an extensive literature review using academic articles, municipal reports, and credible online sources to gather many different opinions and varieties of data on homelessness and crime in Calgary, as well as across Canada and the United States. In addition, I interviewed 2 subject matter experts to gather educated opinions on the topic, in addition to important first-hand explanations to many of the connections I had started to form from my literature review. Finally, I also conducted a primary research initiative to place myself within hot spots of homelessness in Calgary to observe and document the environment, interactions, and behaviours occurring within these areas, as well as my personal feeling and reactions to being in these spaces.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                 All of my initial research was compiled into a full research dossier that can be viewed below.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/systemsmap/dossier" 
                totalPages={37}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                The valuable insights I gained from my research dossier allowed me to identify all of the related sub-systems, environments, actors, and other factors related to these two main issues. While identifying these issues, I also started to form connections between them based on cause-and-effect relationships, feedback loops, and other interactions.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Making my notes and connections visually helped me to better understand the relationships at play, and allowed me to start organizing and grouping related factors into clusters with which to start forming individual system map diagrams. 
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/systemsmap/planning" 
                totalPages={1}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                From these clusters, I began wireframing a series of system map diagrams that visualized the relationships I had identified. I wanted to start by segregating these topics into their own diagrams to avoid overwhelming myself. This process was highly iterative, as I continuously refined my understanding of the relationships at play and adjusted my visualizations accordingly. Experimenting with a cohesive visual identity could wait till after these connections were fully fleshed out.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Shown below is an example of the iterative process I took to visualize my connections through the work on my actor map, demonstrating those who hold various levels of influence and power within the issues I was examining.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/systemsmap/actor" 
                totalPages={4}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Another example of my iterative design process can be seen below in my development of the context diagram, bringing forth the general, overlying connections between most of the higher-level categories I had identified.
              </p>
            </section>

            <section className="flex justify-center">
              <PDFScrollViewer
                basePath="/projects/systemsmap/context" 
                totalPages={2}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                A cohesive visual identity began to develop as I was finalizing my system map diagram drafts, using consistent colors, shapes, and typography to create a unified look and feel across all of the diagrams. Coding information within the diagrams to tangible visual elements was another very important factor that had to be considered to ensure clarity and ease of understanding for viewers. With the context map draft shown above, I used 3 distinct colours to represent which topic was correlated with which source, helping to quickly communicate these relationships to viewers and allow them to draw mental connections to these topics in addition to visualizing them within the diagram.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Speaking more on coding information, one element that was a particular challenge for me to represent visually were the various feedback loops that existed within the systems I was documenting. I first experimented with adjusting the stroke weight of the arrows connecting each element, however I found it made the diagram too crowded and I struggled with organizing the other topics around these feedback loops. Instead, I decided on using colour and symbolism to represent these loops, coating each arrow within a feedback loop topic in a distinct purple, as well as an infinity symbol to further reinforce the idea of a continuous cycle, with additional context associated with this symbol to further explain the importance of these feedback loops
              </p>

              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                After much iteration, I finalized my system map diagrams and compiled them into a single interactive prototype using Figma, allowing viewers to explore each diagram in detail and understand the complex relationships at play. The final interactive system map diagram collective can be viewed and clicked through below.
              </p>
            </section>

            <section className='px-8'>
              <FigmaViewer link='https://embed.figma.com/design/kaKtKvyDOxZFHq9D0RtIhg/Systems-Map-Project--Uncovering-Relationships-Between-Homeless-and-Crime?node-id=0-1&embed-host=share' />
            </section>
            
            <section className='px-8 py-5'>
              <h2 className='font-bold text-gray-900 pb-5 text-2xl'>Skills I Developed</h2>
              <div className='bg-stone-100 rounded-lg p-8'>
                <ul className='space-y-6 text-primary flex flex-col'>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Conducting extensive literature reviews and planning subject matter expert interviews
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Visualizing complex systems and connections within Figma
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Using Information Design principles to break down larger issues into distinct, visual elements
                  </li>
                </ul>
              </div>
            </section>

            <section className='text-start pb-8 px-8'>
              <p className='text-black text-lg'>
                This project allowed me to gain a real look into how my skills as an Information Designer can address real world problems. While the job of an Information Designer is not to outright solve many issues, we can help to unpack and visualize the complex relationships at play, helping others to better understand these problems and identify potential intervention points to make a difference. I believe my work on the connections between homelessness and crime have allowed me to view many related factors I observe everyday within a new light, and I hope that my work can help others do the same.
              </p>
            </section>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default NordiqPopup;