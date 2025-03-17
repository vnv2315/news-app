import React, { useState, useEffect } from 'react';
import Newscomponents from './newscomponents.jsx';

const Newsboard = ({ category, language, country }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&language=${language}&apiKey=${import.meta.env.VITE_API_KEY}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data); 
        if (data.articles) {
          setArticle(data.articles);
        } else {
          setArticle([]); 
        }
      })
      .catch(error => console.error("Error fetching news:", error));
  }, [category, language, country]);
  
  return (
    <div className="flex flex-col w-full m-0">
      <div className="select-none cursor-default text-xl flex text-black justify-center items-center mt-5 gap-1">
        Top<span className="px-2 py-1 bg-red-600 text-white rounded-xl">Headlines</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {article.map((news, index) => (
          <Newscomponents 
            key={index} 
            title={news.title} 
            description={news.description} 
            src={news.urlToImage} 
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Newsboard;