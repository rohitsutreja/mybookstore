import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";


const NavBar = () => {
  const { loggedInUser } = useAuth();
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          height: "60px",
          bgcolor: "black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" sx={{ color: "white" }}>
          theBookSTORE
        </Typography>

        <ul
          className="navlist"
          style={{ listStyle: "none", display: "flex", fontSize: "1.2rem" }}
        >
          <li></li>

          <li>
            <Link className="navitem" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="navitem" to="/books">
              Books
            </Link>
          </li>
          <li>
            <Link className="navitem" to="/about">
              About
            </Link>
          </li>
          {!loggedInUser ? (
            <li>
              <Link className="navitem" to="/Login">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <Link className="navitem" to="/logout">
                <Avatar sx={{ backgroundColor: "orange" }}>
                  {loggedInUser.firstName.split("")[0].toUpperCase()}
                </Avatar>
              </Link>
            </li>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
