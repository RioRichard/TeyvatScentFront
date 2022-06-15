import React, { useState} from 'react'
import swal from 'sweetalert'
export function EditAdminAccount({close, logedcategory}){

    console.log(logedcategory)
    const url = `https://localhost:44380/api/Authentication/ChangeMemberInfo/`
    var id =  logedcategory.info.idStaff
    let auth = sessionStorage.getItem('data')
   
    function submit(e) {
        e.preventDefault();
        var gender;
        var gender1 = document.getElementById('Nam').checked
        var gender2 = document.getElementById('Nu').checked
        if (gender1 == true) {
            gender = true;
        }
        else {
            gender = false;
        }
        var fullname = document.getElementById('fullname').value
                fetch(url + id, {
                    method: 'put',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + auth,
                    },
                    body: JSON.stringify(
                        {
                            "fullname": fullname,
                            "gender": gender,
                            "isDelete": false
                        }
                    )
                })
                .then(response => {
                    if (response.status != 200) {
                        swal({
                            title: "Cập nhật thông tin không thành công?",
                            icon: "error",
                            dangerMode: 'Xác nhận'
                        })
                    }
                    else {
                        swal({
                            title: "Cập nhật thông tin thành công?",
                            icon: "success",
                            dangerMode: 'Xác nhận'
                        }).then(dangerMode => {
                            if (dangerMode) {
                                window.location.reload();
                            }
                        });
                    }
                })
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
                    <div className="modal-body" style={{ maxHeight: '250px' }}>

                        <div className="modal-category-name">
                        <label htmlFor="text-tickets" className="modal-label">
                        <strong>Họ Và Tên Nhân Viên</strong>
                    </label>
                    <input id="fullname" type="text" className="modal-input" 
                    placeholder="Enter Staff's Full Name"  style={{ minWidth: '100%' }}  defaultValue={logedcategory.info.fullName}/>
                        </div>
                        <br/>
                        <h4>Giới tính</h4>
                    {logedcategory.info.gender == true &&
                        <div className="form-group" >
                            <input type="radio" id="Nam" name="gender" value="true" checked />
                            <label htmlFor="Nam">Nam</label><br />
                            <input type="radio" id="Nu" name="gender" value="false" />
                            <label htmlFor="Nu">Nữ</label><br />
                            <label htmlFor="gender" className="error"></label>
                        </div>
                    }
                    {logedcategory.info.gender == false &&
                        <div className="form-group" >
                            <input type="radio" id="Nam" name="gender" value="true" />
                            <label htmlFor="Nam">Nam</label><br />
                            <input type="radio" id="Nu" name="gender" value="false" checked />
                            <label htmlFor="Nu">Nữ</label><br />
                            <label htmlFor="gender" className="error"></label>
                        </div>
                    }
                    </div>
                    <footer className="modal-footer">
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