
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">

    <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl hero-text tracking-tight body-text-ow">
                <span className="opacity-0 animate-fade-in">Hi there! My name is</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Nate</span>
                <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1"> Shearer.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 pt-5">
               I'm an <span className="text-primary">Information Designer,</span> specializing in <span className="text-primary">usability research, interactive UX design,</span> and<span className="text-primary"> intuitive front-end web development.</span>
            </p>

            <p className="text-xl md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                I gather valuable insights and data from real users to guide design and development, through educated user testing and concise, easily-understood data visualization.
            </p>

            <div className=" text-xl opacity-0 animate-fade-in-delay-4 pt-6">
                <a href="#projects" className="cosmic-button px-5 py-4">
                    View some of my projects here
                </a>
            </div>
        </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-4">
        <div className="animate-bounce flex flex-col items-center justify-center">
            <span className='text-lg text-muted-foreground mb-1'>Scroll</span>
            <ArrowDown className="h-7 w-7 text-primary" />
        </div>
    </div>

    </section>
}