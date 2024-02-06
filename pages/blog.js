import Head from 'next/head'

import { getEvents, getPosts } from '../utils/wordpress';
import Link from "next/link";

import Post from "../components/Post";
import Event from "../components/Event";
import "../styles/Home.module.css";
import $ from 'jquery';
import React, { useState, useEffect } from 'react'

export default function Home({posts, events}) {

  const jsxPosts = posts.map(post => {
    const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
    return (
      <Post post={post} featuredMedia={featuredMedia} key={post.id}/>
    )
  });

  const jsxEvents = events.map(event => {
    const featuredMedia = event['_embedded']['wp:featuredmedia'][0];
    return (
      <Event event={event} featuredMedia={featuredMedia} key={event.id}/>
    )
  });
  useEffect(() => {
    $(function () {
      $(".col-lg-4").slice(0, 6).show();
      $("body").on('click touchstart', '.load-more', function (e) {
        e.preventDefault();
        $(".col-lg-4:hidden").slice(0, 6).slideDown();
        if ($(".col-lg-4:hidden").length == 0) {
          $(".load-more").css('visibility', 'hidden');
        }
        $('html,body').animate({
          scrollTop: $(this).offset().top
        }, 1000);
      });
    });
})

  return (
    
    <>
      <Head>
        <title>Opositive | SEO Tips, Tricks, and Strategies</title>
        <meta name="description" content="Want to learn how to rank your website higher in Google with SEO? Check out our blog for the latest tips, tricks, and strategies from the pros at Opositive." />
        <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <div className="container pt-5">
        <div className="row">
     
       <div className='o-blogs'>
       <h1 className="pb-3 opositive-heading">O+ Blogs</h1>
            <p>Discover about SEO Guide, Technical SEO, Industry specific, learn about 
Industry Updates and more</p>
       </div>
       {/* <div className='blog-categories-div'>
       <ul className='blog-categories'>
        <li className='view-all'>
        View All

        </li>
        <li>
        SEO Guide
        </li>
        <li>
        Industry Specific
        </li>
        <li>
        Technical SEO
        </li>
        <li>
        Industry Updates
        </li>
       </ul>
       <div className='row all-blogs-row'>
        <div className='col-md-6 all-blogs'>
        All Blogs
        </div>
        <div className='col-md-6 more-blogs'>
        More Blogs<i class="fa fa-long-arrow-right" aria-hidden="true"></i>

         </div>
       </div>
       </div> */}
       {/* <div className='row row-col-row'>
         <div className='col-md-6 post-img-div'>
           <img src='./assests/Image.png' className='post-img'/>
         </div>
         <div className='col-md-6 content-div'>
          <div className='col-content'>
            <div className='post-category'>
              <p className='category-name'>SEO GUIDE</p>
              <p className="read-time">5 min read</p>
            </div>
            <h5 className='post-heading'>Bing vs Google SEO: Understanding the Key Differences</h5>
            <p>Understanding the differences between Bing and Google SEO is crucial for businesses and marketers who want to optimize their websites and increase their visibility in search results.</p>
            <Link href={`/posts/bing-ai-vs-google-vs-bard-vs-chatgpt`} className = 'read-more-link'>Read More</Link>
          </div>
        </div>
       </div> */}
    
            {jsxPosts}
       
          {/* <div className="col-lg-4">
          
          </div> */}
          <div className='load-more-div'>
          <a href="" class="load-more">Load More</a>

          </div>
        </div>
        {/* <div className='row all-blogs-row'>
        <div className='col-md-6 all-blogs'>
        Top Blogs        </div>
       
        
       </div> */}
        {/* <div className='row'>

        <div className='col-md-4'>
        <Link href={`/posts/bing-ai-vs-google-vs-bard-vs-chatgpt`}>
<a>
<img src='./assests/SEO-product-page-800x500.webp' className='post-img'/>

</a>
        </Link>

        <div className='card-body'>
         <div className='card-body-category'>
         <ul class="post-categories"><li>BEGINNER</li></ul>
         <p class="read-time">5 min read</p>
         </div>

         <h5 class="card-title">Bing vs Google SEO: Understanding the Key Differences</h5>

        </div>
        </div>

        <div className='col-md-4'>
        <Link href={`/posts/seo-agency-for-saas-5-factors-before-hiring`}>
<a>
<img src='./assests/5-Things-to-Consider-Before-Hiring-an-SEO-Agency-for-SaaS-800x500.webp' className='post-img'/>

</a>
        </Link>

        <div className='card-body'>
         <div className='card-body-category'>
         <ul class="post-categories"><li>SAAS</li></ul>
         <p class="read-time">5 min read</p>
         </div>

         <h5 class="card-title">SEO Agency for SaaS: 5 Critical Factors to Consider Before Hiring</h5>

        </div>
        </div>
        <div className='col-md-4'>

          <div className='row top-blogs-row'>
            <div className='col-md-3'>
            <Link href={`/posts/bing-vs-google-seo-understanding-key-difference`}>
<a>
<img src='./assests/understanding-the-difference-between-bing-vs-google-seo-cop-800x500.webp' className='post-img'/>

</a>
            </Link>

            </div>
            <div className='col-md-9'>

              <h5 className=''>Bing vs Google SEO: Understanding the Key Differences</h5>

            </div>
          </div>

          <div className='row top-blogs-row'>
            <div className='col-md-3'>
            <Link href={`/posts/bing-seo-complete-step-by-step-guide`}>
<a>
<img src='./assests/bing-seo-step-by-step-guide-800x500.webp' className='post-img'/>

</a>
            </Link>

            </div>
            <div className='col-md-9'>

              <h5 className=''>BING SEO – STEP-BY-STEP GUIDE</h5>

            </div>
          </div>

          <div className='row top-blogs-row'>
            <div className='col-md-3'>
            <Link href={`/posts/top-50-free-seo-tools`}>
<a>
<img src='./assests/Image.png' className='post-img'/>

</a>
            </Link>

            </div>
            <div className='col-md-9'>

              <h5 className=''>Top 50+ Free SEO Tools and their Uses</h5>

            </div>
          </div>

        </div>
        </div> */}
        {/* <div className='row all-blogs-row'>
        <div className='col-md-6 all-blogs'>
        Latest Blogs  </div>
       
       </div> */}
       {/* <div className='row latest-blog-row'>
       {jsxEvents} 
       </div> */}
   
      </div>
    </>
  )

}

export async function getStaticProps({ params }) {

  const posts = await getPosts();
  const events = await getEvents();
  return {
    props: {
     posts,
     events
    },
    revalidate: 10, // In seconds
  }

}
