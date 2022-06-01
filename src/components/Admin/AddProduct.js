import React, { useState} from 'react'
import { AddOptionCate } from './AddOptionCate'
export function AddProduct({ close }) {
    const url = "https://localhost:44380/api/Product/AddProduct";
    function submit(e) {
        e.preventDefault();
        // var isValid = validateAll()
        // {if(!isValid){

        var name = document.getElementById('name').value
        var price = document.getElementById('price').value
        var stock = document.getElementById('stock').value
        var description = document.getElementById('description').value
        console.log(name);
        // var isValid = validateAll()

        fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "idCategory": 1,
                    "name": name,
                    "price": price,
                    "stock": stock,
                    "imageUrl": "image",
                    "isDelete": true,
                    "description": String(description),
                    "shortDescription": "string"
                }
            )
        })
            .then(window.location.href = window.location.href)
    }
    // }

    return (
        <div className="modalver2" style={{ position: 'fixed', top: '0', bottom: '0', right: '0', left: 0, zIndex: '4', marginTop: '-100px' }}>
            <div className="modal-container">
                <div className="closever2">
                    <a style={{ textDecoration: 'none' }} className="close" onClick={close}>
                        &times;
                    </a>
                </div>
                <header className="modal-header">
                    <i className="far fa-edit"></i>
                    Thêm Sản Phẩm
                </header>
                <form id="addform" onSubmit={(e) => submit(e)}>
                    <div className="modal-body">
                        <div className="modal-product-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                Tên Sản Phẩm
                            </label>
                            <input type="text" className="modal-input" id='name' placeholder="Name" name="productName2" />
                        </div>
                        <div className="modal-product-price">
                            <label htmlFor="text-tickets" className="modal-label">
                                Giá Cả
                            </label>
                            <input type="text" className="modal-input" id='price' placeholder="Price" name="productPrice2" />
                        </div>

                        <div className="modal-product-stock">
                            <label htmlFor="text-tickets" className="modal-label">
                                Số Lượng
                            </label>
                            <input type="text" className="modal-input" id='stock' placeholder="Stock" name="productStock2" />
                        </div>
                        <div className="modal-product-description">
                            <label htmlFor="text-tickets" className="modal-label">
                                Thông Tin Chi Tiết Sản Phẩm
                            </label>
                            <textarea name="productDes2" id='description' cols="80" rows="5" style={{ minWidth: '100%' }}></textarea>
                        </div>


                        <div className="form-group upload-form" id="uploadForm" style={{ marginTop: '20px' }}>
                            <h4>Thêm ảnh</h4>
                            <input type="file" name="imgUp" className="form-control-file" id="imgUp" accept=".jpg, .jpeg, .png" />
                        </div>
                        <div>
                            <AddOptionCate></AddOptionCate>
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
    )
}
