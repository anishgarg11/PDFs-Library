import React from "react";
import "./PDFReader.css";

export default function PDFReader({ pdf, goBack }) {
  return (
    <div className="pdf-reader-container">
      <button onClick={goBack} className="back-button">Go Back</button>
      <header>
        <h1>{pdf.name}</h1>
        <h3>Author: {pdf.author}</h3>
        <h3>Published: {pdf.published}</h3>
      </header>
      <iframe
        src={pdf.link}
        
        title={pdf.name}
        className="pdf-viewer"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
