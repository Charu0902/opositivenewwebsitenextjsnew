import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ContributeForm = () => {
  const [formData, setFormData] = useState({
    contributeemail: "",
    formname: "Contribute Page Form",
  });

  const handleChangecontribute = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitContribute = (event) => {
    event.preventDefault();

    const formEle = document.querySelector("#contribute");
    const formData = new FormData(formEle);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbwnFFi3QAgUMyoftnu36N4aBpJl9DQWya3GDzX4VOTOwg3sV2hkw8w-mH61T4Pcu0fn/exec",
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
// function sendEmailContribute(event){
//   document.addEventListener("click", function(){
//     document.getElementById("cbutton").setAttribute('disabled',"");
//   });
//     var bodyFormData = new FormData();

//       let contributeemail = document.getElementById('contributeemail').value;
//       let hiddencontribute = document.getElementById('hiddencontribute').value;
//     //   let interest = selectedhome.toString();
 
//   bodyFormData.append('contributeemail', contributeemail); 
//   bodyFormData.append('formname', hiddencontribute); 
  
//   axios({
//     method: "post",
//     url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
//     data: bodyFormData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
     
//       console.log('Submitted')

//       senddataContribute(event) 
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
      <section className="">
        <div className="container">
          <p>Tell us what else we can share with you to help you grow.</p>
          <div className="row">
            <div className="col-lg-12 col-12">
              <Form method="post" id="contribute" onSubmit={handleSubmitContribute}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="contributeemail"
                        value={formData.contributeemail}
                        onChange={handleChangecontribute}
                        required
                        placeholder="Enter your email ID *"
                        id="contributeemail"
                      />
                    </Form.Group>
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        id="hiddencontribute"
                        value="Contribute Page Form"
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form" id="cbutton">
                  SUBMIT
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContributeForm;
