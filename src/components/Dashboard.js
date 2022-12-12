import React from "react";

import Topbar from "./Topbar";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const studentLogin = () => {
    navigate("/studentlogin");
  };
  const teachersLogin = () => {
    navigate("/teacherslogin");
  };
  return (
    <div id="wrapper">
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div
            class="container-fluid"
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5rem 25rem",
              alignItems: "center",
            }}
          >
            <div class="row">
              <div class="col">
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={teachersLogin}
                >
                  Login for
                  <br /> teacher
                </Button>{" "}
              </div>
              <div class="col">
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={studentLogin}
                >
                  Login for student
                </Button>
              </div>
            </div>
          </div>
          <div
            style={{
              fontWeight: "bolder",
              textAlign: "center",
              marginBottom: "10rem",
            }}
          >
            PLEASE SELECT RESPECTIVE LOGIN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
