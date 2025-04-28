import { messageAction } from "../Action/messageAction";
export const messageActionCreator = (messagedata) => {
  messageAction.payload = messagedata;
  return messageAction;
};
