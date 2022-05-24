import React, { Component } from 'react';
import '../Content/CSS/Button.css'
// import $ from 'jquery';
export function Cart() {
    return (
        <div className='wrapper'>
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">GIỎ HÀNG CỦA BẠN</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                        <li className="breadcrumb-item active">Giỏ hàng của bạn</li>
                    </ol>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <td>Tên sản phẩm</td>
                                <td>Hình ảnh</td>
                                <td>Giá tiền</td>
                                <td>Sô lượng</td>
                                <td>Tổng số tiền</td>
                                <td>Tình trạng sản phẩm</td>
                                <td>Xoá sản phẩm</td>


                            </tr>
                        </thead>
                        <tbody>
                            <tr className="product_tr">
                                <td></td>
                                <td><img src="~/Content/Image/@item.UrlImage" alt="@Html.Raw(item.ProductName)" width="150" height="150" /></td>
                                <td>
                                    <div style={{display:'none'}} className="unitprice" val="@item.PaymentPrice"></div>
                                </td>


                                <td><input type="number" className="quantity" name="quantity" value="@item.Quantity" cid="@item.IDCart" pid="@item.IDProduct" min="0" required /></td>
                                <td><div className="totalItem"></div></td>
                                <td>
                                    {/* @if (item.Stock <= 0)
                        {
                            <p className="text-danger">Hết hàng</p>
                        }
                        else
                        {
                            <p className="text-primary">Còn hàng</p>

                        } */}

                                </td>
                                <td><button name="delete" className="btn btn-outline-danger" cid="@item.IDCart" pid="@item.IDProduct"> Xóa<i className="fas fa-trash"></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                        <p>Tổng cộng: <b className="total"></b></p>
                    </div>
                    <div className="d-flex justify-content-end" style={{marginBottom:'10px', marginTop:'10px'}}>
                        <button className="btn btn-primary btn-edit" type="button">Chỉnh địa chỉ.</button>
                    </div>
                    <div className="d-flex justify-content-end">
                        <input type="hidden" name="addressCount" value="@ViewBag.AddressCount" />



                        <a href="/" className="btn btn-outline-primary">Tiếp tục mua sắm</a>

                        <button name="charge" type="button" className="btn btn-danger" style={{marginLeft:'20px'}}>Thanh toán!</button>
                    </div>

                </div>
            </main >
        </div >
    );
}