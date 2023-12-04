import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const { state } = useLocation();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://large-sunset-yttrium.glitch.me/users/" + id)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(id);

  return (
    <div>
      {!state ? (
        <>
          <h1>{user.name}</h1>
          <img src={user.image} />
          <p>{user.age}</p>
        </>
      ) : (
        <>
          <h1>{state.user.name}</h1>
          <img src={state.user.image} />
          <p>{state.user.age}</p>
        </>
      )}
    </div>
  );
}

export default UserDetails;
