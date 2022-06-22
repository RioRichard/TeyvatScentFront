import React, { useState, useEffect } from 'react'
import logo from '../Content/Image//Free_Sample_By_Wix.png'
export function ChangeLogo() {
    // function upload(e) {
    //     let a = new FormData();
    //     const img = document.querySelector('#imgUp').files[0];
    //     a.append('file', img)
    //     const option = {
    //         method: 'Post',
    //         body: a
    //     }
    //     fetch(uploadUrl, option)
    //         .then(response => response.json())
    //         .then(
    //             (response) => {
    //                 document.getElementById('hidden').value = response.imageUrl
    //                 document.getElementById('imgPreview').src = 'https://localhost:44380/ImageTemp/' + document.getElementById('hidden').value;
    //                 console.log(document.getElementById('hidden').value);
    //             }
    //         )
    // }
    return (
        <div>
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">ĐỔI LOGO</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                        <li className="breadcrumb-item active">LOGO</li>
                    </ol>

                    <div className="card-body">
                        <div className="form-group upload-form" id="uploadForm" style={{ marginTop: '20px' }}>
                            <h3>Hãy chọn ảnh</h3>
                            {/* onChange={(e) => upload(e)} */}
                            <input type="file"  name="imgUp" className="form-control-file" id="imgUp" accept=".jpg, .jpeg, .png" />
                            <input type={'hidden'} id='hidden' />
                            <img src={logo} style={{ height: '100px', width: '100px' }} id='imgPreview' />
                        </div>
                        <button className="btn btn-primary btn-addcategory" >Xác nhân đổi</button>
                    </div>
                </div>
            </main>
        </div>

    )
}