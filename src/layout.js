import React, { Component, useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import {
    Navigate
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Route, Routes,  useRoutes, } from 'react-router';
import { Home } from './home';
import Logo from "./Image/Free_Sample_By_Wix.jpg";
import './CSS/StyleLayout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export function Layout() {    
        const style = {
            float: "left",
            marginRight: "30px"
        }
        const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY >= 400) {
                setFix(true)
            }
            else {
                setFix(false)
            }
        }      
        window.addEventListener("scroll", setFixed)
        return (
            <div className="wrapper">
                <div className={fix ? 'navbar fixed':'navbar'} style={{ position: 'fixed' }}>
                    <div className="container">
                        {/*                      <div className="logo"><img height="100" style={style} src={Logo}/></div>*/}
                        <div className="nav-section">
                            <Link to={"/home"}>Home</Link>
                            <a href="#">News</a>
                            <a href="/counter">Counter</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="search-logo-section">
                            <div className="search-container">
                                <form action="/action_page.php">
                                    <input type="text" placeholder="Tìm kiếm sản phẩm..." name="search" />
                                    <button type="submit">Tìm kiếm</button>
                                </form>
                            </div>
                            <div className="login-section">
                                <a href="#">Đăng nhập</a>
                                <a href="#">Đăng Kí</a>
                            </div>
                            <div className="cart">

                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path='/home' element={<Home/>} />
                    </Routes>
                </div>

            </div>
        );

}
