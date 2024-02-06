import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
    nav:false
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    nav:false

  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 6,
    nav:false

  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3,
    nav:false

  }
};

const KnowledgePartners = () =>{
    return(
        <>
           <section className="knowledge-partners armour">
        <div className="container">
                <div className="row">
                    <h2 className="featured-brands">Knowledge Partners to share</h2>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoplayTimeout = {3000} autoplaySpeed = {3000}  infinite={true} 
>
<div className='item'>
                                <div className='blog-card'>
   <img data-src="./assets/service/iit delhi.webp" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                                <img data-src="./assets/service/IIMU.webp" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                                <img data-src="./assets/service/Semirush.webp" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                                <img data-src="./assets/service/Bangalore.webp" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                                <img data-src="./assets/service/Digital Vidya.webp" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                                <img data-src="./assets/service/Serpzilla.webp" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                                <img data-src="./assets/service/Shopify.webp" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
</Carousel>
</div>
</div>
</section>
        </>
    )
}

export default KnowledgePartners;