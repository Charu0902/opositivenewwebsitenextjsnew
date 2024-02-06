import React from "react";
import Head from 'next/head'

import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import FeaturedBrandsService from "./slider/featured-brands";
import ClientStories from "./slider/client-stories";
import D2cform from "./d2cform";
import Deliverform from "./contact-form";
import Contactform from "./contactform";

const Contactus = () => {
    <Head>
    <meta charSet="utf-8" />
        <title>Contact Us | Opositive</title>
        <meta name="description" content="Get in touch with Opositive for expert SEO solutions. Contact us today for personalized digital strategy and support." />
        <link rel="canonical" href="https://opositive.io/contact" />

             
    </Head>
    return (
        <>
          <div className='header-video contact-us-banner'>  
       
       <img src="./assets/contact-us-mobile.webp" id='mobile-video' className ="img-fluid" />

       <img src="./assets/contact-us-desktop.webp" id='desktop-video' className ="img-fluid" />

    </div>
  <FeaturedBrandsService></FeaturedBrandsService>
        <section className="contact-form-section">
        
        <div className="container">
          <div className="row">
              <div className="col-lg-9">
                 <div className="row">
                     <div className="col-lg-4 deatils-main-div">
                       <div className="contact-us-deatils-div">
                           <h2>Contact us</h2>
                           <a href="https://www.google.com/maps/dir/24.5828406,73.6889375/opositive.io+-+advanced+seo+lab+gurugram+address/@26.516688,72.7451599,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d194cbcda6563:0x5a6a6e08456d7684!2m2!1d77.0809121!2d28.4990836?entry=ttu">
                           <i className="fa fa-map-marker" aria-hidden="true"></i> 1st Floor Plot 269/4, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
                           </a>
                         
                           <a href="mailto:Hello@opositive.io">
                           <i className="fa fa-envelope-o" aria-hidden="true"></i> Hello@opositive.io
                           </a>
                         
                         
                           <a href="tel:9799954477">
                           <i className="fa fa-phone" aria-hidden="true"></i> 9799954477
                           </a>
                       </div>
                     </div>
                     <div className="col-lg-8 form-div-contact">
                        <h1>Get in touch</h1>
                        <p>Feel free to drop us a line below</p>
                       <Contactform></Contactform>
</div>
                 </div>
              </div>
              <div className="col-lg-3 certificate-div">
              <img data-src="./assets/clutch.webp" className="img-fluid lazyload certificate-img"/>

              </div>
          </div>
        </div>
        </section>
    <ClientStories></ClientStories>
        <section className="diy-section">
              <p>Get Diy Guide</p>
        </section>
         <section className="growth-calculator-form">
          <div className="container">
         <div className="row">

         <div className="col-lg-6 col-12 growth-calculator">
                 <div className="row">
                    <div className="col-lg-10 steps-col">
                        <div className="row">
                        <div className="col-lg-2">
                            <p className="nos">
                        1
                      </p>
                            </div>
                            <div className="col-lg-8">
                            <div className="steps">
                        <p>Help us with your Domain  </p>
                      </div>
                            </div>
                           
                        </div>
                     
                      
                    </div>
                   
                 </div>
                 <div className="row">
                    <div className="col-lg-10 steps-col">
                        <div className="row">
                        <div className="col-lg-2">
                            <p className="nos">
                        2
                      </p>
                            </div>
                            <div className="col-lg-8">
                            <div className="steps">
                        <p>We’ll Analyse your business potential  </p>
                      </div>
                            </div>
                           
                        </div>
                     
                      
                    </div>
                   
                 </div>
                 <div className="row">
                    <div className="col-lg-10 steps-col">
                        <div className="row">
                        <div className="col-lg-2">
                            <p className="nos">
                        3
                      </p>
                            </div>
                            <div className="col-lg-8">
                            <div className="steps">
                        <p>Get a Free report + Free DIY Guide  </p>
                      </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="col-lg-6 col-12">
                <D2cform></D2cform>
            </div>
         </div>
          </div>
        </section>
        
        </>
        )
    }

export default Contactus;        