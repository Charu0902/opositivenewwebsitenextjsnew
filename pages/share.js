import Head from 'next/head'
import Link from "next/link";
import KnowledgePartner from './knowloedge-partners';
import Shareform from './shareform';
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Share = () =>{
  useEffect(() => {
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
    return(
        <>
 <Head>
 <meta charSet="utf-8" />
                <title>Collaborate and Exchange Ideas with O+ | Opositive</title>
                <meta name="description" content="Collaboration and idea sharing are encouraged with Opositive. Our staff is available to assist you in realising your idea." />
                <link rel="canonical" href="https://opositive.io/share" />

                <meta property="og:type" content="website"/> 
                <meta property="og:url" content="https://opositive.io/share"/> 
                <meta property="og:title" content="Collaborate and exchange ideas. Bring your concept to reality with O+"/> 
                <meta property="og:description" content="Collaboration and idea sharing are encouraged with Opositive. Our staff is available to assist you in realising your idea."/> 
                <meta property="og:image" content="https://opositive.io/assets/new-thumbnail.webp"/> 

                <meta property="twitter:card" content="summary_large_image"/> 
                <meta property="twitter:url" content="https://opositive.io/share"/> 
                <meta property="twitter:title" content="Collaborate and exchange ideas. Bring your concept to reality with O+"/> 
                <meta property="twitter:description" content="Collaboration and idea sharing are encouraged with Opositive. Our staff is available to assist you in realising your idea."/> 
                <meta property="twitter:image" content=" https://opositive.io/assets/new-thumbnail.webp"/> 
        </Head>       
        <section className="banner-deliver">
          <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
          className="lazy"
        playsinline ={"true"}
          loop id='mobile-video' poster='./assets/new-thumbnail.webp'>
               <source data-src="./assets/O+ banner Video (680x580).mp4"  />
           </video>
           <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
          className="lazy"
        playsinline ={"true"}
          loop id='desktop-video' poster='./assets/share-banner.webp'>
               <source data-src="./assets/share-banner Video - 1440x680.mp4"  />
           </video> 
      </section>    
      <section className="curiosities-drive">
            <div className="container"> 
            <div className="row">
                <div className="col-md-4 col-12">
                    <h1 className="curiosities-drive-heading">
                    Curiosities drive innovation.
                    </h1>
                </div>
                <div className="col-md-8 col-12">
                   <p className="curiosities-drive-paragraph">
                   O+ Share is dedicated to growing, engaging, and contributing to digital curiosities, thus enabling new exploration by pushing the boundaries of what we know.                     </p>
                </div>

            </div>

            </div>

        </section>   
        <section className="share-steps">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-3 share-steps-col">
                        <img data-src="./assets/grow_share.png" className ="img-fluid lazyload"/> 
                        <h3>Grow</h3>                
                           </div>
                    <div className="col-md-3 col-3 share-steps-col">
                    <img data-src="./assets/engage_share.png" className ="img-fluid lazyload"/>                 
                       <h3>Engage</h3>
                    </div>
                    <div className="col-md-3 col-3 share-steps-col">
                    <img data-src="./assets/contribute_share.png" className ="img-fluid lazyload"/>                 
                       <h3>Contribute</h3>
                    </div>

                </div>
            </div>
        </section> 
        <section className="share-grow">
           <div className="container-fluid">
             <div className="row">
             <div className="col-md-2 col-12 grow-name-div">
                  <p className="grow-name">
                    Grow
                  </p>
              </div>
              <div className="col-md-10 col-12 grow-black-background">
                  <div className="container">
                  <div className="row">
                    <p className="grow-text-mobile"> Grow</p>
                    <h2 className="grow-name-heading">Fostering Experiential Learning</h2>
                      <div className="col-md-4 col-12">
                      <img data-src="./assets/Grow Section GIF.webp" className ="img-fluid grow-img lazyload"/>                 

                      </div>
                      <div className="col-md-8 col-12">
                        <p className="grow-name-paragraph">
                        At O+, we believe that learning is a never-ending process and a growing experience. O+ Grow is a masterclass that fosters an experiential learning journey dedicated to helping SEO enthusiasts understand the digital universe in the right context. 
                        <br/>
                        <br/>

With guidance from industry and global experts who are associated with the O+ Research Lab, it is a one-of-a-kind educational experience for everyone who is curious to know more about the digital world. 

                        </p>
                        <Link href='/master-class'><button className='more-btn btn-red-text'>GROW WITH THE O+ MASTERCLASS<img data-src='./assets/Arrow (2).png' alt='' className='red-arrow img-fluid lazyload'/></button>
                      </Link>
                      </div>
                  </div>
                  </div>
              </div>
             </div>
           </div>
        </section>
        <section className="share-engage">
           <div className="container-fluid">
             <div className="row share-engage-row">
             <div className="col-md-10 col-12 engage-grey-background">
                  <div className="container">
                  <div className="row">
                    <p className="engage-text-mobile">
                    Engage
                    </p>
                    <h2 className="engage-name-heading">Find Answers to your Digital Curiosities  
</h2>
                      <div className="col-md-4 col-12">
                      <img data-src="./assets/Prism-GIF---(300x300px).gif" className ="img-fluid engage-img lazyload"/>                 

                      </div>
                      <div className="col-md-8 col-12">
                        <p className="engage-name-paragraph">
                        Engage with our Advanced Content (Whitepapers, Blogs, FAQs) Forum 
<br/>
<br/>
The path to enlightenment must be paved with free and credible knowledge. Our aim is to be the guiding beacon in your journey to knowing more.  
<br/>
<br/>
We have built a digital oasis for all enthusiasts who are on their quest for wisdom. Here, you can interact with O+ expert insights, research documents, blogs, whitepapers, FAQs, and more. 
<br/>
<br/>
Tell us what you want to know more of, and it shall be conjured.  


                        </p>
                        <a href='https://opositive.io/blog/'><button className='more-btn btn-red-text'>ASK US WHAT INTRIGUES YOU<img data-src='./assets/Arrow (2).png' alt='' className='red-arrow img-fluid lazyload'/></button>
                      </a>
                      </div>
                  </div>
                  </div>
              </div>
             <div className="col-md-2 col-12 engagediv">
                  <p className="engage-name">
                    Engage
                  </p>
              </div>
              
             </div>
           </div>
        </section>
        <section className="share-contribute">
           <div className="container-fluid">
             <div className="row">
             <div className="col-md-2 col-12 contribute-name-div">
                  <p className="contribute-name">
                  Contribute
                  </p>
              </div>
              <div className="col-md-10 col-12 contribute-black-background">
                  <div className="container">
                  <div className="row">
                    <p className="contribute-text-mobile">Contribute</p>
                    <h2 className="contribute-name-heading">Welcoming Expert Insights 
</h2>
                      <div className="col-md-4 col-12">
                      <img data-src="./assets/Box Animation - GIF.webp" className ="img-fluid contribute-img lazyload"/>                 

                      </div>
                      <div className="col-md-8 col-12">
                        <p className="contribute-name-paragraph">
                        At O+, we want to lead your digital quest with a purpose greater than ourselves, but we cannot do it alone. Which is why we welcome digital experts from around the world to share their wisdom with our community.  
<br/>
<br/>
Do you think you have something to contribute that will help more people in their quest for knowledge?  
<br/>
<br/>
Use the O+ platform to resonate your voice with thousands of digital enthusiasts looking for direction. Let’s break the barriers together.  


                        </p>
                        <Link href='/contribute'><button className='more-btn btn-red-text'>HELP ENLIGHTEN OUR COMMUNITY <img data-src='./assets/Arrow (2).png' alt='' className='red-arrow img-fluid lazyload'/></button>
                      </Link>
                      </div>
                  </div>
                  </div>
              </div>
             </div>
           </div>
        </section>
        <section className="knowledge-partners">
             <div className="container">
                <div className="row">
                    <h2>Knowledge Partners</h2>
                    <p>To share Expert lectures & sessions with Future Marketers & Digital Enthusiasts  </p>
                   <KnowledgePartner></KnowledgePartner>
                </div>

             </div>
        </section>
        <section className="cta-share">
            <div className="container cta-share-container">
               <div className="row">
                  <div className="col-md-6 col-12">
                    <h2>
                    What else would you 
like us to share? 
 

                    </h2>
                  </div>
                  <div className="col-md-6 col-12">
                      <Shareform></Shareform>
                  </div>
               </div>
            </div>

        </section>
        
         </>
    )
}
export default Share;