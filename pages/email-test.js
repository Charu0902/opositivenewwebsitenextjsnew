import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

// function senddatacontactform(event) {
//   const formEle = document.querySelector("#contactformnew"); 
//   event.preventDefault();

//   const formData = new FormData(formEle);
// console.log(formEle)

//   fetch(
//     "https://script.google.com/macros/s/AKfycbz2D54kXfgi9i5gj_WNwsYOoIyDsdcoST26uTkhvsnLJUoxIGqfyhxuDrnPnKqEjJnV/exec",
//     {
//       method: "POST",
//       body: formData
//     }
//   )
//     .then((data) => {
//       console.log(data);
//       setTimeout(
//                 function(){
//                   window.location.href = "thankyou";
          
//                 }, 3000)
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
function sendEmailContactnewtest(event){
  
    var bodyFormData = new FormData();
   let contactname1 = document.getElementById('contactname1').value;
      let contactemail1 = document.getElementById('contactemail1').value;
      // let contactno = document.getElementById('contactno').value;
      let contactmessage1 = document.getElementById('contactmessage1').value;
      let contacturl = document.getElementById('contacturl').value;

      let contacthidden1 = document.getElementById('contacthidden1').value;
    //   let interest = selectedhome.toString();
  bodyFormData.append('contactname1', contactname1);
  bodyFormData.append('contactemail1', contactemail1); 
  // bodyFormData.append('contactno', contactno); 
  bodyFormData.append('contactmessage1', contactmessage1);
  bodyFormData.append('contacturl', contacturl); 
  bodyFormData.append('formname', contacthidden1); 
  
  
  axios({
    method: "post",
    url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      senddatacontactform()

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

const Contactformtest = () =>{
    return(
        <>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
      <div className="container">
      <div className="contact-form-new"> 
      {/* <h2 className="masteform-haeding">Take your first step from being an Enthusiast to an Expert.</h2> */}
      <Form method="post" id="contactformnew" onSubmit={sendEmailContactnewtest}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                            {/* <Form.Label>Name*</Form.Label> */}
                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="contactname1"
                        for ='contactname1'
                        placeholder="Your Name"
                        required
                        id="contactname1"
                        
                      />
                    </Form.Group>
                  </div>
                
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    {/* <Form.Label>Email Address*</Form.Label> */}

                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="contactemail1"
                        for ='contactemail1'
                        required
                        placeholder="Your email"
                        id="contactemail1"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    {/* <Form.Label>Email Address*</Form.Label> */}

                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="contacturl"
                        for ='contacturl'
                        required
                        placeholder="Your Website Url"
                        id="contacturl"
                      />
                    </Form.Group>
                  </div>
                  {/* <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    <Form.Label>Phone Number*</Form.Label>

                      <Form.Control
                        type="tel"
                        className="mobile-home-input"
                        name="contactno"
                        for ='contactno'
                        pattern="[0-9]{10}"
                        maxlength="10"
                        required
                        id="contactno"
                      />
                    </Form.Group>
                  </div> */}
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                            {/* <Form.Label>Message*</Form.Label> */}
                      <Form.Control
                       as="textarea" rows="3" 
                        className="mobile-home-input"
                        name="contactmessage1"
                        for ='contactmessage1'
                        placeholder="Type your message here"
                        required
                        id="contactmessage1"
                       
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                   

                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='contacthidden1'
                        id="contacthidden1"
                        value = "Contact Page Form new"
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form">
               SEND
                </Button>
              </Form>

      </div>
      </div>
    
        </>
    )
}

export default Contactformtest;