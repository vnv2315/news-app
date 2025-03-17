import React from 'react';
import news from '../assets/news.jpg';

const Newscomponents = ({ title, url, src, description }) => {
  return (
    <div className="bg-black text-white my-2 mx-auto max-w-sm  overflow-hidden flex flex-col">
      <img 
        className="h-32 w-full object-cover sm:h-36 md:h-40" 
        src={src ? src : news} 
        alt="news" 
      />
      <div className="flex flex-col mt-2  flex-1">
        <div>
          <h5 className="text-xl font-bold text-center ">
            {title?.slice(0, 50) || "No Title"}
          </h5>
          <p className="text-sm text-center my-2">
            {description?.slice(0, 90) || "No description available. Click 'Read More' for full details."}
          </p>
        </div>
        <div className="mt-auto">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 w-full py-2 text-white hover:bg-blue-700">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newscomponents;