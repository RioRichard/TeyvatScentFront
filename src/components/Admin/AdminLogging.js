import React from 'react';
import '../Content/CSS/StyleSheet.css';
import background from '../Content/Image/img1.jpg'
import Url from '../Home/URL'

export function AdminLogging()
{
    const loginUrl = Url + "/api/Authentication/AdminLogin"
    function login(log) {
        log.preventDefault();
        var user = document.getElementById('user').value;
        var pass = document.getElementById('pass').value;
        console.log(user)
        fetch(loginUrl, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "userName": user,
                    "pass": pass,
                    "urlFrontEnd" : ""
                }
            )
        })
        .then(res=> console.log(res))
        // .then((data)=>{
        //     alert(data.msg)
        //     sessionStorage.setItem("user", user)
        //     sessionStorage.setItem("dataAdmin", data.data)
        //     if(data.success===true)
        //     {
        //         window.location.href="/"
        //     }
        // })
        
    }
    return(
        <div className="Ohayou"  style={{paddingTop:'100px', paddingBottom:'100px' ,backgroundImage: `url(${background})`, backgroundSize:'cover', height:'100%'  }}>
            <div className="login-box ">
                <div className="login-snip">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                    <label htmlFor="tab-1" style={{marginLeft:'160px'}} className="tab">Đăng nhập</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label htmlFor="tab-2" className="tab"></label>
                    <div className="login-space">
                        <form id="log" onSubmit={(log) => login(log)} >
                            <div className="login">
                                <div className="group">
                                    <label  className="label">Tên tài khoản</label>
                                    <input id="user" style={{ minWidth: '100%' }} type="text" className="input" placeholder="Nhập tên tài khoản của bạn"  />
                                </div>
                                <div className="group">
                                    <label  className="label">Password</label>
                                    <input id="pass" style={{ minWidth: '100%' }} type="password" className="input" placeholder="Nhập mật khẩu"  />
                                </div>
                                <div className="group">
                                    <input id="check" type="checkbox" className="check"   />
                                    <label htmlFor="check">
                                        <span className="icon"></span> Keep me Signed in
                                    </label>
                                </div>
                                <div className="group">
                                    <button className="button">Đăng nhập</button>
                                </div>
                                <div className="hr"></div>
                                <div className="foot"><a href="/">Về trang chủ</a></div>
                            </div>
                        </form>
                        <form id="Register" >

                            <div className="sign-up-form">
                                <div className="group">
                                    <label htmlFor="userSignIn" className="label">Tên tài khoản</label>
                                    <input id="userSignIn" style={{ minWidth: '100%' }} type="text" className="input" name="UserName" placeholder="Nhập tên tài khoản của bạn" />
                                </div>
                                <div className="group">
                                    <label htmlFor="passSignIn" className="label">Password</label>
                                    <input id="passSignIn" style={{ minWidth: '100%' }} type="password" className="input" name="Pass" placeholder="Nhập mật khẩu" />
                                </div>
                                <div className="group">
                                    <label htmlFor="rePassSignIn" className="label">Repeat Password</label>
                                    <input id="rePassSignIn" style={{ minWidth: '100%' }} type="password" name="RePass" className="input" placeholder="Nhập lại mật khẩu" />
                                </div>
                                <div className="group">
                                    <label htmlFor="emailSignIn" className="label">Nhập email của bạn</label>
                                    <input id="emailSignIn" style={{ minWidth: '100%' }} type="text" name="Email" className="input" placeholder="Nhập mật khẩu" />
                                </div>
                                <p className="text-danger">Nhấn vào đăng ký là bạn đồng ý với điều khoản của chúng tôi.</p>
                                <div className="group">
                                    <button className="button">Đăng ký</button>
                                </div>
                                <div className="hr"></div>
                                <div className="foot"> <a href="/forgetpassword">Quên mật khẩu</a> </div>
                                <div className="foot"><a href="/">Về trang chủ</a></div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}