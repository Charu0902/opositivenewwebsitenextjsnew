import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

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

const Deliverslider = () =>{
    return(
        <>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoPlaySpeed={1000}  infinite={true} 
>
<div className='item'>
                                <div className='blog-card'>
                                  <Link href='/case-study/gourmet-garden'>
                                  <img data-src="./assets/casestudy1.jpg" className ="img-fluid lazyload" />

                                  </Link>

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    
                                    <img data-src="./assets/casestudy2.jpg" className ="img-fluid lazyload"/>
                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    <img data-src="./assets/casestudy3.jpg" className ="img-fluid lazyload"/>
                                  
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/casestudy4.jpg" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
</Carousel>
        </>
    )
}

export default Deliverslider;