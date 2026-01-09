/* eslint-disable no-unused-vars */
import React from "react";
import { HiMiniNoSymbol } from "react-icons/hi2";
const Articles = ({ posts, setPosts }) => {
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post, idx) => {
          return (
            <div key={idx} className="article-card">
              <h3>{post.title}</h3>
              <div className="btn-group">
                <button>Details</button>
                <button>Commentes</button>
              </div>
            </div>
          );
        })
      ) : (
        <HiMiniNoSymbol className="err-msg" />
      )}
    </>
  );
};

export default Articles;
