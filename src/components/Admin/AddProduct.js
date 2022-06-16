import React, { useState, useEffect } from 'react'
import isEmpty from "validator/lib/isEmpty"
import swal from 'sweetalert'
export function AddProduct({ close }) {
    const url = "https://localhost:44380/api/Product/AddProduct";
    const categoryurl = "https://localhost:44380/api/Category"
    const uploadUrl = 'https://localhost:44380/api/Product/Upload'
    const [category, setCategory] = useState(0)
    const [validationMsg, setValidationMsg] = useState('')
    const [getcategory, setGetCategory] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setproductPrice] = useState('')
    const [productStock, setproductStock] = useState('')
    const validateAll = () => {
        const msg = {}
        if (isEmpty(getcategory)) {
            msg.getcategory = "Chọn danh mục"
        }
        if (isEmpty(productPrice)) {
            msg.productPrice = "Nhập số tiền"
        }
        if (isEmpty(productStock)) {
            msg.productStock = "Nhập số lượng"
        }
        if (isEmpty(productName)) {
            msg.productName = "Nhập tên"
        }
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) { return true }
        else { return false }
    }
    function upload(e) {
            let a = new FormData();
            const img = document.querySelector('#imgUp').files[0];
            a.append('file', img)
            const option = {
                method: 'Post',
                body: a
            }
            fetch(uploadUrl, option)
                .then(response => response.json())
                .then(
                    (response) => {
                        document.getElementById('hidden').value = response.imageUrl
                        document.getElementById('imgPreview').src = 'https://localhost:44380/ImageTemp/' + document.getElementById('hidden').value;
                        console.log(document.getElementById('hidden').value);
                    }
                )
    }
    function submit(e) {
        e.preventDefault();
        var name = document.getElementById('name').value
        var price = document.getElementById('price').value
        var stock = document.getElementById('stock').value
        var description = document.getElementById('description').value
        var shortDescription = document.getElementById('shortDescription').value
        var imageSrc = document.getElementById('hidden').value
        if(imageSrc == '')
        {
            imageSrc = 'defaultPic.jpg'
        }
        var cate = getcategory
        console.log(cate);
        var valid = validateAll()
        if(!valid){
            fetch(url, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        "idCategory": 1,
                        "name": name,
                        "price": price,
                        "stock": stock,
                        "imageUrl": String(imageSrc),
                        "isDelete": false,
                        // "description": String(description),
                        "description": description,
                        // "shortDescription": shortDescription
                        "shortDescription": "nhu qq"
                    }
                )
            })
            .then(res => {
                if(res.status == 200)
                {swal({
                    title: "Thêm sản phẩm mới thành công!!",
                    icon: "success",
                    dangerMode: 'Xác nhận',
                }).then(dangerMode => {
                    if (dangerMode) {
                        window.location.reload();
                    }
                })}
                else{
                    swal({
                        title: "Xảy ra lỗi khi thực hiện lệnh",
                        icon: "error",
                        dangerMode: 'Xác nhận',
                    }).then(dangerMode => {
                        if (dangerMode) {
                            window.location.reload();
                        }
                    })
                }
            })
        }
    }
    useEffect(() => {
        fetch(categoryurl)
            .then(response => response.json()

            ).then(data => setCategory(data))
    }, [categoryurl])
    function getCateOption(event) {
        const index = event.target.selectedIndex;
        const el = event.target.childNodes[index]
        const option = el.getAttribute('id');
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
                            <div className="modal-product-description">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Thông Tin Rút Gọn
                                </label>
                                <textarea name="productDes2" id='shortDescription' cols="80" rows="5" style={{ minWidth: '100%' }}></textarea>
                            </div>
                            <div className="form-group upload-form" id="uploadForm" style={{ marginTop: '20px' }}>
                                <h4>Thêm ảnh</h4>
                                <input type="file" onChange={(e) => upload(e)} name="imgUp" className="form-control-file" id="imgUp" accept=".jpg, .jpeg, .png" />
                                <input type={'hidden'} id='hidden' />
                                <img style={{height:'500px', width:'500px'}} id='imgPreview' />
                            </div>
                            <div className="modal-product-categoryOption">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Chọn Danh Mục Cho Sản Phẩm
                                </label>
                                <select name="idCate" className="form-control" defaultValue="" style={{ maxWidth: '50%', fontWeight: 'bold', color: '#000' }} onChange={getCateOption}>
                                    <option className='cate' defaultValue="selected" style={{ display: 'none ' }} label='Hãy Chọn Danh Mục' />
                                    {category.map(item => {
                                        return (
                                            <option key={item.idCategory} className='cate' id={item.idCategory} >{item.categoryName}</option>
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