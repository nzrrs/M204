import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  allPosts: [],
  loading: false,
  error: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

export const store = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchPosts.pending, (state)=>{
        state.loading = true
        state.error = ""
    })
    .addCase(fetchPosts.fulfilled, (state, action)=>{
        state.loading = false;
        state.allPosts = action.payload;
        state.error = ""
    })
    .addCase(fetchPosts.rejected, (state, action)=>{
        state.loading = false
        state.error = action.error.message
    })
  },
});


export default store.reducer;
export const  selectAllPosts = (state) => state.posts.allPosts