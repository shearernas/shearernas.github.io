import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Projects + Case Studies", href: "#pro_projects"},
    {name: "Side Projects", href: "#side_projects"},
    {name: "Contact", href: "#contact"},
]
 
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        };

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
    isScrolled ? "py-8 bg-background/85 backdrop-blur-md shadow-xs" : "py-5")}>

        <div className="container flex items-center justify-between">
            <a className="text-2xl font-bold flex items-center title">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">
                    Nate Shearer's <span className="text-primary">Portfolio</span></span>
                </span>
            </a>

            {/* Desktop view */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a href={item.href} key={key} className="title text-lg font-medium text-foreground/90 hover:text-primary transition-colors duration-300 mx-4">
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Mobile view */}
            <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                {isMenuOpen ? <X  size={24}/> : <Menu size={24}/>} {" "}
            </button>

            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a href={item.href} key={key} className="title text-lg font-medium text-foreground/90 hover:text-primary transition-colors duration-300 mx-4" onClick={() => setIsMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

        </div>
    </nav>
    );
};