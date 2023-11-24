import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import Header from "./NavbarComponent/Header";
import HomePage from "./page/HomePage";
import PlanTable from "./UserComponent/PlanTable";
import UserRegister from "./UserComponent/UserRegister";
import AdminDashboard from "./UserComponent/AdminDashboard";
import CustomerDashboard from "./UserComponent/CustomerDashboard";
import AgentDashboard from "./UserComponent/AgentDashboard";
import EmployeeDashboard from "./UserComponent/EmployeeDashboard";
import AdminRegisterForm from "./UserComponent/AdminRegisterForm";
import AdminHeader from "./NavbarComponent/AdminHeader";
import UserLoginForm from "./UserComponent/UserLoginForm";
import ViewSchemesComponent from "./UserComponent/ViewSchemesComponent";

import React from 'react';


import { useContext } from "react";
import { themeContext } from "./Context";
function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/admin-dashboard" element={<AdminHeader />} /> */}
        <Route path="/plan" element={<PlanTable />} />

        <Route path="/view-schemes/:planId" component={ViewSchemesComponent} />


        <Route path="about" element={<AboutUs />} />
        <Route path="/user/customer/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/admin/register" element={<AdminRegisterForm />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/agent/dashboard" element={<AgentDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
