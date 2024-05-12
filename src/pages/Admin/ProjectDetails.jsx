import React, { useEffect, useState } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Typography, Paper } from "@mui/material";
import { getProject} from "../../service/api.js";
import { Link } from "react-router-dom";
import "./ProjectDetails.css"; // Import the CSS file

const ProjectDetails = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        getProjectDetails();
    }, []);

    const getProjectDetails = async () => {
        try {
            const response = await getProject();
            setProject(response.data);
        } catch (error) {
            console.error("Error fetching project details:", error);
        }
    };

    // const deleteProjectData = async (id) => {
    //     try {
    //         await deleteProject(id);
    //         getProjectDetails();
    //     } catch (error) {
    //         console.error("Error deleting project:", error);
    //     }
    // };

    return (
        <Paper elevation={3} className="user-details-container">
            <div>
                <Typography variant="h4" className="user-details-heading">
                    PROJECT DETAILS
                </Typography>
            </div>
            <Table className="user-details-table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Details</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>User ID</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {project.map((project) => (
                        <TableRow key={project.id}>
                            <TableCell>{project.id}</TableCell>
                            <TableCell>{project.category}</TableCell>
                            <TableCell>{project.details}</TableCell>
                            <TableCell>{project.name}</TableCell>
                            <TableCell>{project.uid}</TableCell>

                            {/* <TableCell>
                                <div className="btn">
                                    <div className="btn1">
                                <Button
                                    component={Link}
                                    to={`/edit/${project.id}`}
                                    variant="contained"
                                    color="primary"
                                    className="user-details-action-btn user-details-edit-btn"
                                >
                                    Edit
                                </Button>
                                </div>
                                <div className="btn2">
                                <Button
                                    onClick={() => deleteProjectData(project.id)}
                                    variant="contained"
                                    color="secondary"
                                    className="user-details-action-btn user-details-delete-btn"
                                >
                                    Delete
                                </Button>
                                </div>
                                </div>
                            </TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default ProjectDetails;
