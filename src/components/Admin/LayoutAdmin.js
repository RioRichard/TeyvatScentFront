import React, { useState } from 'react';
import {
    Navigate
} from "react-router-dom";
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
import './style.css'
// import $ from 'jquery';
import { Category } from './Category';
import { Product } from './Product';


export function LayoutAdmin() {
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
        <div className="wrapper" style={{ overflow: 'hidden' , marginTop:'100px'}}>
            <div className={fix ? 'navbar fixed' : 'navbar'} style={{ position: 'fixed' }}>
                <div className="container">
                    {/*                      <div className="logo"><img height="100" style={style} src={Logo}/></div>*/}
                    <div className="nav-section">
                        <Link to={"/home"}>Home</Link>
                        <a href="/counter">Sản phẩm</a>
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
                            <a href="#">Đăng xuất</a>
                            
                        </div>
                        <div className="cart">

                        </div>
                    </div>

                </div>
            </div>
            <div>
            <div className="container-fluid page-body-wrapper" style={{display:'inline'}}>
                <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{ zIndex: '0', marginTop: '-10px',width:'250px' ,position:'fixed'}}>
                    <ul className="nav">
                        <li className="nav-item nav-category">Quản lí</li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="/Admin/Product" aria-expanded="false" aria-controls="form-elements">
                                <i className="menu-icon mdi mdi-card-text-outline"></i>
                                <span className="menu-title">Sản Phẩm</span>
                                {/* <i className="menu-arrow"></i> */}
                            </a>
                            <div className="collapse" id="form-elements">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="/Admin/Category" aria-expanded="false" aria-controls="charts">
                                <i className="menu-icon mdi mdi-chart-line"></i>
                                <span className="menu-title">Danh mục</span>
                                {/* <i className="menu-arrow"></i> */}
                            </a>
                            {/* <div className="collapse" id="charts">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
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
                        <li className="nav-item nav-category">Thống kê</li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="auth">
                                <i className="menu-icon mdi mdi-account-circle-outline"></i>
                                <span className="menu-title">Biểu đồ</span>
                                {/* <i className="menu-arrow"></i> */}
                            </a>
                            {/* <div className="collapse" id="auth">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                                </ul>
                            </div> */}
                        </li>
                        <li className="nav-item nav-category">tác vụ</li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html">
                                <i className="menu-icon mdi mdi-file-document"></i>
                                <span className="menu-title">Đăng Xuất</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
                <div style={{ paddingLeft: '18%' }}>
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/admin/home" />} />                       
                        <Route path='/category' element={<Category />} />
                        <Route path='/signandlog' element={<SignAndLog />} />
                        <Route path='/product' element={<Product />} />
                    </Routes>
                </div>
            </div>
            <script src="~/Scripts/jquery.validate.min.js"></script>
        </div>
    );
    
}
