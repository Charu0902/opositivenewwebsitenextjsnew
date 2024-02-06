import React from "react";
import Head from 'next/head'
import Link from "next/link";
import Studioform from "./studioform";
import 'bootstrap/dist/css/bootstrap.css';

const Studio = () => {
    return (
        <>
         <Head>
                <meta charSet="utf-8" />
                <title>Join Studio Plus - Sign Up for an Account Today</title>
                <meta name="description" content="Sign up for an account with Studio Plus and gain access to our exclusive features and services. Join now and start experiencing the benefits" />
                <link rel="canonical" href="https://opositive.io/studio-plus-sign-up" />

                <meta property="og:type" content="website"/> 
                <meta property="og:url" content="https://opositive.io/studio-plus-sign-up"/> 
                <meta property="og:title" content="Join Studio Plus - Sign Up for an Account Today"/> 
                <meta property="og:description" content="Sign up for an account with Studio Plus and gain access to our exclusive features and services. Join now and start experiencing the benefits"/> 
                <meta property="og:image" content="https://opositive.io/assets/og-studio.webp"/> 

                <meta property="twitter:card" content="summary_large_image"/> 
                <meta property="twitter:url" content="https://opositive.io/studio-plus-sign-up"/> 
                <meta property="twitter:title" content="Join Studio Plus - Sign Up for an Account Today"/> 
                <meta property="twitter:description" content="Sign up for an account with Studio Plus and gain access to our exclusive features and services. Join now and start experiencing the benefits"/> 
                <meta property="twitter:image" content=" https://opositive.io/assets/og-studio.webp"/> 
            </Head>
        <section className="master-class">
          <div className="container">
            <div className="row master-row">
                <div className="col-lg-6 col-md-12 col-12">
                  <h1 className="master-class-heading studioheading desktop">Track Your Growth with Studio + </h1>
                  <p className="master-class-paragraph studio-para">Forget getting lost in pages of data and embrace a simplified & real-time experience, where you see what matters to you. </p>
                  <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop className="studio-video" poster='./assets/Studi + Thumbnail.webp'>
               <source src="./assets/studi-gif.mp4"  />
           </video> 
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                <h2 className="master-class-heading studioheading mobile">Track Your Growth with Studio + </h2>
<Studioform></Studioform>

                </div>

            </div>

          </div>
        </section>
        </>
        )
    }

export default Studio;        