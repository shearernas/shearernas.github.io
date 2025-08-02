import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import NordiqPopup from "./popups/NordiqPopup";
import  Calgary311Popup from "./popups/311Popup";
import CraftHivePopup from "./popups/CraftHivePopup";

// Component mapping object - add more popup components here as you create them
const popupComponents = {
    NordiqPopup: NordiqPopup,
    Calgary311Popup: Calgary311Popup,
    CraftHivePopup: CraftHivePopup
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
        title: "Nordiq Alberta",
        image: "/projects/nordiq/nordiq_2.png",
        tags: ["Graphic design", "Marketing", "Canva", "Adobe Illustrator", "Adobe Aero", "Print design", "Content creation"],
        popup: "NordiqPopup"
    },
    {
        id: 3,
        title: "CraftHive Web App",
        image: "/projects/crafthive/crafthive_cover.png",
        tags: ["React", "JavaScript", "Front end web development", "Figma", "UX design", "Customer discovery", "Ideation"],
        popup: "CraftHivePopup"
    },
];

export const ProCasStudSection = () => {
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
                    My Projects and<span className="text-primary"> UX Case Studies</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-lg md:text-xl">
                    These are the UX case studies, user research projects, and front-end design initiatives that I completed during my time as an undergrad student, as well as through my work experience co-op, which I developed independently and collaboratively as an Information Design graduate. Click on each image to view the project details and insights into my design process!
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
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
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