import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { BsBookmarkPlus, BsFillBookmarkCheckFill} from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHospitalUser } from "react-icons/fa";
import { TbReportMedical, TbListDetails } from "react-icons/tb";
import { FaHandHoldingMedical } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { TbBed } from "react-icons/tb";
import { FaFileInvoice } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import {RiWechatPayFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    data: { user },
  } = useSelector((state) => state.auth);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div>
        <div style={{ width: isOpen ? "250px" : "70px" }} className={`sidebar`}>
          <div className="top_section">
            <h5 style={{ display: isOpen ? "block" : "none" }} className="logo">
            SecureLife Hospital
            </h5>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <ImMenu onClick={toggle} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="bottomSection">
            <Link className="link" activeclassname="active" to={"/dashboard"}>
              <div className="icon">
                <MdDashboardCustomize className="mainIcon" />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                DashBoard
              </div>
            </Link>

            {user?.userType === "" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/Receptionistprofile"}
              >
                <div className="icon">
                  <CgProfile className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null}
            {user?.userType === "" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/addpatient"}
              >
                <div className="icon">
                  <FaHospitalUser className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Patient
                </div>
              </Link>
            ) : null}

            {user?.userType === "" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/reports"}
              >
                <div className="icon">
                  <TbReportMedical className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Reports
                </div>
              </Link>
            ) : null}

            {user?.userType === "" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/bookappointment"}
              >
                <div className="icon">
                  <BsBookmarkPlus className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Appointments
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/addoctor"}>
                <div className="icon">
                  <AiOutlineUserAdd className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Doctor
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/addReceptionist"}>
                <div className="icon">
                  <FaUser className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Receptionist
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/admin"}>
                <div className="icon">
                  <RiAdminLine
                    className="mainIcon"
                    style={{ color: "white" }}
                  />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Accountant
                </div>
              </Link>
            ) : null}

            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/prescription"}>
                <div className="icon">
                  <FaHandHoldingMedical className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                prescription List
                </div>
              </Link>
            ) : null}

            {user?.userType === "admin" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/addambulance"}
              >
                <div className="icon">
                  <FaAmbulance className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add AMBU
                </div>
              </Link>
            ) : null}

            {user?.userType === "admin" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/checkpayment"}
              >
                <div className="icon">
                  <RiSecurePaymentLine className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                   Payments
                </div>
              </Link>
            ) : null}

            {user?.userType === "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/doctorprofile"}
              >
                <div className="icon">
                  <SlUserFollow className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null}
            {/* <Link className="link" activeclassname="active" to={"/rooms"}>
              <div className="icon">
                <MdBedroomChild className="mainIcon" />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Beds
              </div>
            </Link> */}
            {user?.userType === "doctor" ? (
              <Link className="link" activeclassname="active" to={"/reports"}>
                <div className="icon">
                  <TbReportMedical className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Reports
                </div>
              </Link>
            ) : null}
            {user?.userType === "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/checkappointment"}
              >
                <div className="icon">
                  <BsFillBookmarkCheckFill className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Appointments
                </div>
              </Link>
            ) : null}
            {user?.userType === "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/createslip"}
              >
                <div className="icon">
                  <BiDetail className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Create Report
                </div>
              </Link>
            ) : null}
            {user?.userType == "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/patientdetails"}
              >
                <div className="icon">
                  <TbListDetails className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Patients
                </div>
              </Link>
            ) : null}

            {user?.userType === "Patient" ? (
              <Link className="link" activeclassname="active" to={"/Patientprofile"}>
                <div className="icon">
                  <CgProfile className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null}

            {user?.userType === "Patient" ? (
              <Link className="link" activeclassname="active" to={"/finddoctor"}>
                <div className="icon">
                  <AiOutlineUserAdd className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                 Find Doctor
                </div>
              </Link>
            ) : null}

            {user?.userType === "Patient" ? (
              <Link className="link" activeclassname="active" to={"/appointmentbook"}>
                <div className="icon">
                  <BsFillBookmarkCheckFill className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                 Appointment Book
                </div>
              </Link>
            ) : null}

            {user?.userType === "Patient" ? (
              <Link className="link" activeclassname="active" to={"/payment"}>
                <div className="icon">
                  <RiSecurePaymentLine className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                 Payment
                </div>
              </Link>
            ) : null}

            {user?.userType === "Patient" ? (
              <Link className="link" activeclassname="active" to={"/report"}>
                <div className="icon">
                  <TbReportMedical className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Report
                </div>
              </Link>
            ) : null}
            {user?.userType === "" ? (
              <Link className="link" activeclassname="active" to={"/createinvoice"}>
                <div className="icon">
                  <TbReportMedical className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Report
                </div>
              </Link>
            ) : null}
            {user?.userType === "" ? (
              <Link className="link" activeclassname="active" to={"/paymenthistory"}>
                <div className="icon">
                  <TbReportMedical className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Report
                </div>
              </Link>
            ) : null}














            {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/accountantprofile"}
              >
                <div className="icon">
                  <RiAdminLine className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null}
            {user?.userType === "nurse" ? (
              <Link className="link" activeclassname="active" to={"/payments"}>
                <div className="icon">
                  <RiWechatPayFill className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Payments
                </div>
              </Link>
            ) : null}
            {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/generatebills"}
              >
                <div className="icon">
                  <FaFileInvoice className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Generate Bills
                </div>
              </Link>
            ) : null}

          

            <Link
              className="LogOutPath link"
              onClick={() => {
                dispatch({ type: "AUTH_LOGOUT" });
              }}
              to={"/"}
            >
              <div className="icon">
                <FiLogOut />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Logout
              </div>
            </Link>
           
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Sidebar;
