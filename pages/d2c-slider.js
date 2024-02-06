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

const D2Cslider = () =>{
    return(
        <>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoPlaySpeed={1000}  infinite={true} 
>
<div className='item'>
                                        <img data-src='./assets/clients/D1.webp' alt='E-commerce SEO Client NOVO' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D2.webp' alt='SEO Client DAILYOBJECTS Logo ' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D3.webp' alt='SEO Client Trainmain Logo ' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D4.webp' alt='SEO Client TESCO Logo' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D5.webp' alt='SEO Client Jaipur Rugs Logo' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D6.webp' alt='SEO Client DA MILANO Logo' className='img-fluid desktop-client-img lazy lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D7.webp' alt='SEO Client LiMEROAD Logo' className='img-fluid desktop-client-img lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D8.webp' alt='SEO Client Hair Originals' className='img-fluid desktop-client-img lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D9.webp' alt='SEO Client BMC Switzerland' className='img-fluid desktop-client-img lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D10.png' alt='SEO Client Chaios' className='img-fluid desktop-client-img lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D11.png' alt='SEO Client Madame' className='img-fluid desktop-client-img lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D12.png' alt='SEO Client Satviko' className='img-fluid desktop-client-img lazyload' />
                                    </div>
                                    <div className='item'>
                                        <img data-src='./assets/clients/D13.png' alt='SEO Client Baby Atelier' className='img-fluid desktop-client-img lazyload' />
                                    </div>
</Carousel>
        </>
    )
}

export default D2Cslider;