import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const DeliverForm = () => {
  const [formData, setFormData] = useState({
    deliverdomain: "",
    deliverno: "",
    deliveremail: "",
    formname: "Deliver Page Form",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitDeliver = (event) => {
    event.preventDefault();

    const formEle = document.querySelector("#deliverform");
    const formData = new FormData(formEle);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbym36QlK34Y9GfEEZLvMEInFwiOSf3ru3FOAHCydhuv4Iuoe1OS5ydA0Y5kx841QYlWQQ/exec",
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
// function sendEmailDeliver(event){
//   document.addEventListener("click", function(){
//     document.getElementById("dbutton").setAttribute('disabled',"");
//   });
//     var bodyFormData = new FormData();
//    let deliverdomain = document.getElementById('deliverdomain').value;
//       let deliverno = document.getElementById('deliverno').value;
//       let deliveremail = document.getElementById('deliveremail').value;
//       let deliverhidden = document.getElementById('deliverhidden').value;
//     //   let interest = selectedhome.toString();
//   bodyFormData.append('deliverdomain', deliverdomain);
//   bodyFormData.append('deliverno', deliverno); 
//   bodyFormData.append('deliveremail', deliveremail); 
//   bodyFormData.append('formname', deliverhidden); 
  
//   axios({
//     method: "post",
//     url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
//     data: bodyFormData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       senddataDeliver(event)
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
  useEffect(() => {
    // Additional logic you may want to run on component mount
  }, []); // Empty dependency array means this effect will only run once on mount

  return (
    <>
      <section className="map-background">
        <div className="container">
          <h2>Want to grow your business with us? </h2>
          <p>
            Fill out the form above and download a comprehensive guide to SEO
            Essentials for DIY Growth!
          </p>
          <div className="row">
            <div className="col-lg-5 col-12">
              <Form method="post" id="deliverform" onSubmit={handleSubmitDeliver}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="deliverdomain"
                        value={formData.deliverdomain}
                        onChange={handleChange}
                        placeholder="Enter your Domain Name *"
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="tel"
                        className="mobile-home-input"
                        name="deliverno"
                        value={formData.deliverno}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        maxLength="10"
                        required
                        placeholder="Enter your Contact Number *"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="deliveremail"
                        value={formData.deliveremail}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email ID *"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        value="Deliver Page Form"
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form" id="dbutton">
                  GET STARTED
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliverForm;
