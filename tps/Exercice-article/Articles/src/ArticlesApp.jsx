/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Details from "./components/Details/Details";
import axios from "axios";
const ArticlesApp = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const [titleFilter, setTitleFilter] = useState("");
  const [userFilter, setUserFilter] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const [postRes, userRes] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/posts"),
          axios.get("https://jsonplaceholder.typicode.com/users"),
        ]);
        setPosts(postRes.data);
        setAllPosts(postRes.data);
        setUsers(userRes.data);
      } catch (err) {
        console.error(err);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    const filtered = allPosts.filter((post) => {
      const matchesTitle = post.title
        .toLowerCase()
        .includes(titleFilter.toLowerCase());

      const matchesUser = userFilter
        ? post.userId === Number(userFilter)
        : true;

      return matchesTitle && matchesUser;
    });

    setPosts(filtered);
  }, [titleFilter, userFilter, allPosts]);

  return (
    <div className="content-container">
      <Sidebar
        posts={posts}
        setTitleFilter={setTitleFilter}
        setUserFilter={setUserFilter}
        titleFilter = {titleFilter}
        userFilter = {userFilter}
        users={users}
      />
      <Details />
    </div>
  );
};

export default ArticlesApp;
