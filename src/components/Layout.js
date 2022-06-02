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
import { Cart } from './Account/Cart'
import { AuthCheck } from './Home/AuthCheck';
import { Auth } from './Home/Auth';

import { Logout } from './Account/Logout';
import { runLogoutTimer } from './Account/Logout';

export function Layout() {
    const [fix, setFix] = useState(false)
    const state = {
        value: ''
    }
    function setFixed() {
        if (window.scrollY >= 100) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    const getInputValue = (event) => {
        event.preventDefault();

        const userValue = event.target.value;
        state.value = event.target.value;

        console.log(userValue);
    };

    const navigate = useNavigate();
    const createPost = () => {
        var x = document.getElementById('inputSearch').value
        if(x != "")
        {
            navigate('search/SearchedPage',
            {
                state: {
                    value: String(x).toLowerCase()
                }
            });
        }
       
    }

    useEffect(() => {
        if(sessionStorage.getItem('data') != null)
        {
            runLogoutTimer(dispatchEvent);
        }
        
      }, []);
    
    return (
        <div className="wrapper">
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
                            <input type="text" id="inputSearch" placeholder="Tìm kiếm sản phẩm..." onChange={getInputValue} />
                            <button onClick={createPost}>
                                Tìm kiếm
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
                    <Route path='/emailcomfirmed' element={<EmailComfirmed />} />
                    <Route path='/signandlog' element={<SignAndLog />} />
                    <Route path='/Product' element={<Product />} />
                    <Route path='/ProductDetail/:idProduct' element={<ProductDetail />} />
                    <Route path='/AddCategory' element={<AddCategory />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/Auth' element={<Auth />} />
                   
                   



                </Routes>
                {/* <Route path='/counter' component={Counter} /> */}

            </div>

        </div>
    );

}
