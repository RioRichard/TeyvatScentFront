
import React, { useState, useEffect } from 'react'
export function AddCategory({ close }){
    const url="https://localhost:44380/api/Category/AddCate?Name=";
    const [data,setData]=useState({
        Name:""
    })
    function submit(e){
        e.preventDefault();
        var t= document.getElementById('text-tickets').value
        console.log(t)
        fetch(url+t,{
            method:'POST',
        })
        .then(window.location.href=window.location.href)
    }
    return(
        <div className="modalver2" style={{ position: 'fixed', top: '0', bottom: '0', right: '0', left: 0, zIndex: '4' }}>
                    <div className="modal-container">
                        <div className="closever2">
                        <a style={{textDecoration:'none'}} className="close" onClick={close}>
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
                                    <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Category's Name" name="categoryName2" style={{minWidth:'100%'}}/>
                                </div>
                            </div>

                            <footer className="modal-footer">
                                <button type='submit' className="buy-tickets save">
                                    <i className="fas fa-check"></i>
                                    LƯU
                                </button>
                            </footer>
                        </form>
                    </div>
                </div>
    )
}
