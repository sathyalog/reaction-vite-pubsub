import React, { useReducer } from "react";
import CreateReaction from "./CreateReaction";
import { useCustomContext } from "../state/appContext";
import MessageReactions from "./MessageReactions";

const MessageBoard = () => {
  const {
    state: { messages, reactionsMap },
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
              <CreateReaction messageId={id} />
              <MessageReactions messageReactions={reactionsMap[id]} />
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MessageBoard;
