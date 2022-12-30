import React from "react";
import { useCustomContext } from "../state/appContext";
import { setUsername } from "../state/actions";

function SetUsername() {
  const {
    state: { username },
    dispatch,
  } = useCustomContext();

  const updateUsername = (event) => {
    dispatch(setUsername(event.target.value));
  };

  return (
    <div>
      <h3>Username</h3>
      <input
        type="text"
        id="username"
        placeholder="Username"
        onChange={updateUsername}
        value={username}
      />
    </div>
  );
}

export default SetUsername;
