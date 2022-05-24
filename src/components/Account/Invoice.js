import React, { Component } from 'react';
import '../Content/CSS/Button.css'
// import $ from 'jquery';
export function Invoice() {
    return (
        <div className='wrapper'>
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4" style={{textTransform:'uppercase'}}>Đơn hàng của bạn</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                        <li className="breadcrumb-item active">Đơn hàng của bạn</li>
                    </ol>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <td>Số hoá đơn</td>
                                <td>Tình trạng</td>
                                <td>Địa chỉ nhận</td>
                                <td>Người nhận</td>
                                <td>Số điện thoại</td>
                                <td>Tổng số tiền</td>
                                <td>Chi tiết hoá đơn</td>




                            </tr>
                        </thead>
                        <tbody>
                            <tr className="product_tr">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    {/* @item.Total.ToString("#,##0") VNĐ */}
                                </td>
                                <td><button name="detail" className="btn btn-outline-danger btn-edit" Incid="@item.IDInvoice" type="button">Chi tiết</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}