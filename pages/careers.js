import Head from 'next/head'
import Link from "next/link";
import Employeeslider from './employeecarousel';
import Jobfilter from './jobfilter';
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Careers = () =>{
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
                <title>Join the O+ Team | Opositive Careers</title>
                <meta name="description" content="Looking for a vibrant, forward-thinking company to grow with? Explore Opositive's job opportunities." />
                <link rel="canonical" href="https://opositive.io/careers" />

                <meta property="og:type" content="website"/> 
                <meta property="og:url" content="https://opositive.io/careers"/> 
                <meta property="og:title" content="Join the O+ Team | Opositive Careers"/> 
                <meta property="og:description" content="Looking for a vibrant, forward-thinking company to grow with? Explore Opositive's job opportunities."/> 
                <meta property="og:image" content="https://opositive.io/assets/thumbnail-careers.webp"/> 

                <meta property="twitter:card" content="summary_large_image"/> 
                <meta property="twitter:url" content="https://opositive.io/careers"/> 
                <meta property="twitter:title" content="Join the O+ Team | Opositive Careers"/> 
                <meta property="twitter:description" content="Looking for a vibrant, forward-thinking company to grow with? Explore Opositive's job opportunities."/> 
                <meta property="twitter:image" content=" https://opositive.io/assets/thumbnail-careers.webp"/> 
        </Head>
        <section className="careers-banner">
        <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
          playsinline={"true"}
          loop
          className="lazy"
          id="mobile-video"
          poster="./assets/thumbnail-careers.webp"
          style={{ width: "100%" }}
        >
          <source data-src="./Assets/Comp-4.mp4" />
        </video>
        <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
          playsinline={"true"}
          loop
          className="lazy"
          id="desktop-video"
          poster="./assets/careers-banner.webp"
          style={{ width: "100%" }}
        >
          <source data-src="./assets/careers-banner.mp4" />
        </video>
      </section>
      <section className="obbserv-initiative">
        <div className="container">
          <div className="row">
            <h1 className="initiavtive-para">
              At O+, we believe in building a team that is curious, talented,
              and delivers with transparency. Our initiatives are designed to
              give each team member, the scope to learn, grow, and disrupt the
              digital space.
            </h1>
          </div>
        </div>
      </section>
      <section className="initiative-tabs" id="inititiative-tabs">
        <div className="container">
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
                expoSEO - Every Month
              </button>
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
                Co-founder Connect
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
                Global Connect
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
               3 PM Fridays
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
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <video
                    muted
                    autoPlay={"autoplay"}
                    preLoad={"metadata"}
                    playsinline={"true"}
                    loop
                    className="lazy"
                    poster="./assets/seothumb.png"
                  >
                    <source data-src="./assets/seogif.mp4" />
                  </video>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>#expSEO – Every Month </h3>
                  <p>
                    Our Exponential SEO initiative builds a centralized bank of
                    ideas that can deliver exponential growth in SEO through
                    interactive learning, relatable implementation, and
                    collaborative personal growth.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="cofounder"
              role="tabpanel"
              aria-labelledby="cofounder-tab"
            >
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <video
                    muted
                    autoPlay={"autoplay"}
                    preLoad={"metadata"}
                    playsinline={"true"}
                    loop
                    className="lazy"
                    poster="./assets/cofounderthumb.png"
                  >
                    <source data-src="./assets/GIF (1).mp4" />
                  </video>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>Co-founder Connect</h3>
                  <p>
                    The Co-Founder Connect initiative aims to enable each O+
                    member the opportunity to connect with their Co-Founder and
                    learn or exchange feedback directly from him.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="global"
              role="tabpanel"
              aria-labelledby="global-tab"
            >
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <img data-src="./assets/Global Experts.jpg" className="img-fluid lazyload"/>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>Global Experts - Workshops for team training</h3>
                  <p>
                    With constant curiosity and learning being one of our base
                    mottos, we conduct team training workshops with Global
                    Experts to help team members stay in touch with the latest
                    developments in SEO.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="friday"
              role="tabpanel"
              aria-labelledby="friday-tab"
            >
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <video
                    muted
                    autoPlay={"autoplay"}
                    preLoad={"metadata"}
                    playsinline={"true"}
                    loop
                    className="lazy"
                    poster="./assets/fridaythumb.png"
                  >
                    <source data-src="./assets/friday.mp4" />
                  </video>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>3 pm fridays</h3>
                  <p>
                    Our 3 PM Fridays initiative allows members of O+ to learn
                    and share their knowledge on various topics on a weekly
                    basis and create an ecosystem of peer-to-peer learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mobileintitiative">
          <div className="col-md-6 col-sm-12">
                  <video
                    muted
                    autoPlay={"autoplay"}
                    preLoad={"metadata"}
                    playsinline={"true"}
                    loop
                    className="lazy"
                    poster="./assets/seothumb.png"
                  >
                    <source data-src="./assets/seogif.mp4" />
                  </video>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>#expSEO – Every Month </h3>
                  <p>
                    Our Exponential SEO initiative builds a centralized bank of
                    ideas that can deliver exponential growth in SEO through
                    interactive learning, relatable implementation, and
                    collaborative personal growth.
                  </p>
                </div>
          </div>
          <div className="row mobileintitiative">
          <div className="col-md-6 col-sm-12">
                  <video
                    muted
                    autoPlay={"autoplay"}
                    preLoad={"metadata"}
                    playsinline={"true"}
                    loop
                    className="lazy"
                    poster="./assets/cofounderthumb.png"
                  >
                    <source data-src="./assets/GIF (1).mp4" />
                  </video>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>Co-founder Connect</h3>
                  <p>
                    The Co-Founder Connect initiative aims to enable each O+
                    member the opportunity to connect with their Co-Founder and
                    learn or exchange feedback directly from him.
                  </p>
                </div>
              </div>
              <div className="row mobileintitiative">
              <div className="col-md-6 col-sm-12">
                  <img data-src="./assets/Global Experts.jpg" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>Global Experts - Workshops for team training</h3>
                  <p>
                    With constant curiosity and learning being one of our base
                    mottos, we conduct team training workshops with Global
                    Experts to help team members stay in touch with the latest
                    developments in SEO.
                  </p>
                </div>
              </div>
              <div className="row mobileintitiative">
                 <div className="col-md-6 col-sm-12">
                  <video
                    muted
                    autoPlay={"autoplay"}
                    preLoad={"metadata"}
                    playsinline={"true"}
                    loop
                    className="lazy"
                    poster="./assets/fridaythumb.png"
                  >
                    <source data-src="./assets/friday.mp4" />
                  </video>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>3 pm fridays</h3>
                  <p>
                    Our 3 PM Fridays initiative allows members of O+ to learn
                    and share their knowledge on various topics on a weekly
                    basis and create an ecosystem of peer-to-peer learning.
                  </p>
                </div>
              </div>
        </div>
      </section>
      <section className="life">
        <div className="container">
          <h2>#Life At O+</h2>
          <video
            muted
            autoPlay={"autoplay"}
            preLoad={"metadata"}
            playsinline={"true"}
            className="lifevideo lazy"
            loop
            poster="./assets/career.webp"
          >
            <source data-src="./assets/career.mp4" />
          </video>
        </div>
      </section>
      <section className="perks" id="perks">
        <div className="container">
        <h2 className="perks-heading">Perks</h2>
          <div className="row d-flex align-items-start">
            <div className="col-md-4 col-sm-12">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Curiosity</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Transparency</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Diversity</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Exponential Growth</button>
  </div>
            </div>
            <div className="col-md-8 col-sm-12">
            <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
    At O+, we believe that curiosity is the root to finding the right solutions.
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
    Transparency is one of the primary pillars of the O+ culture and it allows our teams to learn from each other.
    </div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    A diverse team is the secret to learning from the different experiences of our team members at O+.
    </div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    Our aim as a team is to deliver growth to our clients and members and create an ecosystem that always aims high.
    </div>
  </div>
           </div>

          </div>
        </div>

      </section>
      <section className="testimonials">
        <div className="container">
          <h2 className="testimonial-heading">Meet Our People</h2>
         <Employeeslider></Employeeslider>
         
        </div>
      </section>
      <section className="explore-opportunities" id="expore-opportunities">
        <h2 className="explore-opportunities-heading">Explore Opportunities</h2>
        <Jobfilter></Jobfilter>
      </section>
      <section className="career-brands">
        <div className="container">
          <div className="row brands-row">
            <div className="col-md-6 col-sm-12">
              <h2 className="brands-heading">
                Brands so good, they'll get your career hooked!
              </h2>
              <p className="brands-paragraph">
                Want to grow your career while exponentially growing these
                brands?
              </p>
              <a href="#expore-opportunities">
                <button className="more-btn workbutton">
                  WORK WITH O+
                  <img
                    data-src="./assets/Arrow (2).png"
                    alt=""
                    className="red-arrow img-fluid lazyload"
                  />
                </button>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <img data-src="./assets/brandsimg.png" className="img-fluid brands-img lazyload" />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Careers;