import React from "react";

import "./NewsListPage.css";

const NewsListPage = ({ title, text, id }) => {
  return (
    <div className="blog-post">
      <div className="blog-thumb set-bg">
        <div className="blog-date">08 Feb, 2019</div>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      <Link as={`/news/${id}`} href="/news/[id]">
        <a className="site-btn read-more">read more</a>
      </Link>
    </div>
  );
};

export default NewsListPage;
