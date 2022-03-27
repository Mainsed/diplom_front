import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { Box } from "@mui/material";
import MainPageContainer from "../../Containers/MainPageContainer";
import Cooperation from "../Cooperation/Cooperation";
import EntrantContainer from "../../Containers/EntrantContainer";
import EmploymentContainer from "../../Containers/EmploymentContainer";
import FAQContainer from "../../Containers/FAQContainer";
import AdminPanelContainer from "../../Containers/AdminPanelContainer";

const RouteController = () => (
  <Box style={{ padding: '20px' }}>
    <Routes>
      <Route exact path={'/home'} element={<MainPageContainer />} />
      <Route exact path={'/cooperation'}element={<Cooperation />} />
      <Route exact path={'/forentrant'}element={<EntrantContainer />} />
      <Route exact path={'/employment'}element={<EmploymentContainer />} />
      <Route exact path={'/faq'}element={<FAQContainer />} />
      <Route exact path={'/admin'}element={<AdminPanelContainer />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </Box>
)


export default RouteController;
