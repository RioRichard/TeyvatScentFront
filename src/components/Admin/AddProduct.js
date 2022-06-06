import React, { useState, useEffect } from 'react'
import isEmpty from "validator/lib/isEmpty"
import swal from 'sweetalert'
export function AddProduct({ close }) {
    const url = "https://localhost:44380/api/Product/AddProduct";
    const categoryurl = "https://localhost:44380/api/Category"
    const [category, setCategory] = useState(0)
    const [validationMsg, setValidationMsg] = useState('')
    const [getcategory, setGetCategory] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setproductPrice] = useState('')
    const [productStock, setproductStock] = useState('')
    function submit(e) {
        e.preventDefault();
        var name = document.getElementById('name').value
        var price = document.getElementById('price').value
        var stock = document.getElementById('stock').value
        var description = document.getElementById('description').value
        console.log(name);
        var isValid = validateAll()
        if (!isValid) {
            fetch(url, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        "idCategory": getcategory,
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
            // swal({
            //     title: "Thêm sản phẩm mới thành công!!",
            //     icon: "success",
            //     dangerMode: 'Xác nhận',
            // }).then(dangerMode => {
            //     if (dangerMode) {
            //         window.location.reload();
            //     }
            // })
        }
    }
    useEffect(() => {
        fetch(categoryurl)
            .then(response => response.json()

            ).then(data => setCategory(data))
    }, [categoryurl])
    const getCateOption = (event) => {
        event.preventDefault();
        setGetCategory(event.target.value)
        console.log(getcategory);
    };
    const onChangeProName = (event) => {
        const value = event.target.value
        setProductName(value)
    }
    const onChangeProPrice = (event) => {
        const value = event.target.value
        setproductPrice(value)
    }
    const onChangeProStock = (event) => {
        const value = event.target.value
        setproductStock(value)
    }

    const validateAll = () => {
        const msg = {}
        if (isEmpty(getcategory)) {
            msg.getcategory = "Hãy chọn 1 Danh mục cho sản phẩm"
        }
        if (isEmpty(productPrice)) {
            msg.productPrice = "Thiếu tiền rồi sao bán"
        }
        if (isEmpty(productStock)) {
            msg.productStock = "Xin 1 con số"
        }
        if (isEmpty(productName)) {
            msg.productName = "Gọi là VÔ DANH nhá"
        }
        console.log(msg)
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) { return true }
        else { return false }
    }
    if (category) {
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
                                <input type="text" className="modal-input" id='name' placeholder="Name" name="productName2" onChange={onChangeProName} />
                                <div>
                                    <h5 style={{ color: 'red' }}>{validationMsg.productName}</h5>
                                </div>
                            </div>
                            <div className="modal-product-price">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Giá Cả
                                </label>
                                <input type="text" className="modal-input" id='price' placeholder="Price" name="productPrice2" onChange={onChangeProPrice} />
                                <div>
                                    <h5 style={{ color: 'red' }}>{validationMsg.productPrice}</h5>
                                </div>
                            </div>
                            <div className="modal-product-stock">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Số Lượng
                                </label>
                                <input type="text" className="modal-input" id='stock' placeholder="Stock" name="productStock2" onChange={onChangeProStock} />
                                <div>
                                    <h5 style={{ color: 'red' }}>{validationMsg.productStock}</h5>
                                </div>
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
                            <div className="modal-product-categoryOption">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Chọn Danh Mục Cho Sản Phẩm
                                </label>
                                <select name="idCate" id="" className="form-control" value={category} style={{ maxWidth: '50%' }} onChange={getCateOption}>
                                    {category.map(item => {
                                        return (
                                            <option key={item.idCategory} defaultValue={item.idCategory}>{item.categoryName}</option>
                                        )
                                    }
                                    )}
                                </select>
                                <div>
                                    <h5 style={{ color: 'red' }}>{validationMsg.getcategory}</h5>
                                </div>
                            </div>
                        </div>
                        <footer className="modal-footer">
                            <button className="buy-tickets save">
                                LƯU
                            </button>
                        </footer>
                    </form>
                </div>
            </div>
        )
    }
}
