
import React, { useState } from 'react'
import isEmpty from "validator/lib/isEmpty"
import swal from 'sweetalert'

export function AddCategory({ close }) {
    const url = "https://localhost:44380/api/Category/AddCate";
    const [validationMsg, setValidationMsg] = useState('')
    const [cateName, setCateName] = useState('')
    const onChangeCateName = (event) => {
        const value = event.target.value
        setCateName(value)
    }


    const validateAll = () => {
        const msg = {}
        if (isEmpty(cateName)) {
            msg.cateName = "Chi ít cũng nhập cái gì đó vào đi chớ!??"
        }
        console.log(msg)
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) { return true }
        else { return false }
    }


    function submit(e) {
        e.preventDefault();
        var isValid = validateAll()
            if (!isValid) {
                var t = document.getElementById('text-tickets').value
                console.log(t)
                fetch(url, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        String(t)
                    )
                })
            }
    }
    const sweetAlertClick = () => {
        var isValid = validateAll()
            if (!isValid) {
                swal({
                    title: "Thêm danh mục sản phẩm thành công!!",
                    icon: "success",
                    dangerMode: 'Xác nhận',
                }).then(dangerMode => {
                    if (dangerMode) {
                        window.location.reload();
                    }
                })
        }
    }
    return (
        <div className="modalver2" style={{ position: 'fixed', top: '0', bottom: '0', right: '0', left: 0, zIndex: '4' }}>
            <div className="modal-container">
                <div className="closever2">
                    <a style={{ textDecoration: 'none' }} className="close" onClick={close}>
                        &times;
                    </a>
                </div>
                <header className="modal-header">
                    <i className="far fa-edit"></i>
                    Thêm Danh Mục
                </header>
                <form id="addform" onSubmit={(e) => submit(e)}>
                    <div className="modal-body" style={{ maxHeight: '130px' }}>
                        <div className="modal-category-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                <strong>Tên Danh Mục</strong>
                            </label>
                            <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Category's Name" name="categoryName2" style={{ minWidth: '100%' }} onChange={onChangeCateName} />
                            <div>
                                <h5 style={{ color: 'red' }}>{validationMsg.cateName}</h5>
                            </div>
                        </div>
                    </div>
                    <footer className="modal-footer">
                        <button onClick={sweetAlertClick} type='submit' className="buy-tickets save" >
                            <i className="fas fa-check"></i>
                            LƯU
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    )
}
