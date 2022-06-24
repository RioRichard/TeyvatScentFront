import React, { useState } from 'react';
import '../Content/CSS/StyleSheet.css';
import swal from 'sweetalert'
import Url from '../Home/URL'
import isEmail from "validator/lib/isEmail"
import isEmpty from "validator/lib/isEmpty"

export function AdminForgetPassword() {

    const url = Url + `/api/Authentication/ForgotAdminPassword`
    const [email, setEmail] = useState('')
    const [validationMsg, setValidationMsg] = useState('')

    const onChangeStaffEmail = (event) => {
        const value = event.target.value
        setEmail(value)
    }
    const validateAll = () => {
        const msg = {}
        if (isEmpty(email)) {
            msg.email = "Nhập vào Email của bạn"
        }
        else{
            if(isEmail(email) == false)
            {
                msg.email = "Định dạng Email không đúng"
            }
        }
        console.log(msg)
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) { return true }
        else { return false }
    }
    function submit(e) {
        e.preventDefault()
        var isValid = validateAll()
        if(!isValid)
        {
            var emailStaff = document.getElementById('email').value
            fetch(url, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    String(emailStaff)
                )
            })
                .then(res => {
                    if (res.status == 200) {
                        swal({
                            title: "Đã gửi mật khẩu đến Email của bạn",
                            icon: "success",
                            dangerMode: 'Đăng nhập lại'
                        })
                    }
                    else {
                        swal({
                            title: "Xảy ra lỗi khi thực hiện lệnh",
                            icon: "error",
                            dangerMode: 'Xác nhận'
                        })
                    }
                })
        }
       
        
    }
    return (
        <div className='wrapper'>
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">QUÊN MẬT KHẨU</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>
                        <li className="breadcrumb-item active">Quên mật khẩu</li>
                    </ol>
                    <div className="card-body">
                        <form method="post" name="changeInfo" id="changeInfo" onSubmit={(e) => submit(e)} >
                            <div className="form-group">
                                <label className="small mb-1" htmlFor="fullname"><h2>Nhập Email</h2></label>
                                <input style={{ maxWidth: '50%' }} className="form-control py-4" id="email" type="text" name="email" placeholder="Nhập Email của bạn" onChange={onChangeStaffEmail} />
                                <h5 style={{ color: 'red' }}>{validationMsg.email}</h5>
                            </div>
                            <button type='submit' className="btn btn-primary btn-editaddress" >Gửi</button>
                        </form>

                    </div>
                </div>
            </main>
        </div>
    );
}
