
import { Link } from 'react-router-dom';
import { Route, Routes, } from 'react-router';

// import Logo from "../Image/Free_Sample_By_Wix.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'
import { ProductbyCategory } from '../Product/ProductbyCategory'
import React, { Component, useState, useEffect } from 'react'


export function SearchLayout() {
    const style = {
        float: "left",
        marginRight: "30px"
    }
    const [fix, setFix] = useState(false)
    const url = `https://localhost:44380/api/Category`
    const [Category, setCategory] = useState(null)
    let content = null
    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setCategory(data))
    }, [url])

    function setFixed() {
        if (window.scrollY >= 20) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    if(Category)
    {
        content =
        <div className="wrapper" style={{}}>
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
                            <a href="/signandlog">Đăng nhập / Đăng ký</a>
                        </div>
                        <div className="cart">

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className='container' style={{ marginTop: '120px', marginLeft: '300px',marginRight: '200px' }}>
                    <div className="sidebar">
                        <div className="gadget">
                            <h2 className="star" style={{ fontSize: '18px' }}>DANH MỤC</h2>
                            <div className="clr"></div>
                            <ul className="sb_menu">
                            {Category.map(item => (
                                
                                <li className='active'>
                                <a style={{textDecoration:'none'}} href={`/search/ProductbyCategory/${item.idCategory}`}> {item.categoryName}
                                </a>
                                </li>
                            )
                            )}

                            </ul>
                        </div>
                    </div>
                    <ol className="breadcrumb" style={{ paddingTop: '30px', backgroundColor: 'white' }}>
                        <li className="breadcrumb-item"><a style={{ color: '#333333c7' }} href="/">Trang chủ</a></li>

                        <li className="breadcrumb-item active" style={{ color: '#000', fontWeight: '500' }}>Cửa hàng</li>
                    </ol>
                    <Routes>
                        <Route path='/ProductbyCategory/:idCategory' element={<ProductbyCategory />} />
                    </Routes>
                </div>


            </div>

        </div>
    }
    return (

        <div>
            {content}
        </div>

    )
}
