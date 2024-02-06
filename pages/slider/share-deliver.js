import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    nav:false
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    nav:false

  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 5,
    nav:false

  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3,
    nav:false

  }
};

const ShareDeliverSlider = () =>{
    return(
        <>
           <section className="knowledge-partners armour">
        <div className="container">
                <div className="row">
                    <h2 className="share-and-deliver">Partnered to Share & Deliver</h2>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoplayTimeout = {3000} autoplaySpeed = {3000}  infinite={true} 
>
<div className='item'>
                                <div className='blog-card'>
                                   <img data-src="./assets/shopify-logo.png" className ="img-fluid lazyload" />
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   <img data-src="./assets/semrush-logo.png" className ="img-fluid lazyload" />
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   <img data-src="./assets/serpzillalogo.png" className ="img-fluid lazyload" />
                                </div>
                            </div>
                         
                            <div className='item'>
                                <div className='blog-card'>
                                   <img data-src="./assets/service/Freshsales.webp" className ="img-fluid lazyload" />
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   <img data-src="./assets/service/Google.webp" className ="img-fluid lazyload" />
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   <img data-src="./assets/service/Bangalore.webp" className ="img-fluid lazyload" />
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   <img data-src="./assets/service/strateegy.webp" className ="img-fluid lazyload" />
                                </div>
                            </div>
                         
</Carousel>
</div>
</div>
</section>
        </>
    )
}

export default ShareDeliverSlider;