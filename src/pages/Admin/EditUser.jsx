import { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, TextField, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getUser, editUser } from "../../service/api";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center", 
    minHeight: "100vh", 
  },
  formContainer: {
    width: "50%",
    padding: "30px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  inputLabel: {
    marginBottom: "10px",
  },
  submitButton: {
    marginTop: "20px",
    backgroundColor: "#4caf50",
    borderRadius: "20px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },
}));

const initialValues = {
  name: "",
  email: "",
  phno: "",
  password: "",
};

const EditUser = () => {
  const classes = useStyles();
  const [user, setUser] = useState(initialValues);
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await editUser(user, id);
    //Navigate('view');
  };

  return (
    <div className={classes.container}>
      <Box className={classes.formContainer}>
        <Typography variant="h3" align="center" gutterBottom>
          EDIT USER
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel className={classes.inputLabel}>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel className={classes.inputLabel}>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel className={classes.inputLabel}>Phno</InputLabel>
          <Input
              type="tel"
              onChange={(e) => {
                const inputValue = e.target.value;
                if (inputValue.length > 10) {
                  e.target.value = inputValue.slice(0, 10); // Limit input to first 10 characters
                }
                onValueChange(e);
              }}
              placeholder="Phone no"
              id="phno"
              value={user.phno}
            />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => onValueChange(e)}
            name="password"
            value={user.password}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Button onClick={addUserDetails} variant="contained" className={classes.submitButton} size="large" fullWidth>
            Edit User
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default EditUser;
