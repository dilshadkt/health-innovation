import MyContext from "./components/context/Context";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import SignIn from "./pages/auth/SignIn";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/patients/Layout";
import { useState } from "react";
import ExploreMore from "./pages/Home/ExploreMore";
import LandPage from "./pages/Home/LandPage";
function App() {
  const [sideNavSelecte, setSideNavSelecte] = useState("pressure");
  const dataTopass = {
    sideNavSelecte: sideNavSelecte,
    setSideNavSelecte: setSideNavSelecte,
  };
  return (
    <>
      <MyContext.Provider value={dataTopass}>
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/" element={<ExploreMore />} />
          <Route path="/Resercher" element={<LandPage />} />
          <Route path="/patient" element={<Layout />}>
            <Route />
          </Route>
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
