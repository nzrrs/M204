//Importing React and modules
import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

// Importing Components
import Navbar from "./assets/components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import UserDetails from "./assets/components/UserDetails";
function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestPosts = axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const requestUsers = axios.get(
        "https://jsonplaceholder.typicode.com/users?_limit=10"
      );

      const [responsePosts, responseUsers] = await Promise.all([
        requestPosts,
        requestUsers,
      ]);

      setPosts(responsePosts.data);
      setUsers(responseUsers.data);
    };
    fetchData()
  }, []);

  function deleteUser(id){
    setUsers(users.filter((user)=> user.id !== id))
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts posts={posts}/>} />
        <Route path="users" element={<Users users={users} deleteUser={deleteUser} />} />
        <Route path="users/:id" element={<UserDetails users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
