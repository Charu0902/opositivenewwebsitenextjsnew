import React, { useState } from "react";
import axios from 'axios';

const RegForm = () =>{
    function sendDataSheet(e){
        const formEle = document.querySelector('#regform');
        // e.preventDefault();
        console.log('Submitted')
        const formData = new FormData(formEle);
        fetch('https://script.google.com/macros/s/AKfycbxH2o8qPve7BgzwdUZPTLsVR4H-GmgMcA3dMuAnBCCgtb_6wRR-gjZGTVXUepidJqlV/exec',{
            method: 'POST',
            body:formData
        }) 
        // .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const [formdata, setFormdata] = useState({
        username:"",
        email:"",
        password:""
    });
    const handleInput = (event) =>{
const name = event.target.name;
const value = event.target.value;
setFormdata ((prev) =>{
    return{...prev, [name]:value}   //sperad opeaor maitians the previous state and only changes the current data on which user is changing
})


    }
    const sendData = (e) =>{
        e.preventDefault();
    
        const data = {
            name : formdata.username,
            email: formdata.email,
            pass: formdata.password
        }
        console.log(data)
        sendDataSheet();
        const senddata = {
            username: formdata.username,
            email: formdata.email,
            password: formdata.password

        };
        console.log(senddata);
        setTimeout(
            function(){
              window.location.href = "thankyou";
            }, 3000)
    //  axios.post('https://react.opositive.io/register-client.php', senddata)
    //         .then((result) => {
    //           console.log('success')
    //         })
    //         .catch((error) => {
    //             console.log('Error during registration:', error);
    //         });
    }
    return(
        <>
        <br>
        </br>
        <br/>
        <br/>
        <br/>
        <form onSubmit={sendData} id="regform">
            <input type="text" name="username" for ='username' placeholder="enter name" value={formdata.username} onChange={handleInput} />
            <br/>
            <input type="email" name="email" for ='email' placeholder="enter email" value={formdata.email} onChange={handleInput} />
            <br/>
            <input type="password" name="password" for ='password' placeholder="enter password" value={formdata.password} onChange={handleInput} />
            <br/>
<button type="submit" name="submit">Submit</button>

        </form>
        </>
    )
}
export default RegForm;