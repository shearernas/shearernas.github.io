import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Calgary311Popup from "./popups/311Popup";
import CraftHivePopup from "./popups/CraftHivePopup";
import UsabilityPopup from "./popups/UsabilityPopup";
import ARPopup from "./popups/ARPopup";
import SQLSimplPopup from "./popups/SQLSimplPopup";

// Component mapping object - add more popup components here as you create them
const popupComponents = {
    Calgary311Popup: Calgary311Popup,
    CraftHivePopup: CraftHivePopup,
    UsabilityPopup: UsabilityPopup,
    SQLSimplPopup: SQLSimplPopup,
    ARPopup: ARPopup
};

const projects = [
    {
        id: 1,
        title: "Calgary 311 Usability Case Study",
        image: "/projects/311/311_cover.png",
        tags: ["User research", "Undergrad", "Figma", "UX design", "Research", "Case study"],
        popup: "Calgary311Popup"
    },
    {
        id: 2,
        title: "CraftHive Web App",
        image: "/projects/crafthive/crafthive_1.png",
        tags: ["React", "JavaScript", "Front end web development", "Figma", "UX design", "Customer discovery", "Ideation"],
        popup: "CraftHivePopup"
    },
    {
        id: 3,
        title: "SQLSimpl",
        image: "/projects/sqlsimpl/sqlsimpl_cover.png",
        popup: "SQLSimplPopup"
    },
    {
        id: 4,
        title: "INFO 3600 Usability and User Testing Project",
        image: "/projects/usability/usability_cover.png",
        tags: ["Ideation", "Prototyping", "User testing methodolgies", "Think aloud protocol", "UX design"],
        popup: "UsabilityPopup"
    },
     {
        id: 5,
        title: "IndigiPRINTS + AR Wayfinding Projects",
        image: "/projects/ar/ar_cover.png",
        tags: ["Research", "AR design", "Mixed reality", "AR for storytelling", "Wayfinding using AR"],
        popup: "ARPopup"
    }
];

export const UXDesignSection = () => {
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
                <h2 className="text-4xl md:text-5xl mb-16 about-text text-center">
                    My <span className="text-primary"> UX Design </span> Initiatives
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-lg md:text-xl">
                Here are the UX design, usability, and front-end web development projects I completed independently and collaboratively during my time as an Information Design undergrad. <br></br>Click on any image to explore the project details and my design process!
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
                                {/*<p>
                                    {project.title}
                                </p>*/}
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