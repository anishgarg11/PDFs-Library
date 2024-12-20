import React, { useState } from "react";
import "./PDFList.css";

export default function PDFList({ pdfs, onSelectPDF }) {
  const [search, setSearch] = useState("");

  const filteredPDFs = pdfs.filter((pdf) => {
    const pdfName = pdf.name ? pdf.name.toLowerCase() : "";
    console.log(pdfName);
    return pdfName.includes(search.toLowerCase());
  });

  return (
    <div className="pdf-list-container">
      <header>
        <h1>PDF Library</h1>
        <input
          type="text"
          placeholder="Search PDF Here..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </header>
      {filteredPDFs.length > 0 ? (
        <ul className="pdf-list">
          {filteredPDFs.map((pdf) => (
            <li
              key={pdf.id}
              className="pdf-item"
              onClick={() => onSelectPDF(pdf)}
            >
              <img
                src="https://m.media-amazon.com/images/I/81cNCOaB5UL._UF1000,1000_QL80_.jpg"
                alt={pdf.thumbnail}
                // href={pdf.link}
                className="pdf-thumbnail"
              />
              <div>
                <h3>{pdf.name}</h3>
                <p>{pdf.author}</p>
                <p>Published: {pdf.published}</p>
                {/* <a href={pdf.link}></a> */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1>No PDFs match your search criteria &#128530;</h1>
      )}
    </div>
  );
}
