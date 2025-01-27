import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


function Header (){
    return (
        <>
             <header className=" text-white" style={{backgroundColor: "black"}}>
                <section>
                    <div className="container border-bottom">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end py-3 ">
                            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
                            </a>

                            {/* <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li><a href="#" className="nav-link px-2 text-white">Menu</a></li>
                                <li><a href="#" className="nav-link px-2 text-white">Delivery</a></li>
                                <li><a href="#" className="nav-link px-2 text-white">About us</a></li>
                                <li><a href="#" className="nav-link px-2 text-white">Contact</a></li>
                            </ul> */}

                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-dark focus-ring-none shadow-none" placeholder="Search..." aria-label="Search"/>
                            </form>

                            <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                        <div className="col-md-3 mb-2 mb-md-0 d-flex">
                            <a href="#" className="text-white text-decoration-none fs-2 text-start">LOGO</a>
                        </div>

                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                                <li><a href="#" className="nav-link px-5 text-white">Menu <FontAwesomeIcon icon={faCaretDown} className="ps-2" /></a></li>
                                <li><a href="#" className="nav-link px-5 text-white">Delivery</a></li>
                                <li><a href="#" className="nav-link px-5 text-white">About us</a></li>
                                <li><a href="#" className="nav-link px-5 text-white">Contact</a></li>
                        </ul>

                        <div className="col-md-3 text-end">
                            <a href="#" className="px-3 fs-5 text-white"><FontAwesomeIcon icon={faCartShopping} /></a>
                            <a href="#" className="px-3 fs-5 text-white"><FontAwesomeIcon icon={faBell}/></a>
                        </div>
                    </div>
                </section>

            </header>

        </>
    )
}
export default Header;