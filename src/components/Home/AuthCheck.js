import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
export function AuthCheck() {
    var data = sessionStorage.getItem("data")
    var userName = sessionStorage.getItem("user")
    if (data==null) {
        return (
            <a className='auth' href="/signandlog">Đăng nhập / Đăng ký</a>
        )
    }
    else{
        return (
            <div>
            <a className='cart' href='/account/cart'><FontAwesomeIcon fontSize={'25px'} icon={faCartArrowDown}/></a>
            <a className='auth' href="/logout">Đăng xuất</a>
            </div>
           
        )
    }
}