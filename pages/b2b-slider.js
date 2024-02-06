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
    breakpoint: { max: 1024, min: 600},
    items: 0,
    nav:false

  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3,
    nav:false

  }
};

const BtwoBslider = () =>{
    return(
        <>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoPlaySpeed={1000}  infinite={true} 
>
<div className='item'>
                                        <img data-src='./assets/clients/B1.webp' alt='B2B SEO CLIENT KHATIBUDDY Logo' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/B2.webp' alt='B2B SEO CLIENT BeatRoute Logo' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/B3.webp' alt='B2B SEO CLIENT Zooper Logo' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/B4.webp' alt='B2B SEO CLIENT Contify Logo' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/B5.webp' alt='SEO Client HAIQUE Logo ' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/B6.webp' alt='SEO Client SECURE Logo ' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/B7.webp' alt='Retrieving data. Wait a few seconds and try to cut or copy again.' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/B8.webp' alt='SEO Client IDC Logo' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/B9.webp' alt='SEO Client XOXODAY Logo ' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/B10.png' alt='SEO Client Wonder wall putty Logo ' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
</Carousel>
        </>
    )
}

export default BtwoBslider;