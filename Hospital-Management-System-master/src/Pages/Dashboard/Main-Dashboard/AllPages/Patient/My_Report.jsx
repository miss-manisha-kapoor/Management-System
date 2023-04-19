import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllReports } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import axios from "axios";
const My_Report = () => {
  const viewreport = (id) => {
    // disptach(viewreport(id));
  };
  const dispatch = useDispatch();
  const [prescription, setprescription] = useState();
  useEffect(() => {
    dispatch(GetAllReports()).then((res) => {
        setprescription(res);
        setprescription([{
          patientName : 'nitin',
          department : 'ophthaimologist',
          patientMobile : '03545267852',
          PatientAge : '25',
          patientDisease : 'other problem',
          date : '12-02-2023',


        }])
    });
  }, []);

  const ID = 1002;
  const submitHandler = (event) => {
    event.preventDefault();
    const base_url = `http://127.0.0.1:3001/patientReport/${ID}`;
    const body = 1002;
    console.log(body);
    axios
      .get(base_url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(JSON.stringify(body));
  };

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
                    <th>Patient Mobile</th>
                    <th>Patient Age</th>
                    <th>Patient Disease</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {prescription?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.patientName}</td>
                        <td>{ele.department}</td>
                        <td>{ele.patientMobile}</td>
                        <td>{ele.patientAge}</td>
                        <td>{ele.patientDisease}</td>
                        <td>{ele.date}</td>
                        <td>
                        <button
                            style={{
                              border: "none",
                              color: "red",
                              outline: "none",
                              background: "transparent",
                              cursor: "pointer",
                            }}
                            onClick={() => viewreport(ele._id)}
                          >
                            view
                          </button></td>
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

export default My_Report;
