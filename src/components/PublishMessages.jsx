import React, { useState, useReducer } from "react";
import reducer, { initialState } from "../state/reducer";
import { newMessage } from "../state/actions";
import { useCustomContext } from "../state/appContext";

function PublishMessage() {
  const [text, setText] = useState("");
  const {
    state,
    pubsub: { publish },
  } = useCustomContext();
  const { username } = state;

  const updateText = (event) => {
    setText(event.target.value);
  };

  const publishMessage = () => {
    publish(newMessage({ text, username }));
  };

  return (
    <div>
      <h3>Got something to say?</h3>
      <input type="text" value={text} onChange={updateText} />

      <button type="button" onClick={publishMessage}>
        Publish it!
      </button>
    </div>
  );
}

export default PublishMessage;
