import React from "react";
import NavigationBar from "../components/Navigation/NavigationBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { BsBriefcaseFill } from "react-icons/bs";
import { FiDownload, FiArrowLeft } from "react-icons/fi";

const PDF_URL = "/assets/Pdf/Identitie Brand Architecture Deck__.pdf";

const BrandDeck = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <NavigationBar layout={"s"} />

      {/* Hero bar */}
      <div className="bg-[#0d1117] border-b border-gray-800 px-6 py-4 flex items-center justify-between mt-16 md:mt-0">
        <div className="flex items-center gap-3">
          <BsBriefcaseFill className="text-[#ed1e23] text-xl" />
          <div>
            <h1 className="text-white font-poppins font-semibold text-base md:text-lg leading-tight">
              Brand Architecture Deck
            </h1>
            <p className="text-gray-400 text-xs font-poppins">
              Identitie Enrichment — Brand Strategy Document
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={PDF_URL}
            download="Identitie_Brand_Architecture_Deck.pdf"
            className="flex items-center gap-2 bg-[#ed1e23] hover:bg-red-700 text-white text-xs font-poppins px-4 py-2 rounded-full transition-all duration-300"
          >
            <FiDownload className="text-sm" />
            <span className="hidden sm:inline">Download PDF</span>
          </a>
          <Link
            to="/"
            className="flex items-center gap-2 border border-gray-600 hover:border-white text-gray-400 hover:text-white text-xs font-poppins px-4 py-2 rounded-full transition-all duration-300"
          >
            <FiArrowLeft className="text-sm" />
            <span className="hidden sm:inline">Back to Site</span>
          </Link>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 bg-[#111] px-2 md:px-8 py-6">
        <div className="max-w-5xl mx-auto w-full h-full">
          {/* Desktop / tablet: native embed */}
          <div className="hidden sm:block w-full rounded-xl overflow-hidden shadow-[0px_20px_80px_0px_rgba(237,30,35,0.15)] border border-gray-800">
            <iframe
              src={`${PDF_URL}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
              title="Identitie Brand Architecture Deck"
              className="w-full"
              style={{ height: "85vh", minHeight: "600px" }}
            />
          </div>

          {/* Mobile: fallback with open button */}
          <div className="sm:hidden flex flex-col items-center gap-6 py-10 text-center">
            <BsBriefcaseFill className="text-[#ed1e23] text-6xl" />
            <div>
              <h2 className="text-white font-poppins font-semibold text-xl mb-2">
                Brand Architecture Deck
              </h2>
              <p className="text-gray-400 font-poppins text-sm">
                View our brand strategy document. Tap below to open or download the PDF.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <a
                href={PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-[#ed1e23] hover:bg-red-700 text-white font-poppins font-medium px-6 py-3 rounded-full transition-all duration-300"
              >
                Open PDF
              </a>
              <a
                href={PDF_URL}
                download="Identitie_Brand_Architecture_Deck.pdf"
                className="w-full text-center border border-gray-600 text-gray-300 hover:border-white hover:text-white font-poppins font-medium px-6 py-3 rounded-full transition-all duration-300"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrandDeck;
