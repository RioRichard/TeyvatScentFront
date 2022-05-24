import React from 'react';
import '../Content/CSS/Button.css'
// import $ from 'jquery';
export function Address() {
    return (
        <div className='wrapper'>
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">ĐỊA CHỈ</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="/admin">Tải khoản</a></li>

                        <li className="breadcrumb-item active">Địa chỉ</li>
                    </ol>
                    <div className="card-body container-fluid">
                        <form>
                            <table className="table table-bordered">
                                <thead>
                                    <tr className="table-header" style={{backgroundColor:"lavender"}}>
                                        <td className="col-4">Địa chỉ</td>
                                        <td className="col-3">Số điện thoại</td>
                                        <td>Người nhận</td>
                                        <td>Địa chỉ mặc định</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-body">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            {/* <input name="IsDefault" checked type="radio" value="true" addid="@item.IDAddress" /> */}
                                            {/* @if (item.IsDefault==true)
                                    {
                                        
                                    }
                                    else
                                    {
                                        <input name="IsDefault" type="radio" value="true" addid="@item.IDAddress" />
                                    } */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                <button className="btn btn-primary btn-edit" modal="0">Thêm địa chỉ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}