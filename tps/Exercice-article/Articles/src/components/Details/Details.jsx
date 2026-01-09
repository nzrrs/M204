import React, { useState } from "react";

const Details = ({ post, viewMode, comments, setComments }) => {
  const [newComment, setNewComment] = useState("");

  if (!post) return <div className="details-body">Select a post</div>;

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments([
      ...comments,
      { id: Date.now(), name: "You", body: newComment },
    ]);
    setNewComment("");
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="details">
      <div className="details-header">
        <h1 className="details-title">{viewMode === "details" ? "Post Details" : "Comments"}</h1>
      </div>
      <div className="details-body">
        {viewMode === "details" ? (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ) : (
          <div>
            <ul>
              {comments.map((c) => (
                <li key={c.id}>
                  <strong>{c.name}:</strong> {c.body}{" "}
                  <button onClick={() => handleDeleteComment(c.id)}>Delete</button>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "1rem" }}>
              <input
                type="text"
                placeholder="New comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={handleAddComment}>Add Comment</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
