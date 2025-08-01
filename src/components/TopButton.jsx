import { ArrowUpToLine } from "lucide-react";

export const TopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 bg-background/30 hover:bg-background transition-colors duration-300 rounded-xl">
            <button 
                className="p-4 flex flex-col items-center transition-all duration-300 hover:scale-110"
                onClick={scrollToTop}
            >
                <ArrowUpToLine className="w-8 h-8" />
                <p className="text-xs font-medium text-center text-primary pt-1">
                    Back to top
                </p>
            </button>
        </div>
    );
};