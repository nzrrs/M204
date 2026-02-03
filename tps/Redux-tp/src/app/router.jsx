import { createBrowserRouter } from "react-router-dom";
import Posts from "../pages/posts/Posts";
import PostDetails from "../pages/posts/PostDetails";
import Comments from "../pages/comments/Comments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />, 
  },
  {
    path: "/posts/:postId",
    element: <PostDetails />,
  },
  {
    path: "/posts/:postId/comments",
    element: <Comments />,
  },
]);