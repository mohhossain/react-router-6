import React, { useEffect, useState } from "react";
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
    </div>
  );
}

export default Home;
