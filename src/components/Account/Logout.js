import React from 'react'
export function Logout(){
    sessionStorage.removeItem('data')
    window.location.href="/";
}

