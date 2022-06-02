import React from 'react';
export function AuthCheck() {
    var data = sessionStorage.getItem("data")
    var userName = sessionStorage.getItem("user")
    if (data==null) {
        return (
            <a style={{marginTop:'46px'}} href="/signandlog">Đăng nhập / Đăng ký</a>
        )
    }
    else{
        return (
            <a style={{marginTop:'46px'}} href="/logout">Đăng xuất</a>
        )
    }
}