import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllPayments } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";
const Payments = () => {
  const dispatch = useDispatch();
  const [Payments, setPayments] = useState();
  useEffect(() => {
    dispatch(GetAllPayments()).then((res) => {
        setPayments(res);
    });
  }, []);
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>My Reports</h1>
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
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Payments?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.patientName}</td>
                        <td>{ele.department}</td>
                        <td>{ele.DoctorName}</td>
                        <td>{ele.patientMobile}</td>
                        <td>{ele.patientAge}</td>
                        <td>{ele.date}</td>
                        <td>{ele.amount}</td>
                        <td>{ele.status}</td>
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
export default Payments;
