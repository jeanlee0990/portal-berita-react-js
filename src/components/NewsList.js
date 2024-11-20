import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class NewsList extends Component {
  render() {
    const { articles } = this.props;

    return (
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text className="description">{article.description}</Card.Text>
                <Card.Text className="author">{article.author}</Card.Text>
                <a href={article.url} className="btn btn-primary">Baca Selengkapnya</a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default NewsList;
