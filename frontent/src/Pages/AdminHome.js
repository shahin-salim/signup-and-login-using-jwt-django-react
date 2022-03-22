import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@material-ui/core";
import Box from "@mui/material/Box";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import AlertBox from "../Components/AlertBox";
// import AlertBox from '../Components/AlertBox'
import LogoutPopup from "../Components/LogoutPopup";

import { useNavigate } from "react-router-dom";
import IsLoggedIn from "../IsLoggedIn";
import axios from "axios";
import Navbar from "../Components/Navbar";

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
     return { name, calories, fat, carbs, protein };
}

export default function AdminHome() {
     const navigate = useNavigate();

     const [userData, setUserData] = useState([]);

     React.useEffect(() => {
          axios({
               method: "get",
               url: "/admin_home",
               headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
          })
               .then((response) => {
                    setUserData(response.data);
               })
               .catch((error) => {
                    console.log(error.response.data);
                    localStorage.removeItem("access_token");
                    navigate("/login");
               });

          IsLoggedIn.find((value) => navigate(value));
     }, []);

     console.log(userData);

     return (
          <Box>

               <Navbar title="Admin Panel" />
               

               <TableContainer component={Paper} style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}>
                    <Table sx={{ minWidth: 650, width: "92%" }} aria-label="simple table">
                         <TableHead>
                              <TableRow>
                                   <TableCell align="right">No:</TableCell>
                                   <TableCell align="right">First name</TableCell>
                                   <TableCell align="right">Last name</TableCell>
                                   <TableCell align="right">Username</TableCell>
                                   <TableCell align="right">Email</TableCell>
                                   <TableCell align="right">Update</TableCell>
                                   <TableCell align="right">Delete</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {userData.map((data, index) => (
                                   <TableRow key={data.id}>
                                        <TableCell align="right">{index + 1}</TableCell>

                                        <TableCell align="right">{data.first_name}</TableCell>
                                        <TableCell align="right">{data.last_name}</TableCell>
                                        <TableCell align="right">{data.username}</TableCell>
                                        <TableCell align="right">{data.email}</TableCell>
                                        <TableCell align="right">
                                             <Button variant="contained" onClick={() => navigate(`/edit_user/${data.id}`)}>
                                                  Update
                                             </Button>
                                        </TableCell>
                                        <TableCell align="right">
                                             <AlertBox userId={data.id} userData={userData} setUserData={setUserData} />
                                        </TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
          </Box>
     );
}
