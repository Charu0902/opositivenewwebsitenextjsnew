import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 0,
    nav:false
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 0,
    nav:false

  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 0,
    nav:false

  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    nav:false

  }
};

const ServiceBannerMobile = () =>{
    return(
        <>
        <section className="service-slider" id="mobile-video">
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoplayTimeout = {5000} autoplaySpeed = {3000}  infinite={true} 
>
<div className='item'>
                               <img src="./assets/service-banner-mobile-1.webp" className ="img-fluid" />
                            </div>
                            <div className='item'>
                                <img src="./assets/service-banner-mobile-2.webp" className ="img-fluid" />
                            </div>
                            <div className='item'>
                                <img src="./assets/service-banner-mobile-3.webp" className ="img-fluid" />
                            </div>
</Carousel>
</section>
        </>
    )
}

export default ServiceBannerMobile;