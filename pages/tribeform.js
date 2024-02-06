import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
function sendEmailTribe(event){
  
    var bodyFormData = new FormData();
   let tribename = document.getElementById('tribename').value;
      let tribeemail = document.getElementById('tribeemail').value;
      let tribepass = document.getElementById('tribepass').value;
      let tribehidden = document.getElementById('tribehidden').value;
    //   let interest = selectedhome.toString();
  bodyFormData.append('tribename', tribename);
  bodyFormData.append('tribeemail', tribeemail); 
  bodyFormData.append('tribepass', tribepass); 
  bodyFormData.append('formname', tribehidden); 
  
  
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
const Tribeform = () =>{
    return(
        <>
       
      <div className="master-form"> 
      <h2 className="studio-heading">Tribe +</h2>
      <h3 className="masteform-haeding">
Get free access to Tribe+ by registering</h3>
      <Form method="post" id="masterform" onSubmit={sendEmailTribe}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                            <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="tribename"
                        for ='tribename'
                        
                        required
                        id="tribename"
                        
                      />
                    </Form.Group>
                  </div>
                
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    <Form.Label>Email</Form.Label>

                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="tribeemail"
                        for ='tribeemail'
                        required
                        
                        id="tribeemail"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    <Form.Label>Password</Form.Label>

                      <Form.Control
                        type="password"
                        className="mobile-home-input"
                        name="tribepass"
                        for ='tribepass'
                        required
                        id="tribepass"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                   

                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='tribehidden'
                        id="tribehidden"
                        value = "Tribe+ Page Form"
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form">
               SUBMIT
                </Button>
              </Form>

      </div>
    
        </>
    )
}

export default Tribeform;