import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import MainPage from "../MainPage/MainPage";
import { Box } from "@mui/material";

const RouteController = () => (
  <Box style={{ padding: '20px' }}>
    <Routes>
      <Route exact path={'/home'} element={<MainPage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </Box>
)


export default RouteController;
