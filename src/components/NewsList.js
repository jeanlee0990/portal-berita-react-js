import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ articles }) => (
  <div className="row">
    {articles.map((article, index) => (
      <NewsCard key={index} article={article} />
    ))}
  </div>
);

export default NewsList;
