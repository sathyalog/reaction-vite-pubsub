import { useReducer, useEffect } from "react";
import reducer, { initialState } from "../state/reducer";
import PubSub from "../pubsub";
import MessageBoard from "./MessageBoard";
import PublishMessage from "./PublishMessages";
import AppContext from "../state/appContext";
import SetUsername from "./SetUsername";

const pubsub = new PubSub();

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

  return (
    <AppContext.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <hr />
      <SetUsername />
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </AppContext.Provider>
  );
}

export default App;
