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
    items: 3,
    nav:false

  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3,
    nav:false

  }
};

const KnowledgePartner = () =>{
    return(
        <>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoPlaySpeed={1000}  infinite={true} 
>
<div className='item'>
                                <div className='blog-card'>
                                                <img data-src="./assets/A1 (1).png" className ="img-fluid lazyload" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    
                                    <img data-src="./assets/A1 (2).png" className ="img-fluid lazyload"/>

                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    <img data-src="./assets/A1 (3).png" className ="img-fluid lazyload"/>
                                  
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                <img data-src="./assets/A1 (4).png" className ="img-fluid lazyload"/>

                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                <img data-src="./assets/A1 (5).png" className ="img-fluid lazyload"/>

                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img data-src="./assets/A1 (6).png" className ="img-fluid lazyload"/>
                                 
                                </div>
                            </div>
</Carousel>
        </>
    )
}

export default KnowledgePartner;