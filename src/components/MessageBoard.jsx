import React, { useReducer } from "react";
import reducer, { initialState } from "../state/reducer";
import { useCustomContext } from "../state/appContext";

const MessageBoard = () => {
  const {
    state: { messages },
    dispatch,
  } = useCustomContext();
  console.log(messages);
  return (
    <>
      <h3> Message Board</h3>
      <hr />
      <div>
        {messages.map((msg) => {
          const { id, text, username, timeStamp } = msg;
          return (
            <div key={id}>
              <h4>{new Date(timeStamp).toDateString()}</h4>
              <p>{text}</p>
              <h4> - {username}</h4>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MessageBoard;
