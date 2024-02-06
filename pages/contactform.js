import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    contactname1: "",
    contactemail1: "",
    contacturl: "",
    contactmessage1: "",
    formname: "Contact Page Form new",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitContact = (event) => {
    event.preventDefault();

    const formEle = document.querySelector("#contactformnew");
    const formData = new FormData(formEle);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbz2D54kXfgi9i5gj_WNwsYOoIyDsdcoST26uTkhvsnLJUoxIGqfyhxuDrnPnKqEjJnV/exec",
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
// function sendEmailContactnew(event){
  
//     var bodyFormData = new FormData();
//    let contactname1 = document.getElementById('contactname1').value;
//       let contactemail1 = document.getElementById('contactemail1').value;
//       // let contactno = document.getElementById('contactno').value;
//       let contactmessage1 = document.getElementById('contactmessage1').value;
//       let contacturl = document.getElementById('contacturl').value;

//       let contacthidden1 = document.getElementById('contacthidden1').value;
//     //   let interest = selectedhome.toString();
//   bodyFormData.append('contactname1', contactname1);
//   bodyFormData.append('contactemail1', contactemail1); 
//   // bodyFormData.append('contactno', contactno); 
//   bodyFormData.append('contactmessage1', contactmessage1);
//   bodyFormData.append('contacturl', contacturl); 
//   bodyFormData.append('formname', contacthidden1); 
  
  
//   axios({
//     method: "post",
//     url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
//     data: bodyFormData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       senddatacontactform()

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
      <div className="contact-form-new">
        <Form method="post" id="contactformnew" onSubmit={handleSubmitContact}>
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <Form.Group className="form-bgd">
                <Form.Control
                  type="text"
                  className="mobile-home-input"
                  name="contactname1"
                  value={formData.contactname1}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </Form.Group>
            </div>

            <div className="col-lg-12 col-sm-12">
              <Form.Group className="form-bgd">
                <Form.Control
                  type="email"
                  className="mobile-home-input"
                  name="contactemail1"
                  value={formData.contactemail1}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                />
              </Form.Group>
            </div>

            <div className="col-lg-12 col-sm-12">
              <Form.Group className="form-bgd">
                <Form.Control
                  type="text"
                  className="mobile-home-input"
                  name="contacturl"
                  value={formData.contacturl}
                  onChange={handleChange}
                  required
                  placeholder="Your Website Url"
                />
              </Form.Group>
            </div>

            <div className="col-lg-12 col-sm-12">
              <Form.Group className="form-bgd">
                <Form.Control
                  as="textarea"
                  rows="3"
                  className="mobile-home-input"
                  name="contactmessage1"
                  value={formData.contactmessage1}
                  onChange={handleChange}
                  placeholder="Type your message here"
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
                  value="Contact Page Form new"
                />
              </Form.Group>
            </div>
          </div>

          <Button variant="primary" type="submit" className="btn-form">
            SEND
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
