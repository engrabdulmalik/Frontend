import React from "react";
import "./RegistrationForm.css";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";

const RegistrationForm = () => {
  const [name, setName] = useState("PLease Enter Full Name");
  const [isName, setIsName] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(true);
  const [email, setEmail] = useState("Please Enter a valid Email ID");
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("PLease Enter Full Name");
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const [isPhoneNumberFocus, setIsPhoneNumberFocus] = useState(true);
  const [address, setAddress] = useState("PLease Enter Full Name");
  const [isAddress, setIsAddress] = useState(false);
  const [isAddressFocus, setIsAddressFocus] = useState(true);

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
    setIsName(e.target.value.length > 3 ? true : false);
  };

  const focusName = () => {
    setIsNameFocus(false);
  };

  const onAddressChangeHandler = (e) => {
    setAddress(e.target.value);
    setIsAddress(e.target.value.length > 3 ? true : false);
  };

  const focusAddress = () => {
    setIsAddressFocus(false);
  };

  const onPhoneNumberChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
    setIsPhoneNumber(
      e.target.value.length > 3 && e.target.value.length < 12 ? true : false
    );
  };

  const focusPhoneNumber = () => {
    setIsPhoneNumberFocus(false);
  };

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
    setIsEmail(
      e.target.value.length > 9 &&
        e.target.value.indexOf("@") > 1 &&
        e.target.value.indexOf(".com") > 1
        ? true
        : false
    );
  };

  const email_blur = () => {
    setIsEmailFocus(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isName && isEmail && isAddress && isPhoneNumber
      ? finalFunction()
      : alert("Please Fill All The Fields Correctly");
  };

  const finalFunction = () => {
    const formData = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
    };
    console.log(formData);
  };

  return (
    <>
      <Header></Header>
      <div id="res_main">
        <h1>Register NOW</h1>

        <form
          style={{
            display: "grid",
            Width: "400vw",
            gap: "2vw",
            width: "35vw",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="res-name" style={{ fontWeight: "bold" }}>
            {" "}
            Name:{" "}
          </label>

          <div>
            <input
              type="text"
              id="res-name"
              className="res_ip"
              onChange={onNameChangeHandler}
              onBlur={focusName}
              placeholder={name}
            />
            {!isName && !isNameFocus && (
              <p className="error_msg"> * Reuired Full Name</p>
            )}
          </div>

          <label htmlFor="res-mobnum" style={{ fontWeight: "bold" }}>
            {" "}
            Mobile Number:{" "}
          </label>

          <div>
            <input
              type="text"
              id="res-mobnum"
              className="res_ip"
              onChange={onPhoneNumberChangeHandler}
              onBlur={focusPhoneNumber}
              placeholder={phoneNumber}
            />
            {!isPhoneNumber && !isPhoneNumberFocus && (
              <p className="error_msg"> * Reuired Full Name</p>
            )}
          </div>

          <label htmlFor="res-address" style={{ fontWeight: "bold" }}>
            {" "}
            Address:{" "}
          </label>

          <div>
            <input
              type="text"
              id="res-address"
              className="res_ip"
              onChange={onAddressChangeHandler}
              onBlur={focusAddress}
              placeholder={address}
            />
            {!isAddress && !isAddressFocus && (
              <p className="error_msg"> * Reuired Full Address</p>
            )}
          </div>

          <label htmlFor="res-email" style={{ fontWeight: "bold" }}>
            {" "}
            Email:{" "}
          </label>

          <div>
            <input
              type="email"
              id="res-email"
              className="res_ip"
              onChange={onEmailChangeHandler}
              onBlur={email_blur}
              placeholder={email}
            />
            {!isEmail && !isEmailFocus && (
              <p className="error_msg"> * Please Enter a valid Email</p>
            )}
          </div>

          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <button
              type="submit"
              value="Make Your reservation"
              className="res_but"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default RegistrationForm;
