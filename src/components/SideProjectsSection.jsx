import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SQLSimplPopup from "./popups/SQLSimplPopup";
import LucidTravelsPopup from "./popups/LucidTravelsPopup";

// Component mapping object - add more popup components here as you create them
const popupComponents = {
    SQLSimplPopup: SQLSimplPopup,
    LucidTravelsPopup: LucidTravelsPopup
};

const projects = [
    
    {
        id: 1,
        title: "SQLSimpl",
        image: "/projects/sqlsimpl/sqlsimpl_cover.png",
        popup: "SQLSimplPopup"
    },
    {
        id: 2,
        title: "Lucid Travels",
        image: "/projects/lucidtravels/lucidtravels_cover.png",
        popup: "LucidTravelsPopup"
    }
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

                <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-lg md:text-xl">
                    These are some examples of other projects and side initiatives I created as a student and in my free time. They showcase my passion and enthusiam for other aspects of Information Design beyond usability studies and UX design. Click on each image to view more info on these side projects and explore why I'm so passionate for them!
                </p>

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
            
            {/* Render active popup */}
            {renderPopup()}
        </section>
    );
};