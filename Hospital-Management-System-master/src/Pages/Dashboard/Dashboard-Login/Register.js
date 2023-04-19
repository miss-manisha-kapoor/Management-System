import React, { useState } from 'react';
import './DLogin.css';
import axios from 'axios';


function Register() {
  const [iscapture,setCapture]= useState(true)
  function HandlerChapture(){
    {iscapture ? setCapture(false) :setCapture(true) }

  }
  
  const [formvalue, setFormvalue] = useState({
    fname:"",
    lname:"",
    email:"",
    days:"",
    months:"",
    years:"",
    membership_code:"",
    city:"",
    counrty:"",
    ID:"",
    password: "",
    role:"patient"

  });
  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    const base_url = 'http://127.0.0.1:3001/patientRegister';
    const body = formvalue;
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
    <div>
      <div className="main">
        <div className="cover">
          <h3>Glad you're here.</h3>
          <h1>Register With Us</h1>

          <form onSubmit={HandleSubmit}>
            <p className="">Note: All fields are required.</p>
            <div className="">
              <p className="">
                <input type="text" placeholder="First Name" required name='fname'  onChange={Handlechange}/>
              </p>
              <p className="">
                <input type="text" placeholder="Last Name" required  name='lname' onChange={Handlechange}/>
              </p>
            </div>
            <p>
              <input type="email" placeholder="Email Address" required name='email' onChange={Handlechange}/>
              <span className="">We'll keep this private.</span>
            </p>
            <p>
              <input type="password" placeholder="Password" required name='password'  onChange={Handlechange}/>
              <span className="">Atleast 8 characters long.</span>
            </p>
            <p>
              <input type="password" placeholder="Verify Password" required />
            </p>
            <div className="row">
              <p className="">
                <input type="text" placeholder="Date (dd)" required name='days' onChange={Handlechange}/>
              </p>
              <p className="">
                <input type="text" placeholder="Month (mm)" required name='months' onChange={Handlechange}/>
              </p>
              <p className="">
                <input type="text" placeholder="Year (yyyy)" required name='years' onChange={Handlechange}/>
              </p>
              <p className="">
                <input type="text" placeholder="Membership code" name='membership_code' onChange={Handlechange}/>
                <span className="">
                  Enter your membership code, if you do not have one, leave it
                  blank.
                </span>
              </p>
              <div>
                <div className="row">
                  <p className="">
                    <input type="text" placeholder="Your City" required name='city' onChange={Handlechange}/>
                  </p>
                  <p className="">
                    {/* <!-- Add more country name --> */}
                    <input type="text" placeholder="Your Country" required name='country'  onChange={Handlechange}/>
                  </p>
                </div>
              </div>
              <p className="">
                <form
                  action="upload.php"
                  method="post"
                  enctype="multipart/form-data"
                />
              </p>
            </div>
            <br />
            <p className="">
              <label
                for="register-agree"
                className=""
                data-on="YES"
                data-off="NO"
              >
                <input
                  type="checkbox"
                  id="register-agree"
                  onChangeCapture={HandlerChapture}
                />
                <span className=""></span>
              </label>
              <span className="">
                Do you agree to the <a href="#">terms and conditions?</a>
              </span>
            </p>
            <p className="">
              <button type="submit" value="Register Now" disabled={iscapture} >
                Submit
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
