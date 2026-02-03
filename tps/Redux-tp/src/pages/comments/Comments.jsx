import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCommentsByPostId,
  selectAllComments,
  selectCommentsLoading,
  selectCommentsError,
  clearComments,
} from "./commentsSlice";

const Comments = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(selectAllComments);
  const loading = useSelector(selectCommentsLoading);
  const error = useSelector(selectCommentsError);

  useEffect(() => {
    if (postId) {
      dispatch(fetchCommentsByPostId(postId));
    }

    // Cleanup function to clear comments when component unmounts
    return () => {
      dispatch(clearComments());
    };
  }, [dispatch, postId]);

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Comments for Post #{postId}</h1>
      <Link to="/">← Back to Main Page</Link>
      
      {comments.length === 0 ? (
        <p>No comments found for this post.</p>
      ) : (
        <div>
          <p>Total Comments: {comments.length}</p>
          {comments.map((comment) => (
            <div key={comment.id} style={{ 
              border: "1px solid #ddd", 
              margin: "10px 0", 
              padding: "10px",
              borderRadius: "5px"
            }}>
              <h3>{comment.name}</h3>
              <p>
                <strong>By:</strong> {comment.email}
              </p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;