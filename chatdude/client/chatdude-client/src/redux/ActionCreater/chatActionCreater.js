import { chatAction } from "../Action/chatAction";
export const chatActionCreator = (chatdata) => {
  chatAction.payload = chatdata;
  return chatAction;
};
