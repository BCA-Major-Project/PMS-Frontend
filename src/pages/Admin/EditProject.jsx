import { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, TextField, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getProject, editProject } from "../../service/api";
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
  details: "",
  category: "",
  name: "",
};

const EditProject = () => {
  const classes = useStyles();
  const [project, setProject] = useState(initialValues);
  const { id } = useParams();

  useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    let response = await getProject(id);
    setProject(response.data);
  };

  const onValueChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const addProjectDetails = async () => {
    await editProject(project, uid);
    //Navigate('view');
  };

  return (
    <div className={classes.container}>
      <Box className={classes.formContainer}>
        <Typography variant="h3" align="center" gutterBottom>
          EDIT PROJECT
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel className={classes.inputLabel}>Details</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="details" value={project.details} />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel className={classes.inputLabel}>Category</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="category" value={project.category} />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel className={classes.inputLabel}>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={project.name} />
        </FormControl>
        
        <FormControl fullWidth margin="normal">
          <Button onClick={addProjectDetails} variant="contained" className={classes.submitButton} size="large" fullWidth>
            Edit Project
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default EditProject;
