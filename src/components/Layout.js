import React, { useEffect, useState } from 'react';
import {
    Navigate
} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Route, Routes, useRoutes, } from 'react-router';
import { Home } from './Home/Home';
import { Product } from './Product/Product';
// import Logo from "../Image/Free_Sample_By_Wix.jpg";
import './Content/CSS/StyleLayout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmailComfirmed } from './Account/EmailComfirmed';
import { SignAndLog } from './Account/SignAndLog';
import { ProductDetail } from './Product/ProductDetail';
import { AddCategory } from './Admin/AddCategory';
import { useNavigate } from 'react-router-dom';
import { AuthCheck } from './Home/AuthCheck';
import { Logout } from './Account/Logout';
import { runLogoutTimer } from './Account/Logout';
import { Dropdown } from 'semantic-ui-react'
import { DropDownCate } from './Home/DropDownCate'
import { NotFound } from './Home/NotFound';
import { AdminEmailComfirmed } from './Admin/AdminEmailComfirmed';
import { AdminLogout } from './Admin/AdminLogout';
import logo from "./Content/Image/Free_Sample_By_Wix.png"
import Url from './Home/URL'

export function Layout() {
    const [fix, setFix] = useState(false)

    let auth = sessionStorage.getItem("data")
    function setFixed() {
        if (window.scrollY >= 150) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)

    const navigate = useNavigate();
    const createPost = () => {
        var x = document.getElementById('inputSearch').value
        if (x != "") {
            navigate('search/SearchedPage',
                {
                    state: {
                        value: String(x).toLowerCase()
                    }
                });
        }
    }
    var x = <div></div>;
    useEffect(() => {
        x = document.querySelector('#menu')
        if (sessionStorage.getItem('data') != null) {
            runLogoutTimer(dispatchEvent);
        }
    }, []);
    function DropDown(e) {
        e.preventDefault()
        x = document.querySelector('#menu')
        x.classList.add('drop')
    }
    function CancelDrop(i) {
        i.preventDefault();
        x = document.querySelector('#menu')
        x.classList.remove('drop')
    }

    return (
        <div className="wrapper">
            <div className={fix ? 'navbar fixed' : 'navbar'} style={{ position: 'fixed', zIndex: '2', overflow: 'visible', padding: 0 }}>
                <div className="container" style={{ flexWrap: 'wrap' }}>
                    <div className="logo"><img src={Url+'/FELogo/logo.jpg'} /></div>
                    <div className="nav-section">
                        <Link to={"/home"}>Home</Link>
                        <a onMouseOver={(e) => DropDown(e)} className='dropDownLink'>S???n Ph???m</a>
                        <div id='menu' onMouseLeave={(e) => CancelDrop(e)} onMouseOver={(e) => DropDown(e)} style={{ display: 'none' }}>
                            <DropDownCate></DropDownCate>
                        </div>
                    </div>
                    <div className="search-logo-section">
                        <div className="search-container">
                            <input type="text" id="inputSearch" placeholder="T??m ki???m s???n ph???m..." />
                            <button onClick={createPost}>
                                T??m ki???m
                            </button>
                        </div>
                        <div className="login-section">
                            <AuthCheck></AuthCheck>
                        </div>
                        <div className="cart">
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/Home" />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/emailcomfirmed/:token' element={<EmailComfirmed />} />
                    <Route path='/adminemailcomfirmed/:token' element={<AdminEmailComfirmed />} />
                    <Route path='/signandlog' element={<SignAndLog />} />
                    <Route path='/Product' element={<Product />} />
                    <Route path='/ProductDetail/:idProduct' element={<ProductDetail />} />
                    <Route path='/AddCategory' element={<AddCategory />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/adminlogout' element={<AdminLogout />} />
                    <Route path='/test' element={<DropDownCate />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </div>
            <div className="footer">
                <div className="footer-1">
                    <div className="footer-content">
                        <div className="nav-column">
                            <a className="nav-header" href="">Ch??nh s??ch</a>
                            <div className="border-nav"></div>
                            <div style={{paddingBottom:"20px"}}></div>
                            <a className="navitem" href="/home/policysecurity">Ch??nh s??ch b???o m???t</a>
                            <a className="navitem" href="/home/policyrefund">Ch??nh s??ch ?????i tr???</a>
                            <a className="navitem" href="/home/ourpolicy">Ch??nh s??ch nh??m Teyvat-Scent</a>
                            <a className="navitem" href="/home/ourpolicy">Ch??nh s??ch nh??m Teyvat-Scent</a>
                            <a className="navitem" href="/home/ourpolicy">Ch??nh s??ch nh??m Teyvat-Scent</a>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="nav-column">

                            <a className="nav-header" href="">C??ng ty</a>
                            <div className="border-nav"></div>
                            <div style={{paddingBottom:"20px"}}></div>
                            <a className="navitem" href="/home/About">Gi???i thi???u</a>
                            <a className="navitem" href="/home/Contact">Li??n h???</a>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="nav-column">
                            <a className="nav-header" href="">K???t n???i</a>
                            <div className="border-nav"></div>
                            <div style={{paddingBottom:"20px"}}></div>
                            <a className="navitem" href="https://github.com/RioRichard/TeyvatScentFront"><img width="35" src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" /></a>
                            <div style={{paddingBottom:"20px"}}></div>
                        </div>
                    </div>
                </div>

                <div className="footer-1">
                    <div className="border-nav" style={{borderBottom:'solid',borderColor:'darkgrey',width:'80%'}}></div>
                    <div className="footer-content">
                        <div className="nav-column">
                            <div className="navitem">Email:</div>
                        </div>
                    </div>
                    <div className="footer-content" style={{marginTop:"20px"}}>
                        <div className="nav-column">
                            <div className="navitem" style={{fontWeight:'bold', fontSize:'25px'}}>C??ng ty Teyvat-Scent</div>
                            <div className="navitem">S???n ph???m thu???c ????? ??n C?? S???</div>
                        </div>
                    </div>
                    <div className="footer-content" style={{paddingTop:"30px"}}>
                        <div className="nav-column">
                            <div className="navitem" style={{fontSize:"20px"}}>Copyright ?? by Nh??m 12</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
