import axios from "axios";

const userUrl='http://localhost:8090/pms';

export const addUser=async(user)=>{
    try{
        return await axios.post(`${userUrl}/user`,user)
    }catch(error)
    {
        console.log('Error while calling adduser Api ',error.message);
    }

    }
export const getUsers=async()=>{
    
    try{
        return await axios.get(`${userUrl}/users`);
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}

export const getUser=async(id)=>{
        id=id || '';
        try{
            return await axios.get(`${userUrl}/users/${id}`);
        }catch(error){
            console.log('Error while calling getUsers api',error.message);
        }
}

export const getLogin=async(email)=>{
    email=email || '';
    try{
        return await axios.get(`${userUrl}/user/${email}`);
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}

export const editUser=async(user,id)=>{
    try{
    return await axios.put(`${userUrl}/user` ,user)
    }catch(error){
        console.log("error while calling update api",error.message);

    }
}


export const deleteUser=async(id)=>{
    try{
        return await axios.delete(`${userUrl}/user/${id}`);
    }catch(error){
        console.log("error while calling delete api",error.message);

    }
}