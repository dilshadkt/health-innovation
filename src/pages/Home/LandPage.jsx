import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import Nav from "../patients/Nav";
const LandPage = () => {
  return (
    <>
      <Nav />
      <div className="w-full flex h-screen">
        <div className="flex-initial w-[20%] border h-full flex items-start mt-4 ">
          <div className="w-full">
            <div className="py-3 cursor-pointer my-2 rounded-xl flex items-center justify-center  bg-slate-200 hover:bg-slate-300 font-medium  w-full">
              dashboard
            </div>
            <div className="py-3 cursor-pointer my-2 rounded-xl flex items-center justify-center bg-slate-200 hover:bg-slate-300 font-medium   w-full">
              dashboard
            </div>
            <div className="py-3 cursor-pointer my-2 rounded-xl flex items-center justify-center bg-slate-200 hover:bg-slate-300 font-medium   w-full">
              dashboard
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-9">
          <MDBCol md="6" lg="7" xl="8">
            <MDBTypography listUnStyled>
              <li className="d-flex justify-content-between mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                  alt="avatar"
                  className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                  width="60"
                />
                <MDBCard>
                  <MDBCardHeader className="d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">Brad Pitt</p>
                    <p className="text-muted small mb-0">
                      <MDBIcon far icon="clock" /> 12 mins ago
                    </p>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </li>
              <li class="d-flex justify-content-between mb-4  ">
                <MDBCard className="w-100">
                  <MDBCardHeader className="d-flex justify-content-between p-3">
                    <p class="fw-bold mb-0">Lara Croft</p>
                    <p class="text-muted small mb-0">
                      <MDBIcon far icon="clock" /> 13 mins ago
                    </p>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <p className="mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </p>
                  </MDBCardBody>
                </MDBCard>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                  alt="avatar"
                  className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                  width="60"
                />
              </li>
              <li className="d-flex justify-content-between mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                  alt="avatar"
                  className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                  width="60"
                />
                <MDBCard>
                  <MDBCardHeader className="d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">Brad Pitt</p>
                    <p className="text-muted small mb-0">
                      <MDBIcon far icon="clock" /> 10 mins ago
                    </p>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </li>
            </MDBTypography>
          </MDBCol>
        </div>
        <div className=" flex-initial w-[20%] border"> </div>
      </div>
    </>
  );
};

export default LandPage;
