import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound () {
    return (
        <div className="not-found" style={{marginTop:'200px', marginLeft: '550px'}}>
        <img 
          src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
          alt="not-found"
        />
        <Link  to="/" className="link-home">
          <h1 style={{marginLeft:'250px'}}>VỀ TRANG CHỦ</h1>
        </Link>
      </div>
    )
}