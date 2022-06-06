import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'; 

export function EditProduct({ close , logedproduct }) {
    const categoryurl = "https://localhost:44380/api/Category"
    const [category, setCategory] = useState(0)
    useEffect(() => {
        fetch(categoryurl)
            .then(response => response.json()

            ).then(data => setCategory(data))
    }, [categoryurl])

    const getCateOption = (event) => {
        event.preventDefault();
        const CateOption = event.target.value;
        console.log(CateOption);
    };
   if(category)
   {
    return (
        <div className="modalver2" style={{ position: 'fixed', top: '0', bottom: '0', right: '0', left: 0, zIndex: '4' ,marginTop: '-100px'}}>
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
                            <input type="text" className="modal-input" placeholder="Name" name="productName2" defaultValue={ReactHtmlParser(logedproduct.name)}/>
                        </div>
                        <div className="modal-product-price">
                            <label htmlFor="text-tickets" className="modal-label">
                                Giá Cả
                            </label>
                            <input type="text" className="modal-input" placeholder="Price" name="productPrice2" defaultValue={logedproduct.price}/>
                        </div>

                        <div className="modal-product-stock">
                            <label htmlFor="text-tickets" className="modal-label">
                                Số Lượng
                            </label>
                            <input type="text" className="modal-input" placeholder="Stock" name="productStock2" defaultValue={logedproduct.stock}/>
                        </div>
                        <div className="modal-product-description">
                            <label htmlFor="text-tickets" className="modal-label">
                                Thông Tin Chi Tiết Sản Phẩm
                            </label>
                            <textarea name="productDes2" cols="80" rows="5" style={{ minWidth: '100%' }} defaultValue={ReactHtmlParser(logedproduct.description)} />  
                        </div>
                        <div className="form-group upload-form" id="uploadForm" style={{ marginTop: '20px' }}>
                            <h4>Đổi ảnh</h4>
                            <input type="file" name="imgUp" className="form-control-file" id="imgUp" accept=".jpg, .jpeg, .png" />
                        </div>
                        <div className="modal-product-categoryOption">
                        <label htmlFor="text-tickets" className="modal-label">
                            Chọn Danh Mục Cho Sản Phẩm
                        </label>
                        <select name="idCate" id="" className="form-control" style={{ maxWidth: '50%' }} onChange={getCateOption}>
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
                            LƯU THAY ĐỔI
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    )
   }
}
