import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const MasterForm = () => {
  const [formData, setFormData] = useState({
    mastername: "",
    masteremail: "",
    masterno: "",
    formname: "Master Page Form",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitMaster = (event) => {
    event.preventDefault();

    const formEle = document.querySelector("#masterform");
    const formData = new FormData(formEle);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbyqHAEptZvl-LNTsFpQqxXUM2cqW32RhY8RyL1NsceIj6epQyOfqBv8cRf0QUnonGfk/exec",
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
// function sendEmailMaster(event){
//   document.addEventListener("click", function(){
//     document.getElementById("mbutton").setAttribute('disabled',"");
//   });
//     var bodyFormData = new FormData();
//    let mastername = document.getElementById('mastername').value;
//       let masteremail = document.getElementById('masteremail').value;
//       let masterno = document.getElementById('masterno').value;
//       let masterhidden = document.getElementById('masterhidden').value;
//     //   let interest = selectedhome.toString();
//   bodyFormData.append('mastername', mastername);
//   bodyFormData.append('masteremail', masteremail); 
//   bodyFormData.append('masterno', masterno); 
//   bodyFormData.append('formname', masterhidden); 
  
  
//   axios({
//     method: "post",
//     url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
//     data: bodyFormData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
     
//       console.log('Submitted')
//       senddataMaster(event) 
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
        <h2 className="masteform-haeding">
          Take your first step from being an Enthusiast to an Expert.
        </h2>
        <Form method="post" id="masterform" onSubmit={handleSubmitMaster}>
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <Form.Group className="form-bgd">
                <Form.Label>Name*</Form.Label>
                <Form.Control
                  type="text"
                  className="mobile-home-input"
                  name="mastername"
                  value={formData.mastername}
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
                  name="masteremail"
                  value={formData.masteremail}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            <div className="col-lg-12 col-sm-12">
              <Form.Group className="form-bgd">
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control
                  type="tel"
                  className="mobile-home-input"
                  name="masterno"
                  value={formData.masterno}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  maxLength="10"
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
                  id="masterhidden"
                  value="Master Page Form"
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

export default MasterForm;
