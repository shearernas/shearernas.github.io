import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker (required for react-pdf to work)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const InlinePDFViewer = ({ pdfUrl, width = 600, height = 800 }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This function runs when the PDF loads successfully
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
    console.log('PDF loaded successfully with', numPages, 'pages');
  };

  // This function runs if there's an error loading the PDF
  const onDocumentLoadError = (error) => {
    setError('Failed to load PDF. Please check the file path.');
    setLoading(false);
    console.error('PDF load error:', error);
  };

  // Navigate to previous page
  const goToPrevPage = () => {
    setPageNumber(prevPage => Math.max(prevPage - 1, 1));
  };

  // Navigate to next page
  const goToNextPage = () => {
    setPageNumber(prevPage => Math.min(prevPage + 1, numPages));
  };

  return (
    <div className="inline-pdf-container">
      <h3>PDF Document</h3>
      
      {/* Debug info to help troubleshoot */}
      <div className="debug-info">
        <small>Loading PDF from: {pdfUrl}</small>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="loading-container">
          <p>Loading PDF...</p>
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className="error-container">
          <p>{error}</p>
          <p>Make sure your PDF file is in the 'public' folder and the path is correct.</p>
          <p>For example: if your file is at 'public/documents/test.pdf', use '/documents/test.pdf'</p>
        </div>
      )}
      
      {/* PDF content - only show when loaded and no error */}
      {!loading && !error && numPages && (
        <div className="pdf-content">
          {/* Navigation controls */}
          <div className="pdf-navigation">
            <button 
              onClick={goToPrevPage} 
              disabled={pageNumber <= 1}
              className="nav-button"
            >
              ← Previous
            </button>
            
            <span className="page-info">
              Page {pageNumber} of {numPages}
            </span>
            
            <button 
              onClick={goToNextPage} 
              disabled={pageNumber >= numPages}
              className="nav-button"
            >
              Next →
            </button>
          </div>

          {/* PDF Document */}
          <div className="pdf-document">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<div>Loading document...</div>}
            >
              <Page 
                pageNumber={pageNumber}
                width={width}
                loading={<div>Loading page...</div>}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>
          </div>
        </div>
      )}
      
      <style jsx="true">{`
        .inline-pdf-container {
          max-width: ${width + 40}px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }

        .debug-info {
          margin-bottom: 10px;
          color: #666;
        }

        .loading-container, .error-container {
          text-align: center;
          padding: 40px 20px;
          background-color: white;
          border-radius: 4px;
          margin: 20px 0;
        }

        .error-container {
          color: #d32f2f;
          border: 1px solid #ffcdd2;
          background-color: #ffebee;
        }

        .pdf-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 10px;
          background-color: white;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .nav-button {
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .nav-button:hover:not(:disabled) {
          background-color: #0056b3;
        }

        .nav-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .page-info {
          font-weight: bold;
          color: #333;
        }

        .pdf-document {
          text-align: center;
          background-color: white;
          padding: 20px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .pdf-document canvas {
          max-width: 100%;
          height: auto;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default InlinePDFViewer;