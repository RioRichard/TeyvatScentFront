import React, { useState, useEffect } from 'react'
import logo from '../Content/Image//Free_Sample_By_Wix.png'
export function ChangeBanner() {
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
                    <h1 className="mt-4">ĐỔI BANNER</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                        <li className="breadcrumb-item active">BANNER</li>
                    </ol>

                    <div className="card-body">
                        <div className="form-group upload-form" id="uploadForm" style={{ marginTop: '20px' }}>
                            <h3>Hãy chọn ảnh</h3>
                            {/* onChange={(e) => upload(e)} */}
                            <input type="file" name="imgUp" className="form-control-file" id="imgUp" accept=".jpg, .jpeg, .png" />
                            <input type={'hidden'} id='hidden' />
                            <img src="https://nuochoarosa.com/wp-content/uploads/2020/10/1.png" style={{ height: '400px', width: '800px' }} id='imgPreview' />
                            <label style={{fontSize:'16px'}} htmlFor="text-tickets" className="modal-label">
                                Chọn vị trí muốn đổi (từ 1 đến 4)
                            </label>
                            <input type="text" className="modal-input" id='stock' placeholder="Position" name="productStock2"/>
                        </div>
                        <button className="btn btn-primary btn-addcategory" >Xác nhân đổi</button>
                    </div>
                    <div className='note'>
                        <p>
                            Hiện chỉ có thể thêm lần lượt từng banner
                        </p>
                    </div>
                </div>
            </main>
        </div>

    )
}