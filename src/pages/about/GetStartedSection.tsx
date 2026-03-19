import React from 'react';
import { Play } from 'lucide-react';
import getStartedVideoThumbnail from '@/assets/get-started-video-thumbnail.png';
const GetStartedSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-16">
      
      {/* VIDEO SECTION */}
      <div className="relative group overflow-hidden rounded-[2.5rem] shadow-lg">
        {/* Placeholder for your video thumbnail image */}
        <div className="aspect-[21/9] w-full relative">
          <img 
            src={getStartedVideoThumbnail}
            alt="Medical team" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex items-center justify-center">
            <button className="flex items-center gap-2 bg-[#3B0A45] hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-xl">
              Watch the video
              <Play size={16} fill="white" />
            </button>
          </div>
        </div>
      </div>

      {/* GETTING STARTED SECTION */}
      <div className="relative border border-gray-400 rounded-xl p-12 md:p-20 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Getting started
        </h2>
        
        <div className="relative inline-block">
          <button className="bg-[#3B0A45] hover:bg-black text-white px-10 py-4 rounded-full text-sm font-bold transition-all uppercase tracking-wide shadow-md">
            download the app Now
          </button>

          {/* Hand-drawn Arrow SVG */}
          <div className="absolute -right-20 top-0 hidden md:block">
             <svg 
               width="60" 
               height="60" 
               viewBox="0 0 100 100" 
               fill="none" 
               className="text-[#3B0A45] transform -rotate-12"
              >
                <path 
                  d="M80,20 C85,45 60,80 30,75 M30,75 L45,65 M30,75 L40,85" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
             </svg>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default GetStartedSection;