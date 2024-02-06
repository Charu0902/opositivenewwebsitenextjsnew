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

const FeaturedBrandsService = () =>{
    return(
        <>
         <section className="knowledge-partners armour featured-brands-slider">
        <div className="container">
                <div className="row">
                    <h2 className="featured-brands">Trusted by India's leading D2C Tycoons
</h2>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoplayTimeout = {3000} autoplaySpeed = {3000}  infinite={true} 
>
<div className='item'>
                                <div className='blog-card'>
                                                <img data-src="./assets/universal_bags.webp" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/the_world_bank.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    
                                    <img data-src="./assets/swiggy.webp" className ="img-fluid lazyload"/>

                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    <img data-src="./assets/novo.webp" className ="img-fluid lazyload"/>
                                  
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                <img data-src="./assets/mama_earth.webp" className ="img-fluid lazyload"/>

                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                <img data-src="./assets/jaipur_rugs.webp" className ="img-fluid lazyload"/>

                                 
                                </div>
                            </div>
                        
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/ipanema.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/Glamly.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/cbazaar.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/amazon.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                          
</Carousel>
</div>
</div>
</section>
        </>
    )
}

export default FeaturedBrandsService;