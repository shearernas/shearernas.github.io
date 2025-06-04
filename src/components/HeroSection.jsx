

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">

    <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight body-text-ow">
                <span className="opacity-0 animate-fade-in">Hi there! My name is</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Nate</span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Shearer.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 pt-5">
                I'm an <span className="text-primary">Information Designer,</span> specializing in usability research, interactive UX design, and intuitive front-end web development. I gather valuable insights and data from real users to guide design and development, through educated user testing and concise, easily-understood data visualization.
            </p>

        </div>

    </div>
    </section>
}