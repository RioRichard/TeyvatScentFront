
import Url from '../Home/URL'
import React, { useState } from 'react';
import '../Content/CSS/StyleSheet.css';
import swal from 'sweetalert'
import isEmail from "validator/lib/isEmail"
import isEmpty from "validator/lib/isEmpty"
import background from '../Content/Image/img1.jpg'
export function ForgetPassword() {
    const url = Url + `/api/Authentication/ForgotPassword`
    const [email, setEmail] = useState('')
    const [validationMsg, setValidationMsg] = useState('')

    const onChangeAccountEmail = (event) => {
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
            <div style={{paddingTop:'100px', paddingBottom:'100px' ,backgroundImage: `url(${background})`, backgroundSize:'cover', height:'100%'  }}>
            <div className="login-box ">
                <div className="login-snip">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                    <label htmlFor="tab-1" className="tab">Quên mật khẩu</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" style={{ display: 'none' }} />
                    <label htmlFor="tab-2" className="tab" style={{ display: 'none' }}>Đăng kí</label>
                    <div className="login-space">
                        <form id="Forgot" onSubmit={(e) => submit(e)}>
                            <div className="login">
                                <div className="group">
                                    <label htmlFor="email" className="label">Email của bạn</label>
                                    <input id="email" style={{ minWidth:'100%'}} type="text" className="input" placeholder="Nhập Email của bạn" name="Email" onChange={onChangeAccountEmail}/>
                                    <h5 style={{ color: 'red' }}>{validationMsg.email}</h5>
                                </div>
                                <div className="group">
                                    <button className="button">Lấy lại mật khẩu</button>
                                </div>
                                <br />
                                <br />
                                <div className="hr"></div>
                                <div className="foot"> <a href="/signandlog">Đăng nhập hoặc đăng ký</a> </div>
                                <div className="foot"><a href="/">Về trang chủ</a></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
