import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NewsList from './components/NewsList';
;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const fetchNews = async (query) => {
    const apiKey = '2d2a00afcc394930b72468aa973aef09';
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status !== 'ok' || !data.articles) {
        throw new Error(data.message || 'Gagal memuat artikel berita.');
      }
      setArticles(data.articles);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchNews('Indonesia');
  }, []);

  const handleSearch = (query) => {
    setQuery(query);
    if (query.length > 2) {
      fetchNews(query);
    }
  };

  return (
    <div>
      <Header />
      <div className="container my-4">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="container">
        {error ? (
          <p className="text-danger">Gagal memuat artikel berita: {error}</p>
        ) : (
          <NewsList articles={articles} />
        )}
      </div>
    </div>
  );
};

export default App;
