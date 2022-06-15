import React, { useState, useEffect } from 'react';
import {
    Navigate
} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Route, Routes, useRoutes, } from 'react-router';
// import { Home } from '../Home';
// import Logo from "../Image/Free_Sample_By_Wix.jpg";
import '../Content/CSS/StyleLayout.css'
import '../Content/CSS/Modalcss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Info } from './Info';
import { Address } from './Address';
import { Cart } from './Cart';
import { Invoice } from './Invoice';
import { ChangePassword } from './ChangePassword';
import { runLogoutTimer } from '../Account/Logout';
import { AuthCheck } from '../Home/AuthCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { InvoiceDetails } from './InvoiceDetails';
// import $ from 'jquery';

export function LayoutAccount() {
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
    useEffect(() => {
        if (sessionStorage.getItem('data') != null) {
            runLogoutTimer(dispatchEvent);
        }

    }, []);
    return (
        <div className="wrapper" style={{ overflow: 'hidden', marginTop: '100px' }}>
            <div className={fix ? 'navbar fixed' : 'navbar'} style={{ position: 'fixed' }}>
                <div className="container">
                    {/*                      <div className="logo"><img height="100" style={style} src={Logo}/></div>*/}
                    <div className="nav-section">
                        <Link to={"/home"}>Home</Link>
                        <a href="/counter">Sản Phẩm</a>
                    </div>
                    <div className="search-logo-section">
                        <div className="search-container">
                            <form action="/action_page.php">
                                <input type="text" placeholder="Tìm kiếm sản phẩm..." name="search" />
                                <button type="submit">Tìm kiếm</button>
                            </form>
                        </div>
                        <div className="login-section">
                            <a href='/account/cart'><FontAwesomeIcon fontSize={'25px'} icon={faCartArrowDown} /></a>
                            <AuthCheck></AuthCheck>
                        </div>
                        <div className="cart">

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="container-fluid page-body-wrapper" style={{ display: 'inline' }}>
                    <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{ zIndex: '0', marginTop: '-10px', width: '250px', position: 'fixed' }}>
                        <ul className="nav">
                            <li className="nav-item nav-category">Quản lí</li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Account/Info" aria-expanded="false" aria-controls="form-elements">
                                    <i className="menu-icon mdi mdi-card-text-outline"></i>
                                    <span className="menu-title">Thông tin tài khoản</span>
                                    {/* <i className="menu-arrow"></i> */}
                                </a>
                                <div className="collapse" id="form-elements">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Account/ChangePassword" aria-expanded="false" aria-controls="form-elements">
                                    <i className="menu-icon mdi mdi-card-text-outline"></i>
                                    <span className="menu-title">Đổi mật khẩu</span>
                                    {/* <i className="menu-arrow"></i> */}
                                </a>
                                <div className="collapse" id="form-elements">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Account/Address" aria-expanded="false" aria-controls="charts">
                                    <i className="menu-icon mdi mdi-chart-line"></i>
                                    <span className="menu-title">Địa chỉ</span>
                                    {/* <i className="menu-arrow"></i> */}
                                </a>
                                {/* <div className="collapse" id="charts">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                                </ul>
                            </div> */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Account/Cart" aria-expanded="false" aria-controls="tables">
                                    <i className="menu-icon mdi mdi-table"></i>
                                    <span className="menu-title">Giỏ hàng</span>
                                    {/* <i className="menu-arrow"></i> */}
                                </a>
                                {/* <div className="collapse" id="tables">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                                </ul>
                            </div> */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Account/Invoice" aria-expanded="false" aria-controls="icons">
                                    <i className="menu-icon mdi mdi-layers-outline"></i>
                                    <span className="menu-title">Hóa đơn</span>
                                    {/* <i className="menu-arrow"></i> */}
                                </a>
                                {/* <div className="collapse" id="icons">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                                </ul>
                            </div> */}
                            </li>
                            <li className="nav-item nav-category">Tác vụ</li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">
                                    <i className="menu-icon mdi mdi-file-document"></i>
                                    <span className="menu-title">Đăng Xuất</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div style={{ paddingLeft: '18%' }}>
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/Account/Info" />} />
                        <Route path='/Info' element={<Info />} />
                        <Route path='/Address' element={<Address />} />
                        <Route path='/Cart' element={<Cart />} />
                        <Route path='/Invoice' element={<Invoice />} />
                        <Route path='/ChangePassword' element={<ChangePassword />} />
                        <Route path='/InvoiceDetails' element={<InvoiceDetails />} />
                        
                    </Routes>
                </div>

            </div>
            <script src="~/Scripts/jquery.validate.min.js"></script>
        </div>
    );

}
