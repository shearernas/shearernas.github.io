import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProfessionalProjectsSection } from "@/components/ProfessionalProjectsSection";
import { ResearchProjectsSection } from "@/components/ResearchProjectsSection";
import { TopButton } from "@/components/TopButton";

export const Home = () => {

return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/*Theme Toggle*/}
    <ThemeToggle />

    {/*Background star effects*/}
    <StarBackground />

    {/*Navbar*/}
    <Navbar />

    {/*Main Content*/}
    <main>
        <HeroSection />

        <AboutSection />

        <section id="projects">
            <ProfessionalProjectsSection />

            {/*<ResearchProjectsSection />*/}

            {/* <CaseStudySection /> */}

            {/* <SideProjectsSection /> */}
        </section>

        {/* <ContactSection /> */}

    </main>

    <TopButton />
    {/*Footer*/}

    </div>
)
};
