import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { Box } from "@mui/material";
import MainPageContainer from "../../Containers/MainPageContainer";

const RouteController = () => (
  <Box style={{ padding: '20px' }}>
    <Routes>
      <Route exact path={'/home'} element={<MainPageContainer />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </Box>
)


export default RouteController;
