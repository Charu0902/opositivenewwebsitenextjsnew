import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const D2cForm = () => {
  const [formData, setFormData] = useState({
    dservicename: "",
    dserviceemail: "",
    deserviceno: "",
    formname: "Dtwoc Page Form",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitServiceform = (event) => {
    event.preventDefault();

    const formEle = document.querySelector("#masterformservice");
    const formData = new FormData(formEle);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbxUDu0aiyiLEy8kIxUcycZtwuErIN_9Svqhbq90TiG0rWGPif7bjphFazAv-D-NJSN4/exec",
        formData
      )
      .then((response) => {
        console.log(response);
        setTimeout(function () {
          window.location.href = "thankyou";
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

// function sendEmailDtwoc(event){
//   document.addEventListener("click", function(){
//     document.getElementById("mbutton").setAttribute('disabled',"");
//   });
//     var bodyFormData = new FormData();
//    let dservicename = document.getElementById('dservicename').value;
//       let dserviceemail = document.getElementById('dserviceemail').value;
//       let deserviceno = document.getElementById('deserviceno').value;
//       let dservicehidden = document.getElementById('dservicehidden').value;
//     //   let interest = selectedhome.toString();
//   bodyFormData.append('dservicename', dservicename);
//   bodyFormData.append('dserviceemail', dserviceemail); 
//   bodyFormData.append('deserviceno', deserviceno); 
//   bodyFormData.append('formname', dservicehidden); 
  
  
//   axios({
//     method: "post",
//     url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
//     data: bodyFormData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       console.log('Submitted')
//       // senddataMaster(event) 
//       // window.location.href = "thankyou";
//       setTimeout(
//         function(){
//           window.location.href = "thankyou";
  
//         }, 3000)
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//     });
//     event.preventDefault();
//   }
  return (
    <>
      <div className="master-form">
        <Form method="post" id="masterformservice" onSubmit={handleSubmitServiceform}>
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <Form.Group className="form-bgd">
                <Form.Label>Name*</Form.Label>
                <Form.Control
                  type="text"
                  className="mobile-home-input"
                  name="dservicename"
                  value={formData.dservicename}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            <div className="col-lg-12 col-sm-12">
              <Form.Group className="form-bgd">
                <Form.Label>Email Address*</Form.Label>
                <Form.Control
                  type="email"
                  className="mobile-home-input"
                  name="dserviceemail"
                  value={formData.dserviceemail}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            <div className="col-lg-12 col-sm-12">
              <Form.Group className="form-bgd">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="mobile-home-input"
                  name="deserviceno"
                  value={formData.deserviceno}
                  onChange={handleChange}
                  id="deserviceno"
                  required
                />
              </Form.Group>
            </div>

            <div className="col-lg-12 col-sm-12">
              <Form.Group className="form-bgd">
                <Form.Control
                  type="hidden"
                  className="mobile-home-input"
                  name="formname"
                  id="dservicehidden"
                  value="Dtwoc Page Form"
                />
              </Form.Group>
            </div>
          </div>

          <Button variant="primary" type="submit" className="btn-form" id="mbutton">
            SUBMIT
          </Button>
        </Form>
      </div>
    </>
  );
};

export default D2cForm;
