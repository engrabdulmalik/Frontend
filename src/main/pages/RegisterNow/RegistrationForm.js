import React from "react";
import "./RegistrationForm.css";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";

const RegistrationForm = (props) => {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const [isPhoneNumberFocus, setIsPhoneNumberFocus] = useState(true);
  const [address, setAddress] = useState("");
  const [isAddress, setIsAddress] = useState(false);
  const [isAddressFocus, setIsAddressFocus] = useState(true);
  const [checked, setChecked] = useState("");
  const [courses, setCourses] = useState("Full Stack Web Development");
  const [lecture1, setLecture1] = useState("Not Interested");
  const [lecture2, setLecture2] = useState("Not Interested");

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
    setIsName(e.target.value.length > 3 ? true : false);
  };

  const onCheckedChangeHandler = (e) => {
    if (e.target.checked && e.target.name === "weekday") {
      setChecked([...checked, e.target.value]);
      setLecture2("Weekday");
    } else if (e.target.checked && e.target.name === "weekend") {
      setChecked([...checked, e.target.value]);
      setLecture1("Weekend");
    } else {
      setChecked(checked.filter((item) => item !== e.target.value));
    }
  };

  const onCoursesChangeHandler = (e) => {
    setCourses(e.target.value);
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

  function getCsrfTokenFromCookie() {
    // Split the cookies into an array
    const cookies = document.cookie.split(";");

    // Loop through the cookies to find the CSRF token cookie
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "csrftoken") {
        // Return the value of the csrf token cookie
        return value;
      }
    }

    // If the CSRF token cookie is not found, return null or handle the error as needed
    return null;
  }
  const handleSubmit = async (e) => {
    const isLecture =
      lecture1 !== "Not Interested" || lecture2 !== "Not Interested"
        ? true
        : false;
    if (isName && isEmail && isAddress && isPhoneNumber && isLecture) {
      e.preventDefault();

      const formData = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        courses: courses,
        lecture1: lecture1,
        lecture2: lecture2,
      };

      try {
        const response = await fetch("/api/register/", {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCsrfTokenFromCookie(),
          },
          body: JSON.stringify(formData),
        });
      } catch (error) {}

      props.onSubmitForm(formData);
      setName(" ");
      setEmail(" ");
      setAddress(" ");
      setPhoneNumber(" ");
    } else {
      alert("All fields Required Kindly fill them to proceed");
    }
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
              value={name}
              // placeholder={name}
            />
            {!isName && !isNameFocus && (
              <p className="error_msg"> * Required Full Name</p>
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
              <p className="error_msg"> * Required Mobile Number</p>
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
              <p className="error_msg"> * Required Full Address</p>
            )}
          </div>

          <label htmlFor="res-courses" style={{ fontWeight: "bold" }}>
            {" "}
            Select Course:{" "}
          </label>
          <div>
            <select
              className="res_ip"
              id="res-courses"
              value={courses}
              onChange={onCoursesChangeHandler}
            >
              <option value="Full Stack Web Development">
                Full Stack Web Development
              </option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Programming in Python">
                Programming in Python
              </option>
            </select>
          </div>

          <label htmlFor="res-timings" style={{ fontWeight: "bold" }}>
            {" "}
            Lecture Selection:{" "}
          </label>
          <div>
            <input
              value={checked}
              type="checkbox"
              id="res-timings"
              name="weekday"
              onChange={onCheckedChangeHandler}
            />
            <span>Weekday (6PM - 9PM)</span>
          </div>
          <div>
            <input
              value={checked}
              type="checkbox"
              id="res-timings2"
              name="weekend"
              onChange={onCheckedChangeHandler}
            />
            <span>Weekend (11AM - 2PM)</span>
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
