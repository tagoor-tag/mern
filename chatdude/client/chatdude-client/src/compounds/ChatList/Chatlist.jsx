import {useState} from 'react';
import "./Chatlist.css";
import { createChat } from '../../services/apiCalls/chat';

function Chatlist(props) {

  const [startchat, setStartChat] = useState(false);
  const startChat = async (id) => {
    try {
      var res = await createChat({ id: id });
      if (res.data.ok) {
        setStartChat(true);
      } else {
        throw Error("Failed Chat to Start");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to start chat");
    }
  };


  return (
    <div id='chat-list'>
      <div className="user-chat-list">
        <img src={props.image} alt="" />
        <div className='chat-list-details'>
          <h3>{props.name}</h3>
          <p>{props.message}</p>
        </div>
        <div className="startChat">
        {!startchat && <button onClick={startChat}>Start</button>}
      </div>
      </div>
    </div>
  )
}

export default Chatlist