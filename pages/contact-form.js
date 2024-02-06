import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
function senddataContact(event) {
    const formEle = document.querySelector("#contactform1"); 
    event.preventDefault();
    const formData = new FormData(formEle);
  console.log(formEle)
    fetch(
      "https://script.google.com/macros/s/AKfycbx44l9_X-q4XpM0rsPtTo4JJUfpHe1nt2IlQg0IU9ikTuqHmt5hk1iHKv4TPJzRYCdC/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
function sendEmailContactform(event){
    document.addEventListener("click", function(){
        document.getElementById("contactbutton").setAttribute('disabled',"");
      });
    var bodyFormData = new FormData();
   let contactformdomain = document.getElementById('contactformdomain').value;
      let contactformno = document.getElementById('contactformno').value;
      let contactformemail = document.getElementById('contactformemail').value;
      let contactformhidden = document.getElementById('contactformhidden').value;
    //   let interest = selectedhome.toString();
  bodyFormData.append('contactformdomain', contactformdomain);
  bodyFormData.append('contactformno', contactformno); 
  bodyFormData.append('contactformemail', contactformemail); 
  bodyFormData.append('formname', contactformhidden); 
  
  axios({
    method: "post",
    url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
     
        senddataContact(event)
        setTimeout(
          function(){
            window.location.href = "thankyou";
    
          }, 3000)
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
    event.preventDefault();
  }
const Deliverform = () =>{
    return(
        <>
        <section className="map-background">
        <div className="container">
            <h2>Want to grow your business with us?  </h2>
            <p>Fill out the form above and download a comprehensive guide to SEO Essentials for DIY Growth!</p>
          <div className="row">
            <div className="col-lg-5 col-12">
              <Form method="post" id="contactform1" onSubmit={sendEmailContactform}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                      <Form.Control
                         type="text"
                         className="mobile-home-input"
                         name="contactformdomain"
                         for ='contactformdomain'
                         placeholder="Enter your Domain Name *"
                         
                         required
                         id="contactformdomain"
                        
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                       type="tel"
                       className="mobile-home-input"
                       name="contactformno"
                       for ='contactformno'
                       pattern="[0-9]{10}"
                       maxlength="10"
                       required
                       id="contactformno"
                       placeholder="Enter your Contact Number *"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="contactformemail"
                        for ='contactformemail'
                        required
                        placeholder="Enter your email ID *"
                        id="contactformemail"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                       type="hidden"
                       className="mobile-home-input"
                       name="formname"
                       for ='contactformhidden'
                       id="contactformhidden"
                       value = 'Contact Us Page Form'
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form"  id="contactbutton">
                GET STARTED
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Deliverform;