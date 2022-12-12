
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DeleteStudent = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://6326f3875731f3db994ff99f.mockapi.io/student/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/delete-student"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default DeleteStudent;