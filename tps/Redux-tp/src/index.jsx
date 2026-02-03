import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";


import { store } from "./app/store.jsx";
import "./index.css";
import { fetchPosts } from "./pages/posts/postsSlice.jsx";
import App from "./App.jsx";

store.dispatch(fetchPosts())

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
