import React from "react";
import BookList from "./BookList";
import Sidebar from "./Sidebar";
import { Container, Stack } from "@mui/material";

const Main = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <BookList />
      </Stack>
    </>
  );
};

export default Main;
