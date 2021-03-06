import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Url from '../Home/URL'
export function AdminEmailComfirmed()  {
    let token = useParams()
    console.log(token.token)
    const url = Url + `/api/Authentication/ConfirmAdmin/` + token.token
    useEffect(() => {
    fetch(url , {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
           String('https://localhost:3000/admincomfirm/')
        )
    })
    .then(res => console.log(res))
},[url])
        return (
            <div style={{marginTop: '100px'}}>
                <div id="layoutError_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="text-center mt-4">
                                        <h3>Xác nhận email thành công</h3>
                                        <p>Email của bạn đã được xác thực thành công</p>
                                        <p>Nhấp vào link dưới đây để tiến hành đăng nhập</p>
                                        <a href="/adminlogin">
                                            <i className="fas fa-arrow-left mr-1"></i>
                                            ĐĂNG NHẬP
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
