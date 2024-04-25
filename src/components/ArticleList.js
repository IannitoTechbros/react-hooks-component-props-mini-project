// ArticleList.js
import React from "react";
import Article from "./Article";

function ArticleList({ articles, posts }) {
  const articlesData = articles || posts; // Accept either prop name

  if (!articlesData || articlesData.length === 0) {
    // If articlesData is undefined or empty, render a message indicating no articles
    return <main>No articles available</main>;
  }

  return (
    <main>
      {articlesData.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
