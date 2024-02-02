import React from "react";
import LogImage from "../assets/pngwing.com.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    await axios
      .post("http://localhost:8080/api/auth/signIn", watch())
      .then((res) => {
        localStorage.setItem("user", res.data.userType);
        navigate("/");
      })
      .catch((err) => toast.warning("username and password is not match"));
  };
  const {
    register,

    watch,
  } = useForm();
  console.log(watch());
  return (
    <div className="flex p-4 h-screen justify-center items-center bg-blue-100 ">
      <div className="flex  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   rounded-2xl overflow-hidden w-[60%] h-[80%]">
        <div className="flex-1 flex items-center justify-center bg-white  ">
          <img
            src={LogImage}
            alt="bg"
            className=" w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 ">
          <MDBCard className="bg-white mx-auto" style={{ maxWidth: "500px" }}>
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                {...register("email")}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                {...register("password")}
              />
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                className="mb-2"
                label="Remember password"
              />
              <span className="mb-3 ">
                TO create account ?{" "}
                <span
                  className="cursor-pointer"
                  onClick={() => navigate("/logIn")}
                >
                  Login
                </span>
              </span>
              <MDBBtn size="lg" onClick={() => handleSubmit()}>
                Login
              </MDBBtn>
              <hr className="my-4" />
              <MDBBtn
                className="mb-2 w-100"
                size="lg"
                style={{ backgroundColor: "#dd4b39" }}
              >
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with google
              </MDBBtn>
              <MDBBtn
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#3b5998" }}
              >
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Sign in with facebook
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
