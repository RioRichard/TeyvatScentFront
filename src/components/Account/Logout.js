import React from 'react'
export function Logout(){
    sessionStorage.removeItem('data')
    window.location.href="/";
}
export function runLogoutTimer(dispatchEvent)
{
    setTimeout(()=>{
        alert('Token da het han')     
        dispatchEvent(Logout());
    }, 30*60*1000)
}

