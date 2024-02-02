import React, { useEffect, useState } from "react";
import { patientData } from "../assets/data/PatientData";
import { useLocation } from "react-router-dom";

const ResultDisplay = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("details");

  useEffect(() => {
    setCurrentData(patientData[paramValue]);
  }, [paramValue]);
  const [currentData, setCurrentData] = useState(patientData.pressure);
  return <div className="p-8">{currentData}</div>;
};

export default ResultDisplay;
