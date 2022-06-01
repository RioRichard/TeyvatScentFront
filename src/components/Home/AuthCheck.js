import React, { useState } from 'react';
export function AuthCheck() {
    var data = sessionStorage.getItem("data")
    console.log(data)
    if (data==null) {
        return (
            <a href="/signandlog">Đăng nhập / Đăng ký</a>
        )
    }
    else{
        return (
            <a href="/logout">Đăng xuất</a>
        )
    }
}