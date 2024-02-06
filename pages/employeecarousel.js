import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    nav:false
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    nav:false

  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 1,
    nav:false

  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    nav:false

  }
};

const Employeeslider = () =>{
    return(
        <>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoPlaySpeed={4000}  infinite={true} 
>
<div className="item">
              <div className="row testimonialrow">
              
                <div className="col-md-8 col-sm-12">
                  <p>
                    “ You get to work with a team who supports and discuss every problem we face in projects and understand everyone’s perspective.”
                  </p>
                  <p className="testiomonial-name"> -Preksha Maroo, SEO Executive+</p>

                </div>
                <div className="col-md-4 col-sm-12 testimoinal-col">
                  <img data-src="./assets/preksha.png" className="img-fluid lazyload" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row testimonialrow">
               
                <div className="col-md-8 col-sm-12">
                  <p>
                    “ At O+, there are many opportunitues for personal growth and self learning: the way we do seo in an structured manner.”
                  </p>
                  <p className="testiomonial-name">
                    - Kanisha Tater, SEO Executive
                  </p>
                </div>
                <div className="col-md-4 col-sm-12 testimoinal-col">
                  <img data-src="./assets/kanisha.png" className="img-fluid lazyload" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row testimonialrow">
               
                <div className="col-md-8 col-sm-12">
                  <p>
                    “ O+ is the place where ideas and suggestions of individuals
                    are welcomed and held at high regards. “      
                  </p>
                  <p className="testiomonial-name">
                  - Ajay Chavan, Senior Content Writer
                  </p>
                </div>
                <div className="col-md-4 col-sm-12 testimoinal-col">
                  <img data-src="./assets/ajay-e.png" className="img-fluid lazyload" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row testimonialrow">
                <div className="col-md-8 col-sm-12">
                  <p>
                    “ At O+, you’ll get opportunity to grow as an individual and
                    professionally.”
                  </p>
                  <p className="testiomonial-name">
                  -Dushank Manawat, SEO Executive
                  </p>
                </div>
                <div className="col-md-4 col-sm-12 testimoinal-col">
                  <img data-src="./assets/dushank.png" className="img-fluid lazyload" />
                </div>
              </div>
            </div>
</Carousel>
        </>
    )
}

export default Employeeslider;