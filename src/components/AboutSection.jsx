import { Code, CircleUserRound, Origami  } from "lucide-react";


export const AboutSection = () => {
    
    return (
    <section id="about" className="py-25 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl mb-12 about-text text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="flex flex-col items-center justify-center pt-5">
                <img src="src/assets/images/portrait.png" alt="Nate Shearer portrait" className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-center pt-18">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold pb-6 mt-6">A multi-discipline designer who considers all approaches and perspectives...</h3>

                    <p className="text-muted-foreground text-md md:text-lg pb-3">
                        Placeholder text.
                    </p>

                    <p className="text-muted-foreground text-md md:text-lg pb-3">
                        To the right are some skills and beliefs that I specialize in and use to fully drive my personal design process, from initial research to final implementation. I chose to pursue these unique skills and beliefs during my time as an information design undergrad student and hope to continue building on them after my time as a student has concluded.
                    </p>
                        
                    <p className="text-muted-foreground text-md md:text-lg pb-3">
                        If we get the opportunity to connect, you will find that I also value kindness and mutual recognition as key personal values of mine that I try to bring to every interaction I have with others.
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


                <div className="grid grid-cols-1 gap-3">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-5">
                            <div className="p-3 rounded-full bg-primary/10">
                                <CircleUserRound className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg pb-4 text-primary font-medium"> User-centric design and research </h4>
                                <p className="text-sm pb-2">
                                    Knowledge on complicated technical topics doesn't always have to be locked behind a paywall or an intimidating, 400+ page manual.
                                </p>
                                <p className="text-sm">
                                    I believe that technical learning tools should be open source and accessible, using information design principles to allow anyone to learn these often complex topics as they would learn to ride a bike.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-5">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Origami className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg pb-4 text-primary font-medium"> Design with purpose to promote real change </h4>
                                <p className="text-sm pb-2">
                                    Knowledge on complicated technical topics doesn't always have to be locked behind a paywall or an intimidating, 400+ page manual.
                                </p>
                                <p className="text-sm">
                                    I believe that technical learning tools should be open source and accessible, using information design principles to allow anyone to learn these often complex topics as they would learn to ride a bike.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover w-fit">
                    <div className="flex items-start gap-5">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg pb-4 text-primary font-medium"> A unique, accessible approach to open technical knowledge </h4>
                                <p className="text-sm pb-2">
                                    Knowledge on complicated technical topics doesn't always have to be locked behind a paywall or an intimidating, 400+ page manual.
                                </p>
                                <p className="text-sm">
                                    I believe that technical learning tools should be open source and accessible, using information design principles to allow anyone to learn these often complex topics as they would learn to ride a bike.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
)};