import React, { useState } from 'react';
import Sidebar from '../../GlobalFiles/Sidebar';
import "./Accountant.css";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
const notify = (text) => toast(text);
const Generate_Bills = () => {
  const [doctorFee, setDoctorFee] = useState(0);
  const [roomCharge, setRoomCharge] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const calculateTotalBill = () => {
    const total = Bill.doctorFee + Bill.roomCharge;
    setTotalBill(total);
  };
  const GenerateBillHanler = (e) => {
    e.preventDefault();
    alert("Bill created")
    submitHandler(e)
  }
  const InitData = {
    patientName: "",
    patientID: "",
    patientMobile: "",
    patientAge: "",
    doctorName: "",
    department: "",
    doctorFee: "",
    roomCharge: "",
    CheckupCost: "",
    date: "",
  };
  const [Bill, setBill] = useState(InitData);
  const HandleChange = (e) => {
    console.log("Working",e.target.value    )
    setBill({ ...Bill, [e.target.name]: e.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const base_url = "http://127.0.0.1:3001/generateBill";
    const body = InitData;
    console.log(body);
    axios
      .post(base_url, body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(JSON.stringify(body));
  };
  return (
    <div className='Bill_main'>
    <Sidebar className="Bill_sidebar"></Sidebar>
    <div className='Bill_inner'>
      <h1>Hospital Bill Generator</h1>
      <form>
        <label htmlFor="patientName">Patient Name:</label>
        <input
          type="text"
          id="patientName"
          name='patientName'
          value={Bill.patientName}
          onChange={HandleChange}/>
        <br />
        <label htmlFor="patientName">Patient ID:</label>
        <input
          type="number"
          id="patientID"
          name='patientID'
          value={Bill.patientID}
          onChange={HandleChange}/>
        <br /><label htmlFor="patientName">Patient Mobile:</label>
        <input
          type="number"
          id="patientMobile"
          name='patientMobile'
          value={Bill.patientMobile}
          onChange={HandleChange}/>
        <br />
        <label htmlFor="patientName">Patient Age:</label>
        <input
          type="number"
          id="patientAge"
          name='patientAge'
          value={Bill.patientAge}
          onChange={HandleChange}/>
        <br />
        <label htmlFor="doctorFee">Doctor Name:</label>
        <input
          type="text"
          id="doctorName"
          name='doctorName'
          value={Bill.doctorName}
          onChange={HandleChange}/>
        <br />
        <label htmlFor="doctorFee">Department:</label>
        <input
          type="text"
          id="department"
          name='department'
          value={Bill.department}
          onChange={HandleChange} />
        <br />
        <label htmlFor="doctorFee">Doctor Fee:</label>
        <input
          type="number"
          id="doctorFee"
          name='doctorFee'
          value={Bill.doctorFee}
          onChange={HandleChange} />
        <br />
        <label htmlFor="roomCharge">Room Charge:</label>
        <input
          type="number"
          id="roomCharge"
          name='roomCharge'
          value={Bill.roomCharge}
          onChange={HandleChange} />
        <br />
        <label htmlFor="medicineCost">Checkup Cost:</label>
        <input
          type="number"
          id="CheckupCost"
          name='CheckupCost'
          value={Bill.checkupCost}
          onChange={HandleChange}/>
        <br />
        <label htmlFor="doctorFee">Date:</label>
        <input
          type="date"
          id="date"
          name='date'
          value={Bill.date}
          onChange={HandleChange}/>
        <br />
        <button type="button" className='calculateBillButton' onClick={calculateTotalBill}>
          Calculate Total Bill
        </button>
        <h2>Total Bill: ${totalBill}</h2>
        <button className='generateBillButton' onClick={GenerateBillHanler}>Generate Bill</button>
      </form>
    </div>
    </div>
  );
};
export default Generate_Bills;