import { Code, User } from "lucide-react";


export const AboutSection = () => {
    
    return (
    <section id="about" className="py-25 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl mb-12 about-text text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="flex flex-col items-center justify-center p-4">
                <img src="src/assets/images/portrait.png" alt="Nate Shearer portrait" className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center pt-14">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Placeholder text</h3>

                    <p className="text-muted-foreground text-lg md:text-xl">
                        Some more description placeholder text to fill out the about section. This is where I can talk about my background, skills, and what I bring to the table as a designer and developer.
                    </p>

                    <p className="text-muted-foreground text-lg md:text-xl">
                        Some more description placeholder text to fill out the about section. This is where I can talk about my background, skills, and what I bring to the table as a designer and developer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="px-6 py-2 rounded-xl border border-primary text-primary hover:bg-primary/50 hover:text-white transition-colors duration-300">
                            Get in touch
                        </a>
                        <a href="#contact" className="px-6 py-2 rounded-xl border border-primary text-primary hover:bg-primary/50 hover:text-white transition-colors duration-300">
                            View my resume
                        </a>
                    </div>
                </div>


                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4> React </h4>
                                <p>
                                    Showcase some of my skills in React.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
)};