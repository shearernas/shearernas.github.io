import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import PDFScrollViewer from '../../lib/PDFScrollViewer';
import SVGViewer from '../../lib/SVGViewer';

function HTML5Popup({ onClose }) {

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
          <h1 className='text-2xl font-bold text-primary'>HTML5 Web Advertisements</h1>
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
                Over the summer of 2025, I wanted to use the skills I gained from my professional experience within marketing and web design, working for MRU's Career Services department as a Web Design Consultant, to create some modern mockup web banner advertisements.
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I did some research and found that HTML5 web advertisements are the current standard for online ads, replacing older formats like Flash and animated GIF files due to their compatibility with modern browsers and mobile devices. HTML5 ads can include interactive elements within the image itself, such as animation and multimedia content, making them more engaging for users. This surprised me, as someone who has been using the internet for about 22 years who remembers when animated GIFs were groundbreaking for web advertisements!
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I learned that animation is achieved through embedded JavaScript or CSS classes acting on a vector SVG image, allowing for smooth transitions and effects without significantly increasing file size. This is particularly important for web ads, as they need to load quickly to avoid disrupting the user experience. 
              </p>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I used a vector image design program called Inkscape to create the initial mockup designs for my web ads, which I exported as SVG vector image files. From here, I used another software called Keyshape, with a more traditional animation interface that I am more familiar with from my experience working with Adobe Flash, to add animation keyframes and motion to the vector designs. Once animation was added, I found that I could export the animated vector images as SVG files with embedded JavaScript code to handle the animation, as well as animated WEBP images for compatibility with platforms that do not support SVG files.
              </p>
            </section>

             <section className='text-start px-8'>
             <PDFScrollViewer
                basePath="/projects/html5" 
                totalPages={1}
              />
             </section>

            <section className='text-start px-8'>
                <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                    Below are 3 examples of animated and static web advertisements in standard billboard and MPU sizes that I created in an effort to learn how to work with HTML5 animation and graphic design from web advertisements. No copyright infringement is intended at all! I created these advertisements for educational purposes only, and they are not affiliated with or endorsed by the respective companies.
                </p>
                <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                    <strong>No copyright infringement is intended at all!</strong> I created these advertisements for educational purposes only, and they are not affiliated with or endorsed by the respective companies.
                </p>
                <p className='text-start leading-relaxed px-4 text-black text-lg'>
                For these static Lexus advertisements below, I did a quick deep dive into the web design principles of Lexus and used existing web advertisements from them as reference for my designs. I wanted to create sleek and modern designs that aligned with Lexus's brand identity, using their color scheme, typography, and overall aesthetic. 
              </p>
            </section>

            <section className="flex justify-center">
              <SVGViewer
                basePath="/projects/html5/lexus" 
                files={["billboard.svg", "mpu.svg"]}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                Below are some animated billboard and MPU ads that I made for CraftHive! Since I designed the visual identity and brand guide for CraftHive myself, I was already incredibly familiar with the feeling I wanted to express through these ads, using the brand's light, friendly colour palette and soft, transparent visuals. 
              </p>
            </section>

            <section className="flex justify-center">
              <SVGViewer
                basePath="/projects/html5/crafthive" 
                files={["billboard.svg", "mpu.svg", "animated.svg"]}
              />
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 py-2 text-black text-lg'>
                I wanted to challenge myself further with animation with these ads I created below for Old Navy. I used more advances animation techniques, such as creating zoom and smoother motion, to make the ad more dynamic and eye-catching. I also incorporated more text and promotional information into the design, while still keeping it clean and uncluttered.
              </p>
            </section>

            <section className="flex justify-center">
              <SVGViewer
                basePath="/projects/html5/old_navy" 
                files={["mpu.svg","animated.svg"]}
              />
            </section>

            {/* Results/impact section */}
            <section className='px-8 py-5'>
              <h2 className='font-bold text-gray-900 pb-5 text-2xl'>Skills I Developed</h2>
              <div className='bg-stone-100 rounded-lg p-8'>
                <ul className='space-y-6 text-primary flex flex-col'>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Design principles for web advertisements, including layout and standard sizes
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    HTML5 animation techniques using JavaScript and CSS
                  </li>
                  <li className='flex items-start px-3'>
                    <span className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    Experience with animation software Keyshape for creating web animations
                  </li>
                </ul>
              </div>
            </section>

            <section className='text-start px-8'>
              <p className='text-start leading-relaxed px-4 pb-2 text-black text-lg'>
                Being able to jump back into animation, a skill that I enjoyed learning back in high school using Flash, was incredibly fun and refreshing. Learning that I can use this fun storytelling medium to create modern web advertisements that are relevant in today's digital marketing landscape has motivated me to continue exploring animation and web design in the future. These mock web advertisements have helped me develop new skills and reignited my passion for animation and design.
              </p>
            </section>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HTML5Popup;