import React from 'react';

const NewsCard = ({ article }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100">
      <img
        src={article.urlToImage || 'https://via.placeholder.com/150'}
        className="card-img-top"
        alt="Gambar Berita"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text author">
          {article.author || 'Penulis Tidak Diketahui'} -{' '}
          {new Date(article.publishedAt).toLocaleString()}
        </p>
        <p className="card-text description">{article.description || ''}</p>
        <a
          href={article.url}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baca selengkapnya
        </a>
      </div>
    </div>
  </div>
);

export default NewsCard;
