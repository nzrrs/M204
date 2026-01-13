
const Posts = ({posts}) => {
  return (
    <div className="posts-container">
      <h1 style={{marginBottom : "1.5rem"}}>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
