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

const ReviewRating = () =>{
    return(
        <>
      <section className="knowledge-partners armour">
        <div className="container">
                <div className="row">
                    <h2 className="featured-brands">Reviews and Rating​</h2>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoplayTimeout = {3000} autoplaySpeed = {3000}  infinite={true} 
>
<div className='item'>
                                <div className='blog-card'>
                                                <img data-src="./assets/clients/F12.png" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    
                                    <img data-src="./assets/clients/F1.webp" className ="img-fluid lazyload"/>

                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    <img data-src="./assets/clients/D1.webp" className ="img-fluid lazyload"/>
                                  
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                <img data-src="./assets/clients/F2.webp" className ="img-fluid lazyload"/>

                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                <img data-src="./assets/clients/D11.png" className ="img-fluid lazyload"/>

                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/clients/F9.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/clients/F3.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/clients/D7.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/clients/F8.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/clients/D2.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                          
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/clients/D5.webp" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
</Carousel>
</div>
</div>
</section>
        </>
    )
}

export default ReviewRating;