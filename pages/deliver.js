import Head from 'next/head'
import React from "react";
import $ from 'jquery' 
import { useEffect } from "react";
import Deliverform from './deliverform';
import Link from "next/link";
import Deliverslider from './deliverslider';
import 'bootstrap/dist/css/bootstrap.css';



function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 1000;
  }
  function Curiosity() {
    var curiosity = document.getElementById("Curiosity");
    curiosity.style.display = "block";
    var infinite = document.getElementById("Infinite");
    infinite.style.display = "none";
    var quarter = document.getElementById("Quarter");
    quarter.style.display = "none";
    var realtime = document.getElementById("Realtime");
    realtime.style.display = "none";
    var quality = document.getElementById("Quality");
    quality.style.display = "none";
    var experimentation = document.getElementById("Experimentation");
    experimentation.style.display = "none";
  }
  function Infinite() {
    var infinite = document.getElementById("Infinite");
    infinite.style.display = "block";
    var curiosity = document.getElementById("Curiosity");
    curiosity.style.display = "none";
    var curiositytab = document.getElementById('curiositytab');
    curiositytab.classList.remove("activetab");
    var quarter = document.getElementById("Quarter");
    quarter.style.display = "none";
    var realtime = document.getElementById("Realtime");
    realtime.style.display = "none";
    var quality = document.getElementById("Quality");
    quality.style.display = "none";
    var experimentation = document.getElementById("Experimentation");
    experimentation.style.display = "none";
  
  }
  function Quarter() {
    var quarter = document.getElementById("Quarter");
    quarter.style.display = "block";
    var infinite = document.getElementById("Infinite");
    infinite.style.display = "none";
    var curiosity = document.getElementById("Curiosity");
    curiosity.style.display = "none";
    var curiositytab = document.getElementById('curiositytab');
    curiositytab.classList.remove("activetab");
    var realtime = document.getElementById("Realtime");
    realtime.style.display = "none";
    var quality = document.getElementById("Quality");
    quality.style.display = "none";
    var experimentation = document.getElementById("Experimentation");
    experimentation.style.display = "none";
  }
  function Realtime() {
    var realtime = document.getElementById("Realtime");
    realtime.style.display = "block";
    var quarter = document.getElementById("Quarter");
    quarter.style.display = "none";
    var infinite = document.getElementById("Infinite");
    infinite.style.display = "none";
    var curiosity = document.getElementById("Curiosity");
    curiosity.style.display = "none";
    var curiositytab = document.getElementById('curiositytab');
    curiositytab.classList.remove("activetab");
    var quality = document.getElementById("Quality");
    quality.style.display = "none";
    var experimentation = document.getElementById("Experimentation");
    experimentation.style.display = "none";
  }
  function Quality() {
    var quality = document.getElementById("Quality");
    quality.style.display = "block";
    var realtime = document.getElementById("Realtime");
    realtime.style.display = "none";
    var quarter = document.getElementById("Quarter");
    quarter.style.display = "none";
    var infinite = document.getElementById("Infinite");
    infinite.style.display = "none";
    var curiosity = document.getElementById("Curiosity");
    curiosity.style.display = "none";
    var curiositytab = document.getElementById('curiositytab');
    curiositytab.classList.remove("activetab");
    var experimentation = document.getElementById("Experimentation");
    experimentation.style.display = "none";
  }
  function Experimentation() {
    var experimentation = document.getElementById("Experimentation");
    experimentation.style.display = "block";
    var quality = document.getElementById("Quality");
    quality.style.display = "none";
    var realtime = document.getElementById("Realtime");
    realtime.style.display = "none";
    var quarter = document.getElementById("Quarter");
    quarter.style.display = "none";
    var infinite = document.getElementById("Infinite");
    infinite.style.display = "none";
    var curiosity = document.getElementById("Curiosity");
    curiosity.style.display = "none";
    var curiositytab = document.getElementById('curiositytab');
    curiositytab.classList.remove("activetab");
  }
