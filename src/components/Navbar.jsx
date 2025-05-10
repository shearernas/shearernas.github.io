import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#hero"},
    {name: "Professional Projects", href: "#pro_projects"},
    {name: "Research Projects", href: "#res_projects"},
    {name: "Side Projects", href: "#side_projects"},
    {name: "Contact", href: "#contact"},
]
 
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        };

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>

        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center title">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">
                    Nate Shearer
                    </span>
                </span>
            </a>

        </div>
    </nav>
    );
};