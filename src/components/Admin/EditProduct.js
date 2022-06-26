import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser';
import isEmpty from "validator/lib/isEmpty"
import swal from 'sweetalert'
import Url from '../Home/URL'

export function EditProduct({ close, logedproduct }) {
    const categoryurl = Url + "/api/Category"
    const updateURL = Url + '/api/Product/Update/'
    const uploadUrl = Url + '/api/Product/Upload'
    const [validationMsg, setValidationMsg] = useState('')
    const [getcategory, setGetCategory] = useState(logedproduct.idCategory)
    const [productName, setProductName] = useState(logedproduct.name)
    const [productPrice, setproductPrice] = useState(logedproduct.price)
    const [productStock, setproductStock] = useState(logedproduct.stock)
    const [category, setCategory] = useState(0)
    let  authAdmin = sessionStorage.getItem('dataAdmin') 
    const validateAll = () => {
        const msg = {}
        if (isEmpty(String(productPrice))) {
            msg.productPrice = "Nhập số tiền"
        }
        if (isEmpty(String(productStock))) {
            msg.productStock = "Nhập số lượng"
        }
        if (isEmpty(productName)) {
            msg.productName = "Nhập tên"
        }
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) { return true }
        else { return false }
    }
    useEffect(() => {
        fetch(categoryurl)
            .then(response => response.json()

            ).then(data => setCategory(data))
    }, [categoryurl])
    let chooseCate
    for (let i = 0; i < category.length; i++) {
        if (category[i].idCategory == logedproduct.idCategory) {
            chooseCate = category[i].categoryName;
        }
    }
    function getCateOption(event) {
        const index = event.target.selectedIndex;
        const el = event.target.childNodes[index]
        const option = el.getAttribute('id');
        console.log(option);
        setGetCategory(option)
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

    function upload(e) {
        let a = new FormData();
        const img = document.querySelector('#imgUp').files[0];
        a.append('file', img)
        const option = {
            method: 'Post',
            body: a,
            headers: {
                'Authorization': "Bearer " + authAdmin,
            }
        }
        fetch(uploadUrl, option)
            .then(response => response.json())
            .then(
                (response) => {
                    document.getElementById('hidden').value = response.imageUrl
                    document.getElementById('imgPreview').src = Url + '/ImageTemp/' + document.getElementById('hidden').value;
                    console.log(document.getElementById('hidden').value);
                }
            )
    }

    function submit(e) {
        e.preventDefault();
        var id = logedproduct.idProduct
        var name = document.getElementById('name').value
        var price = document.getElementById('price').value
        var stock = document.getElementById('stock').value
        var description = document.getElementById('description').value
        var shortDescription = document.getElementById('shortDescription').value
        var imageSrc = document.getElementById('hidden').value
        if (imageSrc == '') {
            imageSrc = logedproduct.imageUrl
        }
        var cate = getcategory
        var valid = validateAll()
        if (!valid) {
            fetch(updateURL + id, {
                method: 'put',
                headers: { 'Content-Type': 'application/json',
                'Authorization': "Bearer " + authAdmin, },
                body: JSON.stringify(
                    {
                        "idCategory": cate,
                        "name": name,
                        "price": price,
                        "stock": stock,
                        "imageUrl": String(imageSrc),
                        "isDelete": false,
                        "description": String(description),
                        "shortDescription": String(shortDescription)
                    }
                )
            })
            .then(res => {
                if (res.status == 200) {
                    swal({
                        title: "Cập nhật sản phẩm mới thành công!!",
                        icon: "success",
                        dangerMode: 'Xác nhận',
                    }).then(dangerMode => {
                        if (dangerMode) {
                            window.location.reload();
                        }
                    })
                }
                else {
                    swal({
                        title: "Xảy ra lỗi khi thực hiện lệnh",
                        icon: "error",
                        dangerMode: 'Xác nhận',
                    }).then(dangerMode => {
                        if (dangerMode) {

                        }
                    })
                }
            })
        }
    }

    if (category) {
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
                    <form id="addform" onSubmit={(e) => submit(e)}>
                        <div className="modal-body">
                            <div className="modal-product-name">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Tên Sản Phẩm
                                </label>
                                <input type="text" className="modal-input" placeholder="Name" id="name" defaultValue={ReactHtmlParser(logedproduct.name)} onChange={onChangeProName} />
                            </div>
                            <div>
                                <h5 style={{ color: 'red' }}>{validationMsg.productName}</h5>
                            </div>
                            <div className="modal-product-price">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Giá Cả
                                </label>
                                <input type="text" className="modal-input" placeholder="Price" id="price" defaultValue={logedproduct.price} onChange={onChangeProPrice} />
                            </div>
                            <div>
                                <h5 style={{ color: 'red' }}>{validationMsg.productPrice}</h5>
                            </div>

                            <div className="modal-product-stock">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Số Lượng
                                </label>
                                <input type="text" className="modal-input" placeholder="Stock" id="stock" defaultValue={logedproduct.stock} onChange={onChangeProStock} />
                            </div>
                            <div>
                                <h5 style={{ color: 'red' }}>{validationMsg.productStock}</h5>
                            </div>
                            <div className="modal-product-description">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Thông Tin Chi Tiết Sản Phẩm
                                </label>
                                <textarea name="productDes2" id='description' cols="80" rows="5" style={{ minWidth: '100%' }} defaultValue={ReactHtmlParser(logedproduct.description)}></textarea>
                            </div>
                            <div className="modal-product-description">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Thông Tin Rút Gọn
                                </label>
                                <textarea name="productDes2" id='shortDescription' cols="80" rows="5" style={{ minWidth: '100%' }} defaultValue={ReactHtmlParser(logedproduct.shortDescription)} ></textarea>
                            </div>
                            <div className="form-group upload-form" id="uploadForm" style={{ marginTop: '20px' }}>
                                <h4>Đổi Ảnh</h4>
                                <input type="file" onChange={(e) => upload(e)} name="imgUp" className="form-control-file" id="imgUp" accept=".jpg, .jpeg, .png" />
                                <input type={'hidden'} id='hidden' />
                                <img style={{ height: '500px', width: '500px' }} id='imgPreview' src={Url + '//Image/' + logedproduct.imageUrl} />
                            </div>
                            <div className="modal-product-categoryOption">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Chọn Danh Mục Cho Sản Phẩm
                                </label>
                                <select name="idCate" defaultValue={chooseCate} className="form-control" style={{ maxWidth: '50%', fontWeight: 'bold', color: '#000' }} onChange={getCateOption} id='selected'>
                                    <option className='cate' defaultValue="selected" style={{ display: 'none ' }} label='Hãy Chọn Danh Mục' />
                                    {category.map(item => {
                                        return (
                                            <option key={item.idCategory} className='cate' id={item.idCategory} >{item.categoryName}</option>
                                        )
                                    }
                                    )}
                                </select>
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
        )
    }
}
