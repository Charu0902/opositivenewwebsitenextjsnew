import Link from "next/link";
import $ from 'jquery' 
// import 'bootstrap/dist/css/bootstrap.css';

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Mobilemenu = dynamic(() => import('./mobilemenu'))
// const Popup = dynamic(() => import('./popup'))

function ShowModal(){
  var modal = document.getElementById('myModal1');
  modal.style.display = 'block';
}
function Hidpopup(){
 var modal = document.getElementById('myModal1');
 modal.style.display = 'none';
}


export default function Header() {
    useEffect(() => {
        function Headerscroll(){
            var scrollPosition = window.scrollY;
          var logoContainer = document.getElementById('myhead');
          var navLinkList = document.getElementById('navLinkList');
          window.addEventListener('scroll', function() {
            var logoContainer = document.getElementById('myhead');
            var navLinkList = document.getElementById('navLinkList');
          
              scrollPosition = window.scrollY;
          
              if (scrollPosition >= 30) {
                  logoContainer.classList.add('headerscrolled');
                  navLinkList.classList.remove('navlinkslist');
                  
              } else {
                  logoContainer.classList.remove('headerscrolled');
                  navLinkList.classList.add('navlinkslist');
                 
          
              }
              
          
          })
          }
          
          Headerscroll();

          $(document).ready(function(){
            $(".dropdown-toggle").click(function(){
              $(".dropdown-menu").toggle();
            });
          });

          
    })
    return (
        <>
        {/* Desktop Carousel */}
        <nav className="header navbar-expand-sm" id='myhead'>
            <div className="container mx-auto px-8">
                <Link href="/">
                    <a className="navbar-brand">
                        <img className='header-logo lazyload' data-src='../assets/logo-red.webp' alt='Opositive Logo' />
                    </a>
                </Link>
                <div
                    className="flex justify-end"
                    id="collapsibleNavbar"
                >
                    <ul
                        className="flex items-center space-x-2"
                        id='navLinkList'
                    >
                        <li className="nav-item">
                            <a href='/deliver' className="nav-link mx-4 text-red-600">
                                Deliver
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='/automate' className="nav-link mx-4 text-red-600">
                                Automate
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='/careers' className="nav-link mx-4 text-red-600">
                                Careers
                            </a>
                        </li>
                        <li className="nav-item dropdown header-item-dropdown">
                            <a
                                className="nav-link dropdown-toggle header-dropdown-toggle mx-4 text-red-600"
                                href="/share"
                                role="button"
                            >
                                Share <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <ul className="dropdown-menu header-dropdown hidden">
                                <li><a className="dropdown-item" href="https://opositive.io/blog/">Blogs</a></li>
                                <li><a className="dropdown-item" href="/master-class">Masterclass</a></li>
                                <li><a className="dropdown-item" href="/contribute">Contribute</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href='/contact' className="nav-link mx-4 text-red-600">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <Link
                                href='https://web.whatsapp.com/send?phone=9799954477&text=Hello%20team'
                                passHref
                            >
                                <a target='_blank' rel='noreferrer'>
                                    <i className="fa fa-whatsapp"></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      

{/* Mobile craousel */}
<Mobilemenu></Mobilemenu>
{/* <div id="myModal1" class="modal1">


<div class="modal-content1">
  <span class="close1" onClick={Hidpopup} id = 'close'>&times;</span>
  <Popup></Popup>
</div>

</div> */}
        </>
    )
  }