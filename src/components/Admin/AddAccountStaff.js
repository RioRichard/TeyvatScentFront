import React, { useState } from 'react'
import isEmpty from "validator/lib/isEmpty"
import Url from '../Home/URL'
import swal from 'sweetalert'

export function AddAccountStaff({ close }) {
    const url = Url + "/api/Authentication/AdminReg"
    const [validationMsg, setValidationMsg] = useState('')
    const [staffName, setStaffName] = useState('')
    const [staffEmail, setStaffEmail] = useState('')

    const onChangeStaffName = (event) => {
        const value = event.target.value
        setStaffName(value)
    }
    const onChangeStaffEmail = (event) => {
        const value = event.target.value
        setStaffEmail(value)
    }
    const validateAll = () => {
        const msg = {}
        if (isEmpty(staffName)) {
            msg.staffName = "Nhập vào tên tên đăng nhập nhân viên"
        }
        if (isEmpty(staffEmail)) {
            msg.staffEmail = "Nhập vào Email nhân viên"
        }
        console.log(msg)
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) { return true }
        else { return false }
    }
    function submit(e) {
        e.preventDefault();
        var userName = document.getElementById('userSignIn').value
        var emailSignIn = document.getElementById('emailSignIn').value
        var isValid = validateAll()
        if (!isValid) {
            fetch(url, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        "userName": userName,
                        "pass": '',
                        "email": emailSignIn,
                        "urlFrontEnd": 'http://localhost:3000/adminemailcomfirmed/'
                    }
                )
            })
                .then(response => {
                    if (response.status == 200) {
                        swal({
                            title: "Thêm nhân viên thành công!!",
                            text: "Đã gửi mã xác nhận đến tài khoản",
                            icon: "success",
                            dangerMode: 'Xác nhận',
                        }).then(dangerMode => {
                            if (dangerMode) {
                                window.location.reload();
                            }
                        })
                    }
                    else {
                        swal({
                            title: "Xảy ra lỗi khi thực hiện lệnh",
                            icon: "error",
                            dangerMode: 'Xác nhận',
                        })
                    }
                })
        }
    }
    return (
        <div className="modalver2" style={{ position: 'fixed', top: '0', bottom: '0', right: '0', left: 0, zIndex: '4' }}>
            <div className="modal-container">
                <div className="closever2">
                    <a style={{ textDecoration: 'none' }} className="close" onClick={close}>
                        &times;
                    </a>
                </div>
                <header className="modal-header">
                    <i className="far fa-edit"></i>
                    Thêm Tài Khoản
                </header>
                <form id="addform" onSubmit={(e) => submit(e)} >
                    <div className="modal-body" style={{ maxHeight: '2̀50px' }}>
                        <div className="modal-staff-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                <strong>Tên Đăng Nhập</strong>
                            </label>
                            <input id="userSignIn" type="text" className="modal-input" placeholder="Enter Staff's UserName" name="staffName" style={{ minWidth: '100%' }} onChange={onChangeStaffName} />
                        </div>
                        <div>
                            <h5 style={{ color: 'red' }}>{validationMsg.staffName}</h5>
                        </div>
                        <div className="modal-staff-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                <strong>Email</strong>
                            </label>
                            <input id="emailSignIn" type="text" className="modal-input" placeholder="Enter Staff's Email" name="staffEmail" style={{ minWidth: '100%' }} onChange={onChangeStaffEmail} />
                        </div>
                        <div>
                            <h5 style={{ color: 'red' }}>{validationMsg.staffEmail}</h5>
                        </div>
                    </div>
                    <footer className="modal-footer">
                        <button type='submit' className="buy-tickets save" >
                            <i className="fas fa-check"></i>
                            LƯU
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    )
}
