import Link from "next/link";
import Image from "next/image";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization
import "../styles/Home.module.css";

import { getDate } from "../utils/utils";

export default function Post({ post, featuredMedia }) {
  return (
    <>
      <div className="card col-lg-4 blog-card" >
        <div className="row g-0">
          <div className="col-md-12 blog-card-col">
            <Link href={`/posts/${post.slug}`}>
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
          <div className="col-md-12">
            <div className="card-body">
              <div className="card-body-category">
              <ul class="post-categories">
             
             <li> {post.category_name[0]} </li>
              {/* <li>{post.category_name[1]}</li>
              <li>{post.category_name[3]}</li>
              <li>{post.category_name[4]}</li>
              <li>{post.category_name[5]}</li> */}
           </ul>
           <p className="read-time">5 min read</p>
              </div>

              <h5 className="card-title">{post.title.rendered}</h5>
              {/* <h5 className="card-title">{post._embedded['wp:featuredmedia'][0].source_url}</h5> */}

              {/* <div className="card-text" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div> */}
              <p className="card-text blog-listing">
                by{" "}
                <span className="author-name-card">
                  {post._embedded["author"][0].name}
                </span>
                <span className="text-muted">- {getDate(post.modified)}</span>
              </p>
              {/* <Link href={`/posts/${post.slug}`}>
                            <a className="btn btn-primary">See more</a>
                        </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
