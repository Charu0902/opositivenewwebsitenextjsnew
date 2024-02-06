import Head from 'next/head'
import Link from "next/link";
import Masterform from './masterform';
import 'bootstrap/dist/css/bootstrap.css';


const Masterclass = () =>{
    return(
        <>
        <Head>
        <meta charSet="utf-8" />
                <title>Enroll in the O+ Master Class For Becoming SEO Expert</title>
                <meta name="description" content="Are you curious for seeking information about SEO? If so, you've come to the perfect spot. Join O+ Master class right away." />
                <link rel="canonical" href="https://opositive.io/master-class" />

                <meta property="og:type" content="website"/> 
                <meta property="og:url" content="https://opositive.io/master-class"/> 
                <meta property="og:title" content="Enroll in the O+ Master Class For Becoming SEO Expert"/> 
                <meta property="og:description" content="Are you curious for seeking information about SEO? If so, you've come to the perfect spot. Join O+ Master class right away."/> 
                <meta property="og:image" content="https://opositive.io/assets/og-masterclass.webp"/> 

                <meta property="twitter:card" content="summary_large_image"/> 
                <meta property="twitter:url" content="https://opositive.io/master-class"/> 
                <meta property="twitter:title" content="Enroll in the O+ Master Class For Becoming SEO Expert"/> 
                <meta property="twitter:description" content="Are you curious for seeking information about SEO? If so, you've come to the perfect spot. Join O+ Master class right away."/> 
                <meta property="twitter:image" content=" https://opositive.io/assets/og-masterclass.webp"/> 
        </Head>
        <section className="master-class">
          <div className="container">
            <div className="row master-row">
                <div className="col-lg-6 col-md-12 col-12">
                  <h1 className="master-class-heading desktop">O+ MASTERCLASS</h1>
                  <p className="master-class-paragraph">Prepare to take the flight from being an enthusiast to an Expert.</p>
                  <ul className="master-class-list">
                     <li>
                     <img data-src="./assets/Vector-master.png" className="tick lazyload" /> 6 months of transformational learning process to build SEO Experts. 
                     </li>
                     <li>
                     <img data-src="./assets/Vector-master.png" className="tick lazyload" /> Lifetime access to content
                     </li>
                     <li>
                     <img data-src="./assets/Vector-master.png" className="tick lazyload" /> On-demand access to content
                     </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                <h2 className="master-class-heading mobile">O+ MASTERCLASS</h2>
<Masterform></Masterform>
                </div>

            </div>

          </div>
        </section>
        </>
    )
}

export default Masterclass;