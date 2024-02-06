import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
function sendEmailStudio(event){
  
    var bodyFormData = new FormData();
   let studioname = document.getElementById('studioname').value;
      let studioemail = document.getElementById('studioemail').value;
      let studiopass = document.getElementById('studiopass').value;
      let studiohidden = document.getElementById('studiohidden').value;
    //   let interest = selectedhome.toString();
  bodyFormData.append('studioname', studioname);
  bodyFormData.append('studioemail', studioemail); 
  bodyFormData.append('studiopass', studiopass); 
  bodyFormData.append('formname', studiohidden); 
  
  
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
const Studioform = () =>{
    return(
        <>
       
      <div className="master-form"> 
      <h2 className="studio-heading">Studio +</h2>
      <h3 className="masteform-haeding">Get free access to Studio+ by registering</h3>
      <Form method="post" id="masterform" onSubmit={sendEmailStudio}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                            <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="studioname"
                        for ='studioname'
                        
                        required
                        id="studioname"
                        
                      />
                    </Form.Group>
                  </div>
                
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    <Form.Label>Email</Form.Label>

                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="studioemail"
                        for ='studioemail'
                        required
                        
                        id="studioemail"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    <Form.Label>Password</Form.Label>

                      <Form.Control
                        type="password"
                        className="mobile-home-input"
                        name="studiopass"
                        for ='studiopass'
                        required
                        id="studiopass"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                   

                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='studiohidden'
                        id="studiohidden"
                        value = "Studio+ Page Form"
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

export default Studioform;