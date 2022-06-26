import React from 'react'
import { Link } from 'react-router-dom';
export function Error403() {
    return (
        <div className="not-found" style={{ marginLeft: '550px' }}>

            <img
                style={{ marginTop: '150px', marginLeft: '-275px' }}
                src="https://web4s.vn/uploads/tiny_uploads/tin-tuc/http-error-403/loi-403-forbidden.jpg"
                alt="not-found"
            />
            <div><h2 style={{marginLeft:'-200px'}}>Bạn không có quyền truy cập vào trang này</h2></div>
        </div>
    )
}