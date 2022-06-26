import React, { useState, useEffect } from 'react'
import logo from '../Content/Image//Free_Sample_By_Wix.png'
import isEmpty from "validator/lib/isEmpty"
import swal from 'sweetalert'
import Url from '../Home/URL'
export function ChangeBanner() {
    const uploadLogoUrl = Url + '/api/Product/UploadFELogo'
    const uploadUrl = Url + '/api/Product/Upload'
    let  authAdmin = sessionStorage.getItem('dataAdmin') 
    const [validationMsg, setValidationMsg] = useState('')
    const [position, setPosion] = useState('')
    var pos = '';
    var inPos;
    var uploadName; 
    const onChangePosion = (event) => {
        const value = event.target.value
        setPosion(value)
    }
    const validateAll = () => {
        const msg = {}
        if (isEmpty(position)) {
            msg.position = "Không thể để trống"
        }
        console.log(msg)
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) { return true }
        else { return false }
    }
    function upload(e) {
        e.preventDefault()
            pos = document.getElementById('pos').value;
            console.log(pos);
            if(pos != '1')
            {
                console.log('true')
            }
            if(pos != '1' && pos != '2' && pos != '3' && pos != '4' )
            {
                    swal({
                        title: "Tiến hành nhập vị trí từ 1 - 4 trước",
                        icon: "error",
                        dangerMode: 'Xác nhận',
                    })
            }
            else
            {
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
                        inPos = 'banner5'
                        uploadName='banner5.jpg'
                        break;
                    default:
                        break;
                }
                console.log(inPos);
                a.append('FileName', inPos)
                a.append('File', img)
                const option = {
                    method: 'Post',
                    headers: {
                        'Authorization': "Bearer " + authAdmin,
                    },
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
    }
    function submit(e) {
        e.preventDefault();
        var isvalid = validateAll()
        if(!isvalid)
        {
        fetch(uploadLogoUrl, {
            method: 'post',
            headers: { 'Content-Type': 'application/json',
            'Authorization': "Bearer " + authAdmin, },
            body: JSON.stringify(
                String(uploadName)
            )
        }
        )
            .then(alert('Đổi banner thành công'))
            .then(window.location.href = window.location.href)
    }
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
                                <input type="number" className="modal-input" id='pos' placeholder="Position" name="position"
                                min="1"
                                max="4" onChange={onChangePosion}/>
                                <div>
                                <h4 style={{ color: 'red' }}>{validationMsg.position}</h4>
                                </div>
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