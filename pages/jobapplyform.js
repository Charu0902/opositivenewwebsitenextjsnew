import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";

import Button from "react-bootstrap/Button";
import axios from "axios";

const Jobapplyform = () =>{
  const [selectedFile, setSelectedFile] = useState(null)
  const handleOnChange = e =>{
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  }
  function senddataJob(event) {
    const formEle = document.querySelector("#jobapplyform"); 
    event.preventDefault();
  
    const formData = new FormData(formEle);
  console.log(formEle)
    fetch(
      "https://script.google.com/macros/s/AKfycby6P313l25vc8Vg31WA_VLqysqEO-PhbkYwVAKxYAHQ8BP187thcwKsKx5UhIPywDnE/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then((data) => {
        console.log(data);
          // window.location.href = "thankyou";
          setTimeout(
            function(){
              window.location.href = "thankyou";
      
            }, 3000)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // function sendEmailJob(event){
  //   document.addEventListener("click", function(){
  //     document.getElementById("jbutton").setAttribute('disabled',"");
  //   });
  //     var formData = new FormData();
  //    let fullname = document.getElementById('fullname').value;
  //       let candidateemail = document.getElementById('candidateemail').value;
  //       let candidateno = document.getElementById('candidateno').value;
  //       let linkdinurl = document.getElementById('linkdinurl').value;
        
  //       let jobrole = document.getElementById('jobrole').value;

  //       // let jobapplyhidden = document.getElementById('jobapplyhidden').value;
  
  //     //   let interest = selectedhome.toString();
  //     formData.append('fullname', fullname);
  //     formData.append('candidateemail', candidateemail); 
  //     formData.append('candidateno', candidateno); 
  //     formData.append('linkdinurl', linkdinurl); 
  //     formData.append('fileData', selectedFile); 
  //     formData.append('jobrole', jobrole); 
  //     // formData.append('formname', jobapplyhidden); 
  //     axios.post("https://opositive.io/PHPMailer-master/opositive/carrer-sender.php" ,formData)
  //     .then(function (response) {
  //       console.log('Submitted');
  //       senddataJob(event)
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
  useEffect(() => {
    const fileUploader = document.getElementById('careerresume');

    fileUploader.addEventListener('change', (event) => {
      const files = event.target.files;
      console.log('files', files);
      
      const feedback = document.getElementById('feedback');
      const msg = `File ${files[0].name} uploaded successfully!`;
      feedback.innerHTML = msg;
});

  });
    return(
        <>
       
      <div className="job-apply-form"> 
      <h2 className="job-detail-form-haeding">APPLY FOR JOB</h2>
      <Form method="post" id="jobapplyform" onSubmit={senddataJob}  enctype="multipart/form-data">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd row job-apply-input-row ">
                        <div className="col-lg-4 col-sm-12">
                        <Form.Label>Full Name*</Form.Label>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                        <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="fullname"
                        for ='fullname'
                        
                        required
                        id="fullname"
                        
                      />
                        </div>
                         
                     
                    </Form.Group>
                  </div>
                
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd row job-apply-input-row">
                        <div className="col-lg-4 col-sm-12">
                        <Form.Label>Email*</Form.Label>
                        </div>
                        <div className="col-lg-8 col-sm-12">

                        <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="candidateemail"
                        for ='candidateemail'
                        required
                        
                        id="candidateemail"
                      />
                        </div>
                   

                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd row job-apply-input-row">
                        <div className="col-lg-4 col-sm-12">
                        <Form.Label>Phone*</Form.Label>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                        <Form.Control
                        type="tel"
                        className="mobile-home-input"
                        name="candidateno"
                        for ='candidateno'
                        pattern="[0-9]{10}"
                        maxlength="10"
                        required
                        id="candidateno"
                      />
                        </div>
                   

                      
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd row job-apply-input-row">
                        <div className="col-lg-4 col-sm-12">
                        <Form.Label>LinkedIn Profile*</Form.Label>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                        <Form.Control
                        type="url"
                        className="mobile-home-input"
                        name="linkdinurl"
                        for ='linkdinurl'
                        pattern="https://.*"
                       
                        id="linkdinurl"
                      />
                        </div>
                   

                      
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd row job-apply-input-row">
                        <div className="col-lg-4 col-sm-12">
                        <Form.Label>Resume/CV*</Form.Label>
                        </div>
                        <div className="col-lg-8  col-sm-12">
                        <Form.Control
                      type="file"
                      className="mobile-home-input"
                      name="resume"
                      onChange={handleOnChange}
                      for ='careerresume'
                      required
                      accept=".pdf,.doc,.docx"
                      id="careerresume"
                    />
                        </div>
                   

                      
                    </Form.Group>
                    <p id="feedback"></p>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                   

                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="jobrole"
                        for ='jobrole'
                        id="jobrole"
                        value = ""
                      />
                    </Form.Group>
                  </div>
                  {/* <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                   

                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='jobapplyhidden'
                        id="jobapplyhidden"
                        value = "Job apply Form"
                      />
                    </Form.Group>
                  </div> */}
                </div>

                <Button variant="primary" type="submit" className="btn-form" id="jbutton">
                APPLY NOW
                </Button>
              </Form>

      </div>
    
        </>
    )
}

export default Jobapplyform;