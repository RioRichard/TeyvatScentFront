import React, { useState } from 'react';
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

export function LayoutAdmin() {
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
        <div className="wrapper" style={{ overflow: 'hidden' }}>
            <div className={fix ? 'navbar fixed' : 'navbar'} style={{ position: 'fixed' }}>
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
            <div className="row" style={{ minHeight: '110vh', marginTop: '100px' }}>
                <div className="col-2" style={{ position: 'fixed', top: '0', bottom: '0', paddingTop: '4%' }}>
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading" style={{ fontSize: '20px', fontWeight: 'bold', paddingTop: '50px' }}>Danh mục quản lí</div>

                                <a className="nav-link" href="/admin" style={{ fontSize: '18px' }}>
                                    <div className="sb-nav-link-icon">{/*<i className="fas fa-user"></i>*/}</div>
                                    Thông tin cá nhân
                                </a>
                                <a className="nav-link" href="/admin/changepassword" style={{ fontSize: '18px' }}>
                                    <div className="sb-nav-link-icon">
                                        <i className="fas fa-key"></i>
                                    </div>
                                    Đổi mật khẩu
                                </a>
                                <a className="nav-link" href="/admin/StaffManagement" style={{ fontSize: '18px' }}>
                                    <div className="sb-nav-link-icon"></div>
                                    Quản Lý Nhân Viên
                                </a>
                                <a className="nav-link" href="/admin/product" style={{ fontSize: '18px' }}>
                                    <div className="sb-nav-link-icon"></div>
                                    Sản Phẩm
                                </a>
                                <a className="nav-link" href="/admin/attribute" style={{ fontSize: '18px' }}>
                                    <div className="sb-nav-link-icon"></div>
                                    Thuộc Tính
                                </a>
                                <a className="nav-link" href="/admin/category" style={{ fontSize: '18px' }}>
                                    <div className="sb-nav-link-icon"></div>
                                    Danh Mục
                                </a>
                                <a className="nav-link" href="/admin/invoicedetail" style={{ fontSize: '18px' }}>
                                    <div className="sb-nav-link-icon"></div>
                                    Chi Tiết Đơn Hàng
                                </a>
                                <a className="nav-link" href="/admin/chart" style={{ fontSize: '18px' }}>
                                    <div className="sb-nav-link-icon"></div>
                                    Bảng Thống Kê
                                </a>
                                <a className="nav-link" href="/admin/setting" style={{ fontSize: '18px' }}>
                                    <div className="sb-nav-link-icon"></div>
                                    Thiết lập trang web
                                </a>
                                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"></div>
                                    Thùng Rác
                                    <div className="sb-sidenav-collapse-arrow"></div>
                                </a>

                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="/admin/bannedstaff">-Nhân Viên</a>
                                        <a className="nav-link" href="/admin/DeletedAttribute">-Thuộc Tính</a>
                                        <a className="nav-link" href="/admin/DeletedCategory">-Danh Mục</a>
                                        <a className="nav-link" href="/admin/deletedproduct">-Sản Phẩm</a>
                                    </nav>
                                </div>
                                <a className="nav-link" href="/adminauth/LogOut" style={{ fontSize: '18px' }}>
                                    <div className="sb-nav-link-icon"><i className="fas fa-sign-out-alt"></i></div>
                                    Đăng xuất
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div style={{ paddingLeft: '18%' }}>
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/admin/home" />} />
                        {/* <Route path='/Admin/Home' element={<Home />} /> */}
                         {/* <Route path='/Home' element={<Home />} /> /> */}
                         
                        <Route path='/attribute' element={<Attribute />} />
                        <Route path='/category' element={<Category />} />
                        <Route path='/signandlog' element={<SignAndLog />} />
                    </Routes>
                </div>

            </div>
            <div className='footer'>

            </div>
            <script src="~/Scripts/jquery.validate.min.js"></script>
        </div>
    );
    
}
