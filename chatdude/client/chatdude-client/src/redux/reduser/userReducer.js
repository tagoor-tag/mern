const LOGIN_USER = "LoginUser";
const CHAT_LIST = "chatlist";

const initialState ={
  user : null,
  chatList: []
}


const userReducer = (state = initialState, action) => {
  switch (action.type){
    case LOGIN_USER:
      return{
        ...state ,
        user: action.payload,
      };

      case CHAT_LIST :
        return{
          ...state,
          chatList: action.payload,
        };
       default:
         return state;
  }
};

export default userReducer;
