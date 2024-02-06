import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
function senddataShare(event) {
  const formEle = document.querySelector("#shareform"); 
  event.preventDefault();

  const formData = new FormData(formEle);
console.log(formEle)
  fetch(
    "https://script.google.com/macros/s/AKfycbxLTne2xWEFIhQkVBB6NerhVx5jAsNSiXnL4P8Xw4e6HGVWPZh37VaVRDE4tab12KbkgQ/exec",
    {
      method: "POST",
      body: formData
    }
  )
    .then((data) => {
      console.log(data);
      setTimeout(
        function(){
          window.location.href = "thankyou";
  
        }, 3000)
    })
    .catch((error) => {
      console.log(error);
    });
}

// function sendEmailShare(event){
//   document.addEventListener("click", function () {
//     document.getElementById("sbutton").setAttribute("disabled", "");
//   });
//     var bodyFormData = new FormData();

//       let shareemail = document.getElementById('shareemail').value;
//       let sharehidden = document.getElementById('sharehidden').value;

//     //   let interest = selectedhome.toString();
 
//   bodyFormData.append('shareemail', shareemail); 
//   bodyFormData.append('formname', sharehidden); 
  
//   axios({
//     method: "post",
//     url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
//     data: bodyFormData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
     
//       senddataShare(event);
//       console.log("Submitted");
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
const Shareform = () => {
    return (
        <>
        <section className="">
        <div className="container">
        <p>
                      Tell us what else we can share with you to help you grow.   
                      </p>
          <div className="row">
            <div className="col-lg-12 col-12">
              <Form method="post" id="shareform" onSubmit={senddataShare}>
                <div className="row">
                 
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="shareemail"
                        for = "shareemail"
                        required
                        placeholder="Enter your email ID *"
                        id="shareemail"
                      />
                    </Form.Group>
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for = "sharehidden"
                         value = 'Share Page Form'
                        id="sharehidden"
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form"  id="sbutton">
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

export default Shareform;    