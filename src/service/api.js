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


    export const addProject=async(project)=>{
        try{
            return await axios.post(`${userUrl}/project`,project)
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

export const getPublicUsers=async()=>{
    try{
        return await axios.get(`${userUrl}/userid`);
    }catch(error){
        console.log('Error while calling getPublicUsers api',error.message);
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
export const getAdminLogin=async(admid)=>{
    admid=admid || '';
    try{
        return await axios.get(`${userUrl}/admin/login/${admid}`);
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}
export const editUser=async(user,id)=>{
    try{
    return await axios.put(`${userUrl}/user`,user)
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


//project

export const getProject = async()=>{
    try{
        return await axios.get(`${userUrl}/projects`);
    }catch(error){
        console.log('Error while calling getProject api',error.message);
    }
}

export const deleteProject=async(uid)=>{
    try{
        return await axios.delete(`${userUrl}/projects/${uid}`);
    }catch(error){
        console.log("error while calling delete api",error.message);

    }
}
export const editProject=async(projects,uid)=>{
    try{
    return await axios.put(`${userUrl}/projects`,projects)
    }catch(error){
        console.log("error while calling update api",error.message);

    }
}
export const getProjectById = async(uid)=>{
    uid=uid || '';
    try{
        return await axios.get(`${userUrl}/projects/${uid}`);
    }catch(error){
        console.log('Error while calling getProject api',error.message);
    }
}

export const setUserOnline=async(uid)=>{
    data = {"isOnline":1}
    try{
        return await axios.patch(`${userUrl}/set_user_online/${uid}`,data)
    }catch(error)
    {
        console.log('Error while calling adduser Api ',error.message);
    }
}
export const setUserOffline=async(uid)=>{
    data = {"isOnline" : 0}
    try{
        return await axios.patch(`${userUrl}/set_user_online/${uid}`,data)
    }catch(error)
    {
        console.log('Error while calling adduser Api ',error.message);
    }
}