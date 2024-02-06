import React from "react";
import Link from "next/link";
const Mobilemenu = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" id="mobile-nav">
  <div className="container-fluid">
  <div className="nav-mob-div">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" id='Frieshamburger'>
    <i className="fa fa-bars" aria-hidden="true"></i>
    </button>

  </div>
  <div className="nav-mob-div">
  <a className="navbar-brand" href="/">
    <img className='header-logo' src='../assets/logo-red.webp' alt='Opositve Logo'/>

    </a>
  </div>
  <div className="nav-mob-div">
  <Link href='https://web.whatsapp.com/send?phone=9799954477&text=Hello%20team' passHref>
      <a target='_blank' rel='noreferrer'>
        <i className="fa fa-whatsapp"></i>
      </a>
    </Link>

  </div>
   
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item py-3">
          <a className="nav-link font-medium text-gray-700" href="/deliver">Deliver</a>
        </li>
        <li className="nav-item py-3">
          <a className="nav-link font-medium text-gray-700" href="/automate">Automate</a>
        </li>
        <li className="nav-item py-3">
          <a className="nav-link font-medium text-gray-700" href="/careers">Careers</a>
        </li>    
        <li className="nav-item dropdown py-3">
         
          <a className="nav-link font-medium text-gray-700 dropdown-toggle" href="/share" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Share
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="dropdownmobilemenu">
            <li><a className="nav-link font-medium text-gray-700 dropdown-item" href="/blog">Blogs</a></li>
            <li><a className="nav-link font-medium text-gray-700 dropdown-item" href="/master-class">Master Class</a></li>
            <li><a className="nav-link font-medium text-gray-700 dropdown-item" href="/contribute">Contribute</a></li>
          </ul>
        </li>
        <li className="nav-item py-3">
          <a className="nav-link nav-link font-medium text-gray-700" href="/contact">Contact</a>
        </li>   
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Mobilemenu;