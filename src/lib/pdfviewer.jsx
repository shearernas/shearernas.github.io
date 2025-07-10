import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker (required for react-pdf to work)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This function runs when the PDF loads successfully
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  // This function runs if there's an error loading the PDF
  const onDocumentLoadError = (error) => {
    setError('Failed to load PDF');
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
    <div className="pdf-popup-overlay">
      <div className="pdf-popup-content">
        {/* Header with close button */}
        <div className="pdf-header">
          <h3>PDF Viewer</h3>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        {/* PDF Content */}
        <div className="pdf-container">
          {loading && <div className="loading">Loading PDF...</div>}
          
          {error && <div className="error">{error}</div>}
          
          {!loading && !error && (
            <>
              {/* Navigation */}
              <div className="pdf-navigation">
                <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
                  Previous
                </button>
                <span>
                  Page {pageNumber} of {numPages}
                </span>
                <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                  Next
                </button>
              </div>

              {/* PDF Document */}
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<div>Loading document...</div>}
              >
                <Page 
                  pageNumber={pageNumber}
                  width={800} // You can adjust this
                  loading={<div>Loading page...</div>}
                />
              </Document>
            </>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .pdf-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .pdf-popup-content {
          background: white;
          border-radius: 8px;
          max-width: 90%;
          max-height: 90%;
          overflow: auto;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .pdf-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #eee;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pdf-container {
          padding: 1rem;
        }

        .pdf-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding: 0.5rem;
          background-color: #f5f5f5;
          border-radius: 4px;
        }

        .pdf-navigation button {
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .pdf-navigation button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .loading, .error {
          text-align: center;
          padding: 2rem;
          font-size: 1.1rem;
        }

        .error {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default PDFViewer;