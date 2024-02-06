import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Head from 'next/head'

function senddataPop(event) {
  const formEle = document.querySelector("#form"); 
  event.preventDefault();

  const formData = new FormData(formEle);
console.log(formEle)

  fetch(
    "https://script.google.com/macros/s/AKfycbwX_7MsuLwQvjDLXmXgrda29fEUgCOqGUuYUH5z_KDFeqby1fT1Gl8cO6jAIz8rm6QBxg/exec",
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
function sendEmailAxiosPop(event){
  document.addEventListener("click", function(){
    document.getElementById("button").setAttribute('disabled',"");
  });
// alert('hy');
var selected = [];
 for (var option of document.getElementById('interestpop').options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
  // console.log(selected.toString());
  // alert(selected);
  var bodyFormData = new FormData();
 let namepop = document.getElementById('namepop').value;
    let phonepop = document.getElementById('Phonepop').value;
    let mailaddpop = document.getElementById('emailaddpop').value;
    // let messagepop = document.getElementById('messagepop').value;
    let domainnamepop = document.getElementById('domainnamepop').value;
    let interestpop = selected.toString();

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    
    const utm_sourcepop = urlParams.get('utm_source');
    const utm_mediumpop = urlParams.get('utm_medium');
    const utm_campaignpop = urlParams.get('utm_campaign');
bodyFormData.append('name', namepop);
bodyFormData.append('phone', phonepop); 
bodyFormData.append('domainname', domainnamepop); 
bodyFormData.append('mailadd', mailaddpop); 
bodyFormData.append('interest',interestpop ); 
bodyFormData.append('utm_source', utm_sourcepop); 
bodyFormData.append('utm_medium', utm_mediumpop); 
bodyFormData.append('utm_campaign', utm_campaignpop); 
// bodyFormData.append('message', messagepop); 

// alert(namepop);
// console.log(interestpop);
axios({
  method: "post",
  url: "https://opositive.io/PHPMailer-master/opositive/mailsender.php",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
})
  .then(function (response) {
    //handle success
    // console.log(response);
    // window.location.href = "thankyou";

    // setTimeout(
    //   function(){
    //     window.location.href = "thankyou";

    //   }, 3000)
    senddataPop(event)
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
const Popup = () =>{
    return(

        <>
        <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.14.0-beta2/css/bootstrap-select.min.css" integrity="sha512-mR/b5Y7FRsKqrYZou7uysnOdCIJib/7r5QeJMFvLNHNhtye3xJp1TdJVPLtetkukFn227nKpXD9OjUc09lx97Q==" crossorigin="anonymous"
  referrerpolicy="no-referrer" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.14.0-beta2/js/bootstrap-select.min.js" integrity="sha512-FHZVRMUW9FsXobt+ONiix6Z0tIkxvQfxtCSirkKc5Sb4TKHmqq1dZa8DphF0XqKb3ldLu/wgMa8mT6uXiLlRlw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</Head>
        {/* <button type = 'button' id="myBtn1" onClick={ShowModal}>Open Modal</button> */}

        <div class = 'container'>
        <div className='box popuplogo'>
       <div className='form-logo'>
         <a href='/'>
              <img className='box-logo lazyload'  data-src='../assets/logo-white.png' alt=''/>
         </a>
     
       </div>
       
       <div className='box-content'>
       <h2 className='dive-heading pophead'>Grow exponentially with O+! </h2>
          <p className='dive-para  poppara'> Increase ad-free traffic to your brand now.</p>
       </div>
    </div>

    <Form method='post'  id = "form" onSubmit={sendEmailAxiosPop} >
    <p id='head'>Your Form has been submitted</p>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
        <Form.Group className='form-bgd popupform'>
          
          {/* <Form.Label  for="name">Name</Form.Label> */}
          <Form.Control type="text" className='mobile-home-input' name='name'  id = 'namepop' placeholder="Name"  for="name"/>
        </Form.Group>
        </div>
        <div className="col-lg-6 col-sm-12">
        <Form.Group className='form-bgd popupform'>
          {/* <Form.Label  for="emailadd">Email Address</Form.Label> */}
          <Form.Control type="email" className='mobile-home-input' name='emailadd' required  id = 'emailaddpop' placeholder="Email Address" for="emailadd"/>
        </Form.Group>
        </div>

      </div>
       <div className="row">
         <div className="col-lg-6 col-sm-12">
         <Form.Group className='form-bgd popupform'>
          {/* <Form.Label  for="Phone">Phone Number</Form.Label> */}
          <Form.Control type="tel" className='mobile-home-input' name='Phone'  pattern="[0-9]{10}" maxlength="10"   required  id = 'Phonepop' placeholder="Phone Number" for="Phone"/>
        </Form.Group>
         </div>
         <div className="col-lg-6 col-sm-12">
         <Form.Group className='form-bgd popupform'>
          {/* <Form.Label  for="domainname">Your Domain</Form.Label> */}
          <Form.Control type="text" className='mobile-home-input' name='domainname'  required  id = 'domainnamepop' placeholder="Your Domain" for="domainname"/>
        </Form.Group>
         </div>

       </div>
       <div className="row">
          <div className="col-lg-12 col-sm-12">
          <Form.Group className='form-bgd popupform'>
          {/* <Form.Label  for="interset">What's Your Interest</Form.Label> */}
          {/* <Form.Select aria-label="Default select example" className='mobile-home-input'  name='interest' id = 'interestpop' >
          <option></option>
            <option value="1">Access to Studio+ - new age dashboard for search</option>
           <option value="2">Strategy Intervention call with expert </option>
           <option value="3">Updates and Growth Hacks </option>

        </Form.Select> */}
         <select class="selectpicker " multiple aria-label="size 3 select example"  name='interest' id = 'interestpop' required placeholder="What's Your Interest" for="interset">
        {/* <option value="Access to Studio+ - new age dashboard for search">Access to Studio+ - new age dashboard for search</option>
        <option value="Strategy Intervention call with expert">Strategy Intervention call with expert </option>
        <option value="Updates and Growth Hacks">Updates and Growth Hacks </option> */}
        {/* <option value="4">Four</option> */}
        <option value="SEO strategy Call with Expert">SEO strategy Call with Expert</option>
        <option value="SEO Solution: D2C ECommerce">SEO Solution: D2C ECommerce </option>
        <option value="SEO Solution: SAAS">SEO Solution: SAAS </option>
        <option value="SEO for retail stores/ centers">SEO for retail stores/ centers </option>
        <option value="Competition & Brand Audit">Competition & Brand Audit </option>
        <option value="Sign up for SeO Newsletter">Sign up for SeO Newsletter </option>
        <option value="Free Sign up - Studio+ Dashboard">Free Sign up - Studio+ Dashboard </option>
      </select>
        </Form.Group>
          </div>
       </div>
        
       
       {/* <div className="row">
       <div class="col-lg-12 col-sm-12">
      <select class="selectpicker " multiple aria-label="size 3 select example"  name='interest' id = 'interestpop' >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    </div>

       </div> */}
        
        {/* <Form.Group className='form-bgd popupform'>
          <Form.Label  for="message">Puropse</Form.Label>
          <Form.Control type="text" className='mobile-home-input' name='message'  required id = 'messagepop'/>
        </Form.Group> */}
        <Form.Group className="mt-3 checkbox" controlId="formBasicCheckbox" >
         <Form.Check type="checkbox" required /> <span className='checkboxlink'>I agree to <a href='#'>terms of use</a></span>
        </Form.Group>
        <Button variant="primary" type="submit" className='btn-form' id="button">
           SUBMIT
        </Button>
      </Form>
     
        </div>
 
        </>
    )
}

export default Popup;