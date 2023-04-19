const db = require("../models");
const Tutorial = db.tutorials;
const Users = db.users;
const report = db.report;
<<<<<<< HEAD
const patient = db.patient;
const Bill = db.bill;


// generate bill 
exports.generateBill = (req, res) => {
  // Validate request
  // if (!req.body.ID) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Create a Tutorial
  const patient = new patient({
    patientName:req.body.patientName,
    department:req.body.department,
    patientMobile:req.body.patientMobile,
    patientAge:req.body.patientAge,
    date:req.body.date,
    amount:req.body.amount,
    status:req.body.status

 
  });

  // Save Tutorial in the database
  Bill
    .save(Bill)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


// patient report
exports.patientReport = (req, res) => {
  

  Bill.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};



//get All Payments
exports.getAllPayments = (req, res) => {
  
=======
const Patient = db.patient;
const Appointment = db.appointment;
const Report = db.report;



//get the report
exports.getReport = (req, res)=>{
  // const title = req.query.title;
  // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Report.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};

//create Appointment
//create and user
exports.createAppointment = (req, res) => {
  // Validate request
  // if (!req.body.ID) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Create a Tutorial
  const appointment = new Appointment({
   
   
        patient_name:req.body.patientName,
        age:req.body.age,
        gender:req.body.gender,
        contact_number:req.body.mobile,
        email:req.body.email,
        type_of_disease:req.body.disease,
        address:req.body.address,
        department:req.body.department,
        date_and_time:req.body.date
        

 
  });

  // Save Tutorial in the database
  appointment
    .save(appointment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

>>>>>>> 8a2c1ae2be8270a6002b7b24de8d7a34cd13da67

  Bill.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
//create and user
exports.addpatient = (req, res) => {
  // Validate request
  // if (!req.body.ID) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Create a Tutorial
  const patient = new Patient({
   
   
    first_name:req.body.fname,
    last_Name:req.body.lname,
    email:req.body.email,
    password:req.body.password,
    days:req.body.days,
    months:req.body.months,
    years:req.body.years,
    membership_code:req.body.membership_code,
    your_city:req.body.city,
    your_country:req.body.country,
    pID:req.body.ID

 
  });

  // Save Tutorial in the database
  patient
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};





exports.createReceptionist = (req, res) => {
  // Validate request
  if (!req.body.ambulanceDriver ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const user = new Tutorial({
    
      ambulance_type: res.body.type,
      price_per_hourse: res.body.charges,
      ambulance_code: res.body.ambulanceID,
      driver_Name: res.body.ambulanceDriver,
      driver_contact_no: res.body.number
     
 
  });

  // Save Tutorial in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
exports.addAmbulance = (req, res) => {
  // Validate request
  if (!req.body.name ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const user = new users({
    
      ambulance_type: req.body.type,
      price_per_hourse: req.body.charges,
      ambulance_code: req.body.ambulanceID,
      driver_Name: req.body.ambulanceDriver,
      driver_contact_no: req.body.number
  });

  // Save Tutorial in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
exports.createDoctor = (req, res) => {
  // Validate request
  if (!req.body.docID) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const user = new user({
    
    doctor_name: res.body.docName,
    age: res.body.age,
    emergency_number:res.body.mobile,
    email:res.body.email,
    gender:res.body.gender,
    blood_group:res.body.bloodGroup,
    brithdate:res.body.DOB,
    address:res.body.address,
    education:res.body.education,
    department:res.body.education,
    passwoard:res.body.passwoard,
    other_detils:res.body.detils
 
  });

  // Save Tutorial in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
exports.createReport = (req, res) => {
  // Validate request
  // if (!req.body.docName) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Create a Tutorial
  const report = new Report({
        doctor_name: req.body.docName,
        department:req.body.docDepartment,
        doctor_mobile:req.body.docMobile,
        patient_name:req.body.patientName,
        patient_age:req.body.patientAge,
        patient_mobile:req.body.patientMobile,
        email:req.body.email,
        patient_gender:req.body.patientGender,
        patient_blood_group:req.body.patientBloodGroup,
        patient_disease:req.body.patientDisease,
        patient_temprature:req.body.patientTemperature,
        patient_weight:req.body.patientWeight,
        patient_BP: req.body.patientBP,
        patient_glucose:req.body.patientGlucose,
        extra_info:req.body.extrainfo,
        medicines:req.body.medicines,
        date:req.body.date,
        time:req.body.time
 
  });

  // Save Tutorial in the database
  report
    .save(report)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


exports.createPatient = (req, res) => {
  // Validate request
  if (!req.body.ID) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const user = new users({
    ID: req.body.ID,
    password: req.body.password,
    type:req.body.placement
 
  });

  // Save Tutorial in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


//create and user
exports.createuser = (req, res) => {
  // Validate request
  // if (!req.body.ID) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Create a Tutorial
  const user = new Users({
    fname:req.body.fname,
    lname:req.body.lname,
    email:req.body.email,
    days:req.body.days,
    months:req.body.months,
    years:req.body.years,
    membership_code:req.body.membership_code,
    city:req.body.city,
    counrty:req.body.counrty,
    password: req.body.password,
    type:req.body.role
 
  });

  // Save Tutorial in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
// Create and Save a new Tutorial

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    name: req.body.name,
    bloodGroup: req.body.bloodGroup,
    DOB: req.body.DOB,
    mobile:req.body.mobile,
    userId:req.body.userId,
    userType:req.body.userType
  });

  // Save Tutorial in the database
  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Tutorial.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
exports.getAppointment = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Appointment.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};
//Delete appointment
exports.deleteAppointment = (req, res) => {
  const id = req.params.id;

  Appointment.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
