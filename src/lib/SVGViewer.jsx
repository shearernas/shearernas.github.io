import React, { useEffect, useState } from "react";

function SVGViewer({ basePath, files = [] }) {
  const [containerWidth, setContainerWidth] = useState(700);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateWidth = () => {
      const max = Math.min(window.innerWidth - 80, 800);
      setContainerWidth(max);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (basePath && files.length > 0) {
      setLoading(true);
      // Just set loading to false after a brief moment
      // since we're not fetching content anymore
      setTimeout(() => setLoading(false), 100);
    }
  }, [basePath, files]);

  return (
    <div className="py-10 flex justify-center">
      <div 
        style={{ maxWidth: containerWidth }}
        className="w-full px-6"
      >
        {loading ? (
          <div className="text-center text-gray-500">Loading SVGs...</div>
        ) : (
          <div className="bg-zinc-100 rounded-lg py-7 space-y-6">
            {files.map((file) => (
              <div key={file} className="flex justify-center items-center">
                <object
                  data={`${basePath}/${file}`}
                  type="image/svg+xml"
                  className="w-full max-w-[90%] h-auto"
                  style={{ pointerEvents: 'none' }}
                  aria-label={`SVG: ${file}`}
                >
                  <div className="text-red-500 text-sm">
                    Failed to load {file}
                  </div>
                </object>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SVGViewer;