import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function PDFScrollViewer({ basePath, totalPages }) {
  const [containerWidth, setContainerWidth] = useState(700);

  useEffect(() => {
    const updateWidth = () => {
      const max = Math.min(window.innerWidth - 80, 800);
      setContainerWidth(max);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="overflow-y-auto max-h-[75vh] 
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    px-4 space-y-6">
      {Array.from({ length: totalPages }, (_, i) => {
        const pageNum = i + 1;
        const src = `${basePath}/page-${pageNum}.png`;

        return (
          <div key={pageNum} className="flex justify-center">
            <Zoom>
              <img
                src={src}
                alt={`Page ${pageNum}`}
                width={containerWidth}
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-zoom-in"
                loading="eager"
              />
            </Zoom>
          </div>
        );
      })}
    </div>
  );
}

export default PDFScrollViewer;
