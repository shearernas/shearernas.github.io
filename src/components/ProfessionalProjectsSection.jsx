
const projects = [
    {
        id: 1,
        title: "Nordiq Alberta",
        description: "A scrapbook of my professional design projects for Nordiq Alberta's marketing team as part of my work experience co-op",
        image: "/projects/nordiq/nordiq_1.png",
        tags: ["Graphic design", "Marketing", "Canva", "Adobe Illustrator", "Adobe Aero", "Print design", "Content creation"],
        demoUrl: "#" //Link to scrapbook PDF download or repository for video work will go here.
    },
    {
        id: 2,
        title: "Heritage Park",
        description: "A scrapbook of my professional design projects for Heritage Park's marketing team as part of my summer internship",
        image: "/projects/hp/hp_1.jpeg",
        tags: ["Graphic design", "Marketing", "Video editing", "Adobe InDesign", "Adobe Premiere Pro", "Photography", "Social media"],
        demoUrl: "#" //Link to scrapbook PDF download or repository for video work will go here.
    },
    {
        id: 3,
        title: "MRU PR FUN",
        description: "My delivrables for MRU's Public Relations First-Generation University-Student Network as part of my community service learning project",
        image: "/projects/mru_pr_fun/mru_pr_fun_1.png",
        tags: ["Visual identity system", "Logo design", "Social media", "Communications"]
    },
    {
        id: 4,
        title: "My Own Portfolio",
        description: "This exact portfolio website, which I built from scratch to further my knowledge of React, Tailwind CSS, and responsive web design principles",
        image: "/projects/portfolio/portfolio_1.png",
        tags: ["Responsive web design", "React", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/shearernas/shearernas.github.io"
    }

]

export const ProfessionalProjectsSection = () => {

    return <section id="pro_projects" className="py-24 px-4 relative">
    <div className="container max-w-screen-xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 about-text text-center">
        My Professional<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-lg md:text-xl">
        These are the professional-quality projects that I have worked on during my time as a student, through work experience co-ops, internships, and community service learning initiatives, as well as those that I worked on as an information design graduate.
        </p>

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    
                    <div className="h-48  overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/> {/* Maybe use mockup images for the scrapbooks and brand kit */}
                    </div>
                </div>
            ))}

        </div>
    </div>
    
    </section>;

}