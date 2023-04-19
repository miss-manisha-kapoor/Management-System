import { Table } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  DeleteAppointment,
  GetAllAppointment,
} from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import axios from "axios";

const Check_Appointment = () => {
  const { data } = useSelector((store) => store.auth);

  const disptach = useDispatch();

  const columns = [
    { title: "Patient Name", dataIndex: "patientName", key: "patientName" },
    { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Date", dataIndex: "date", key: "date" },
  ];

  const AllAppointment = useSelector((state) => state.data.Appointments);
const [d, setD] = useState([]);
  const DeleteAppoint = (id) => {
    disptach(DeleteAppointment(id));
    const base_url = `http://127.0.0.1:3001/deleteAppointment/${id}`;
    
    
   
    axios
      .delete(base_url, id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(JSON.stringify(id));
    console.log(id)
  };
  useEffect(() => {
    disptach(GetAllAppointment());
    console.log(AllAppointment)
  }, []);

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "doctor") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>Appointment Details</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Mobile</th>
                    <th>Disease</th>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Resolve</th>
                  </tr>
                </thead>
                <tbody>
                  {AllAppointment?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.patient_name}</td>
                        <td>{ele.contact_number}</td>
                        <td>{ele.type_of_disease}</td>
                        <td>{ele.department}</td>
                        <td>{ele.date_and_time}</td>
                        <td>
                          <button
                            style={{
                              border: "none",
                              color: "red",
                              outline: "none",
                              background: "transparent",
                              cursor: "pointer",
                            }}
                            onClick={() => DeleteAppoint(ele._id)}
                          >
                            Delete
                          </button>
                        </td>
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

export default Check_Appointment;
