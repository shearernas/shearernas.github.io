import React from "react";

function FigmaViewer({ link }) {
    return (
      <div className="w-full aspect-video">
        <iframe
          src={link}
          className="w-full h-full border border-gray-300 rounded-lg shadow"
          allowFullScreen
        />
      </div>
    );
  }  

  export default FigmaViewer;