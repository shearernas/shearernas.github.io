

export const AboutSection = () => {
    
    return (
    <section id="about" className="py-25 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl mb-12 about-text text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
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
                    <div className="gradient-border p-6 card-hover"></div>
                    <div className="gradient-border p-6 card-hover"></div>
                    <div className="gradient-border p-6 card-hover"></div>
                </div>
            </div>

        </div>
    </section>
)};