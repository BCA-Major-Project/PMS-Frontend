import React, { useEffect, useState } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Typography, Paper } from "@mui/material";
import { getUsers, deleteUser } from "../../service/api.js";
import { Link } from "react-router-dom";
import "./Userdetails.css"; // Import the CSS file

const Userdetails = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersDetails();
    }, []);

    const getUsersDetails = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const deleteUserData = async (uid) => {
        try {
            await deleteUser(uid);
            getUsersDetails();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <Paper elevation={3} className="user-details-container">
            <div>
                <Typography variant="h4" className="user-details-heading">
                    USER DETAILS
                </Typography>
            </div>
            <Table className="user-details-table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.uid}>
                            <TableCell>{user.uid}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phno}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.password}</TableCell>
                            <TableCell>
                                <div className="btnn">
                                    
                                <Button
                                    component={Link}
                                    to={`/edit/${user.uid}`}
                                    variant="contained"
                                    color="primary"
                                    className="user-details-action-btn user-details-edit-btn"
                                >
                                    Edit
                                </Button>
                                
                                <Button
                                    onClick={() => deleteUserData(user.uid)}
                                    variant="contained"
                                    color="secondary"
                                    className="user-details-action-btn user-details-delete-btn"
                                >
                                    Delete
                                </Button>
                                <Button
                                    component={Link}
                                    to={`/projectdetails/${user.uid}`}
                                    variant="contained"
                                    color="primary"
                                    className="user-details-action-btn user-details-edit-btn"
                                >
                                    view projects
                                </Button>
                                
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default Userdetails;
