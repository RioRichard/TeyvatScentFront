import React, { useState,useEffect } from 'react'
import swal from 'sweetalert'
import Url from '../Home/URL'
export function EditAdminAccount({ close, logedcategory }) {
    const url = Url + `/api/Authentication/ChangeMemberInfo/`
    var id = logedcategory.idStaff
    let authAdmin = sessionStorage.getItem('dataAdmin')
    const roleUrl = Url + '/api/Role/GetRole'
    const [role, getRole] = useState(0)
    useEffect(() => {
        fetch(roleUrl, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        )
            .then(response => response.json()
            ).then(data => getRole(data))
    }, [roleUrl])
    console.log(logedcategory.idStaff);
    console.log(role);
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
                'Authorization': "Bearer " + authAdmin,
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
                if (response.status == 200) {

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
                else {
                    swal({
                        title: "Cập nhật thông tin không thành công?",
                        icon: "error",
                        dangerMode: 'Xác nhận'
                    })
                }
            })
    }
    let roleValue=null;
    function StaffRole() {
        for (let index = 0; index < role.length; index++) {
            for (let i = 0; i < role[index].staffRoles.length; i++) {
                if(logedcategory.idStaff==role[index].staffRoles[i].idStaff)
                {
                    
                }
                
            }
            
        }
    }
    console.log(logedcategory);
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
                    Sửa Thông Tin Nhân Viên
                </header>
                <form id="addform" onSubmit={(e) => submit(e)}>
                    <div className="modal-body" style={{ maxHeight: '400px' }}>

                        <div className="modal-category-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                <strong>Họ Và Tên Nhân Viên</strong>
                            </label>
                            <input id="fullname" type="text" className="modal-input"
                                placeholder="Enter Staff's Full Name" style={{ minWidth: '100%' }} defaultValue={logedcategory.fullName} />
                        </div>
                        <br />
                        <h4>Giới tính</h4>
                        {logedcategory.gender == true &&
                            <div className="form-group" >
                                <input type="radio" id="Nam" name="gender" value="true" checked />
                                <label htmlFor="Nam">Nam</label><br />
                                <input type="radio" id="Nu" name="gender" value="false" />
                                <label htmlFor="Nu">Nữ</label><br />
                                <label htmlFor="gender" className="error"></label>
                            </div>
                        }
                        {logedcategory.gender == false &&
                            <div className="form-group" >
                                <input type="radio" id="Nam" name="gender" value="true" />
                                <label htmlFor="Nam">Nam</label><br />
                                <input type="radio" id="Nu" name="gender" value="false" checked />
                                <label htmlFor="Nu">Nữ</label><br />
                                <label htmlFor="gender" className="error"></label>
                            </div>
                        }
                        <h4>Role</h4>
                        <StaffRole/>
                        {/* {(logedcategory.role[0].idRole == "372c7eb8-c50b-4a17-9d43-53ca46484167" &&
                            logedcategory.role[1].idRole != "9d11659d-3500-466c-b66c-a9efca06fbd1") &&
                            <div className="form-group" >
                                <input type="checkbox" id="Staff" name="role" value="1" checked/>
                                <label htmlFor="Nam">Staff</label><br />
                                <input type="checkbox" id="Admin" name="role" value="2" />
                                <label htmlFor="Nu">Admin</label><br />
                                <input type="checkbox" id="SuperAdmin" name="role" value="3" />
                                <label htmlFor="Nu">Super Admin</label><br />
                                <label htmlFor="gender" className="error"></label>
                            </div>
                        }
                        {(logedcategory.role[0].idRole == "372c7eb8-c50b-4a17-9d43-53ca46484167" &&
                            logedcategory.role[1].idRole == "9d11659d-3500-466c-b66c-a9efca06fbd1") &&
                            <div className="form-group" >
                                <input type="checkbox" id="Staff" name="role" value="1" checked/>
                                <label htmlFor="Nam">Staff</label><br />
                                <input type="checkbox" id="Admin" name="role" value="2" checked/>
                                <label htmlFor="Nu">Admin</label><br />
                                <input type="checkbox" id="SuperAdmin" name="role" value="3" />
                                <label htmlFor="Nu">Super Admin</label><br />
                                <label htmlFor="gender" className="error"></label>
                            </div>
                        } */}

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