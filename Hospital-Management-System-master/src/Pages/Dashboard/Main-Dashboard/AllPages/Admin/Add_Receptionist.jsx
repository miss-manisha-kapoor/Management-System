import React, { useState } from "react";
import "./CSS/Add_Doctor.css";
import Receptionist from "../../../../../img/receptionistavatar.png";
import { useDispatch, useSelector } from "react-redux";
import { ReceptionistRegister, SendPassword } from "../../../../../Redux/auth/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
const notify = (text) => toast(text);
const Add_Receptionist = () => {
  const { data } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const InitData = {
    ReceptionistName: "",
    age: "",
    mobile: "",
    email: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    department: "",
    ReceptionistID: Date.now(),
    password: "",
    details: "",
    bloodGroup: "",
  };
  const [ReceptionistValue, setReceptionistValue] = useState(InitData);
  const HandleDoctorChange = (e) => {
    setReceptionistValue({ ...ReceptionistValue, [e.target.name]: e.target.value });
  };
  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(ReceptionistRegister(ReceptionistValue)).then((res) => {
      if (res.message === "Receptionist already exists") {
        setLoading(false);
        return notify("Receptionist Already Exist");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Account Detais Sent,"+"Your Id is = "+ 1680623729765+", Password is your entered password");
        // {"_id":"642c48c7058c4cf7f5644773","userType":"nurse","nurseID":1680623729765,"nurseName":"Neha","mobile":9090846661,"email":"neha@example.com","password":"9090","age":22,"gender":"Female","bloodGroup":"B+","DOB":"2000-09-06","address":"Somewhere","education":"Nursing degree","image":"https://res.cloudinary.com/diverse/image/upload/v1674562453/diverse/oipm1ecb1yudf9eln7az.jpg","details":"None","__v":0},{"
      }
      notify("Receptionist Added");
      let data = {
        email: res.data.email,
        password: res.data.password,
        userId: res.data.ReceptionistID,
      };
      const ID = res.data.ReceptionistID;
      dispatch(SendPassword(data)).then((res) => notify("Account Detais Sent,"+"Your Id is = "+ID+", Password is your entered password"));
      setLoading(false);
      setReceptionistValue(InitData);
      submitHandler(e);
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const base_url = 'http://127.0.0.1:3001/createReceptionist';
    const body = InitData;
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
  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }
  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Add Receptionist</h1>
            <img src={Receptionist} alt="doctor" className="avatarimg" />
            <form onSubmit={HandleDoctorSubmit}>
              <div>
                <label> Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="ReceptionistName"
                    value={ReceptionistValue.ReceptionistName}
                    onChange={HandleDoctorChange}
                    required />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={ReceptionistValue.age}
                    onChange={HandleDoctorChange}
                    required/>
                </div>
              </div>
              <div>
                <label>Contact Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Emergency Number"
                    name="mobile"
                    value={ReceptionistValue.mobile}
                    onChange={HandleDoctorChange}
                    required/>
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc.com"
                    name="email"
                    value={ReceptionistValue.email}
                    onChange={HandleDoctorChange}
                    required/>
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    value={ReceptionistValue.gender}
                    onChange={HandleDoctorChange}
                    required>
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Birthdate</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    name="DOB"
                    value={ReceptionistValue.DOB}
                    onChange={HandleDoctorChange}
                    required/>
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={ReceptionistValue.address}
                    onChange={HandleDoctorChange}
                    required/>
                </div>
              </div>
              <div>
                <label>Education</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Qualification"
                    name="education"
                    value={ReceptionistValue.education}
                    onChange={HandleDoctorChange}
                    required/>
                </div>
              </div>
              <div>
                <label>Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="bloodGroup"
                    value={ReceptionistValue.bloodGroup}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Blood Group">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Password</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={ReceptionistValue.password}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Other Info</label>
                <div className="inputdiv">
                  <textarea
                    type="text"
                    placeholder="Extra Info"
                    rows="4"
                    cols="50"
                    name="details"
                    value={ReceptionistValue.details}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="formsubmitbutton">
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Add_Receptionist;
