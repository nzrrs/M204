import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const initialState = {
  comments: [],
  loading: false,
  error: "",
};

// Fetch comments by post ID
export const fetchCommentsByPostId = createAsyncThunk(
  "comments/fetchCommentsByPostId",
  async (postId) => {
    const response = await axios.get(`${COMMENTS_URL}?postId=${postId}`);
    return response.data;
  }
);

// Fetch all comments
export const fetchAllComments = createAsyncThunk(
  "comments/fetchAllComments",
  async () => {
    const response = await axios.get(COMMENTS_URL);
    return response.data;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearComments: (state) => {
      state.comments = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch comments by post ID
      .addCase(fetchCommentsByPostId.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchCommentsByPostId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch all comments
      .addCase(fetchAllComments.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchAllComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchAllComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearComments } = commentsSlice.actions;
export const selectAllComments = (state) => state.comments.comments;
export const selectCommentsLoading = (state) => state.comments.loading;
export const selectCommentsError = (state) => state.comments.error;

export default commentsSlice.reducer;