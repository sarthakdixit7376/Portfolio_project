import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const fileId = "1tI3iEZL7OzoWIT_mdyTSRj2H7cE84q1t"

  const previewUrl = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
  const downloadUrl = fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : '#';

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-4">
            Resume
          </h1>
          <p className="text-lg text-[#737373] max-w-xl">
            Preview or download my resume outlining my skills, professional experience, and education.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white hover:bg-neutral-800 transition-all duration-300 rounded-2xl font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      {/* Resume Container */}
      <div className="relative w-full aspect-[1/1.414] min-h-[600px] md:min-h-[800px] bg-white border border-neutral-200/80 rounded-[32px] overflow-hidden shadow-sm">
        {isLoading && (
          <>
            <style>{`
              @keyframes progress-bar {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
              .animate-progress {
                animation: progress-bar 1.5s infinite ease-in-out;
              }
            `}</style>
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-100/50 overflow-hidden z-20">
              <div className="h-full w-full bg-yellow-500 animate-progress" />
            </div>
          </>
        )}

        {previewUrl ? (
          <iframe
            src={previewUrl}
            className="w-full h-full border-none"
            onLoad={() => setIsLoading(false)}
            title="Resume Preview"
            allow="autoplay"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-neutral-50/30">
            <div className="p-4 bg-neutral-100 rounded-full mb-4 text-[#737373]">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">No Resume Link Configured</h3>
            <p className="text-[#737373] max-w-sm mb-6">
              Please configure your Google Drive link in <code>Resume.jsx</code> to preview your resume here.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
