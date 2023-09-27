import RegistrationForm from "./RegistrationForm";
import React from "react";
import "./Register.css";
import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import GetAPIData from "./GetAPIData";
import StudentData from "./StudentData";
import axios from "axios";
const Register = () => {
  const [formData, setFormData] = useState("");
  const submitFormHandler = (formdata) => {
    setFormData((prevFormData) => [...prevFormData, formdata]);
  };

  return (
    <div>
      <div className="reg1">
        <div className="reg1">
          <Header />
        </div>
        <div className="reg2">
          <RegistrationForm onSubmitForm={submitFormHandler} />
        </div>
        <div className="reg3">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Register;
