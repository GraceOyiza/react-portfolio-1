import React, { Component } from 'react';

class Portfolio extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    window.open(e.target.parentElement.href);
  }
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map((projects, index) => {
        var projectImage = 'images/portfolio/' + projects.image;
        return (
          <div
            key={projects.title + index}
            className="portfolio-item"
            style={{ marginBottom: '30px' }}
          >
            <div className="item-wrap">
              <a
                href={projects.url}
                title={projects.title}
                onClick={this.handleClick}
              >
                <img alt={projects.title} src={projectImage} />
              </a>
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <a
                  href={projects.url}
                  title={projects.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-link"></i>
                </a>
                <a
                  href={projects.repo}
                  title={projects.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
