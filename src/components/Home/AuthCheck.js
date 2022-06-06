import React from 'react';
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
            <a className='auth' href="/logout">Đăng xuất</a>
        )
    }
}