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