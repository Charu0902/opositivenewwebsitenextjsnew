import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    nav:true,
dots:true
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    nav:true,
    dots:true

  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 1,
    nav:true,
dots:true

  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 0,
    nav:false

  }
};

const CaseStudyServiceDesktop = () =>{
    return(
        <>
        <section className="case-study-service desktop-case-study">
        <div className="container">
          <div className="row exclusive-row">
           
            <div className="col-lg-12 col-12">
<Carousel responsive={responsive} arrows={false}   showDots={true} autoPlay={true}  autoplayTimeout = {8000} autoplaySpeed = {5000}  infinite={true} 
>
<div className='item'>

<div className="iptype">
<div className="row">
<div className="col-lg-6 col-md-12 col-sm-12 case-img">
<img src="./assets/novo.png"  className ="img-fluid novo-img" />
</div>
<div className="col-lg-6 col-md-12 col-sm-12 case-studies-content">
<img src="./assets/novo-logo.png" className ="img-fluid"/>
{/* <h3>TRIBE + </h3> */}
<p>
Business Growth and Brand Transformation in Aus & New Zeland
</p>
<p>
Overall Digital Revenue Growth - 112%+​
</p>
<p>
ROAS improved by 70%+ across platforms​
</p>
<p className="bold-case-study-text">
D2C Revenue: $11.5M+
</p>
<p className="bold-case-study-text">
Organic session growth: 108% ​
</p>
<p className="bold-case-study-text">
Organic Revenue Raise: 54%+ ​
</p>

</div>
</div>
</div>
</div>

<div className='item'>

<div className="iptype">
<div className="row">
<div className="col-lg-6 col-md-12 col-sm-12 case-img">
<img src="./assets/novo.png"  className ="img-fluid novo-img" />
</div>
<div className="col-lg-6 col-md-12 col-sm-12 case-studies-content">
<img src="./assets/novo-logo.png" className ="img-fluid"/>
{/* <h3>TRIBE + </h3> */}

<p className="bold-case-study-text">
D2C Revenue: $500k+
</p>
<p>
Organic session growth: 50%+ 
</p>
<p>
Organic Revenue Raise: 111.01%+
</p>

</div>
</div>
</div>
</div>
<div className='item'>
<div className="iptype">
<div className="row">
<div className="col-lg-6 col-md-12 col-sm-12 case-img">
<img src="./assets/novo.png"  className ="img-fluid novo-img" />
</div>
<div className="col-lg-6 col-md-12 col-sm-12 case-studies-content third-slide-case-studies">
<img src="./assets/novo-logo.png" className ="img-fluid"/>
{/* <h3>TRIBE + </h3> */}

<p className="bold-case-study-text">
D2C Revenue: INR 50M+
</p>
<p>
Organic session growth: 214% (33% of revenue)
</p>
<p>
Paid session growth: 100%
</p>
<p>
Google: 21% of revenue
</p>
<p>
Instagram: 16% revenue
</p>
<div className="row">
<p className="bold-case-study-text">
Keywords Campaign, Google Shopping Ad Campaign
</p>
<div className="col-lg-4 col-sm-4 campaign">
<b>65%</b>
<p>Traffic Increase</p>
</div>
<div className="col-lg-4 col-sm-4 campaign">
<b>214%</b>
<p>Organic sessions</p>
</div>
<div className="col-lg-4 col-sm-4 campaign">
<b>200%</b>
<p>GMV Growth</p>
</div>
</div>

</div>
</div>
</div>
</div>
<div className="item">
<div className="iptype">
<div className="row">
<div className="col-lg-6 col-md-12 col-sm-12 case-img">
<img src="./assets/novo.png"  className ="img-fluid novo-img" />
</div>
<div className="col-lg-6 col-md-12 col-sm-12 case-studies-content">
<img src="./assets/novo-logo.png" className ="img-fluid"/>
{/* <h3>TRIBE + </h3> */}

<p className="bold-case-study-text">
D2C Revenue: $500k+
</p>
<p>
Partnered to initiate the digital
<br/>
Ecommerce engine & scaling profitably​
</p>
<p>
Scaled-up monthly D2C Revenue from <b> {'<'}$1k to $100k  in 9 months ​</b>
</p>
<p>
ROAS enhancement - {'<'} 1 to avg. ROAS of 7
</p>

</div>
</div>
</div>
</div>
<div className="item">
<div className="iptype">
<div className="row">
<div className="col-lg-6 col-md-12 col-sm-12 case-img">
<img src="./assets/novo.png"  className ="img-fluid novo-img" />
</div>
<div className="col-lg-6 col-md-12 col-sm-12 case-studies-content">
<div className="row">
<div className="col-md-6 col-sm-12">
<img src="./assets/novo-logo.png" className ="img-fluid"/>
<p className="bold-case-study-text">
Organic (SEO)
</p>
<ul className="organic-seo-list">
<li>
436% Growth in revenue
</li>
<li>
49% of overall revenue
</li>
<li>
40% growth in traffic​
</li>
<li>
5 Months ​
</li>
</ul>
</div>
<div className="col-md-6 col-sm-12">
<img src="./assets/novo-logo.png" className ="img-fluid"/>
<p className="bold-case-study-text">
$30 Million+ USD
</p>
<p className="bold-case-study-text">
100+ Stores
</p>
</div>
</div>
{/* <h3>TRIBE + </h3> */}



</div>
</div>
</div>
</div>
                         
</Carousel>
</div>
</div>
</div>
</section>
        </>
    )
}

export default CaseStudyServiceDesktop;