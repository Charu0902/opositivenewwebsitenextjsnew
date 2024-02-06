import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    nav:false
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    nav:false

  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 3,
    nav:false

  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3,
    nav:false

  }
};

const ContributeSlider = () =>{
    return(
        <>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoPlaySpeed={1000}  infinite={true} 
>
<div className='item'>
                                <div className='blog-card'>
                                                <img data-src="./assets/iim-logo.png" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    
                                    <img data-src="./assets/semrush-logo.png" className ="img-fluid lazyload"/>

                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    <img data-src="./assets/imu-logo.png" className ="img-fluid lazyload"/>
                                  
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                <img data-src="./assets/serpzillalogo.png" className ="img-fluid lazyload"/>

                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                <img data-src="./assets/te-logo.png" className ="img-fluid lazyload"/>

                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/shopify-logo.png" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                <img data-src="./assets/digital-vidya-logo.png" className ="img-fluid lazyload"/>

                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/iitdelhi.png" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
</Carousel>
        </>
    )
}

export default ContributeSlider;