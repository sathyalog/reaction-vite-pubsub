import { useReducer, useEffect } from "react";
import reducer, { initialState } from "../state/reducer";
import PubSub from "../pubsub";
import MessageBoard from "./MessageBoard";
import PublishMessage from "./PublishMessages";
import AppContext from "../state/appContext";

const pubsub = new PubSub();

setTimeout(() => {
  pubsub.publish({
    type: "foo",
    value: "bar",
  });
}, 1000);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: (messageObject) => {
        const { channel, message } = messageObject;
        console.log("Received message", channel, message);
        dispatch(message);
      },
    });
  }, []);

  // const providerState = {
  //   state,
  //   dispatch,
  // };
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </AppContext.Provider>
  );
}

export default App;
