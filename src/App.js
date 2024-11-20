import React, { Component } from 'react';

class App extends Component {
  state = {
    articles: [],
    query: '',
    error: null,
  };

  componentDidMount() {
    this.fetchNews('Indonesia');
  }

  fetchNews = async (query) => {
    const apiKey = '2d2a00afcc394930b72468aa973aef09';
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status !== 'ok' || !data.articles) {
        throw new Error(data.message || 'Gagal memuat artikel berita.');
      }
      this.setState({ articles: data.articles, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleSearch = (event) => {
    const query = event.target.value;
    this.setState({ query });
    if (query.length > 2) {
      this.fetchNews(query);
    }
  };

  render() {
    const { articles, query, error } = this.state;

    return (
      <div>
        {/* Header */}
        <header className="bg-danger text-white text-center py-3">
          <h1>Aplikasi Berita</h1>
        </header>

        {/* Search Bar */}
        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Cari berita..."
                value={query}
                onChange={this.handleSearch}
              />
            </div>
          </div>
        </div>

        {/* News List */}
        <div className="container">
          <div className="row" id="news-container">
            {error ? (
              <p className="text-danger">Gagal memuat artikel berita: {error}</p>
            ) : (
              articles.map((article, index) => (
                <div key={index} className="col-md-4 my-3">
                  <div className="card h-100">
                    <img
                      src={article.urlToImage || 'https://via.placeholder.com/150'}
                      className="card-img-top"
                      alt={article.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text description">
                        {article.description || 'Deskripsi tidak tersedia.'}
                      </p>
                      <p className="card-text author">
                        Penulis: {article.author || 'Tidak diketahui'}
                      </p>
                      <a
                        href={article.url}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Baca Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
