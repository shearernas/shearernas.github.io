import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import NordiqPopup from "./popups/NordiqPopup";
import HeritagePopup from "./popups/HeritagePopup";

// Component mapping object - add more popup components here as you create them
const popupComponents = {
    NordiqPopup: NordiqPopup,
    HeritagePopup: HeritagePopup,
};

const projects = [
    {
        id: 1,
        title: "Nordiq Alberta",
        description: "A scrapbook of my professional design projects for Nordiq Alberta's marketing team as part of my work experience co-op",
        image: "/projects/nordiq/nordiq_2.png",
        tags: ["Graphic design", "Marketing", "Canva", "Adobe Illustrator", "Adobe Aero", "Print design", "Content creation"],
        popup: "NordiqPopup"
    },
    {
        id: 2,
        title: "Heritage Park",
        description: "A scrapbook of my professional design projects for Heritage Park's marketing team as part of my summer internship",
        image: "/projects/hp/hp_2.png",
        tags: ["Graphic design", "Marketing", "Video editing", "Adobe InDesign", "Adobe Premiere Pro", "Photography", "Social media"],
        popup: "HeritagePopup"
    }
];

export const ProfessionalProjectsSection = () => {
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
        <section id="pro_projects" className="py-32 px-4 relative">
            <div className="container max-w-screen-xl mx-auto">
                <h2 className="text-4xl md:text-5xl mb-12 about-text text-center">
                    My Professional<span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-lg md:text-xl">
                    These are the professional-quality projects that I have worked on during my time as a student, through work experience co-ops, internships, and community service learning initiatives, as well as those that I worked on as an information design graduate.
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