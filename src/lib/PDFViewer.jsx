
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ArrowLeft, ArrowRight } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

function PDFViewer({ filePath }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfWidth, setPdfWidth] = useState(250);

  useEffect(() => {
    const updateWidth = () => {
      const maxWidth = Math.min(window.innerWidth - 80, 400);
      setPdfWidth(maxWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1); // Reset to first page if a new file is loaded
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Document file={filePath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page 
          pageNumber={pageNumber} 
          scale={1.0}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
          disabled={pageNumber <= 1}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          <ArrowLeft />
        </button>
        <span className="text-sm text-gray-700">
          Page {pageNumber} of {numPages}
        </span>
        <button 
          onClick={() => setPageNumber(p => Math.min(p + 1, numPages))}
          disabled={pageNumber >= numPages}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export default PDFViewer;
