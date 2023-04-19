import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllReports } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";
const Prescription = () => {
  const dispatch = useDispatch();
  const [prescription, setprescription] = useState();
  useEffect(() => {
    dispatch(GetAllReports()).then((res) => {
        setprescription(res);
    });
  }, []);
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>All Prescriptions</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Department</th>
                    <th>Doctor Name</th>
                    <th>Patient Mobile</th>
                    <th>Patient Age</th>
                    <th>Date</th>
                    <th>Prescription</th>
                  </tr>
                </thead>
                <tbody>
                  {prescription?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.patient_name}</td>
                        <td>{ele.department}</td>
                        <td>{ele.doctor_name}</td>
                        <td>{ele.patient_mobile}</td>
                        <td>{ele.patient_age}</td>
                        <td>{ele.date}</td>
                        <td>{ele.medicines?.map((ele)=>{return (<>{ele.medName}: {ele.dosage} : {ele.duration}</>)})}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Prescription;
