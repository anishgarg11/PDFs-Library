import React, { useState, useEffect } from "react";
import PDFList from "./Component/PDFList";
import PDFReader from "./Component/PDFReader";

export default function App() {
  const [pdfData, setPdfData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPDF, setSelectedPDF] = useState(null); // Track selected PDF

  const API = "https://api.npoint.io/dee51ea017d20efdfcc8";

  const fetchPDFs = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      // if published is null replace to 2024
      const updatedData = data.map((pdf) => ({
        ...pdf, author: pdf.author === null ? "Anish Garg" : pdf.author, // if author is null replace to null
        published: pdf.published === null ? "2024" : pdf.published,
      }));

      console.log(data)
      setPdfData(updatedData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPDFs();
  }, []);

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Error: </h1>
        {error.message}
      </div>
    );

  return (
    <div>
      {selectedPDF ? (
        <PDFReader pdf={selectedPDF} goBack={() => setSelectedPDF(null)} />
      ) : (
        <PDFList pdfs={pdfData} onSelectPDF={(pdf) => setSelectedPDF(pdf)} />
      )}
    </div>
  );
}
