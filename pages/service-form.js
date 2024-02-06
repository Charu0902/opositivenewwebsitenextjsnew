import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function sendEmailService(event){
  document.addEventListener("click", function(){
    document.getElementById("servicebutton").setAttribute('disabled',"");
  });
    var bodyFormData = new FormData();
   let servicename = document.getElementById('servicename').value;
      let serviceno = document.getElementById('serviceno').value;
      let serviceemail = document.getElementById('serviceemail').value;
      let servicereq = document.getElementById('servicereq').value;

      let servicehidden = document.getElementById('servicehidden').value;

    //   let interest = selectedhome.toString();
  bodyFormData.append('servicename', servicename);
  bodyFormData.append('serviceno', serviceno); 
  bodyFormData.append('serviceemail', serviceemail); 
  bodyFormData.append('servicereq', servicereq); 

  bodyFormData.append('formname', servicehidden); 
  
  
  axios({
    method: "post",
    url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
     
      window.location.href = "thankyou";
  
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
    event.preventDefault();
  }
const ServiceForm = () =>{
    return(
        <>
        <section className="service-form-section">
          <div className="container service-form-row">
            <div className="row form-div-service">
          
             <div className="col-lg-6 col-md-6 col-sm-12">
                 <h2 className="service-f-heading">
                 Getting started is 
                 <br/>easy
                 </h2>
                 <p className="service-f-para">
                    
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
              <Form method="post" id="serviceform" onSubmit={sendEmailService}>
                <div className="row s-form-row">
                  <div className="col-lg-9 col-sm-12">
                    <Form.Group className="form-bgd ">
                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="servicename"
                        for ='servicename'
                        placeholder="Name*"
                        required
                        id="servicename"
                        
                      />
                    </Form.Group>
                  </div>
                 
                  <div className="col-lg-9 col-sm-12">
                    <Form.Group className="form-bgd ">
                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="serviceemail"
                        for ='serviceemail'
                        required
                        placeholder="Business email*"
                        id="serviceemail"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-9 col-sm-12">
                    <Form.Group className="form-bgd ">
                      <Form.Control
                        type="phone"
                        className="mobile-home-input"
                        name="serviceno"
                        for ='serviceno'
                        placeholder="Phone*"
                        required
                        id="serviceno"
                        
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-9 col-sm-12">
                    <Form.Group className="form-bgd ">
                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="servicereq"
                        for ='servicereq'
                        placeholder="Requirement*"
                        required
                        id="servicereq"
                        
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-9 col-sm-12">
                    <Form.Group className="form-bgd ">
                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='servicehidden'
                        id="servicehidden"
                        value = "Service Page Form"
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="row s-form-row">
                <div className="col-lg-9 col-sm-12">
                <Button variant="primary" type="submit" className="btn-form" id='servicebutton'>
                Request a custom proposal
                </Button>
                </div>
                </div>
              </Form>
              </div>
             </div>
          
          </div>
        </section>
    
        </>
        
    )
}

export default ServiceForm;