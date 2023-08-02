import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { form } from "./styles.js";
import { useState } from "react";

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    console.log(username);
    console.log(password);
  }


  useEffect(() => {
    console.log("Login component mounted");
  }, []);

  return (
    <div>
      <form action="" style={form}>
        <TextField
          style={{ marginBottom: "10px" }}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value = {username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          style={{ marginBottom: "10px" }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value = {password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outlined" onClick={handleClick}>Primary</Button>
      </form>
    </div>
  );
};

export default Login;
