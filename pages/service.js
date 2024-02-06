import React from "react"; 
import { useEffect } from "react";
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';

import FeaturedBrandsService from "./slider/featured-brands";
import ClientStories from "./slider/client-stories";
import D2cform from "./d2cform";
const D2c = () =>{
    useEffect(() =>{
        const counters = document.querySelectorAll(".counter");

        counters.forEach((counter) => {
          counter.innerText = "0";
          const updateCounter = () => {
            const target = counter.getAttribute("data-target");
            const numericTarget = parseInt(target, 10); // Extract the numeric part
            if (!isNaN(numericTarget)) {
              const count = +counter.innerText.split(" ")[0]; // Extract the current count
              const increment = numericTarget / 200;
              if (count < numericTarget) {
                counter.innerText = `${Math.ceil(count + increment)} +`;
                setTimeout(updateCounter, 1);
              } else {
                counter.innerText = `${numericTarget} +`;
              }
            } else {
              counter.innerText = "Invalid Target"; // Handle invalid data targets
            }
          
          };
          updateCounter();
        });
        
    }

    )
    return(
        <>
            <Head>
        <title>O positive Blog</title>
        <meta charSet="utf-8" />
                <title>Opositive: Leading D2C & Ecommerce SEO Expert in India</title>
                <meta name="description" content="Opositive, a one stop solution for D2C SEO and e-commerce SEO in India working with global brands, helping them grow ad-free revenue and increase conversion rates by 5X with exclusive SEO strategies." />
                {/* <link rel="canonical" href="https://opositive.io/" /> */}
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>
  <div className='header-video service-banner-main'>  
       <br/>
       <img src="./assets/service/mobileservice.webp" id='mobile-video' className ="img-fluid" />

       <img src="./assets/service/servb.webp" id='desktop-video' className ="img-fluid" />

       <div className="cta-section-banner">
       <a href='#growth-calculator-form'><button className='demo-button'>Calculate Growth </button>
        </a> 
        <a href='/contact'><button className='case-studies-button'>Get in Touch</button>
        </a> 
       </div>
    </div>
        {/* Featured brands slider */}
       <FeaturedBrandsService></FeaturedBrandsService>
        <section className="about-results">
        <div className="container">
        <h2>Your Goals Are Our Milestones	</h2>
             <img src="./assets/team.png" className="img-fluid"/>
             <div className="row about-results-row" data-aos="fade-up" 
     data-aos-duration="1700">
                <div className="col-lg-12 desktop">
                    <div className="row">
                        <div className="col">
                        <div className="result-box first">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        <div class="counter" data-target="10000+"></div>

                        <p className="result-name">Organic sessions</p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="result-box">
                        <i class="fa fa-line-chart" aria-hidden="true"></i>
                        <div class="counter" data-target="300000+"></div>

                        <p className="result-name">Ranking Keyword</p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="result-box">
                        <i class="fa fa-mouse-pointer" aria-hidden="true"></i>                        
                        <div class="counter" data-target="400000+"></div>
                        <p className="result-name">Clicks</p>
                

                        </div>
                        </div>
                        <div className="col">
                        <div className="result-box last">
                        <i class="fa fa-users" aria-hidden="true"></i>

                        <div class="counter" data-target="500000+"></div>

                        <p className="result-name">Users</p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="result-box last">
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <div class="counter" data-target="70000+"></div>

                        <p className="result-name">Leads</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mobile">
                    <div className="row">
                        <div className="col-sm-6">
                        <div className="result-box first">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        <div class="counter" data-target="10000+"></div>

                        <p className="result-name">Organic sessions</p>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="result-box">
                        <i class="fa fa-line-chart" aria-hidden="true"></i>
                        <div class="counter" data-target="300000+"></div>

                        <p className="result-name">Ranking Keyword</p>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="result-box">
                        <i class="fa fa-mouse-pointer" aria-hidden="true"></i>                        
                        <div class="counter" data-target="400000+"></div>
                        <p className="result-name">Clicks</p>
                

                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="result-box last">
                        <i class="fa fa-users" aria-hidden="true"></i>

                        <div class="counter" data-target="500000+"></div>

                        <p className="result-name">Users</p>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="result-box last">
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <div class="counter" data-target="70000+"></div>

                        <p className="result-name">Leads</p>
                        </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        </section>
        <section className="our-process-section">
          <div className="container-fluid">
               <h2>Our Process</h2>
               {/* <p className="our-process-content">	
Your audience is curiously searching for your business, and we help those searches reach you with our time-tested process. 
</p> */}
               <div className="row">
                  <div className="col-lg-3 col-md-6 col-12 main-box" data-aos="fade-up" 
     data-aos-duration="1000">
                      <div className="colorful-box blue-bg">
                      <i class="fa fa-users" aria-hidden="true"></i>
                      </div>
                      <div className="process-context-box">
                      <h3>Customer Insight Analysis</h3>
<p>
We delve deep into understanding your target audience by analyzing their interests, curiosities, questions, and interactions with your brand. 
</p>
                      </div>

                  </div>
                  <div className="col-lg-3 col-md-6 col-12 main-box" data-aos="fade-down" 
     data-aos-duration="1000">
                  <div className="colorful-box red-bg" >
                  <i class="fa fa-line-chart" aria-hidden="true"></i>

</div>
<div className="process-context-box">
<h3>Holistic SEO Optimization
</h3>
<p>
Our team optimizes search elements including textual and image content, e-commerce listings, "People Also Ask" sections, featured snippets, Voice search, etc</p>
</div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 main-box" data-aos="fade-up" 
     data-aos-duration="1000">
                  <div className="colorful-box green-bg">
                  <i class="fa fa-usd" aria-hidden="true"></i>

</div>
<div className="process-context-box">
<h3>Zero-Ad Revenue Generation</h3>
<p>
We strategically guide your customers to your website, ensuring a seamless user experience that leads to ad-free revenue generation in a short time. </p>
</div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 main-box" data-aos="fade-down" 
     data-aos-duration="1000">
                  <div className="colorful-box orange-bg">
                  <i class="fa fa-filter" aria-hidden="true"></i>

</div>
<div className="process-context-box">
<h3>Funnel of Customer Data 

</h3>
<p>
For visitors who don't convert immediately, we capture essential data and integrate them into a future marketing funnel for sustained engagement.
</p>
</div>
                  </div>
               </div>
          </div>
        </section>
        <section className="tech-enabled-section">
        <h2>We are 100% Tech Enabled</h2>
        <div className="container initiative-tabs" data-aos="fade-up" 
     data-aos-duration="3700">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                
              <button
                class="nav-link active"
                id="exposeo-tab"
                data-bs-toggle="pill"
                data-bs-target="#exposeo"
                type="button"
                role="tab"
                aria-controls="exposeo"
                aria-selected="true"
              >
                <i class="fa fa-search-plus" aria-hidden="true"></i>
                   <br/>
                   Studio+ Analytics Suite              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="cofounder-tab"
                data-bs-toggle="pill"
                data-bs-target="#cofounder"
                type="button"
                role="tab"
                aria-controls="cofounder"
                aria-selected="false"
              >
                <i class="fa fa-diamond" aria-hidden="true"></i>
                <br/>
                Queen+ Content Hub
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="global-tab"
                data-bs-toggle="pill"
                data-bs-target="#global"
                type="button"
                role="tab"
                aria-controls="global"
                aria-selected="false"
              >
               <i class="fa fa-cogs" aria-hidden="true"></i>
                <br/>
               

Superior SEO Tools
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="friday-tab"
                data-bs-toggle="pill"
                data-bs-target="#friday"
                type="button"
                role="tab"
                aria-controls="friday"
                aria-selected="false"
              >
                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                <br/>
                War Strategy Planning
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="exposeo"
              role="tabpanel"
              aria-labelledby="exposeo-tab"
            >
              <div className="row tech-row">
               
                <div className="col-md-6 col-sm-12">
                  <h3>Studio+ Analytics Suite</h3>
                  <p>
                  Real-Time Business Insights: Studio+ is our proprietary analytics tool, offering a customized dashboard that effortlessly tracks over 100,000 data points in real-time, giving you unparalleled control over your business metrics. </p>
                </div>
                <div className="col-md-6 col-sm-12">
                <img data-src="./assets/service/Studioplus.gif" className="img-fluid lazyload"/>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="cofounder"
              role="tabpanel"
              aria-labelledby="cofounder-tab"
            >
              <div className="row tech-row">
              <div className="col-md-6 col-sm-12">
                  <h3>Queen+ Content Hub</h3>
                  <p>
                  High-Impact Content Solutions: Welcome to Queen+, our Content Excellence Centre. Here, we bring together top-notch writers and industry partners, supercharged with AI, to deliver rapid and impactful results for your business.    </p>
                </div>
                <div className="col-md-6 col-sm-12">
                <img data-src="./assets/service/linked.webp" className="img-fluid lazyload"/>
                </div>
             
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="global"
              role="tabpanel"
              aria-labelledby="global-tab"
            >
              <div className="row tech-row">
               
                <div className="col-md-6 col-sm-12">
                  <h3>

Superior SEO Tools</h3>
                  <p>
                  Unlock Your Business Potential: Leveraging industry-leading third-party tools such as SEMrush, Ahrefs, Sitebulb, and Moz, we leave no stone unturned in elevating your business to new heights.
                  </p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img data-src="./assets/service/SuperiorSEO tools copy.webp" className="img-fluid lazyload"/>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="friday"
              role="tabpanel"
              aria-labelledby="friday-tab"
            >
              <div className="row tech-row">
                
                <div className="col-md-6 col-sm-12">
                  <h3>War Strategy Planning</h3>
                  <p>
                  Quarterly Tactical Roadmaps: Upon client onboarding, we design a strategic 'War Strategy' with key objectives to set the stage for your success. This strategy is dynamically updated every quarter to maximize productivity.
                  </p>
                </div>
                <div className="col-md-6 col-sm-12">
                <img data-src="./assets/service/war strategy.webp" className="img-fluid lazyload"/>
                </div>
              </div>
            </div>
          </div>

          <div className="row mobileintitiative">
          <div className="col-md-6 col-sm-12">
          <img data-src="./assets/service/Studioplus.gif" className="img-fluid lazyload"/>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>Studio+ Analytics Suite </h3>
                  <p>
                  Real-Time Business Insights: Studio+ is our proprietary analytics tool, offering a customized dashboard that effortlessly tracks over 100,000 data points in real-time, giving you unparalleled control over your business metrics.
                  </p>
                </div>
          </div>
          <div className="row mobileintitiative">
          <div className="col-md-6 col-sm-12">
          <img data-src="./assets/service/linked.webp" className="img-fluid lazyload"/>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>Queen+ Content Hub</h3>
                  <p>
                  High-Impact Content Solutions: Welcome to Queen+, our Content Excellence Centre. Here, we bring together top-notch writers and industry partners, supercharged with AI, to deliver rapid and impactful results for your business.
                  </p>
                </div>
              </div>
              <div className="row mobileintitiative">
              <div className="col-md-6 col-sm-12">
                  <img data-src="./assets/Global Experts.jpg" className="img-fluid lazyload"/>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>Superior SEO Tools</h3>
                  <p>
                  Unlock Your Business Potential: Leveraging industry-leading third-party tools such as SEMrush, Ahrefs, Sitebulb, and Moz, we leave no stone unturned in elevating your business to new heights.
                  </p>
                </div>
              </div>
              <div className="row mobileintitiative">
                 <div className="col-md-6 col-sm-12">
                 <img data-src="./assets/service/war strategy.webp" className="img-fluid lazyload"/>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>War Strategy Planning</h3>
                  <p>
                  Quarterly Tactical Roadmaps: Upon client onboarding, we design a strategic 'War Strategy' with key objectives to set the stage for your success. This strategy is dynamically updated every quarter to maximize productivity.
                  </p>
                </div>
              </div>
        </div>
        </section>
        <section className="succes-stories-carousel">
        <h2>Success Stories</h2>
      
     <div class="container card-conatiner">
  <div class="card">
  <img src="./assets/service/casestudy1.webp" className="img-fluid"/>
    
  </div>
  <div class="card">
  <img src="./assets/service/casestudy2.webp" className="img-fluid"/>
 
  </div>
  <div class="card">
  <img src="./assets/service/casestudy3.webp" className="img-fluid"/>
   
  </div>
  <div class="card">
  <img src="./assets/service/casestudy4.webp" className="img-fluid"/>
   
  </div>
  <div class="card">
  <img src="./assets/service/casestudy5.webp" className="img-fluid"/>
    
  </div>
</div>
       <div className="view-all-stories">
           <a href="#">View All</a>
       </div>
        </section>
        <ClientStories></ClientStories>
        <section className="we-work-partners">
        <div className="container">
               <h2>We Don’t Work As Vendors, We work as Partners</h2>
               <div className="row">
                  <div className="col-lg-3 col-md-6 col-12 main-box" data-aos="fade-down" 
     data-aos-duration="2200">
                    <div className="partner-box">
                      <p>
                      Grow Business 
3x Faster
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 main-box" data-aos="fade-down" 
     data-aos-duration="2200">
<div className="partner-box">
                      <p>
                      Gain 40% on Paid Link Acquisition 
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 main-box" data-aos="fade-down" 
     data-aos-duration="2200">
       <div className="partner-box">
                      <p>
                      Top 1 Page<br/> 
                      Visibility 
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 main-box" data-aos="fade-down" 
     data-aos-duration="2200">
     <div className="partner-box">
                      <p>
                      Exponential Revenue Growth
                      </p>
                    </div>
                  </div>
               </div>
          </div>
        </section>
        <section className="growth-calculator-form" id="growth-calculator-form">
          <h2>How we can grow together?</h2>
          <div className="container">
         <div className="row">
         <p className="growth-calculator-line">Customize your requirements with our Growth calculator.</p>

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

export default D2c;