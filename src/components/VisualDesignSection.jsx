import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LucidTravelsPopup from "./popups/LucidTravelsPopup";
import HTML5Popup from "./popups/HTML5Popup";
import NordiqPopup from "./popups/NordiqPopup";
import CraftHivePopup from "./popups/CraftHivePopup";
import SystemMapPopup from "./popups/SystemMapPopup";
import WoEPopup from "./popups/WoEPopup";

// Component mapping object - add more popup components here as you create them
const popupComponents = {
    HTML5Popup: HTML5Popup,
    NordiqPopup: NordiqPopup,
    CraftHivePopup: CraftHivePopup,
    SystemMapPopup: SystemMapPopup,
    LucidTravelsPopup: LucidTravelsPopup,
    WoEPopup: WoEPopup
};

const projects = [

    {
        id: 1,
        title: "Nordiq Alberta",
        image: "/projects/nordiq/nordiq_2.png",
        tags: ["Graphic design", "Marketing", "Canva", "Adobe Illustrator", "Adobe Aero", "Print design", "Content creation"],
        popup: "NordiqPopup"
    },
    {
        id: 2,
        title: "Systems Mapping Project",
        image: "/projects/systemsmap/systemsmap_cover.png",
        tags: ["Systems thinking", "Systems mapping", "Literary review", "Research", "Figma", "Subject matter expert interviews"],
        popup: "SystemMapPopup"
    },
    {
        id: 3,
        title: "HTML5 Web Adverts",
        image: "/projects/html5/html5_cover.png",
        popup: "HTML5Popup"
    },
    {
        id: 4,
        title: "CraftHive Web App",
        image: "/projects/crafthive/crafthive_1.png",
        tags: ["React", "JavaScript", "Front end web development", "Figma", "UX design", "Customer discovery", "Ideation"],
        popup: "CraftHivePopup"
    },
    {
        id: 5,
        title: "Where on Earth Poster",
        image: "/projects/woe/woe_cover.png",
        popup: "WoEPopup"
    }
    /*
    {
        id: 6,
        title: "Lucid Travels",
        image: "/projects/lucidtravels/lucidtravels_cover.png",
        popup: "LucidTravelsPopup"
    }*/
];

export const VisualDesignSection = () => {
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
                    My <span className="text-primary"> Visual Design </span> Work
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-lg md:text-xl">
                Here are a few information design projects I worked on as both a student and a professional. These projects reflect my passion for areas of information design beyond usability studies and UX design. Click on any image to learn more about each project!
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