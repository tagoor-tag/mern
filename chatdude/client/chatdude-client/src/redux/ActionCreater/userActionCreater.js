import { userAction , chatListAction } from "../Action/userAction";
export const userActionCreator = (userdata) => {
  userAction.payload = userdata;
  return userAction;
};
 
export const chatListActionCreater = (chatList) =>{
  chatListAction.payload = chatList;
  return chatListAction
}
