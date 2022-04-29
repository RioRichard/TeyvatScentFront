import React, { Component } from 'react';

export class EmailComfirmed extends Component {
    static displayName = EmailComfirmed.name;

    render() {
        return (
            <div id="layoutError" style={{marginTop: '100px'}}>
                <div id="layoutError_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="text-center mt-4">
                                        <h3>Xác nhận email thành công</h3>
                                        <p>Email của bạn đã được xác thực thành công</p>
                                        <p>Nhấn vào link dưới nếu trang không tự chuyển về trang chủ sau 5 giây</p>

                                        <a href="/">
                                            <i className="fas fa-arrow-left mr-1"></i>
                                            Quay lại trang chủ
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
}
