import React, { Component, useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import {
    Navigate
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Route, Routes,  useRoutes, } from 'react-router';
import { Home } from './Home/Home';
import {Product} from './Product/Product';
// import Logo from "../Image/Free_Sample_By_Wix.jpg";
import './Content/CSS/StyleLayout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmailComfirmed } from './Account/EmailComfirmed';
import { SignAndLog } from './Account/SignAndLog';
import {ProductDetail} from './Product/ProductDetail';
import {AddCategory} from './Admin/AddCategory';



export function Layout() {    
        const style = {
            float: "left",
            marginRight: "30px"
        }
        const [fix, setFix] = useState(false)
        
      

    function setFixed() {
        if (window.scrollY >= 200) {
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
                            <a href="/signandlog">News</a>
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
                                <a href="/signandlog">Đăng nhập / Đăng ký</a>
                            </div>
                            <div className="cart">

                            </div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <Routes>
                    <Route path="/" element={<Navigate replace to="/Home" />} />
                    <Route path='/Home' element={<Home/>} />
                    <Route path='/emailcomfirmed' element={<EmailComfirmed/>} />
                    <Route path='/signandlog' element={<SignAndLog/>}/>
                    <Route path='/Product' element={<Product/>} />
                    <Route path='/ProductDetail/:idProduct' element={<ProductDetail/>} />
                    <Route path='/AddCategory' element={<AddCategory/>} />
                   
                    </Routes>
                    {/* <Route path='/counter' component={Counter} /> */}

                </div>

            </div>
        );

}
