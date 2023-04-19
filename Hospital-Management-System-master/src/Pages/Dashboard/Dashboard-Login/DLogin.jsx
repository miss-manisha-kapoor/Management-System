import React, { useState } from "react";
import { Radio } from "antd";
import banner from "../../../img/banner.jpg";
import admin from "../../../img/admin.jpg";
import "./DLogin.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHospital } from "react-icons/fa";
import axios from 'axios';
import {
  AdminLogin,
  DoctorLogin,
  forgetPassword,
  ReceptionistLogin,
} from "../../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Drawer } from "antd";
import Register from "./Register";
const notify = (text) => toast(text);


const DLogin = () => {
  const [open, setOpen] = useState(false);
 const [Id, setID] = useState('');
  const [passwoard, setpassword] = useState('');
  const showDrawer = () => {
    setOpen(true);
  };
  
  const [register, setRegister] = useState(true);
    
  function createAccount(){
    setRegister(false);
  } ;

  const onClose = () => {
    setOpen(false);
  };

  // ************************************************
  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("Receptionist");
  const [formvalue, setFormvalue] = useState({
    ID: "",
    password: "",
  });
  const dispatch = useDispatch();

  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    setID(formvalue.ID)
    setpassword(formvalue.password)
  };
  
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    submitHandler(e)
    e.preventDefault();
    setLoading(true);
    if (formvalue.ID !== "" && formvalue.password !== "") {
      if (placement === "Receptionist") {
        let data = {
          ...formvalue,
          nurseID: formvalue.ID,
        };
        dispatch(ReceptionistLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);
            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Doctor") {
        let data = {
          ...formvalue,
          docID: formvalue.ID,
        };
        console.log(data);
        dispatch(DoctorLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);

            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Admin") {
        let data = {
          ...formvalue,
          adminID: formvalue.ID,
        };
        dispatch(AdminLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);

            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      }
    }
  };

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  const [ForgetPassword, setForgetPassword] = useState({
    type: "",
    email: "",
  });

  const HandleForgetPassword = (e) => {
    setForgetPassword({ ...ForgetPassword, [e.target.name]: e.target.value });
  };

  const [forgetLoading, setforgetLoading] = useState(false);

  const HandleChangePassword = (e) => {
    setID(e.target.value);
    if (ForgetPassword.type === "") {
      return notify("Please Fill all Details");
    }
    setforgetLoading(true);
    dispatch(forgetPassword(ForgetPassword)).then((res) => {
      if (res.message === "User not found") {
        setforgetLoading(false);
        return notify("User Not Found");
      }
      setForgetPassword({
        type: "",
        email: "",
      });
      onClose();
      setforgetLoading(false);
      return notify("Account Details Send");
    });
  };
 
  const submitHandler = (event) => {
    event.preventDefault();
    const base_url = 'http://127.0.0.1:3001/l';
    const body = {ID:formvalue.ID,password:formvalue.password,placement:placement};
    console.log(body)
    axios
      .post(base_url, body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(JSON.stringify(body));

    // setSubmit(varName);
  };
  return (
    <>
    
      <ToastContainer />
      {register ? 
      <div className="mainLoginPage">
      
        {/* <div className="leftside">
          <img src={banner} alt="banner" />
        </div> */}
        <div className="rightside">
          <h1>Hello!</h1>
          <h3>Glad you're here.</h3>
         
          <div>
            <Radio.Group
              value={placement}
              onChange={placementChange}
              className={"radiogroup"}
            >
              <Radio.Button value="Receptionist" className={"radiobutton"}>
                Receptionist
              </Radio.Button>
              <Radio.Button value="Doctor" className={"radiobutton"}>
                Doctor
              </Radio.Button>
              <Radio.Button value="Admin" className={"radiobutton"}>
                Admin
              </Radio.Button>
              <Radio.Button value="Patient" className={"radiobutton"}>
               Patient
              </Radio.Button>
              <Radio.Button value="Accountant" className={"radiobutton"}>
                Accountant
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            {/* <p>ID - 100</p>
            <p>Password - masai</p> */}
            <form onSubmit={HandleSubmit}>
              <h3>{placement} ID</h3>
              <input
                type="number"
                name="ID"
                value={formvalue.ID}
                onChange={Handlechange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={Handlechange}
                required
              />
              <button type="submit" onClick={HandleSubmit}>{Loading ? "Loading..." : "Submit"}</button>
              <p style={{ marginTop: "10px" }}>
                Forget Password?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={showDrawer}
                >
                  Get it on Email !
                </span>
    
              </p>
              
              <p style={{ marginTop: "10px" }}>
                Create Account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={createAccount}
                >
                  Register !
                </span>
</p>
              {/* ********************************************************* */}
              <Drawer
                title="Forget Password"
                placement="left"
                onClose={onClose}
                open={open}
              >
                <div>
                  <label style={{ fontSize: "18px" }}>Choose Type</label>

                  <select
                    name="type"
                    value={ForgetPassword.type}
                    onChange={HandleForgetPassword}
                    required
                  >
                    <option value="">User Type</option>
                    <option value="Receptionist">Receptionist</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                    <option value="Patient">Patient</option>
                    <option value="Accountant">Accountant</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "18px" }}>
                    Enter Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    name="email"
                    value={ForgetPassword.email}
                    onChange={HandleForgetPassword}
                    required
                    style={{
                      width: "100%",
                      height: "3rem",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#bce0fb",
                      fontSize: "18px",
                      marginTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                </div>

                <button
                  style={{
                    width: "50%",
                    margin: " 20px auto",
                    display: "flex",
                    padding: "10px",
                    fontSize: "18px",
                    backgroundColor: "#ff9f9f",
                    border: "none",
                    borderRadius: "7px",
                    cursor: "pointer",
                    justifyContent: "center",
                  }}
                  onClick={HandleChangePassword}
                >
                  {forgetLoading ? "Loading..." : " Send Mail"}
                </button>
              </Drawer>
            </form>
          </div>
        </div>
      </div>: <Register />}
    </>
  );
};

export default DLogin;
