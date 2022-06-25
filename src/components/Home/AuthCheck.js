import React, { useEffect, useState } from 'react';
import './Dropdowncss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Url from '../Home/URL'
export function AuthCheck() {
    var data = sessionStorage.getItem("data")
    if(data == null)
    {
        data = sessionStorage.getItem("tokenGoogle")
    }
    var x = <div></div>;
    function DropDown(e) {
        e.preventDefault()
        x = document.querySelector('#menu1')
        x.classList.add('drop')
    }
    function CancelDrop(i) {
        i.preventDefault();
        x = document.querySelector('#menu1')
        x.classList.remove('drop')
    }
    if (sessionStorage.getItem("data") == null && sessionStorage.getItem("tokenGoogle")== null) {
        return (
            <a className='auth' href="/signandlog">Đăng nhập / Đăng ký</a>
        )
    }
    else {
        const url = Url + `/api/Account/Info`
        const [info, setInfo] = useState(0)
        let auth = sessionStorage.getItem('data')
        if(auth == null)
        {
            auth = sessionStorage.getItem('tokenGoogle')
        }
        if(auth != null)
        {
            useEffect(() => {
                fetch(url, {
                    method: 'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + auth,
                    }
                }
                )
                    .then(response => response.json()
                    ).then(data => setInfo(data))
            }, [url])
        }
        return (
            <div>
                <a className='cart' href='/account/cart'><FontAwesomeIcon fontSize={'25px'} icon={faCartArrowDown} /></a>
                <a onMouseOver={(e) => DropDown(e)} className='dropDownLink1'>{info.userName}</a>
                <div id='menu1' onMouseLeave={(e) => CancelDrop(e)} onMouseOver={(e) => DropDown(e)} style={{ display: 'none' }}>
                    <div className='menu1'>
                        <a className='content-item' style={{ textDecoration: 'none' }} href='/account/info'>Thông tin tài khoản</a>
                        <a className='content-item' style={{ textDecoration: 'none' }} href='/account/cart'>Giỏ hàng</a>
                        <a className='content-item' style={{ textDecoration: 'none' }} href='/logout'>Đăng xuất</a>
                    </div>
                </div>
            </div>
        )
    }
}