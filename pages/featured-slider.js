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
    items: 3,
    nav:false

  }
};

const Featuredslider = () =>{
    return(
        <>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoPlaySpeed={1000}  infinite={true} 
>
<div className='item'>
                                            <img data-src='./assets/clients/F1.webp' alt='SEO Client The World Bank Logo' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                    <div className='item'>
                                            <img data-src='./assets/clients/F2.webp' alt='SEO Client Amazon Logo' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                    <div className='item'>
                                            <img data-src='./assets/clients/F3.webp' alt='SEO Client The World Bank Logo' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                    <div className='item'>
                                            <img data-src='./assets/clients/F4.webp' alt='SEO Client Perfios Logo' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                    <div className='item'>
                                            <img data-src='./assets/clients/F5.webp' alt='SEO Client Udan Logo' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                    <div className='item'>
                                            <img data-src='./assets/clients/F6.webp' alt='E-commerce SEO Client Glamly' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                    <div className='item'>
                                            <img data-src='./assets/clients/F7.webp' alt='SEO Client Doubtnut Logo ' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                    <div className='item'>
                                            <img data-src='./assets/clients/F8.webp' alt='E-commerce SEO Client Twinnings' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                    <div className='item'>
                                            <img data-src='./assets/clients/F9.webp' alt='SEO Client IIFL Logo ' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                        <div className='item'>
                                            <img data-src='./assets/clients/F10.png' alt='SEO Client IIM Logo ' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                        <div className='item'>
                                            <img data-src='./assets/clients/F11.png' alt='SEO Client Niyo Logo ' className='img-fluid desktop-client-img lazyload' />
                                        </div>
                                        <div className='item'>
                                            <img data-src='./assets/clients/F12.png' alt='SEO Client Swiggy Logo ' className='img-fluid desktop-client-img lazyload' />
                                        </div>
</Carousel>
        </>
    )
}

export default Featuredslider;