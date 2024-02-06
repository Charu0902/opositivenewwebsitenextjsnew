import Link from "next/link";


export default function Footer() {
    return (
        <>
         <footer className='footer'>
           <div className='row'>
           <div className="col-12 col-md-6">
            <Link href = '/'><img className='footer-icon lazyload' data-src='../assets/logo-red.webp' alt=''/></Link>
                
                <h3 className='footer-heading'>
                Innovation inspired<br/>by curiosity 
                </h3>
           </div>
           <div className='col-12 col-md-6'>
                <div className='row'>
                    <div className="col-md-4 col-sm-12">
                        <h4 className='footer-heading-2'>
                        <Link href='/deliver'>
                            Deliver
                            </Link>
                        </h4>
                        <h4 className='footer-heading-2'>
                        <Link href='/careers'>
                           Careers
                            </Link>
                        </h4>
                        <h4 className='footer-heading-2'>
                        <Link href='/contact'>
                           Contact
                            </Link>
                        </h4>
                        <h4 className='footer-heading-2'>
                        <Link href='/privacy-policy'>
                           Privacy Policy
                            </Link>
                        </h4>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h4 className='footer-heading-2'>
                            <Link href='/automate'>
                            Automate
                            </Link>
                      
                        </h4>
                        <ul className='footer-links'>
                           <li><Link href='/studio-plus-sign-up'>Studio+</Link> </li>
                            <li>
                                <Link href='/tribe-plus-sign-up'>
                                Tribe+
                                </Link>
                            </li>
                            <li>
                                <Link href='/service'>
                                Service
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h4 className='footer-heading-2'>
                            <Link href='/share'>
                            Share
                            </Link>
                            
                        </h4>
                        <ul className='footer-links'>
                           <li><Link href='/master-class'>O+ Masterclass</Link> </li>
                            <li>
                                <Link href='/contribute'>
                                  Contribute
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
           </div>
           </div>
           <div className='footer-strip'></div>
           <div className='row copyright-row text-center'>
              <div className='col-12 col-md-6'>
              <p className='copyright-text'>©Copyright 2022, opositive. All Rights Reserved.</p>

                      
                    </div>
                    <div className='col-12 col-md-6'>
                    <ul className='social-media'>
                            <li className=''><p className='follow-text'>Follow us</p></li>
                            <li className=''><a href='https://www.facebook.com/Ove-108295984780523/' rel="noopener noreferrer nofollow" target= '_blank' ><img data-src='../assets/fb-footer1.png' className='social-media-icons lazyload' alt='facebbok-icon'/></a></li>
                            <li className=''><a href='https://www.linkedin.com/company/o-positive'rel="noopener noreferrer nofollow" target= '_blank' ><img data-src='../assets/LinkedIn.webp' className='social-media-icons lazyload' alt='linkedin-icon'/></a></li>
                            <li className=''><a href='https://instagram.com/opositive.io' rel="noopener noreferrer nofollow" target= '_blank'><img data-src='../assets/insta-footer1.png' className='social-media-icons lazyload' alt='insta-icon'/></a></li>
                            <li className=''><a href='https://www.youtube.com/channel/UCcH-eLWUKE88dw1IFmXW7mQ' rel="noopener noreferrer nofollow" target= '_blank'><img data-src='../assets/youtube-footer1.png' className='social-media-icons lazyload' alt='youtube-icon'/></a></li>
                        </ul>
                    </div>
                
           </div>
           <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;500;600;700&display=swap" rel="stylesheet" />
      </footer>
        </>
    )
  }