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

const ClientStories = () =>{
    return(
        <>
        <section className="clients-carousel">
          <h2 className="clients-carousel-heading">Testimonials</h2>
           <div className="container">
<Carousel responsive={responsive} arrows={true} autoPlay={true}  autoplayTimeout = {3000} autoplaySpeed = {3000}  infinite={true} 
>
<div className='item'>
             <div className="row">
                 <div className="col-lg-6 col-12">
                 <img data-src="./assets/service/1.webp" className="img-fluid lazyload"/>

                 </div>
                 <div className="col-lg-6 col-12 review-col">
                    {/* <h2>Test heading</h2> */}
                    <p>
                    O+ has been a game-changer for Grandma's Secret. Their innovative SEO strategies and in-depth understanding of e-commerce dynamics significantly boosted our online presence. Their team's dedication and expertise in elevating our brand visibility have resulted in a remarkable 20% increase in our website conversions. The journey with O+ has been not just fruitful but also enlightening in the SEO realm.
                    </p>
                 </div>
             </div>
            </div>
            <div className='item'>
             <div className="row">
                 <div className="col-lg-6 col-12">
                 <img data-src="./assets/service/2.webp" className="img-fluid lazyload"/>

                 </div>
                 <div className="col-lg-6 col-12 review-col">
                    {/* <h2>Test heading</h2> */}
                    <p>
                    As a partner of Universal Bags, I can confidently say that O+ has been instrumental in scaling our digital outreach. Their unique approach to D2C SEO, combined with their tech-driven strategies, have placed our brand prominently on search engines. The results are tangible, with a substantial growth in organic traffic and a noticeable enhancement in our brand authority. O+ stands out as a pillar of professionalism and innovation in SEO.
                    </p>
                 </div>
             </div>
            </div>
            <div className='item'>
             <div className="row">
                 <div className="col-lg-6 col-12">
                 <img data-src="./assets/service/3.webp" className="img-fluid lazyload"/>

                 </div>
                 <div className="col-lg-6 col-12 review-col">
                    {/* <h2>Test heading</h2> */}
                    <p>
                    Working with O+ has been a transformative experience for Anumati. Their team's expertise in hyper-local SEO has significantly improved our local search rankings, bringing in more targeted traffic and increased conversions. Their approach to B2B SEO is both strategic and effective, ensuring that Anumati stands out in a crowded digital marketplace. O+'s commitment to excellence and continuous learning in SEO is truly commendable.
                    </p>
                 </div>
             </div>
            </div>
            <div className='item'>
             <div className="row">
                 <div className="col-lg-6 col-12">
                 <img data-src="./assets/service/4.webp" className="img-fluid lazyload"/>

                 </div>
                 <div className="col-lg-6 col-12 review-col">
                    {/* <h2>Test heading</h2> */}
                    <p>
                    O+'s contribution to Amazon's SEO strategy has been phenomenal. Their data-driven 'War Strategy', combined with their advanced tech-stack like Studio+, Crawl+, Live+, has provided us with an edge in the competitive e-commerce space. Their team's expertise in digital PR and content marketing has not only enhanced our brand presence but also solidified our position as a subject matter expert. The partnership with O+ has been a testament to their commitment to curiosity, learning, and professional excellence in SEO.                    </p>
                 </div>
             </div>
            </div>
                          
</Carousel>
<div className="view-all-stories">
           <a href="#">View All</a>
       </div>
</div>
</section>
        </>
    )
}

export default ClientStories;