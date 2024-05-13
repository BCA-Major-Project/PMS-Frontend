import React, { useEffect, useState } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Typography, Paper } from "@mui/material";
import { getProjectById , deleteProject} from "../../service/api.js";
import { Link } from "react-router-dom";
import "./ProjectDetails.css"; // Import the CSS file
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const [project, setProject] = useState([]);
    const {uid} = useParams();
    console.log(uid)
    useEffect(() => {
        getProjectDetails();
    }, []);

    const getProjectDetails = async () => {
        try {
            const response = await getProjectById(uid);
            setProject(response.data);
        } catch (error) {
            console.error("Error fetching project details:", error);
        }
    };

    const deleteProjectData = async (id) => {
        try {
            await deleteProject(id);
            getProjectDetails();
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

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
                        {/* <TableCell>Assigned To</TableCell> */}
                        <TableCell>Category</TableCell>
                        <TableCell>Details</TableCell>
                        <TableCell>Due Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>User ID</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {project.map((data) => (
                        <TableRow key={data.id}>
                            <TableCell>{data.id}</TableCell>
                            {/* <TableCell>{project.assingned_to}</TableCell> */}
                            <TableCell>{data.category}</TableCell>
                            <TableCell>{data.details}</TableCell>
                            <TableCell>{data.due_date}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.uid}</TableCell>
                            <TableCell>
                                <div className="btn">
                                    <div className="btn1">
                                <Button
                                    component={Link}
                                    to={`/editproject/${data.id}`}
                                    variant="contained"
                                    color="primary"
                                    className="user-details-action-btn user-details-edit-btn"
                                >
                                    Edit
                                </Button>
                                </div>
                                <div className="btn2">
                                <Button
                                    onClick={() => deleteProjectData(project.uid)}
                                    variant="contained"
                                    color="secondary"
                                    className="user-details-action-btn user-details-delete-btn"
                                >
                                    Delete
                                </Button>
                                </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default ProjectDetails;
