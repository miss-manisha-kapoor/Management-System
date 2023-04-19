import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome_Page from '../Pages/Dashboard/Main-Dashboard/GlobalFiles/Welcome_Page';
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import Add_Accountant from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Accountant";
import Add_Ambulance from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Ambulance";
import AddDoctor from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Doctor";
import Add_Receptionist from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Receptionist";
import Check_Payment from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Check_Payment";
import AllReport from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/AllReport";
import Check_Appointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Check_Appointment";
import Discharge_and_Create_Slip from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Discharge_and_Create_Slip";
import Doctor_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Doctor_Profile";
import Patient_Details from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Patient_Details";
import Patient_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Patient/Patient_Profile";
import Add_Patient from "../Pages/Dashboard/Main-Dashboard/AllPages/Receptionist/Add_Patient";
import Book_Appointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Receptionist/Book_Appointment";
import Receptionist_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Receptionist/Receptionist_Profile";
import FrontPage from "../Pages/Dashboard/Main-Dashboard/GlobalFiles/FrontPage";
import Appointment_book from "../Pages/Dashboard/Main-Dashboard/AllPages/Patient/Appointment_Book";
import Payment from "../Pages/Dashboard/Main-Dashboard/AllPages/Patient/Payment";
import My_Report from "../Pages/Dashboard/Main-Dashboard/AllPages/Patient/My_Report";
import Prescription from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Prescription";
import Payments from "../Pages/Dashboard/Main-Dashboard/AllPages/Accountant/Payments"
import Accountant_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Accountant/Accountant_Profile"
import Generate_Bills from "../Pages/Dashboard/Main-Dashboard/AllPages/Accountant/Generate_Bills"
const AllRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Welcome_Page />} />
        <Route path="dlogin" element={<DLogin />} />
        <Route path="/dashboard" element={<FrontPage />} />
        <Route path="/adddoctor" element={<AddDoctor />} />
        <Route path="/addambulance" element={<Add_Ambulance />} />
        <Route path="/addReceptionist" element={<Add_Receptionist />} />
        <Route path="/addaccountant" element={<Add_Accountant />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/checkpayment" element={<Check_Payment />} />
        ********** Doctor Part **************
        <Route path="/reports" element={<AllReport />} />
        <Route path="/checkappointment" element={<Check_Appointment />} />
        <Route path="/createslip" element={<Discharge_and_Create_Slip />} />
        <Route path="/patientdetails" element={<Patient_Details />} />
        <Route path="/doctorprofile" element={<Doctor_Profile />} />

      ******* Receptionist Part *******
        <Route path="/addpatient" element={<Add_Patient />} />
        <Route path="/bookappointment" element={<Book_Appointment />} />
        <Route path="/Receptionistprofile" element={<Receptionist_Profile />} />
        *********Patient Part ***********
        <Route path="/patientprofile" element={<Patient_Profile />} />
        <Route path="/appointment_Book" element={<Appointment_book />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/myreport" element={<My_Report />} />
        ***********Accountant************
        <Route path="/payments" element={<Payments/>} />
        <Route path="/generatebills" element={<Generate_Bills/>} />
        <Route path="/accountantprofile" element={<Accountant_Profile />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

