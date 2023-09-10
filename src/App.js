import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About1 from "./Component/AboutPage/About1";
import Contact from './Component/Contact/Contact';
import GeneratePassword from './Component/GeneratePassword/GeneratePassword';
import HomePage from './Component/HomePage/Home';
import Login from './Component/LoginPage/Login';
import SignUp from "./Component/SignUp";
import SenHeader from "./Component/Whyssenchola/SenHeader";
import Form from './Component/form_page/Form';
import Service from './Component/service_page/ServiceApp';
// import Navbar from './Navbar';
import Dashboard from "./Component/Dashboard/UserDashBoard/DashBoard/MainPage";
import ProtectdRoute from "./Component/RouteComponents/ProtectdRoute";
// import { useAuth } from './auth';
import Admindashboard from './Component/Dashboard/AdminDashboard/DashBoard/MainPage';
import Email from './Component/ForgetPage/Emailget';
import ForgetPassword from './Component/ForgetPage/Forgot';
import NewPassword from './Component/ForgetPage/NwPassword';
import Reset from './Component/ForgetPage/Reset';
import LogOut from './Component/LogOut';
import RouteOutlet from './Component/RouteComponents/RouteOutlet';

function App() {

 
  return (
    <>

      <Router Router basename="/">
        <div>
          
          <div>
            <main>
              <Routes>
                <Route path='/' element={<RouteOutlet />}>
                  <Route path="/senheader" element={<SenHeader />} />
                  <Route path="/about" element={<About1 />} />
                  <Route path="/services" element={<Service />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path='/forgot-password' element={<ForgetPassword />} />
                  <Route path='/emailget' element={<Email />} />
                  <Route path='/reset-password/:email/:token' element={<NewPassword />} />
                  <Route path='/resetsuccess' element={<Reset />} />
                  <Route path='/logout' element={<LogOut />} />

                  
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/generate-password/:token" element={<GeneratePassword />} />
                  <Route path='/' element={<HomePage />} exact />

                </Route>
                <Route path="/dashboard"
                  element={
                    <ProtectdRoute>
                      <Dashboard />
                    </ProtectdRoute>} />
                    <Route path="/admin-dashboard"
                  element={
                    <ProtectdRoute>
                   <Admindashboard />
                    </ProtectdRoute>} />
              </Routes>

            </main>
          </div>

        </div >
      </Router >








    </>
  );

}

export default App;

