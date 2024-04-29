import styled from "@emotion/styled";
import { useState ,useEffect} from "react";
import { FormControl, FormGroup, InputLabel, Input, TextField, Typography ,Button} from "@mui/material";
import { getUser,editUser } from "../../service/api";
import { Navigate, useParams } from "react-router-dom";
const Container= styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&>div{
    margin-top:20px
}`
const initialValues={
    name: '',
    email: '',
    phno: '',
    password: ''
}
const EditUser=()=>{
    const [user,setUser]=useState(initialValues)
    const {id}=useParams();

    useEffect(()=>{
        getUserData();
    },[])

    const getUserData=async()=>{
        let response=await getUser(id);
        console.log(response);
       setUser(response.data);

    }

    const onValueChange=(e)=>{
       
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    const addUserDetails=async()=>{
      await editUser(user,id);
      //Navigate('view');

    }
    return(
        //<p>Hello Register</p>
        <Container>
           
            <Typography variant="h3">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
               <Input onChange={(e)=> onValueChange(e)}name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email </InputLabel>
                <Input onChange={(e)=> onValueChange(e)}name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phno</InputLabel>
                <Input onChange={(e)=> onValueChange(e)}name="phno" value={user.phno}/>
            </FormControl>
            <FormControl>
            <TextField id="outlined-password-input"
             label="Password" 
            type="password"
            autoComplete="current-password" onChange={(e)=> onValueChange(e)}name="password" value={user.password}/>
         </FormControl>
         <FormControl>
         <Button onClick={()=>addUserDetails()}variant="contained">EditUser</Button>
         </FormControl>
        </Container>
    )
}
export default EditUser;