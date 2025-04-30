import axios from 'axios'

export const getLoggedUser = async ()=>{
    try{
      const data = await  axios.get("http://localhost:1010/api/users/getLoggedData", {
            headers:{
                Authorization : `Bearer ${localStorage.getItem('Token')}`
            }
        });

        return data;

    }catch(error){
        return error;
    }
}

export const getAllChatList = async ()=>{
    try{
        const data = await axios.get("http://localhost:1010/api/users/get-all",{
            headers:{
                Authorization : `Bearer ${localStorage.getItem('Token')}`
            }
        });

        return data;
    }
    catch(error){
        return error;
    }
}