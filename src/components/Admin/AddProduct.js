import React, { useState, useEffect } from 'react'
export function AddProduct({ close }) {
    const url = "https://localhost:44380/api/Product/AddProduct";
    const uploadUrl = 'https://localhost:44380/api/Product/Upload';
    const categoryurl = "https://localhost:44380/api/Category"
    const [category, setCategory] = useState(0)
    const [getcategory, setGetCategory] = useState('')

    let imageSrc;
    function upload(e) {
        e.preventDefault();
        let a = new FormData();
        const img = document.querySelector('#imgUp').files[0];
        console.log(img);
        a.append('file', img)
        const option = {
            method: 'Post',
            body: a
        }
        fetch(uploadUrl, option)
            .then(response => response.json())
            .then(
                (response) => {
                    imageSrc = response.imageUrl
                    document.getElementById('imgPreview').src = 'https://localhost:44380/ImageTemp/' + imageSrc;
                    console.log(imageSrc);
                }
            )
    }
    function submit(e) {
        e.preventDefault();
        var name = document.getElementById('name').value
        var price = document.getElementById('price').value
        var stock = document.getElementById('stock').value
        var description = document.getElementById('description').value
        var shortDescription =document.getElementById('shortDescription').value
        console.log(getcategory);
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
                    "description": String(description),
                    "shortDescription": shortDescription
                }
            )
        })
            // .then(window.location.reload())
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
                            <div className="modal-product-description">
                                <label htmlFor="text-tickets" className="modal-label">
                                    Thông Tin Rút Gọn
                                </label>
                                <textarea name="productDes2" id='shortDescription' cols="80" rows="5" style={{ minWidth: '100%' }}></textarea>
                            </div>

                            <div className="form-group upload-form" id="uploadForm" style={{ marginTop: '20px' }}>
                                <h4>Thêm ảnh</h4>
                                <input type="file" onChange={(e) => upload(e)} name="imgUp" className="form-control-file" id="imgUp" accept=".jpg, .jpeg, .png" />
                                <img scr="" id='imgPreview' />
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

}
