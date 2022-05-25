import React, { useEffect, useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import {
    Navigate
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Route, Routes, useRoutes, } from 'react-router';
// import { Home } from '../Home';
// import Logo from "../Image/Free_Sample_By_Wix.jpg";
import '../Content/CSS/StyleLayout.css'
import '../Content/CSS/Admincss.css'
import '../Content/CSS/Modalcss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmailComfirmed } from '../Account/EmailComfirmed';
import { SignAndLog } from '../Account/SignAndLog';
import { Attribute } from './Attribute';
// import $ from 'jquery';
import { Category } from './Category';
import { Product } from './Product';
import './style.css'
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import ScriptTag from 'react-script-tag';
import { Helmet } from "react-helmet";

export function Test() {
    const style = {
        float: "left",
        marginRight: "30px"
    }
    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY >= 20) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    useEffect(() =>{
        const script=document.createElement('script');
        script.src='./vendor.bundle.base.js'
        script.async=true;
        document.body.appendChild(script);
    }
    )
    return (
        <div className="wrapper" style={{ overflow: 'hidden' }}>
            <div className={fix ? 'navbar fixed' : 'navbar'} style={{ position: 'fixed', zIndex: '1' }}>
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
                            <a href="#">Đăng nhập</a>
                            <a href="#">Đăng Kí</a>
                        </div>
                        <div className="cart">

                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid page-body-wrapper">
                <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{ zIndex: '0', marginTop: '18px',width:'250px' }}>
                    <ul className="nav">
                        <li className="nav-item nav-category">Forms and Datas</li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="form-elements">
                                <i className="menu-icon mdi mdi-card-text-outline"></i>
                                <span className="menu-title">Form elements</span>
                                {/* <i className="menu-arrow"></i> */}
                            </a>
                            <div className="collapse" id="form-elements">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="charts">
                                <i className="menu-icon mdi mdi-chart-line"></i>
                                <span className="menu-title">Charts</span>
                                {/* <i className="menu-arrow"></i> */}
                            </a>
                            {/* <div className="collapse" id="charts">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                                </ul>
                            </div> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="tables">
                                <i className="menu-icon mdi mdi-table"></i>
                                <span className="menu-title">Tables</span>
                                {/* <i className="menu-arrow"></i> */}
                            </a>
                            {/* <div className="collapse" id="tables">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                                </ul>
                            </div> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="icons">
                                <i className="menu-icon mdi mdi-layers-outline"></i>
                                <span className="menu-title">Icons</span>
                                {/* <i className="menu-arrow"></i> */}
                            </a>
                            {/* <div className="collapse" id="icons">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                                </ul>
                            </div> */}
                        </li>
                        <li className="nav-item nav-category">pages</li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="auth">
                                <i className="menu-icon mdi mdi-account-circle-outline"></i>
                                <span className="menu-title">User Pages</span>
                                {/* <i className="menu-arrow"></i> */}
                            </a>
                            {/* <div className="collapse" id="auth">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                                </ul>
                            </div> */}
                        </li>
                        <li className="nav-item nav-category">help</li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html">
                                <i className="menu-icon mdi mdi-file-document"></i>
                                <span className="menu-title">Documentation</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='footer'>

            </div>
            <ScriptTag isHydrating={true} type="text/babel" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
            <Helmet>
                <script src='./vendor.bundle.base' type="text/babel" />
            </Helmet>
        </div>
    );

}
