import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundAdmin () {
    return (
        <div className="not-found" style={{ marginTop:'10px',marginLeft: '300px'}}>
        <img 
          src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
          alt="not-found"
        />
        <Link  to="/admin/info" className="link-home">
          <h1 style={{marginLeft:'280px'}}>VỀ TRANG CHỦ</h1>
        </Link>
      </div>
    )
}