import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DeleteTeacher = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://6326f3875731f3db994ff99f.mockapi.io/teachers/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/delete-teacher"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default DeleteTeacher;