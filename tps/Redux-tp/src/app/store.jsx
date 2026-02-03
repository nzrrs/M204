import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../pages/posts/postsSlice";
import commentsReducer from "../pages/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
});
