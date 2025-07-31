import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";


export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">

            <div className="container max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl mb-12 about-text text-center">
                    Let's<span className="text-primary"> Chat!</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-lg md:text-xl">
                    Whether you have a project in mind that I would be a good fit for, want to discuss user research or information design, or just want to say hello, feel free to reach out! I love chatting people's ears off about the things I'm passionate for and I'm always open for getting a discussion going. Feel free to contact me through email with the form below, or through my social media accounts, also linked with icons below. I look forward to hearing from you!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-16 flex flex-col items-center justify-center">  
                        <a href="mailto:nates@shaw.ca">
                            <Mail className="w-16 h-16 text-primary hover:text-foreground transition-colors" />
                        </a>
                            
                        <a href="https://www.linkedin.com/in/shearer-nas/" target="_blank">
                            <FaLinkedin className="w-16 h-16 text-primary hover:text-foreground transition-colors" />
                        </a>    
                            
                        <a href="https://github.com/shearernas" target="_blank">
                            <FaGithub className="w-16 h-16 text-primary hover:text-foreground transition-colors" />
                        </a>
                    </div>
                
                    <div className="bg-card rounded-lg shadow-equal p-8 h-full">
                        <h3 className="text-2xl md:text-3xl mb-6 font-semibold text-center">
                            Send a Message
                        </h3>

                        <ContactForm />
                       
                    </div>
                </div>
            </div>

        </section>
    );
};