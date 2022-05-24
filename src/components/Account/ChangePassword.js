import React, { Component } from 'react';
import '../Content/CSS/Button.css'
// import $ from 'jquery';
export function ChangePassword() {
    return (
        <div className='wrapper'>
            <main>
                <h1 className="mt-4">ĐỔI MẬT KHẨU</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                    <li className="breadcrumb-item active">Đổi mật khẩu</li>
                </ol>
                <form method="post" id="changePass">
                    <div className="form-group">
                        <label className="small mb-1" for="inputCurrentPassword"><b>Mật Khẩu</b></label>
                        <input className="form-control py-4" id="inputCurrentPassword" type="password" name="currentPass" placeholder="Nhập Mật Khẩu Hiện tại" />
                    </div>
                    <div className="form-group">
                        <label className="small mb-1" for="inputNewPassword"><b>Mật Khẩu Mới</b></label>
                        <input className="form-control py-4" id="inputNewPassword" type="password" name="newPass" placeholder="Nhập Mật Khẩu Mới" />
                    </div>
                    <div className="form-group">
                        <label className="small mb-1" for="inputNewPassword2"><b>Nhập Lại Mật Khẩu Mới</b></label>
                        <input className="form-control py-4" id="inputNewPassword2" type="password" name="reNewPass" placeholder="Nhập Lại Mật Khẩu Mới" />
                    </div>

                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">

                        <button className="btn btn-primary">Xác nhận</button>
                    </div>
                </form>
                <div className="text-danger">@TempData["messageChangePass"]</div>
            </main>
        </div>
    );
}