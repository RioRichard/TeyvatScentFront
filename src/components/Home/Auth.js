
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

export function Auth() {
    const items = localStorage.getItem('token');
    if (items) {
      console.log(items)
    }
    else
    {
        console.log('CÁi QQ gì đây')
    }

    return (
        <div>
        <h1>Hello</h1>
        </div>
    )
}


