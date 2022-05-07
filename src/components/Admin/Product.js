import React, { Component } from 'react';
// import $ from 'jquery';
export function Product() {
    return (
        <div className='wrapper'>
            <div>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">DANH MỤC</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                            <li className="breadcrumb-item active">DANH MỤC</li>
                        </ol>

                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark" style={{color:'white'}}>
                                    <tr>

                                    <td>Tên Sản Phẩm</td>
                                    <td>Giá</td>
                                    <td>Số Lượng</td>
                                    <td>Hình Ảnh</td>
                                    <td>Sửa Thông Tin Sản Phẩm</td>
                                    <td>Xóa Thông Tin Sản Phẩm</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* @foreach (var item in Model)
                                    {
                                        <tr>

                                            <td>
                                                <p><h5 className="categorye-name" style="color:black">@item.CategoryName</h5></p>
                                            </td>
                                            <td>
                                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style="margin-top: 0px !important">
                                                    <button className="btn btn-primary btn-editcategory" ctgrName="@item.CategoryName"
                                                        ctgrID="@item.IDCategory">
                                                        SỬA
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style="margin-top:0px !important">
                                                    <button className="btn btn-primary" name="delete" ctgrID2="@item.IDCategory">XÓA</button>
                                                </div>
                                            </td>
                                        </tr>
                                    } */}
                                </tbody>
                            </table>
                            <div className="form-group">
                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <button className="btn btn-primary btn-addcategory">Thêm Sản Phẩm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="modalver2" style={{zIndex:'4'}}>
                <div className="modal-container">
                    <div className="closever2">
                        <i className="fas fa-times-circle"></i>
                    </div>
                    <header className="modal-header">
                        <i className="far fa-edit"></i>
                        Thêm Danh Mục
                    </header>
                    <form id="addform">
                        <div className="modal-body" style={{maxHeight:'300px'}}>

                            <div className="modal-category-name">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Tên Danh Mục
                                </label>
                                <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Category's Name" name="categoryName2" />
                            </div>
                        </div>

                        <footer className="modal-footer">
                            <button className="buy-tickets save">
                                <i className="fas fa-check"></i>
                                LƯU
                            </button>
                        </footer>
                    </form>
                </div>
            </div>
            <div className="modal">
                <div className="modal-container">
                    <div className="close">
                        <i className="fas fa-times-circle"></i>
                    </div>
                    <header className="modal-header">
                        <i className="far fa-edit"></i>
                        Sửa Thông Tin
                    </header>
                    <form id="editform">
                        <div className="modal-body" style={{maxHeight:'400px'}}>

                            <div className="modal-category-name">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Tên Danh Mục
                                </label>
                                <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Category's Name" name="categoryName" />
                                <input type="hidden" name="IdCate" />
                            </div>

                        </div>
                        <footer className="modal-footer">
                            <button className="buy-tickets save">
                                <i className="fas fa-check"></i>
                                LƯU THAY ĐỔI
                            </button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    );
}