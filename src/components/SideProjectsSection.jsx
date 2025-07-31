import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Construction } from 'lucide-react';

// Component mapping object - add more popup components here as you create them
const popupComponents = {

};

const projects = [
    /*{
        id: 1,
        title: "Nordiq Alberta",
        description: "A scrapbook of my professional design projects for Nordiq Alberta's marketing team as part of my work experience co-op",
        image: "/projects/nordiq/nordiq_2.png",
        tags: ["Graphic design", "Marketing", "Canva", "Adobe Illustrator", "Adobe Aero", "Print design", "Content creation"],
        popup: "NordiqPopup"
    }*/
];

export const SideProjectsSection = () => {
    const [activePopup, setActivePopup] = useState(null);

    const openPopup = (popupName) => {
        setActivePopup(popupName);
    };

    const closePopup = () => {
        setActivePopup(null);
    };

    // Dynamically render the active popup component with animations
    const renderPopup = () => {
        const PopupComponent = activePopup ? popupComponents[activePopup] : null;
        
        return (
            <AnimatePresence mode="wait">
                {activePopup && PopupComponent && (
                    <PopupComponent key={activePopup} onClose={closePopup} />
                )}
            </AnimatePresence>
        );
    };

    return (
        <section id="side_projects" className="py-32 px-4 relative">
            <div className="container max-w-screen-xl mx-auto">
                <h2 className="text-4xl md:text-5xl mb-12 about-text text-center">
                    My Other<span className="text-primary"> Side Projects</span>
                </h2>

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-equal project-card-hover cursor-pointer"
                            onClick={() => project.popup && openPopup(project.popup)}
                        >
                            <div className="h-65 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <p className="text-center text-semibold text-muted-foreground pb-6 max-w-4xl mx-auto text-xl md:text-2xl">
                    Section under construction!
                </p>
                    
                <div className='flex flex-col items-center justify-center'>
                    <Construction size={90} className='text-primary' />
                </div>

            {/* Render active popup */}
            {renderPopup()}
        </section>
    );
};