import React from "react";
import './Service.css'; 
import Banner from "./Banner"; 
import Services from "./Services";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import Footer from '../../Component/Footer'

function ServiceApp() {
  return (
    <div className="App">
       <Banner/>
       <Services/> 
       <Footer/>

    </div>
     
   

  );
}


export default ServiceApp; 

