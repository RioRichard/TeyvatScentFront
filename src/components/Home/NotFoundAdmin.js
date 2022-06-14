import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundAdmin () {
    return (
        <div className="not-found" style={{ marginLeft: '300px'}}>
        <img 
          src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
          alt="not-found"
        />
        <Link  to="/admin/info" className="link-home">
          <h1 style={{marginLeft:'80px'}}>VỀ TRANG CHỦ NHÁ ONII-CHAN</h1>
        </Link>
      </div>
    )
}