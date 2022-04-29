import React, { Component } from 'react';
import '../Content/CSS/StyleSheet.css';

export class SignAndLog extends Component {
    static displayName = SignAndLog.name;

    render() {
        return (
            <div className="Ohayou">
            <div className="login-box ">
                <div className="login-snip">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                    <label htmlFor="tab-1" className="tab">Đăng nhập</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label htmlFor="tab-2" className="tab">Đăng kí</label>
                    <div className="login-space">
                        <form id="log">
                            
                            <div className="login">
                                <div className="group">
                                    <label htmlFor="user" className="label">Tên tài khoản</label>
                                    <input id="user" style={{ minwidth: '100%'} } type="text" className="input" placeholder="Nhập tên tài khoản của bạn" name="UserName" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <input id="pass" style={{ minwidth: '100%' }}  type="password" className="input" placeholder="Nhập mật khẩu" name="Pass" />
                                </div>
                                <div className="group">
                                    <input id="check" type="checkbox" className="check" name="rem" value="true" />
                                    <label htmlFor="check">
                                        <span className="icon"></span> Keep me Signed in
                                    </label>
                                </div>
                                <div className="group">
                                    <button className="button">Đăng nhập</button>
                                </div>
                                <div className="hr"></div>
                                <div className="foot"> <a href="/forgetpassword">Quên mật khẩu</a> </div>
                                <div className="foot"><a href="/">Về trang chủ</a></div>

                            </div>
                        </form>
                        <form id="Register">
                           

                            <div className="sign-up-form">
                                <div className="group">
                                    <label htmlFor="userSignIn" className="label">Tên tài khoản</label>
                                    <input id="userSignIn" style={{ minwidth: '100%' }}  type="text" className="input" name="UserName" placeholder="Nhập tên tài khoản của bạn" />
                                </div>
                                <div className="group">
                                    <label htmlFor="passSignIn" className="label">Password</label>
                                    <input id="passSignIn" style={{ minwidth: '100%' }}  type="password" className="input" name="Pass" placeholder="Nhập mật khẩu" />
                                </div>
                                <div className="group">
                                    <label htmlFor="rePassSignIn" className="label">Repeat Password</label>
                                    <input id="rePassSignIn" style={{ minwidth: '100%' }}  type="password" name="RePass" className="input" placeholder="Nhập lại mật khẩu" />
                                </div>
                                <div className="group">
                                    <label htmlFor="emailSignIn" className="label">Nhập email của bạn</label>
                                    <input id="emailSignIn" style={{ minwidth: '100%' }}  type="text" name="Email" className="input" placeholder="Nhập mật khẩu" />
                                </div>
                                <p className="text-danger">Nhấn vào đăng ký là bạn đồng ý với điều khoản của chúng tôi.</p>
                                <div className="group">
                                    <button className="button">Đăng ký</button>
                                </div>
                                <div className="hr"></div>
                                <div className="foot"> <a href="/Auth/ForgotPassword">Quên mật khẩu</a> </div>
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
