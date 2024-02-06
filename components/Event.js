
import Link from "next/link";
import Image from "next/image";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization


export default function Event({event, featuredMedia}) {
    return (
        <div className="col-sm-4 blog-card-div">
           <div className="row">
            <div className="col-md-12 blog-card-col">
            <Link href={`/posts/${event.slug}`}>
                <a>
                <Image
                  src={
                    featuredMedia["media_details"].sizes.medium["source_url"]
                  }
                  width={"fit-content"}
                  height={"auto"}
                  alt={featuredMedia["alt_text"]}
                  className="blog-listing-img"
                />
                </a>
            </Link>
            </div>
           </div>
           <div className="col-md-12">
           <div className="card-body">
           <div className="card-body-category">
              <ul class="post-categories">
             
             <li> {event.category_name[0]} </li>
              {/* <li>{post.category_name[1]}</li>
              <li>{post.category_name[3]}</li>
              <li>{post.category_name[4]}</li>
              <li>{post.category_name[5]}</li> */}
           </ul>
           <p className="read-time">5 min read</p>
              </div>
                <h5 className="card-title">{event.title.rendered}</h5>
            {/* <div className="card-text" dangerouslySetInnerHTML={{__html: event.excerpt.rendered}}></div> */}
                {/* <p className="card-text"><small className="text-muted">{(event.acf.date)}</small></p> */}
                {/* <Link href={`/posts/${event.slug}`}>
                    <a className="btn btn-primary">See more</a>
                </Link> */}
            </div>
           </div>
            
        </div> 
    )
}

