import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAllPosts } from "./postsSlice";

const Posts = () => {
  const allPosts = useSelector(selectAllPosts);
  const [titleSearch, setTitleSearch] = useState("");
  const [userIdFilter, setUserIdFilter] = useState("");

  const userIds = Array.from({ length: 10 }, (_, i) => i + 1);

  // Filter posts based on both search inputs
  const filteredPosts = allPosts.filter((post) => {
    const matchesTitle = titleSearch
      ? post.title.toLowerCase().includes(titleSearch.toLowerCase())
      : true;

    const matchesUserId = userIdFilter
      ? post.userId.toString() === userIdFilter
      : true;

    return matchesTitle && matchesUserId;
  });

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search by title..."
            value={titleSearch}
            onChange={(e) => setTitleSearch(e.target.value)}
          />

          <select
            value={userIdFilter}
            onChange={(e) => setUserIdFilter(e.target.value)}
          >
            <option value="">All Users</option>
            {userIds.map((id) => (
              <option key={id} value={id}>
                User {id}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}...</p>
              <p>User ID: {post.userId}</p>

              {/* Buttons with NavLinks */}
              <div>
                <NavLink to={`/posts/${post.id}`}>
                  <button>Details</button>
                </NavLink>
                
                <NavLink to={`/posts/${post.id}/comments`}>
                  <button>Comments</button>
                </NavLink>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
