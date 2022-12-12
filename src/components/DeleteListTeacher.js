import React from 'react';
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar2 from './Sidebar2';
const DeleteListTeacher = () => {

    const [teachers, setTeachers] = useState([]);
    const navigate = useNavigate();

    function getTeachers() {
        fetch("https://6326f3875731f3db994ff99f.mockapi.io/teachers", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setTeachers(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getTeachers(), []);

    return (
        <div id="wrapper">
 <Sidebar2/>
    <div id="content-wrapper" class="d-flex flex-column">
                  
    <div id="content">
     
      <Topbar/>
                  <div class="container-fluid"style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"10rem"}}>
                  <div class="row">
      <div class="col">
      <div>
<table className="table table-striped">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Batches Assigned</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {teachers.map((teach) => {
            return (
                <tr>
                    <th scope="row">{teach.id}</th>
                    <td>{teach.name}</td>
                    <td>{teach.email}</td>
                    <td>{teach.phone}</td>
                    <td>{teach.batches}</td>
                    <td><Button variant="contained" onClick={() => navigate(`/delete-teacher/${teach.id}`)} color="error">
                        Delete
                    </Button></td>
                </tr>)
        })}
    </tbody>
</table>
</div>
      </div>
    </div>
                 
      
                      
  
                    
  
                  </div>
                  </div>
                  </div>
                  </div>
    )
}

export default DeleteListTeacher;
