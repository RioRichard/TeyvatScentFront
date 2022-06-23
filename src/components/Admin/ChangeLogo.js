import React, { useState, useEffect } from 'react'
import logo from '../Content/Image//Free_Sample_By_Wix.png'
import Url from '../Home/URL'
export function ChangeLogo() {
    const uploadLogoUrl = Url + '/api/Product/UploadFELogo'
    const uploadUrl = Url + '/api/Product/Upload'
    function upload(e) {
        let a = new FormData();
        const img = document.querySelector('#imgUp').files[0];
        a.append('FileName', 'logo')
        a.append('File', img)
        const option = {
            method: 'Post',
            body: a
        }
        fetch(uploadUrl, option)
            .then(response => response.json())
            .then(
                (response) => {
                    document.getElementById('hidden').value = response.imageUrl
                    document.getElementById('imgPreview').src = Url + '/ImageTemp/' + document.getElementById('hidden').value;
                    console.log(document.getElementById('hidden').value);
                }
            )
    }
    function submit(e) {
        e.preventDefault();
        fetch(uploadLogoUrl, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                String("logo.jpg")
            )
        }
        )
        .then(alert('Đổi logo thành công'))
        .then(window.location.href=window.location.href)
    }
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
                        <form id="addform" onSubmit={(e) => submit(e)}>
                            <div className="form-group upload-form" id="uploadForm" style={{ marginTop: '20px' }}>
                                <h3>Hãy chọn ảnh (Chỉ chấp nhận file .jpg)</h3>
                                <input type="file" onChange={(e) => upload(e)} name="imgUp" className="form-control-file" id="imgUp" accept=".jpg" />
                                <input type={'hidden'} id='hidden' />
                                <img style={{ height: '100px', width: '100px' }} id='imgPreview' />
                            </div>
                            <button type='submit' className="btn btn-primary btn-addcategory" >Xác nhân đổi</button>
                        </form>
                    </div>
                </div>
            </main >
        </div >

    )
}