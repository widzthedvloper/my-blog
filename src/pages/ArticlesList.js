import React from "react";
import articleContent from './article-content';
import {Link} from 'react-router-dom';

const ArticlesList = () => (
    <>
          {articleContent.map((article, key) => (
              <div key={key}>
                <h1>{article.title}</h1>
                <p>{article.content[0]}</p>
                <Link to={`/article-page/${article.name}`}>
                  <button>Read more ...</button>
                </Link>
              </div>
          ))}
    </>
);

export default ArticlesList;