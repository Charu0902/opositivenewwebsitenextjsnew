import React from "react";
import Head from 'next/head'
import Link from "next/link";
import Tribeform from "./tribeform";
import 'bootstrap/dist/css/bootstrap.css';



const Tribe = () => {
    return (
        <>
        <Head>
                <meta charSet="utf-8" />
                <title>Join Tribe Plus - Sign Up for an Account Today</title>
                <meta name="description" content="Sign up for an account with Tribe Plus and gain access to our exclusive features and services. Join now and start experiencing the benefits" />
                <link rel="canonical" href="https://opositive.io/tribe-plus-sign-up" />

                <meta property="og:type" content="website"/> 
                <meta property="og:url" content="https://opositive.io/tribe-plus-sign-up"/> 
                <meta property="og:title" content="Join Tribe Plus - Sign Up for an Account Today"/> 
                <meta property="og:description" content="Sign up for an account with Tribe Plus and gain access to our exclusive features and services. Join now and start experiencing the benefits"/> 
                <meta property="og:image" content="https://opositive.io/assets/og-tribe.webp"/> 

                <meta property="twitter:card" content="summary_large_image"/> 
                <meta property="twitter:url" content="https://opositive.io/tribe-plus-sign-up"/> 
                <meta property="twitter:title" content="Join Tribe Plus - Sign Up for an Account Today"/> 
                <meta property="twitter:description" content="Sign up for an account with Tribe Plus and gain access to our exclusive features and services. Join now and start experiencing the benefits"/> 
                <meta property="twitter:image" content=" https://opositive.io/assets/og-tribe.webp"/> 
            </Head>
        <section className="master-class">
          <div className="container">
            <div className="row master-row">
                <div className="col-lg-6 col-md-12 col-12">
                  <h1 className="master-class-heading studioheading desktop">Revolutionize backlinking with Tribe+  </h1>
                  <p className="master-class-paragraph studio-para">Tribe+ allows you to build credible backlinks at scale through our structured database that is filtered by domain rating, website category, spam score, etc.    </p>
                  <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop className="studio-video" poster='./assets/Tribe Thumbnail.webp'>
               <source src="./assets/Tribe-plus.mp4"  />
           </video> 
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                <h2 className="master-class-heading studioheading mobile">Revolutionize backlinking with Tribe+  </h2>
                <Tribeform></Tribeform>
                </div>

            </div>

          </div>
        </section>
        </>
        )
    }

export default Tribe;        