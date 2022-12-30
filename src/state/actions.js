import { NEW_MESSAGE, SET_USERNAME } from "./types";
import { v4 as uuid } from "uuid";

export const newMessage = ({ text, username }) => ({
  type: NEW_MESSAGE,
  item: {
    id: uuid(),
    text,
    username,
    timeStamp: Date.now(),
  },
});

export const setUsername = (username) => ({
  type: SET_USERNAME,
  username,
});