export default function deliver() {
  useEffect(() => {
    $(document).ready(function() {
           $('div.solutions-col').hover(function() {
               $('div').removeClass("activesol");
               // $("p").removeClass("intro");
               $(this).addClass("activesol");
           });
       });

       var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
   
       if ("IntersectionObserver" in window) {
         var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
           entries.forEach(function(video) {
             if (video.isIntersecting) {
               for (var source in video.target.children) {
                 var videoSource = video.target.children[source];
                 if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                   videoSource.src = videoSource.dataset.src;
                 }
               }
     
               video.target.load();
               video.target.classList.remove("lazy");
               lazyVideoObserver.unobserve(video.target);
             }
           });
         });
     
         lazyVideos.forEach(function(lazyVideo) {
           lazyVideoObserver.observe(lazyVideo);
         });
       }
 });
    return (
        <>
<Head>
<meta charSet="utf-8" />
                <title>Fast and Reliable SEO Delivery | Opositive</title>
                <meta name="description" content="Trust Opositive with all of your SEO delivery requirements. Our team guarantees the qulality and timely delivery." />
                <link rel="canonical" href="https://opositive.io/deliver" />

                <meta property="og:type" content="website"/> 
                <meta property="og:url" content=" https://opositive.io/deliver"/> 
                <meta property="og:title" content="Fast and Reliable SEO Delivery | Opositive"/> 
                <meta property="og:description" content="Trust Opositive with all of your SEO delivery requirements. Our team guarantees the qulality and timely delivery."/> 
                <meta property="og:image" content="https://opositive.io/Assets/photo-360x700.png"/> 

                <meta property="twitter:card" content="summary_large_image"/> 
                <meta property="twitter:url" content="https://opositive.io/deliver"/> 
                <meta property="twitter:title" content="Fast and Reliable SEO Delivery | Opositive"/> 
                <meta property="twitter:description" content="Trust Opositive with all of your SEO delivery requirements. Our team guarantees the qulality and timely delivery."/> 
                <meta property="twitter:image" content="https://opositive.io/Assets/photo-360x700.png"/> 
</Head>
<section className="banner-deliver">
      <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop id='mobile-video'  poster='./assets/photo-360-700.webp'>
               <source src="./assets/video-360-700.mp4"  />
           </video>
        <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop id='desktop-video' className="lazy" poster='./assets/deliver-banner-desktop.webp'>
               <source data-src="./assets/video 1440 x 680.mp4"  />
           </video> 
        <div className="container-fluid bannerdeliver-innerdiv">
          <div className="row">
         
            <div className="col-lg-7">
              <div className="row reserchlab">
                <div className="col-lg-6">
                  <a href="/">
                    <img data-src="./assets/logo-white.webp"  className ="img-fluid lazyload"/>
                  </a>
                  <h1>RESERARCH LAB</h1>
                </div>
                <div className="col-lg-6 baaner-innerdiv-content">
                  <p>
                    Our goal is to go beyond providing a service by building a
                    brand that becomes synonymous with its segment.
                  </p>

                  <p>
                    At the O+ Research Lab, we reinvent internet visibility and
                    business growth by redefining traditional methods with
                    conscious data and opinionated decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 explore">
              <a href="#">Explore Now</a>
            </div>
            <div className="col-lg-2 white-arrow">
              <button type="button" onClick={topFunction}>
                <img data-src="./assets/arrow-bottom.png" className='lazyload'/>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bannerdeliver-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <p>
                We <span>deliver value</span> by taking actions based on market
                trends, algorithm priorities mapped to user preferences, and its{" "}
                <span>visible impact on industry</span> leaders to help you
                grow.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pillars">
        {/* <div className="container-fluid">
          <div className="row pillars-row">
            <div className="col-lg-4 col-10 pillarstext">
              <p>
                O+ Pillars of <br></br>
                Exponential Growth
              </p>
            </div>
          </div>
        </div> */}
         <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop  id='mobile-video' className="lazy" poster='./assets/O+ gif website thumbnail.jpg'>
               <source data-src="./assets/O+ gif website.mp4"  />
           </video>
          <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop  id='desktop-video' className="lazy" poster='./assets/circularellipse.png'>
               <source data-src="./assets/pillars-growth.mp4"  />
           </video>
      </section>
      <section className="deliver">
        <div className="container">
          <h2>How do we deliver?</h2>
          <p>
            To deliver your business with exponential growth and relevant
            visibility on search
          </p>
          <div className="row deliverrow desktoprow">
            <div className="col-lg-6 col-12 tab-button">
              <button type="button" class="tablinks activetab" id="curiositytab" onClick={Curiosity}>
             
                Curiosity Framework
              </button>
              <button type="button" class="tablinks" onClick={Infinite}>
               
                Infinite Intent Ecosystem
              </button>
              <button type="button" class="tablinks" onClick={Quarter}>
               
                Quarter War Strategy
              </button>
              <button type="button" class="tablinks" onClick={Realtime}>
               
                Realtime Tracking
              </button>
              <button type="button" class="tablinks" onClick={Quality}>
                Quality Protocol
              </button>
              <button type="button" class="tablinks" onClick={Experimentation}>
                
                Experimentation
              </button>
            </div>
            <div className="col-lg-6 col-12">
              <div
                className="tab-content"
                id="Curiosity"
                style={{ display: "block" }}
              >
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/curiosity.png"  className ="img-fluid lazyload"/>
                  {/* <img data-src="./Assets/ellipseicon1.png" className="icon-tab img-fluid" /> */}
                </div>
                <p className="tab-para">
                  To define the focus and create achievable targets on a
                  stipulated timeline.
                </p>
              </div>
              <div className="tab-content" id="Infinite">
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/intent.png"  className ="img-fluid lazyload"/>
                  {/* <img data-src="./Assets/ellipseicon2.png" className="icon-tab img-fluid" /> */}
                </div>
                <p className="tab-para">
                  To realize the complete untapped potential of search and
                  establish a more efficient way to reach customers.
                </p>
              </div>
              <div className="tab-content" id="Quarter">
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/quarter.png" className ="img-fluid lazyload" />
                  {/* <img data-src="./Assets/ellipseicon3.png" className="icon-tab img-fluid" /> */}
                </div>
                <p className="tab-para">
                  Allows us to build the execution road map to success with
                  defined quarter milestones for your business.
                </p>
              </div>
              <div className="tab-content" id="Realtime">
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/realtime.png" className ="img-fluid lazyload"/>
                  {/* <img data-src="./Assets/ellipseicon4.png" className="icon-tab img-fluid" /> */}
                </div>
                <p className="tab-para">
                  Our in-house tools (studio+, crawl+, live+) and a few chosen
                  3rd party tools enable us to track information of the brand
                  and its selected competitors in Realtime and accelerate your
                  brand execution.
                </p>
              </div>
              <div className="tab-content" id="Quality">
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/quality.png" className ="img-fluid lazyload"/>
                  {/* <img data-src="./Assets/5ellipse.png" className="icon-tab img-fluid" /> */}
                </div>
                <p className="tab-para">
                  We minimize SPAM score and increase longevity of the actions
                  for the brands with our tech-enabled quality process for SEO
                  activities.
                </p>
              </div>
              <div className="tab-content" id="Experimentation">
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/experimental.png" className ="img-fluid lazyload"/>
                  {/* <img data-src="./Assets/6ellipse.png" className="icon-tab img-fluid" /> */}
                </div>
                <p className="tab-para">
                  We are always on the lookout to try something new which will
                  accelerate growth and have the openness required to innovate.
                </p>
              </div>
            </div>
          </div>
          <div className="row deliverrow mobilerow">
            
            <div className="col-md-12 col-12">
              <div
             
                id="Curiosity-mob"
               
              >
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/curiosity.png"  className ="img-fluid lazyload"/>
                  {/* <img data-src="./Assets/ellipseicon1.png" className="icon-tab img-fluid" /> */}
                </div>
                <h3 className="mobile-row-heading">Curiosity Framework</h3>
                <p className="tab-para">
                  To define the focus and create achievable targets on a
                  stipulated timeline.
                </p>
              </div>
              <div  id="Infinite-mob">
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/intent.png"  className ="img-fluid lazyload"/>
                  {/* <img data-src="./Assets/ellipseicon2.png" className="icon-tab img-fluid" /> */}
                </div>
                <h3 className="mobile-row-heading">Infinite Intent Ecosystem </h3>
                <p className="tab-para">
                  To realize the complete untapped potential of search and
                  establish a more efficient way to reach customers.
                </p>
              </div>
              <div  id="Quarter-mob">
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/quarter.png" className ="img-fluid lazyload" />
                  {/* <img data-src="./Assets/ellipseicon3.png" className="icon-tab img-fluid" /> */}
                </div>
                <h3 className="mobile-row-heading">Quarter War Strategy  </h3>

                <p className="tab-para">
                  Allows us to build the execution road map to success with
                  defined quarter milestones for your business.
                </p>
              </div>
              <div  id="Realtime-mob">
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/realtime.png" className ="img-fluid lazyload"/>
                  {/* <img data-src="./Assets/ellipseicon4.png" className="icon-tab img-fluid" /> */}
                </div>
                <h3 className="mobile-row-heading">Realtime Tracking </h3>

                <p className="tab-para">
                  Our in-house tools (studio+, crawl+, live+) and a few chosen
                  3rd party tools enable us to track information of the brand
                  and its selected competitors in Realtime and accelerate your
                  brand execution.
                </p>
              </div>
              <div  id="Quality-mob">
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/quality.png" className ="img-fluid lazyload"/>
                  {/* <img data-src="./Assets/5ellipse.png" className="icon-tab img-fluid" /> */}
                </div>
                <h3 className="mobile-row-heading">Quality Protocol   </h3>

                <p className="tab-para">
                  We minimize SPAM score and increase longevity of the actions
                  for the brands with our tech-enabled quality process for SEO
                  activities.
                </p>
              </div>
              <div  id="Experimentation-mob">
                <div className="tabcontent-imgdiv">
                  <img data-src="./assets/experimental.png" className ="img-fluid lazyload"/>
                  {/* <img data-src="./Assets/6ellipse.png" className="icon-tab img-fluid" /> */}
                </div>
                <h3 className="mobile-row-heading">Experimentation </h3>

                <p className="tab-para">
                  We are always on the lookout to try something new which will
                  accelerate growth and have the openness required to innovate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="exclusive-ip">
        <div className="container">
          <div className="row exclusive-row">
            <div className="col-lg-6 col-12">
              {/* <h5>Stockie Operation Across the world</h5> */}
              <h2>Our Exclusive IPs 
 </h2>
              {/* <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy.
              </p> */}
              {/* <button type="button" className="get-started">
                Get Started
              </button> */}
            </div>
            <div className="col-lg-6 col-12 ip-column">
              <div className="iptype">
                <h3>TRIBE + </h3>
                <p>
                  Our Tribe+ platform is home to over 1000 verified bloggers and
                  influencers with 15+ attributes to filter and select from. We
                  are connected to several high-authority portals at negotiated
                  prices to accelerate the acquisition of high authority links
                  and help you escalate your digital credibility faster.
                </p>
              </div>
              <div className="iptype">
                <h3>WRITE + </h3>
                <p>
                  To fulfill the curiosities of your segment, we build a curated
                  content ecosystem through Write +. With expert writers
                  partnered for multilingual and sector specific content, we can
                  create the credibility you need to get more access to organic
                  search queries.
                </p>
              </div>
              <div className="iptype">
                <h3>STUDIO + </h3>
                <p>
                  Studio+ enables you to get a visual overview of your brand’s
                  performance on selected KPIs and understand the data in a
                  simplified manner. You can now review your website’s
                  performance better and in one place through the customized
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="solutions-growth">
        <div className="container">
          <h2>Solutions Crafted for Growth </h2>
          <h4>Business Categories</h4>
          <div className="row solutions-row">
            <div className="col-md-4 col-11 solutions-col activesol" id="eCommerce" >
              <h3 className="solution-name">D2C eCommerce</h3>
              <div className="underline"></div>
              <p>
                Our D2C Revenue Scale Up solution is created specifically for
                e-commerce brands to make sure that you never lose out on repeat
                purchases.
              </p>

              <p>
                It helps brands emerge as segment leaders on search engines and
                helps scale ad-free revenue by building purchase funnels.
              </p>
            </div>
            <div className="col-md-4 col-11 solutions-col" id="B2B" >
              <h3 className="solution-name">B2B</h3>
              <div className="underline"></div>
              <p>
                With our B2B Thought Leadership Solution, we help your brand get
                ranked for business-related intent in the top 3 search results
                and scale your traffic with strategic content creation.
              </p>

              <p>
                {" "}
                Our goal for B2B brands is to make sure that if a customer is
                searching for a problem you solve, then he can find you easily.
              </p>
            </div>
            <div className="col-md-4 col-11 solutions-col" id="RETAIL">
              <h3 className="solution-name">RETAIL</h3>
              <div className="underline"></div>
              <p>
                When it comes to decoding the online capabilities of retail
                businesses, our Hyperlocal Curiosity Solution helps you get more
                footfalls, enquiries, and requests with zero-dependency on
                brand.
              </p>

              <p>
                It enables long-lasting personalized tracking and growth for
                your enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="case-studies">
        <div className="container">
          <h2>Case Studies</h2>
          <p>
            Check out how we have transformed brands online with our case
            studies.
          </p>
         <Deliverslider></Deliverslider>
          <div className="row casestudies-row blogs-row ">
            <div className="col-lg-3 col-6 case-studyimg-box">
            <Link href='/case-study/gourmet-garden'>
              <img data-src="./assets/casestudy1.jpg" className ="img-fluid case-study-img lazyload" />
              </Link>
            </div>
            <div className="col-lg-3 col-6 case-studyimg-box">
              <img data-src="./assets/casestudy2.jpg" className ="img-fluid case-study-img lazyload"/>
            </div>
            <div className="col-lg-3 col-6 case-studyimg-box">
              <img data-src="./assets/casestudy3.jpg" className ="img-fluid case-study-img lazyload"/>
            </div>
            <div className="col-lg-3 col-6 case-studyimg-box">
              <img data-src="./assets/casestudy4.jpg" className ="img-fluid case-study-img lazyload"/>
            </div>
          </div>
         
        </div>
      </section>
      <Deliverform></Deliverform>
        </>
    )
  }