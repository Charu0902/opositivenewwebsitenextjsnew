import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

function sendEmail(event) {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('Phone').value;
    let mailadd = document.getElementById('emailadd').value;
    let message = document.getElementById('message').value;
    let data = "<html><head><style>table, th, td {    border: 1px solid black;border-collapse: collapse;}</style></head><body><table>";
    data += "<tr><td>Name</td>";
    data += "<td>"+name+"</td></tr>";
    data += "<tr> <td> Phone</td>";
    data += "<td> "+phone+"</td> </tr>";
    data += "<tr> <td> Email</td>";
    data += "<td> "+mailadd+"</td> </tr>";
    data += "<tr> <td>Message</td>";
    data += "<td> "+message+"</td> </tr>";
    console.log(data);
    // let userconfim = "<p>Hello "+name+" ,</p>";
    // userconfim += "<p>Thank you for getting in touch with O+ and filling out the form. Our team will get back to you shortly and discuss your queries. </p>"
    // userconfim += "<p>YLet's grow your business together.  </p>";
    
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "charu.obbserv@gmail.com",
      Password: "09022000C@",
      To: 'kartik@obbserv.com',
      From: "charu.obbserv@gmail.com",
      Subject: "Sending Email using javascript",
      Body:  data
      })
      
          .then(function (message) {
          // alert("mail sent successfully")
          // var head = document.getElementById('head');
          // head.style.display = "block";
          console.log(message);
          
        //   setTimeout(function(){
        //     // window.location.href = "thankyou";
        // //     var formclick = document.getElementById('formclick');
        // //     formclick.classList.add("onclickformdiv");
        // //     formclick.style.display = "block";
        // //     var form = document.getElementById('myform');
            
        // //     // form.classList.remove("displayhomeform");
        // //     var head = document.getElementById('head');
        // //   head.style.display = "none";
        // // form.classList.remove("displayhomeform");
        // // form.classList.add('hidehomeform');
        // // setTimeout(function(){
        // //     head.style.display = "none";
        // // }, 2000)
        //   }, 3000)
      // function confirmEmail(useremail, usermailbody){
        
      //   Email.send({
      //     Host: "smtp.gmail.com",
      //     Username: "charu.obbserv@gmail.com",
      //     Password: "09022000C@",
      //     To: this.useremail,
      //     From: "charu.obbserv@gmail.com",
      //     Subject: "O-Positive | Response Recieved",
      //     Body:  this.usermailbody
      //   })
      //     .then(function (message) {
      //     // alert("mail sent successfully")
      //     window.location = "thanks.html";
      //     });
      //     event.preventDefault()
      //   }

    //   window.location = "thanks.html";
    document.getElementById("form").reset();
          });
      event.preventDefault()
}

function sendEmailAxios(event){
  var selectedhome = [];
   for (var option of document.getElementById('interest').options) {
        if (option.selected) {
      selectedhome.push(option.value);
        }
      }
  var bodyFormData = new FormData();
 let name = document.getElementById('name').value;
    let phone = document.getElementById('Phone').value;
    let mailadd = document.getElementById('emailadd').value;
    // let message = document.getElementById('message').value;
    let domainname = document.getElementById('domainname').value;
    // let interest = document.getElementById('interest').value;
    let interest = selectedhome.toString();

    //for campaigns and to get values in url using get method
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    
    const utm_source = urlParams.get('utm_source');
    const utm_medium = urlParams.get('utm_medium');
    const utm_campaign = urlParams.get('utm_campaign');
    
    
bodyFormData.append('name', name);
bodyFormData.append('phone', phone); 
bodyFormData.append('domainname', domainname); 
bodyFormData.append('mailadd', mailadd); 
bodyFormData.append('interest', interest); 
bodyFormData.append('utm_source', utm_source); 
bodyFormData.append('utm_medium', utm_medium); 
bodyFormData.append('utm_campaign', utm_campaign); 


// bodyFormData.append('message', message); 


axios({
  method: "post",
  url: "https://opositive.io/PHPMailer-master/opositive/mailsender.php",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
})
  .then(function (response) {
    //handle success
    // console.log(response);
    window.location.href = "thankyou";

    // setTimeout(
    //   function(){
    //     window.location.href = "thankyou";

    //   }, 3000)

  })
  .catch(function (response) {
    //handle error
    console.log(response);
  });
  event.preventDefault();
}

function formclick(){
    
    
        var form = document.getElementById('myform');
        // form.style.display = 'block';
        form.classList.add("displayhomeform");
        var formclick = document.getElementById('formclick');
        formclick.classList.remove("onclickformdiv");
        formclick.style.display = "none";
    
  }
  
  

  function HideForm(){
    var hideform = document.getElementById('myform');
    hideform.classList.remove("displayhomeform");
    var showbutton = document.getElementById('formclick');
    showbutton.style.display = 'block';
  }
