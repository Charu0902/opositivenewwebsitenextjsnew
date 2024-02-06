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

const Testslider = () =>{
    return(
        <>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoPlaySpeed={1000}  infinite={true} 
>
<div className='item'>
                                <div className='blog-card'>
                                    <a href='https://opositive.io/blog/ecommerce-seo-guide/'><img data-src='./assets/Group2237.webp' alt=' ' className=' img-fluid lazyload' />
                                    <div className='blog-more-box'>
                                    <h3 className='blog-heading'>ECommerce SEO A Definitive Guide for 2021</h3>
                                        <img data-src='./assets/CTA.webp' alt=' ' className='blog-img img-fluid lazyload' />
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    <a href='https://opositive.io/blog/core-web-vitals-for-ecommerce-stores/'>
                                    <img data-src='./assets/Group2238.webp' alt=' ' className=' img-fluid lazy lazyload' />
                                    <div className='blog-more-box'>
                                        <h3 className='blog-heading'>Conquering Core Web Vitals for eCommerce Stores</h3>
                                        <img data-src='./assets/CTA.webp' alt=' ' className='blog-img img-fluid lazyload' />
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    <a href='https://opositive.io/blog/the-basics-of-search-engine/'>
                                    <img data-src='./assets/MicrosoftTeams-image11.webp' alt=' ' className=' img-fluid lazyload' />
                                    <div className='blog-more-box'>
                                    <h3 className='blog-heading'>The Basics of Search Engine Algorithm On Your Tips</h3>
                                        <img data-src='./assets/CTA.webp' alt=' ' className='blog-img img-fluid lazyload' />
                                        
                                    </div>
                                    </a>
                                </div>
                            </div>
</Carousel>
        </>
    )
}

export default Testslider;