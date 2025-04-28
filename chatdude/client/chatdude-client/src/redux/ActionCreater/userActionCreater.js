import { userAction } from "../Action/userAction";
export const userActionCreator = (userdata) => {
  userAction.payload = userdata;
  return userAction;
};
