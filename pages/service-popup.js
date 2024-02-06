import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function sendEmailServicepop(event){
    document.addEventListener("click", function(){
      document.getElementById("sbutton").setAttribute('disabled',"");
    });
      var bodyFormData = new FormData();
     let servicenamepop = document.getElementById('servicenamepop').value;
        let serviceemailpop = document.getElementById('serviceemailpop').value;
        let servicenopop = document.getElementById('servicenopop').value;
        let servicereqpop = document.getElementById('servicereqpop').value;

        let servicehiddenpop = document.getElementById('servicehiddenpop').value;
      //   let interest = selectedhome.toString();
    bodyFormData.append('servicenamepop', servicenamepop);
    bodyFormData.append('serviceemailpop', serviceemailpop); 
    bodyFormData.append('servicenopop', servicenopop); 
    bodyFormData.append('servicereqpop', servicereqpop); 

    bodyFormData.append('formname', servicehiddenpop); 
    
    
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
const Servicepopup = () =>{
    return(
        <>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog service-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        <div className="row">
           <div className="col-lg-6 col-md-12 col-sm-12">
           <img data-src="./assets/studio-plus-new.gif" className ="img-fluid studio-img lazyload"/>  

           </div>
           <div className="col-lg-6 col-md-12 col-sm-12">
           <Form method="post" id="service" onSubmit={sendEmailServicepop}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                            <Form.Label>Name*</Form.Label>
                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="servicenamepop"
                        for ='servicenamepop'
                        
                        required
                        id="servicenamepop"
                        
                      />
                    </Form.Group>
                  </div>
                
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    <Form.Label>Email Address*</Form.Label>

                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="serviceemailpop"
                        for ='serviceemailpop'
                        required
                        
                        id="serviceemailpop"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    <Form.Label>Phone Number*</Form.Label>

                      <Form.Control
                        type="tel"
                        className="mobile-home-input"
                        name="servicenopop"
                        for ='servicenopop'
                        pattern="[0-9]{10}"
                        maxlength="10"
                        required
                        id="servicenopop"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    <Form.Label>Requirement*</Form.Label>

                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="servicereqpop"
                        for ='servicereqpop'
                      
                        required
                        id="servicereqpop"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                   

                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='servicehiddenpop'
                        id="servicehiddenpop"
                        value = "Service Popup Form"
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form" id="sbutton">
               SUBMIT
                </Button>
              </Form>
           </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
        </>
    )
}

export default Servicepopup;