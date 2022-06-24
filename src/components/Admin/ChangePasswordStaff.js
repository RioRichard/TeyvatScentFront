import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import '../Content/CSS/Button.css'
import Url from '../Home/URL'
import swal from 'sweetalert'
import isEmpty from "validator/lib/isEmpty"
export function ChangePasswordStaff() {
    let authAdmin = sessionStorage.getItem('dataAdmin')
    const url = Url + `/api/Authentication/AllStaffInfo`
    const [info, setInfo] = useState(0)
    const [validationMsg, setValidationMsg] = useState('')
    const [currentPass, setCurrentPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [reNewPass, setReNewPass] = useState('')

    const onChangeCurentPass = (event) => {
        const value = event.target.value
        setCurrentPass(value)
    }
    const onChangeNewPass = (event) => {
        const value = event.target.value
        setNewPass(value)
    }
    const onChangeReNewPass = (event) => {
        const value = event.target.value
        setReNewPass(value)
    }


    const validateAll = () => {
        const msg = {}
        if (isEmpty(currentPass)) {
            msg.currentPass = "Nhập vào mật khẩu của bạn"
        }
        if (isEmpty(newPass)) {
            msg.newPass = "Nhập vào  mật khẩu mới"
        }
        if (isEmpty(reNewPass)) {
            msg.reNewPass = "Nhập lại  mật khẩu mới"
        }
        console.log(msg)
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) { return true }
        else { return false }
    }
    useEffect(() => {
        fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authAdmin,
            }
        }
        )
            .then(response => response.json()
            ).then(data => setInfo(data))
    }, [url])
    const changePassUrl=Url + '/api/Authentication/ChangeStaffPass'
    function submit(e) {
        e.preventDefault();
        var currentPass=document.getElementById('inputCurrentPassword').value;
        var newPass= document.getElementById('inputNewPassword').value
        var newPass2= document.getElementById('inputNewPassword2').value
        var isvalid = validateAll()
        if(!isvalid)
        {
            if(newPass==newPass2)
        {
            fetch(changePassUrl,{
                method:'put',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + authAdmin,
                },
                body: JSON.stringify(
                    {
                        "oldPass": currentPass,
                        "newPass": newPass2,
                    }
                )
            })
            .then(response=>response.json())
            .then(response => {
                    if (response.status == false) {
                        swal({
                            title: "Mật khẩu cũ không chính xác!!",
                            icon: "error",
                            dangerMode: 'Xác nhận',
                        })
                    }
                    if (response.status == true) {
                        swal({
                            title: "Đổi mật khẩu thành công!!",
                            icon: "success",
                            dangerMode: 'Xác nhận',
                        }).then(dangerMode => {
                            if (dangerMode) {
                                window.location.reload();
                            }
                        })
                    }
            })
        }
        else{
            swal({
                title: "Mật khẩu không khớp",
                icon: "error",
                dangerMode: 'Xác nhận',
            })
        }
        }
    }
    return (
        <div className='wrapper'>
            <main>
                <h1 className="mt-4">ĐỔI MẬT KHẨU</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                    <li className="breadcrumb-item active">Đổi mật khẩu</li>
                </ol>
                <form onSubmit={(e) => submit(e)}  method="put" id="changePass">
                    <div className="form-group">
                        <label className="small mb-1" htmlFor="inputCurrentPassword"><b>Mật Khẩu hiện hành</b></label>
                        <input className="form-control py-4" id="inputCurrentPassword" type="password" name="currentPass" placeholder="Nhập Mật Khẩu Hiện tại" onChange={onChangeCurentPass} />
                        <h5 style={{ color: 'red' }}>{validationMsg.currentPass}</h5>
                    </div>
                    <div className="form-group">
                        <label className="small mb-1" htmlFor="inputNewPassword"><b>Mật Khẩu Mới</b></label>
                        <input className="form-control py-4" id="inputNewPassword" type="password" name="newPass" placeholder="Nhập Mật Khẩu Mới" onChange={onChangeNewPass}/>
                        <h5 style={{ color: 'red' }}>{validationMsg.newPass}</h5>
                        </div>
                    <div className="form-group">
                        <label className="small mb-1" htmlFor="inputNewPassword2"><b>Nhập Lại Mật Khẩu Mới</b></label>
                        <input className="form-control py-4" id="inputNewPassword2" type="password" name="reNewPass" placeholder="Nhập Lại Mật Khẩu Mới" onChange={onChangeReNewPass}/>
                        <h5 style={{ color: 'red' }}>{validationMsg.reNewPass}</h5>
                        </div>

                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                        <button className="btn btn-primary">Xác nhận</button>
                    </div>
                </form>
            </main>
        </div>
    );
}