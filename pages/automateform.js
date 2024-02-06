import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const AutomateForm = () => {
  const [formData, setFormData] = useState({
    automatetext: "",
    automateemail: "",
    formname: "Automate Page Form",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitAutomate = (event) => {
    event.preventDefault();

    const formEle = document.querySelector("#automateform");
    const formData = new FormData(formEle);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbzgEOjIXdHZlI7MmnyoxkTnhoFn2skUguVaMNv0TY1pB09NOPeu8JDyscHaOUnE08ya/exec",
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
// function sendEmailAutomate(event){
//   document.addEventListener("click", function(){
//     document.getElementById("asubmit").setAttribute('disabled',"");
//   });
//     var bodyFormData = new FormData();
//     let automatetext = document.getElementById('automatetext').value;
//       let automateemail = document.getElementById('automateemail').value;
//       let hiddenautomate = document.getElementById('hiddenautomate').value;
//     //   let interest = selectedhome.toString();

//     bodyFormData.append('automatetext', automatetext); 
//   bodyFormData.append('automateemail', automateemail); 
//   bodyFormData.append('formname', hiddenautomate); 
  
//   axios({
//     method: "post",
//     url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
//     data: bodyFormData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       console.log('Submitted')
//       senddataAutomate(event)
//       // window.location.href = "thankyou";
  
//     setTimeout(
//       function(){
//         window.location.href = "thankyou";

//       }, 3000)
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
          <div className="row">
            <div className="col-lg-12 col-12">
              <Form method="post" id="automateform" onSubmit={handleSubmitAutomate}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="automatetext"
                        value={formData.automatetext}
                        onChange={handleChange}
                        required
                        placeholder="Tell us your Idea"
                        id="automatetext"
                      />
                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="automateemail"
                        value={formData.automateemail}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email ID *"
                        id="automateemail"
                      />
                    </Form.Group>
                    <Form.Group className="popupform">
                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        id="hiddenautomate"
                        value="Automate Page Form"
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form" id="asubmit">
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

export default AutomateForm;
