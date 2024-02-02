import React from "react";
import LogImage from "../assets/pngwing.com.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,

    watch,
  } = useForm();
  console.log(watch());
  const handleLogin = () => {
    axios
      .post("http://localhost:8080/api/auth/login", watch())
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex p-4 h-screen justify-center items-center bg-blue-100 ">
      <div className="flex  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   rounded-2xl overflow-hidden w-[60%] sm:w-[80%] h-[80%]">
        <div className="flex-1  flex items-center justify-center bg-white  ">
          <img
            src={LogImage}
            alt="bg"
            className=" w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 overflow-scroll">
          <MDBCard className="bg-white mx-auto w-full">
            <MDBCardBody className="p-5 w-100  d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Log in</h2>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="First Name"
                id="formControlLg"
                type="text"
                size="lg"
                {...register("firstName")}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Last Name"
                id="formControlLg"
                type="text"
                size="lg"
                {...register("lastName")}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="email"
                id="formControlLg"
                type="email"
                size="lg"
                {...register("email")}
              />

              <select
                {...register("userType")}
                className="select w-full mb-4 max-w-xs px-3 py-[12px] border-[1px] border-gray-300"
              >
                <option disabled selected>
                  how do define your self
                </option>
                <option>Patient</option>
                <option>Resercher</option>

                <option>healthcare providers</option>
              </select>
              <MDBInput
                {...register("password")}
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <MDBInput
                {...register("confirmPassword")}
                wrapperClass="mb-4 w-100"
                label="Confirm Password"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                className="mb-4"
                label="Remember password"
              />
              <span className="mb-3 ">
                Already have an account ?{" "}
                <span
                  className="cursor-pointer"
                  onClick={() => navigate("/signIn")}
                >
                  Signin
                </span>
              </span>

              <MDBBtn size="lg" onClick={() => handleLogin()}>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
