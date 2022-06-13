
import { Link } from 'react-router-dom';
import { Route, Routes, } from 'react-router';

// import Logo from "../Image/Free_Sample_By_Wix.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'
import { ProductbyCategory } from '../Product/ProductbyCategory'
import React, { Component, useState, useEffect } from 'react'
import { SearchedPage } from '../Home/SearchedPage';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { AuthCheck } from '../Home/AuthCheck'
import { DropDownCate } from '../Home/DropDownCate'
import { Dropdown } from 'semantic-ui-react'


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

    const state={
        value:''
    }

    const getInputValue = (event)=>{
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
            navigate('/search/SearchedPage',
            {
                state: {
                    value: String(x).toLowerCase()
                }
            });
        }
    }
    var x = <div></div>
    function setFixed() {
        if (window.scrollY >= 20) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    function DropDown(e) {
        e.preventDefault()
        x= document.querySelector('#menu')
        console.log(x);

        x.classList.add('drop')
    }
    function CancelDrop(i)
    {
        i.preventDefault();
        x= document.querySelector('#menu')
        console.log(x);
        x.classList.remove('drop')
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
                        <a href="/" onMouseOver={(e) => DropDown(e)} className='dropDownLink'>Sản Phẩm</a>
                        <div id='menu' onMouseLeave={(e) => CancelDrop(e)} onMouseOver={(e) => DropDown(e)} style={{display:'none'}}>
                            <DropDownCate></DropDownCate>
                        </div>
                    </div>
                    <div className="search-logo-section">
                        <div className="search-container">
                                <input type="text" id="inputSearch" placeholder="Tìm kiếm sản phẩm..."  onChange={getInputValue}/>
                                <button onClick={createPost}>
                                Tìm kiếm 
                            </button>
                               
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
                <div className='container' style={{ marginTop: '120px', marginLeft: '150px',marginRight: '200px' }}>
                    <div className="sidebar">
                        <div className="gadget">
                            <h2 className="star" style={{ fontSize: '18px' }}>DANH MỤC</h2>
                            <div className="clr"></div>
                            <ul className="sb_menu">
                            {Category.map(item => (
                                <li key ={item.idCategory} className='active'>
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
                        <Route path='/SearchedPage' element={<SearchedPage />} />
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
