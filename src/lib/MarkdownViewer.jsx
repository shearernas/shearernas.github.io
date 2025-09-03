import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownViewer({ basePath }) {
  const [containerWidth, setContainerWidth] = useState(700);
  const [markdown, setMarkdown] = useState("");

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
    if (basePath) {
      fetch(basePath)
        .then((res) => res.text())
        .then(setMarkdown)
        .catch((err) => console.error("Error loading markdown:", err));
    }
  }, [basePath]);

  return (
    <div
      style={{ maxWidth: containerWidth }}
      className="prose prose-lg max-w-none
                 overflow-y-auto max-h-[75vh]
                 px-4 space-y-6
                 [&::-webkit-scrollbar]:w-2
                 [&::-webkit-scrollbar-track]:rounded-full
                 [&::-webkit-scrollbar-track]:bg-gray-100
                 [&::-webkit-scrollbar-thumb]:rounded-full
                 [&::-webkit-scrollbar-thumb]:bg-gray-300"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownViewer;
