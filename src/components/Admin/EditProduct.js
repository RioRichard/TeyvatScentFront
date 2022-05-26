import React, { useState, useEffect } from 'react'
import { AddOptionCate } from './AddOptionCate'
export function EditProduct({ close }) {
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
                    Sửa Thông Tin Sản Phẩm
                </header>
                <form id="addform">
                    <div className="modal-body">
                        <div className="modal-product-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                Tên Sản Phẩm
                            </label>
                            <input type="text" className="modal-input" placeholder="Name" name="productName2" />
                        </div>
                        <div className="modal-product-price">
                            <label htmlFor="text-tickets" className="modal-label">
                                Giá Cả
                            </label>
                            <input type="text" className="modal-input" placeholder="Price" name="productPrice2" />
                        </div>

                        <div className="modal-product-stock">
                            <label htmlFor="text-tickets" className="modal-label">
                                Số Lượng
                            </label>
                            <input type="text" className="modal-input" placeholder="Stock" name="productStock2" />
                        </div>
                        <div className="modal-product-description">
                            <label htmlFor="text-tickets" className="modal-label">
                                Thông Tin Chi Tiết Sản Phẩm
                            </label>
                            <textarea name="productDes2" cols="80" rows="5" style={{ minWidth: '100%' }}></textarea>
                        </div>


                        <div className="form-group upload-form" id="uploadForm" style={{ marginTop: '20px' }}>
                            <h4>Đổi ảnh</h4>
                            <input type="file" name="imgUp" className="form-control-file" id="imgUp" accept=".jpg, .jpeg, .png" />
                        </div>
                        <AddOptionCate></AddOptionCate>
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
    )
}