//       function gtm(){
//         // const urlParams = new URLSearchParams(queryString);
//         const queryString = window.location.search;

// const urlParams = new URLSearchParams(queryString);

// const utm_source = urlParams.get('utm_source');
// const utm_medium = urlParams.get('utm_medium');
// const utm_campaign = urlParams.get('utm_campaign');


// console.log(utm_source);
//       }
      // gtm();
const Homeforms = () => (
    <>
    <div>
    <div className='form-bg' id='myform'>
    <div className='container'>
    <div className='box'>
       <div className='form-logo'>
         <a href='/'>
              <img className='box-logo lazyload'  data-src='./assets/logo-white.png' alt=''/>
         </a>
     
       </div>
       <button type='button' className='formcross' onClick={HideForm}>
       &times;
         </button>
       <div className='box-content'>
       <h2 className='dive-heading'>Grow exponentially with O+! </h2>
          <p className='dive-para'> Increase ad-free traffic to your brand now.</p>
       </div>
    </div>
      <Form method='post' onSubmit={sendEmailAxios} id = "form" >
        <Form.Group className='form-bgd'>
          <p id='head'>Your Form has been submitted</p>
          <Form.Label  for="name">Name</Form.Label>
          <Form.Control type="text" className='mobile-home-input' name='name'  id = 'name' />
        </Form.Group>
        <Form.Group className='form-bgd'>
          <Form.Label  for="emailadd">Email Address</Form.Label>
          <Form.Control type="email" className='mobile-home-input' name='emailadd' required  id = 'emailadd'/>
        </Form.Group>
        <Form.Group className='form-bgd'>
          <Form.Label  for="Phone">Phone Number</Form.Label>
          <Form.Control type="tel" className='mobile-home-input' name='Phone'  pattern="[0-9]{10}" maxLength="10"   required  id = 'Phone'/>
        </Form.Group>
        <Form.Group className='form-bgd'>
          <Form.Label  for="domainname">Your Domain</Form.Label>
          <Form.Control type="text" className='mobile-home-input' name='domainname'  required  id = 'domainname'/>
        </Form.Group>
        <Form.Group className='form-bgd'>
          <Form.Label  for="domainname">What's Your Interest</Form.Label>
          {/* <Form.Select aria-label="Default select example" className='mobile-home-input'  name='interest' id = 'interest' multiple>
          <option></option>
            <option value="1">Access to Studio+ - new age dashboard for search</option>
           <option value="2">Strategy Intervention call with expert </option>
           <option value="3">Updates and Growth Hacks</option>
        </Form.Select> */}
        <select class="selectpicker " multiple aria-label="size 3 select example"   name='interest' id = 'interest' required>
        {/* <option value="Access to Studio+ - new age dashboard for search">Access to Studio+ - new age dashboard for search</option>
        <option value="Strategy Intervention call with expert">Strategy Intervention call with expert </option>
        <option value="Updates and Growth Hacks">Updates and Growth Hacks </option> */}
        <option value="SEO strategy Call with Expert">SEO strategy Call with Expert</option>
        <option value="SEO Solution: D2C ECommerce">SEO Solution: D2C ECommerce </option>
        <option value="SEO Solution: SAAS">SEO Solution: SAAS </option>
        <option value="SEO for retail stores/ centers">SEO for retail stores/ centers </option>
        <option value="Competition & Brand Audit">Competition & Brand Audit </option>
        <option value="Sign up for SeO Newsletter">Sign up for SeO Newsletter </option>
        <option value="Free Sign up - Studio+ Dashboard">Free Sign up - Studio+ Dashboard </option>
        </select>
        </Form.Group>
        {/* <Form.Group className='form-bgd'>
          <Form.Label  for="message">Puropse</Form.Label>
          <Form.Control type="text" className='mobile-home-input' name='message'  required id = 'message'/>
        </Form.Group> */}
        <Form.Group className="mb-3 checkbox" controlId="formBasicCheckbox" >
         <Form.Check type="checkbox" required /> <span className='checkboxlink'>I agree to <a href='#'>terms of use</a></span>
        </Form.Group>
        <Button variant="primary" type="submit" className='btn-form'>
           SUBMIT
        </Button>
      </Form>
    </div>
    </div>
  <div className='onclickformdiv' id = "formclick">
       <button className='formbtn' type='button' id='formopositive' onClick={formclick}>
       <i class="fa fa-chevron-up" aria-hidden="true"></i>   Swipe up for Ad-Free Growth!
       </button>
  </div>
    </div>
  
    </>
  
);
export default Homeforms;