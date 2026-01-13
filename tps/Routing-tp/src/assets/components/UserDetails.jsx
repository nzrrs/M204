import React from "react";
import { useParams, Link } from "react-router";

const UserDetails = ({ users }) => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="details-container">
      <h1>Details of {user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <Link to="/users">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default UserDetails;
