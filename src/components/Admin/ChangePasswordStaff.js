import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import '../Content/CSS/Button.css'
import Url from '../Home/URL'
export function ChangePasswordStaff() {
    let auth = sessionStorage.getItem('data')
    const url = Url + `/api/Authentication/AllStaffInfo`
    const [info, setInfo] = useState(0)
    useEffect(() => {
        fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + auth,
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
        if(newPass==newPass2)
        {
            fetch(changePassUrl,{
                method:'put',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                },
                body: JSON.stringify(
                    {
                        "oldPass": currentPass,
                        "newPass": newPass2,
                    }
                )
            })
            .then(res=>res.json())
            .then(res=>{
                alert(res.msg)
            })
        }
        else{
            alert('Mk khong trung khop')
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
                        <input className="form-control py-4" id="inputCurrentPassword" type="password" name="currentPass" placeholder="Nhập Mật Khẩu Hiện tại" />
                    </div>
                    <div className="form-group">
                        <label className="small mb-1" htmlFor="inputNewPassword"><b>Mật Khẩu Mới</b></label>
                        <input className="form-control py-4" id="inputNewPassword" type="password" name="newPass" placeholder="Nhập Mật Khẩu Mới" />
                    </div>
                    <div className="form-group">
                        <label className="small mb-1" htmlFor="inputNewPassword2"><b>Nhập Lại Mật Khẩu Mới</b></label>
                        <input className="form-control py-4" id="inputNewPassword2" type="password" name="reNewPass" placeholder="Nhập Lại Mật Khẩu Mới" />
                    </div>

                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                        <button className="btn btn-primary">Xác nhận</button>
                    </div>
                </form>
            </main>
        </div>
    );
}