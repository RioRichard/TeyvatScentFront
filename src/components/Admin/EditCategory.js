
import React, { useState} from 'react'
import isEmpty from "validator/lib/isEmpty"
import swal from 'sweetalert'
import Url from '../Home/URL'
export function EditCategory({ close, logedcategory }) {
    console.log(logedcategory)
    var Id = logedcategory.idCategory
    // console.log(id)
    const url = Url + "/api/Category/UpdateCate/" + Id;
    const [validationMsg, setValidationMsg] = useState('')
    const [cateName, setCateName] = useState(logedcategory.categoryName)
    
    const onChangeCateName = (event) => {
        const value = event.target.value
        setCateName(value)
        console.log(value)
    }
    const validateAll = () => {
        const msg = {}
        if (isEmpty(cateName)) {
            msg.cateName = "Viết gì vô đi má"
        }
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
                console.log(Id)
                fetch(url, {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "idCategory": Id,
                        "categoryName": t,
                    }) 
                })
                
        }
    }
    const sweetAlertClick = () => {
        var isValid = validateAll()
            if (!isValid) {
                swal({
                    title: "Sửa danh mục sản phẩm thành công!!",
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
                            <input id="text-tickets" type="text" className="modal-input" 
                            placeholder="Enter Category's Name" name="categoryName2" 
                            style={{ minWidth: '100%' }} 
                            defaultValue={logedcategory.categoryName}  
                            onChange={onChangeCateName}/>
                            <div>
                            <h5 style={{color:'red'}}>{validationMsg.cateName}</h5>
                            </div>
                        </div>
                    </div>

                    <footer className="modal-footer">
                        <button onClick = {sweetAlertClick} type='submit' className="buy-tickets save">
                            <i className="fas fa-check"></i>
                            LƯU
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    )
}
