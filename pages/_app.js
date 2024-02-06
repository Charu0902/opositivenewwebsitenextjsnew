import Head from 'next/head'
import '../styles/tailwind.css'
// import '../styles/globals.css'
import '../styles/desktop.css'
import '../styles/mobile.css'
import { useEffect } from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./header'))
const Footer = dynamic(() => import('./footer'))

function MyApp({ Component, pageProps }) {
 

 const schema =   { 
  
  "@context": "https://schema.org/", 

  "@type": "WebSite", 

  "name": "Opositive", 

  "url": "https://opositive.io/", 

  "potentialAction": { 

    "@type": "SearchAction", 

    "target": "https://opositive.io/{search_term_string}", 

    "query-input": "required name=search_term_string" 

  } 

} 
const organizationschema =   { 
  "@context": "https://schema.org", 
  "@type": "Organization", 
  "name": "Opsotive", 
  "alternateName": "Obbserv", 
  "url": "https://opositive.io/", 
  "logo": "https://opositive.io/assets/logo-red.png", 
  "sameAs": [ 
    "https://www.instagram.com/opositive.io/", 

    "https://www.linkedin.com/company/o-positive/" 
  ] 
} 
  return (

    <>
    <Header></Header>
      <Head>
      <link rel="icon" href="/favicon.png"/>
        {/* you can add metadata here, for all pages */}
        <meta name="robots" content="index,follow"/>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" /> */}
        <script  src="https://cdn.in-freshbots.ai/assets/share/js/freshbots.min.js"></script>
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.14.0-beta2/js/bootstrap-select.min.js" integrity="sha512-FHZVRMUW9FsXobt+ONiix6Z0tIkxvQfxtCSirkKc5Sb4TKHmqq1dZa8DphF0XqKb3ldLu/wgMa8mT6uXiLlRlw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}

      </Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationschema) }}
        />
         <script
         async
    dangerouslySetInnerHTML={{
      __html: `
      (function (d, w, c) { if(!d.getElementById("spd-busns-spt")) { var n = d.getElementsByTagName('script')[0], s = d.createElement('script'); var loaded = false; s.id = "spd-busns-spt"; s.async = "async"; s.setAttribute("data-self-init", "false"); s.setAttribute("data-init-type", "opt"); s.src = 'https://cdn.in-freshbots.ai/assets/share/js/freshbots.min.js'; s.setAttribute("data-client", "b9fd233033f7addee63f620ca6066017641adb2c"); s.setAttribute("data-bot-hash", "0634cb47cfb410c47c8a6660be1fda61bfb539bf"); s.setAttribute("data-env", "prod"); s.setAttribute("data-region", "in"); if (c) { s.onreadystatechange = s.onload = function () { if (!loaded) { c(); } loaded = true; }; } n.parentNode.insertBefore(s, n); } }) (document, window, function () { Freshbots.initiateWidget({ autoInitChat: false, getClientParams: function () { return ; } }, function(successResponse) { }, function(errorResponse) { }); }); 
      `,
    }}
  />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
    
}

export default MyApp