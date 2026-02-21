import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { UXDesignSection } from "@/components/UXDesignSection";
import { VisualDesignSection } from "@/components/VisualDesignSection";
import { ContactSection } from "@/components/ContactSection";
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
            <UXDesignSection />

            <VisualDesignSection />
        </section>

        <ContactSection />

    </main>

    <TopButton />
    {/*Footer*/}

    </div>
)
};
