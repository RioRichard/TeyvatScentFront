import React, { Component } from 'react';
// import $ from 'jquery';
export function Attribute() {
    return (
        <div className='wrapper'>
            <div>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">THUỘC TÍNH</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                            <li className="breadcrumb-item active">THUỘC TÍNH</li>
                        </ol>

                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark" style={{ color: 'white' }}>
                                    <tr>

                                        <td>Tên Thuộc Tính</td>
                                        <td>Sửa Thuộc Tính</td>
                                        <td>Xóa Thuộc Tính</td>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* @foreach (var item in Model)
                                    {

                                        <tr>

                                            <td>
                                                <p><h5 className="Attribute-id" style="color:black">@item.AttributeName</h5></p>
                                            </td>
                                            <td>
                                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style="margin-top:0px !important">
                                                    <button className="btn btn-primary btn-editattribute" href="#" attrName="@item.AttributeName"
                                                        attrID="@item.IDAttribute"
                                                        isdel="@item.IsDelete">
                                                        SỬA
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style="margin-top:0px !important">
                                                    <button className="btn btn-primary" attrID2="@item.IDAttribute" name="delete">XÓA</button>
                                                </div>
                                            </td>
                                        </tr>
                                    } */}


                                </tbody>
                            </table>
                            <div className="form-group">
                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <button className="btn btn-primary btn-addattribute" href="#">Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="modalver2">
                <div className="modal-container">
                    <div className="closever2">
                        <i className="fas fa-times-circle"></i>
                    </div>
                    <header className="modal-header">
                        <i className="far fa-edit"></i>
                        Thêm Thuộc Tính
                    </header>
                    <form id="addform">
                        <div className="modal-body" style={{ maxHeight: '150px' }}>

                            <div className="modal-attribute-name">
                                <label htmlFor='text-tickets' className="modal-label">
                                    Tên Thuộc Tính
                                </label>
                                <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Attribute's Name" name="attributeName2" />
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
                        Sửa Đổi Thuộc Tính
                    </header>
                    <form id="editform">
                        <div className="modal-body" style={{ maxHeight: '150px' }}>

                            <div className="modal-attribute-name">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Tên Thuộc Tính
                                </label>
                                <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Attribute's Name" name="attributeName" />
                                <input type="hidden" name="attrId" />
                            </div>


                        </div>

                        <footer className="modal-footer">
                            <button className="buy-tickets save" type="submit">
                                <i className="fas fa-check"></i>
                                LƯU THAY ĐỔI
                            </button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    );
    // const editBtns = document.querySelectorAll('.btn-editattribute');
    // const addBtns = document.querySelectorAll('.btn-addattribute');
    // const modal = document.getElementById('modal')
    // const modalver2 = document.querySelector('.modalver2');
    // const modalClose = document.querySelector('.close');
    // const modalver2close = document.querySelector('.closever2');
    // function showEdit() {
    //     var attrID = $(this).attr("attrID");
    //     var attrName = $(this).attr("attrName");
    //     modal.classList.add('open')
    //     $("input[name='attributeName']").val(attrName);
    //     $("input[name='attrId']").val(attrID);

    //     $('#editform').validate({
    //         rules: {


    //             attributeName: {
    //                 required: true,
    //                 minlength: 2,
    //                 maxlength: 256,
    //             },
    //         },
    //         messages: {
    //             attributeName: {
    //                 required: "Vui lòng nhập tên thuộc tính",
    //                 minlength: "Ít nhất nhập 2 kí tự",
    //                 maxlength: "Nhập nhiều nhất 256 kí tự",
    //             },

    //         },
    //         submitHandler: function (form) {

    //             $.ajax({
    //                 type: "POST",
    //                 url: "/admin/editattribute",
    //                 data: $(form).serialize(),
    //                 dataType: "json",

    //                 success: function (response) {
    //                     if (response == false) {
    //                         alert("Sửa thuộc tính không thành công");
    //                     }
    //                     else {
    //                         alert("Sửa thuộc tính thành công.");
    //                         window.location.href = window.location.href;
    //                     }


    //                 }
    //             });
    //         }
    //     })
    //     function closeEdit() {
    //         modal.classList.remove('open')
    //     }
    //     function showAdd() {
    //         modalver2.classList.add('open');

    //         $('#addform').validate({
    //             rules: {
    //                 attributeName2: {
    //                     required: true,
    //                     minlength: 2,
    //                     maxlength: 256,
    //                 },
    //             },
    //             messages: {
    //                 attributeName2: {
    //                     required: "Vui lòng nhập tên thuộc tính",
    //                     minlength: "Ít nhất nhập 2 kí tự",
    //                     maxlength: "Nhập nhiều nhất 256 kí tự",
    //                 },

    //             },
    //             submitHandler: function (form) {

    //                 $.ajax({
    //                     type: "POST",
    //                     url: "/admin/AddAttribute",
    //                     data: $(form).serialize(),
    //                     dataType: "json",

    //                     success: function (response) {
    //                         if (response == false) {
    //                             alert("Thêm thuộc tính không thành công");
    //                         }
    //                         else {
    //                             alert("Thêm thuộc tính thành công.");
    //                             window.location.href = window.location.href;
    //                         }
    //                     }
    //                 });
    //             }
    //         })
    //     }
    //     function closeAdd() {
    //         modalver2.classList.remove('open')
    //     }
    //     modalver2close.addEventListener('click', closeAdd)
    //     for (const editBtn of editBtns) {
    //         editBtn.addEventListener('click', showEdit)
    //     }
    //     for (const addBtn of addBtns) {
    //         addBtn.addEventListener('click', showAdd)
    //     }
    // }
}