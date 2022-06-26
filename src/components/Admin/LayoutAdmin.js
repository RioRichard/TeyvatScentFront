import React, { useEffect, useState } from 'react';
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
import { SignAndLog } from '../Account/SignAndLog';
import { AdminAccount } from './AdminAccount';
import { Info } from './AdminAccountInfo';
import './style.css'
// import $ from 'jquery';
import { Category } from './Category';
import { Product } from './Product';
import { ChartTest } from './ChartTest'
import { NotFoundAdmin } from '../Home/NotFoundAdmin';
import { AdminInvoice } from './AdminInvoice';
import { AuthCheck } from '../Home/AuthCheck';
import { DeletedProduct } from './DeletedProduct';
import { BannedStaff } from './BannedStaff';
import { ChangePasswordStaff } from './ChangePasswordStaff';
import { ChangeLogo } from './ChangeLogo';
import { ChangeBanner } from './ChangeBanner';
import { Error403 } from './403Error';
import { AdminForgetPassword } from './AdminForgetPassword';
import logo from '../Content/Image//Free_Sample_By_Wix.png'
import { DropDownCate } from '../Home/DropDownCate'
import Url from '../Home/URL'

export function LayoutAdmin() {
    const style = {
        float: "left",
        marginRight: "30px"
    }
    const [fix, setFix] = useState(false)
    let authAdmin = sessionStorage.getItem('dataAdmin')

    function setFixed() {
        if (window.scrollY >= 100) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    
    useEffect(() => {
        if(authAdmin==null || authAdmin == '')
        {
            window.location.href='/adminlogin'
        }

    }, []);
    
    return (
        <div className="wrapper" style={{ overflow: 'hidden', marginTop: '100px' }}>
            <div className={fix ? 'navbar fixed' : 'navbar'} style={{ position: 'fixed' }}>
                <div className="container">
                    <div className="logo"><img src={Url+'/FELogo/logo.jpg'} /></div>
                    <div className="nav-section">
                        <Link to={"/home"}>Home</Link>
                        <a href="/counter">Sản phẩm</a>
                    </div>
                    <div className="search-logo-section">
                        <div className="search-container">
                            <form action="/action_page.php">
                                <input disabled type="text" placeholder="Tìm kiếm sản phẩm..." name="search" />
                                <button disabled type="submit">Tìm kiếm</button>
                            </form>
                        </div>
                        <div className="login-section">
                        <a className="nav-link" href="/adminlogout">
                        <i className="menu-icon mdi mdi-file-document"></i>
                        <span className="menu-title" >Đăng Xuất</span>
                    </a>
                        </div>
                        <div className="cart">

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="container-fluid page-body-wrapper" style={{ display: 'inline' }}>
                    <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{ zIndex: '0', marginTop: '-50px', width: '250px', position: 'fixed', paddingTop: '35px' }}>
                        <ul className="nav">
                            <li className="nav-item nav-category">Quản lí</li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Admin/Info" aria-expanded="false" aria-controls="charts">
                                    <i className="menu-icon mdi mdi-chart-line"></i>
                                    <span className="menu-title">Thông tin tài khoản</span>
                                </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="/Admin/adminforgetpassword" aria-expanded="false" aria-controls="icons">
                                <i className="menu-icon mdi mdi-layers-outline"></i>
                                <span className="menu-title">Quên mật khẩu</span>
                            </a>
                        </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Admin/changepasswordstaff" aria-expanded="false" aria-controls="icons">
                                    <i className="menu-icon mdi mdi-layers-outline"></i>
                                    <span className="menu-title">Đổi mật khẩu nhân viên</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Admin/Product" aria-expanded="false" aria-controls="form-elements">
                                    <i className="menu-icon mdi mdi-card-text-outline"></i>
                                    <span className="menu-title">Sản Phẩm</span>
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
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Admin/invoice" aria-expanded="false" aria-controls="charts">
                                    <i className="menu-icon mdi mdi-chart-line"></i>
                                    <span className="menu-title">Đơn hàng</span>
                                </a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Admin/account" aria-expanded="false" aria-controls="icons">
                                    <i className="menu-icon mdi mdi-layers-outline"></i>
                                    <span className="menu-title">Tài khoản nhân viên</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Admin/changelogo" aria-expanded="false" aria-controls="icons">
                                    <i className="menu-icon mdi mdi-layers-outline"></i>
                                    <span className="menu-title">Thay đổi logo</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Admin/changebanner" aria-expanded="false" aria-controls="icons">
                                    <i className="menu-icon mdi mdi-layers-outline"></i>
                                    <span className="menu-title">Thay đổi banner</span>
                                </a>
                            </li>
                            <li className="nav-item nav-category">Thống kê</li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Admin/ChartTest" aria-expanded="false" aria-controls="auth">
                                    <i className="menu-icon mdi mdi-account-circle-outline"></i>
                                    <span className="menu-title">Biểu đồ</span>
                                </a>
                            </li>
                            <li className="nav-item nav-category">Thùng rác</li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Admin/deletedproduct" aria-expanded="false" aria-controls="icons">
                                    <i className="menu-icon mdi mdi-layers-outline"></i>
                                    <span className="menu-title">Sản phẩm </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="/Admin/bannedstaff" aria-expanded="false" aria-controls="icons">
                                    <i className="menu-icon mdi mdi-layers-outline"></i>
                                    <span className="menu-title">Nhân viên</span>
                                </a>
                            </li>
                            <li className="nav-item nav-category">Tác vụ</li>
                            <li className="nav-item">
                                <a className="nav-link" href="/adminlogout">
                                    <i className="menu-icon mdi mdi-file-document"></i>
                                    <span className="menu-title" >Đăng Xuất</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div style={{ paddingLeft: '18%' }}>
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/admin/info" />} />
                        <Route path='/category' element={<Category />} />
                        <Route path='/signandlog' element={<SignAndLog />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/charttest' element={<ChartTest />} />
                        <Route path='/account' element={<AdminAccount />} />
                        <Route path='/info' element={<Info />} />
                        <Route path='/*' element={<NotFoundAdmin />} />
                        <Route path='/info' element={<Info />} />
                        <Route path='/invoice' element={<AdminInvoice />} />
                        <Route path='/deletedproduct' element={<DeletedProduct />} />
                        <Route path='/bannedstaff' element={<BannedStaff />} />
                        <Route path='/changepasswordstaff' element={<ChangePasswordStaff />} />
                        <Route path='/changelogo' element={<ChangeLogo />} />
                        <Route path='/changebanner' element={<ChangeBanner />} />
                        <Route path='/adminforgetpassword' element={<AdminForgetPassword />} />
                        <Route path='/error403' element={<Error403 />} />
                    </Routes>
                </div>
            </div>
            <script src="~/Scripts/jquery.validate.min.js"></script>
        </div>
    )
}
