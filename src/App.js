import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About1 from "./Component/About1";
import Contact from './Component/Contact/Contact';
import HomePage from './Component/HomePage/Home';
import Login from './Component/LoginPage/Login';
import SignUp from "./Component/SignUp";
import SenHeader from "./Component/Whyssenchola/SenHeader";
import Form from './Component/form_page/Form';
import Service from './Component/service_page/ServiceApp';
import Navbar from './Navbar';
const App = () =>{
  return(
    <>
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/senheader"  element={<SenHeader/>} />
            <Route path="/about" element={<About1/>} />
            <Route path="/services" element={<Service/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path='/' element={<HomePage/>} exact />
          </Routes>
        </main>
      </div>
    </Router>
    </>
  )
}

export default App;
