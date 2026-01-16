// Users.jsx
import { Link } from "react-router";
const Users = ({ users, deleteUser }) => {
  return (
    <div className="users-container">
      <h1 style={{marginBottom : "1.5rem"}}>Users</h1>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/users/${user.id}`}>
                  <button className="details-btn">Details</button>
                </Link>
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
