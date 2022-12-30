import React, { useReducer } from "react";
import reducer, { initialState } from "../state/reducer";
import { useCustomContext } from "../state/appContext";

const MessageBoard = () => {
  const { state, dispatch } = useCustomContext();
  const { messages } = state;
  console.log(state);
  return (
    <>
      <h3> Message Board</h3>
      <hr />
      <div>
        {messages.map((msg) => {
          const { id, text, timeStamp } = msg;
          return (
            <div key={id}>
              <h4>{new Date(timeStamp).toDateString()}</h4>
              <p>{text}</p>

              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MessageBoard;
