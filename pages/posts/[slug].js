import Link from "next/link";
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import $ from 'jquery';

import {getPost, getSlugs} from "../../utils/wordpress";

export default function PostPage({post}){
    useEffect(() => {
        if ($('#blogcontent h2').length > 0) {
            $('#toccol').prepend('<nav class="toc"><h3 class="title">Table of Contents</h3><ol class = "toc-list"></ol></nav>');
          }
          
          $('#blogcontent').find('h2').each(function() {
            var $item = $(this);
            var $id = $(this).attr('id');
            var li = $('<li/>');
            var a = $('<a/>', {text: $item.text(), href: '#' + $id, title: $item.text()});
            a.appendTo(li);
            $('#toccol .toc ol.toc-list').append(li);
          });
    })
    return (
       <>
         <Head>
            <title>               {post.title.rendered} - Opositive</title>
              <meta name="description" content={post.excerpt.rendered}/>
              <link rel="canonical" href={`/posts/${post.slug}`} />

         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

         </Head>
            <div className="container-fluid blog-detail-cont-fluid">
            <img src={post._embedded['wp:featuredmedia'][0].source_url} className = 'featured-image-blog-detail-page'></img>
            <div className="braedcrumb-blog-deatil">
               <Link href= "/">
               <a>
                  Home
               </a>
               </Link>
               <i class="fa fa-chevron-right" aria-hidden="true"></i>

               <Link href= "/">
               <a>
               {post.category_name[0]}
               </a>
               </Link>
               <i class="fa fa-chevron-right" aria-hidden="true"></i>

               <Link href={`/posts/${post.slug}`}>
               <a>
               {post.title.rendered}
               </a>
               </Link>
            </div>
            <div className="blog-detail-banner-text">
            <ul class="post-categories category-name-banner">
             
             <li> {post.category_name[0]} </li>
              <li>{post.category_name[1]}</li>
              <li>{post.category_name[3]}</li>
              <li>{post.category_name[4]}</li>
              <li>{post.category_name[5]}</li>
           </ul>
            <h1 className="pb-2 blog-detail-title">{post.title.rendered}</h1>

            <p className="card-text-by">by <span className="author-name">{post._embedded['author'][0].name}</span></p>
            </div>

            </div>
            <div className="container pt-5">
            <div className="row">
                <div className="col-lg-3">
                    <div className="toc-col" id="toccol">
                    {/* <h2>Table of Contents</h2> */}

                    </div>
                </div>
                <div className="col-lg-7">
    
                <div className="card-text pb-5"  id = 'blogcontent' dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
                <ul className="tags">
                    <li>{post.tag_names[0]}</li>
                    <li>{post.tag_names[1]}</li>
                    <li>{post.tag_names[2]}</li>
                    <li>{post.tag_names[3]}</li>
                </ul>
                {/* <Link href="/">
                    <a className="btn btn-primary">Back to Home</a>
                </Link> */}
                </div>
                <div className="col-lg-2">
                <div className="social-icons">
            <Link href={`https://www.facebook.com/sharer.php?u=/posts/${post.slug}`}>
             <a><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            </Link>
            <br/>
            <Link  href={`https://twitter.com/intent/tweet?url=/posts/${post.slug}`}>
            <a><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </Link>
            
            <br/>
            <Link href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=/posts/${post.slug}`}>
                <a>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            </Link>
            

            </div>
                </div>
            </div>
            </div>
            
       </>
    )
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {

    const paths = await getSlugs("posts");
  
    return {
        paths,
        //this option below renders in the server (at request time) pages that were not rendered at build time
        //e.g when a new blogpost is added to the app
        fallback: 'blocking'
    }
  
  }
  
//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {

const post = await getPost(params.slug);

return {
    props: {
    post
    },
    revalidate: 10, // In seconds
}

}

