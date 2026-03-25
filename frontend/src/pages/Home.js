import React, { useEffect, useState } from "react";
import { getUsers } from "../services/api";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Home;