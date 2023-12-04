import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://large-sunset-yttrium.glitch.me/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="home">
      <h1>Home</h1>
      <p>This is the Home page</p>
      {users.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <img src={user.image} />
            <button
              onClick={() => navigate(`/user/${user.id}`, { state: { user } })}
            >
              View Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
