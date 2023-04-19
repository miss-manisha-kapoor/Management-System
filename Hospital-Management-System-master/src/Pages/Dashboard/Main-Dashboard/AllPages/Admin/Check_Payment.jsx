import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllPayments } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";
const Check_Payment = () => {
  const dispatch = useDispatch();
  const [payment, setpayment] = useState();
  useEffect(() => {
    dispatch(GetAllPayments()).then((res) => {
      setpayment([{patientName:"Ritika",department:"ENT",DoctorName:"Rajesh Mishra",patientMobile:1245362514,patientAge:22,date:"12-02-2002",amount:20050,status:"Success"}]);
    });
  }, []);
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>All Payments</h1>
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
                  {payment?.map((ele) => {
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

export default Check_Payment;
