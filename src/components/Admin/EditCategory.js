
import React, { useState, useEffect } from 'react'
export function EditCategory({ close, logedcategory }){

    var Id=logedcategory.idCategory
    // console.log(id)
    const url="https://localhost:44380/api/Category/UpdateCate/"+Id;
    // const url="https://localhost:44380/api/Category/UpdateCate?id="+id+"&";
    console.log(url)
    const [data,setData]=useState({
        Name:""
    })
    function submit(e){
        e.preventDefault();
        var t= document.getElementById('text-tickets').value
        console.log(t)
        console.log(Id);
        // var finalUrl=url+'Name='+t;
        // console.log(url);
        fetch(url,{
            method:'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "userName": "string",
                "pass": "string"
              })
        })
        .then(response=>console.log(response))
    }
    return(
        <div className="modalver2" style={{ position: 'fixed', top: '0', bottom: '0', right: '0', left: 0, zIndex: '4' }}>
                    <div className="modal-container">
                        <div className="closever2">
                        <a className="close" onClick={close}>
                        &times;
                      </a>
                        </div>
                        <header className="modal-header">
                            <i className="far fa-edit"></i>
                            Sửa Danh Mục
                        </header>
                        <form id="addform" onSubmit={(e) => submit(e)}>
                            <div className="modal-body" style={{ maxHeight: '100px' }}>

                                <div className="modal-category-name">
                                    <label htmlFor="text-tickets" className="modal-label">
                                        <strong>Tên Danh Mục</strong>
                                    </label>
                                    <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Category's Name" name="categoryName2" style={{minWidth:'100%'}} defaultValue={logedcategory.categoryName}/>
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
