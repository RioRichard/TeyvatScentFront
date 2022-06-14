import React, { Component } from 'react';
import '../Content/CSS/StyleSheet.css';

export class ForgetPassword extends Component {
    static displayName = ForgetPassword.name;

    render() {
        return (
            <div style={{marginTop: '100px'}}>
            <div className="login-box ">
                <div className="login-snip">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                    <label htmlFor="tab-1" className="tab">Quên mật khẩu</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" style={{ display: 'none' }} />
                    <label htmlFor="tab-2" className="tab" style={{ display: 'none' }}>Đăng kí</label>
                    <div className="login-space">
                        <form id="Forgot">

                            <div className="login">
                                <div className="group">
                                    <label htmlFor="email" className="label">Email của bạn</label>
                                    <input id="email" style={{ minWidth:'100%'}} type="text" className="input" placeholder="Nhập tên tài khoản của bạn" name="Email" />
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
}
