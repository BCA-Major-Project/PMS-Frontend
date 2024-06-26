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
            console.log("Your project", project)
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

export const getProjectByCategory = async(category)=>{
    category=category || '';
    try{
        return await axios.get(`${userUrl}/projects_by_category/${category}`);
    }catch(error){
        console.log('Error while calling getProject api',error.message);
    }
}
// export const deleteProject=async(uid)=>{
//     try{
//         return await axios.delete(`${userUrl}/projects/${uid}`);
//     }catch(error){
//         console.log("error while calling delete api",error.message);

//     }
// }
export const deleteProject = async (uid) => {
    try {
        return await axios.delete(`${userUrl}/projects/${uid}`);
    } catch (error) {
        console.log("error while calling delete api", error.message);
    }
};

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

export const getAssignedProjects = async(uid)=>{
    uid=uid || '';
    try{
        return await axios.get(`${userUrl}/user/${uid}/assigned_projects`);
    }catch(error){
        console.log('Error while calling getProject api',error.message);
    }
}

export const getAssignedUsers = async(pid)=>{
    pid=pid || '';
    try{
        return await axios.get(`${userUrl}/project/${pid}/assigned_users`);
    }catch(error){
        console.log('Error while calling getProject api',error.message);
    }
}

export const setUserOnline=async(uid)=>{
    const data = {"isOnline":1}
    try{
        return await axios.patch(`${userUrl}/set_user_online/${uid}`,data)
    }catch(error)
    {
        console.log('Error while calling adduser Api ',error.message);
    }
}
export const setUserOffline=async(uid)=>{
    const data = {"isOnline" : 0}
    try{
        return await axios.patch(`${userUrl}/set_user_online/${uid}`,data)
    }catch(error)
    {
        console.log('Error while calling adduser Api ',error.message);
    }
}

//comment

export const getComments = async(pid)=>{
    pid=pid|"";
    try{
        return await axios.get(`${userUrl}/comments/${pid}`);
    }catch(error){
        console.log('Error while calling getComment api',error.message);
    }
}

export const addComment=async(comment)=>{
    try{
        return await axios.post(`${userUrl}/comment`,comment)
        // console.log(comment)
    }catch(error)
    {
        console.log('Error while calling adduser Api ',error.message);
    }
}

// Email-related functions
// export const getUserEmailById=async(id)=>{
//     try {
//         const response = await axios.get(`${userUrl}/user/email/${id}`);
//         return response.data.email; // Adjust based on your API response structure
//     } catch (error) {
//         console.log('Error while calling getUserEmailById API', error.message);
//     }
// }

export const sendEmailOTP = async (data) => {
    try {
        console.log("data",data)
        const response = await axios.post('http://localhost:8090/pms/forgotpwd', data);
        return response.data; // Adjust based on your API response structure
    } catch (error) {
        console.log('Error while sending email OTP', error.message);
    }
}

// Change Password

export const changePassword = async (userId) => {
    try {
        const response = await axios.patch(`${userUrl}/user/newpwd/${userId}`);
        return response.data; // Adjust based on your API response structure
    } catch (error) {
        console.log('Error while calling changePassword API', error.message);
    }
}