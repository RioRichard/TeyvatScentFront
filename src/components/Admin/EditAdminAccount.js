import React, { useState} from 'react'
import isEmpty from "validator/lib/isEmpty"
import swal from 'sweetalert'
export function EditAdminAccount({close, logedcategory}){
    var item=logedcategory
    console.log(item);
    // const url = "https://localhost:44380/api/Category/UpdateCate/" + Id;
    function submit(e) {
        e.preventDefault();
        // var isValid = validateAll()
        //     if (!isValid) {
        //         var t = document.getElementById('text-tickets').value
        //         // console.log(t)
        //         // console.log(Id)
        //         fetch(url, {
        //             method: 'put',
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify({
        //                 "idCategory": Id,
        //                 "categoryName": t,
        //             })
                       
        //         }
        //         )
        // // }
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
                            // placeholder="Enter Category's Name" name="categoryName2" 
                            // style={{ minWidth: '100%' }} 
                            // defaultValue={logedcategory.categoryName}  
                            // onChange={onChangeCateName}
                            />
                            <div>
                            {/* <h5 style={{color:'red'}}>{validationMsg.cateName}</h5> */}
                            </div>
                        </div>
                    </div>

                    <footer className="modal-footer">
                    {/* onClick = {sweetAlertClick} */}
                        <button  type='submit' className="buy-tickets save">
                            <i className="fas fa-check"></i>
                            LƯU
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    )
}