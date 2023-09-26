import RegistrationForm from "./RegistrationForm";
import React, { useEffect, useState } from "react";
import GetAPIData from "./GetAPIData";
import axios from "axios";
const Register = () => {
  const [formData, setFormData] = useState("");
  const submitFormHandler = (formdata) => {
    setFormData((prevFormData) => [...prevFormData, formdata]);
  };
  return (
    <div>
      <RegistrationForm onSubmitForm={submitFormHandler} />
      <GetAPIData></GetAPIData>
    </div>
  );
};

export default Register;
