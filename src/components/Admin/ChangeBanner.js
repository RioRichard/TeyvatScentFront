import React, { useState, useEffect } from 'react'
import logo from '../Content/Image//Free_Sample_By_Wix.png'
import Url from '../Home/URL'
export function ChangeBanner() {
    const uploadLogoUrl = Url + '/api/Product/UploadFELogo'
    const uploadUrl = Url + '/api/Product/Upload'
    var pos = '';
    var inPos;
    var uploadName;
    function upload(e) {
        pos = document.getElementById('pos').value;
        console.log(pos);
        let a = new FormData();
        const img = document.querySelector('#imgUp').files[0];
        switch (pos) {
            case "1":
                inPos = 'banner1'
                uploadName='banner1.jpg'
                break;
            case "2":
                inPos = 'banner2'
                uploadName='banner2.jpg'
                break;
            case "3":
                inPos = 'banner3'
                uploadName='banner3.jpg'
                break;
            case "4":
                inPos = 'banner4'
                uploadName='banner3.jpg'
                break;
            default:
                break;
        }
        console.log(inPos);
        a.append('FileName', inPos)
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
                }
            )
    }
    function submit(e) {
        e.preventDefault();
        fetch(uploadLogoUrl, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                String(uploadName)
            )
        }
        )
            .then(alert('Đổi banner thành công'))
            .then(window.location.href = window.location.href)
    }
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
                        <form id="addform" onSubmit={(e) => submit(e)}>
                            <div className="form-group upload-form" id="uploadForm" style={{ marginTop: '20px' }}>
                                <label style={{ fontSize: '16px' }} htmlFor="text-tickets" className="modal-label">
                                    Chọn vị trí muốn đổi (từ 1 đến 4)
                                </label>
                                <input type="text" className="modal-input" id='pos' placeholder="Position" name="productStock2" />
                                <h3 style={{marginTop:'20px'}}>Hãy chọn ảnh (Hiện chỉ chấp nhận định dạng .jpg)</h3>
                                <input type="file" onChange={(e) => upload(e)} name="imgUp" className="form-control-file" id="imgUp" accept=".jpg" />
                                <input type={'hidden'} id='hidden' />
                                <img style={{ height: '400px', width: '800px' }} id='imgPreview' />

                            </div>
                            <button type='submit' className="btn btn-primary btn-addcategory" >Xác nhân đổi</button>
                        </form>
                    </div>
                    <div className='note'>
                        <h5 style={{ color: 'red' }}>
                            Hiện chỉ có thể thêm lần lượt từng banner
                        </h5>
                    </div>
                </div>
            </main>
        </div>

    )
}