import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostDetails = () => {
  const { postId } = useParams();
  const posts = useSelector(selectAllPosts);

  // Find the specific post
  const post = posts.find((p) => p.id.toString() === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Link to="/">← Back to Main Page</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
      <p>Post ID: {post.id}</p>
    </div>
  );
};

export default PostDetails;
