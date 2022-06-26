import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import Url from '../Home/URL'
export function EditAdminAccount({ close, logedcategory }) {
    const url = Url + `/api/Admin/ChangeMemberInfo/`
    const ChangeRoleUrl = Url + '/api/Admin/ChangeRole/'
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
    // console.log(role);
    function submit(e, x) {
        e.preventDefault();
        var gender;
        var gender1 = document.getElementById('Nam').checked
        var gender2 = document.getElementById('Nu').checked
        var role1 = document.getElementById(rolesName[0]).checked
        var role2 = document.getElementById(rolesName[1]).checked
        var role3 = document.getElementById(rolesName[2]).checked
        if (gender1 == true) {
            gender = true;
        }
        else {
            gender = false;
        }
        var fullname = document.getElementById('fullname').value
        console.log(role1);
        console.log(role2);
        console.log(role3);
        console.log(rolesName);
        if (role1 == true) {
            fetch(ChangeRoleUrl + id,
                {
                    method: 'put',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + authAdmin,
                    },
                    body: JSON.stringify(
                        {
                            "roleId": rolesId[0],
                            "isDelete": false
                        }
                    )
                })
        }
        else {
            fetch(ChangeRoleUrl + id,
                {
                    method: 'put',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + authAdmin,
                    },
                    body: JSON.stringify(
                        {
                            "roleId": rolesId[0],
                            "isDelete": true
                        }
                    )
                })
        }
        if (role2 == true) {
            fetch(ChangeRoleUrl + id,
                {
                    method: 'put',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + authAdmin,
                    },
                    body: JSON.stringify(
                        {
                            "roleId": rolesId[1],
                            "isDelete": false
                        }
                    )
                })
        }
        else {
            fetch(ChangeRoleUrl + id,
                {
                    method: 'put',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + authAdmin,
                    },
                    body: JSON.stringify(
                        {
                            "roleId": rolesId[1],
                            "isDelete": true
                        }
                    )
                })
        }
        if (role3 == true) {
            fetch(ChangeRoleUrl + id,
                {
                    method: 'put',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + authAdmin,
                    },
                    body: JSON.stringify(
                        {
                            "roleId": rolesId[2],
                            "isDelete": false
                        }
                    )
                })
        }
        else {
            fetch(ChangeRoleUrl + id,
                {
                    method: 'put',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + authAdmin,
                    },
                    body: JSON.stringify(
                        {
                            "roleId": rolesId[2],
                            "isDelete": true
                        }
                    )
                })
        }
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
    var content;
    var roleValue = [];
    var rolesName = [];
    var rolesId = [];
    function StaffRole() {
        for (let index = 0; index < role.length; index++) {
            rolesName[index] = role[index].roleName;
            rolesId[index] = role[index].idRole
            roleValue[index] = (<div><input type="checkbox" id={role[index].roleName} name="role" />
                <label htmlFor="Nam">{role[index].roleName}</label><br /></div>);
            for (let i = 0; i < role[index].staffRoles.length; i++) {
                if (logedcategory.idStaff == role[index].staffRoles[i].idStaff) {
                    if (role[index].staffRoles[i].isDelete == false) {
                        roleValue[index] = (<div><input type="checkbox" id={role[index].roleName} name="role" defaultChecked />
                            <label htmlFor="Nam">{role[index].roleName}</label><br /></div>);
                        break;
                    }
                    else {
                        roleValue[index] = (<div><input type="checkbox" id={role[index].roleName} name="role" />
                            <label htmlFor="Nam">{role[index].roleName}</label><br /></div>);
                        break;
                    }
                }
                else {
                    roleValue[index] = (<div><input type="checkbox" id={role[index].roleName} name="role" />
                        <label htmlFor="Nam">{role[index].roleName}</label><br /></div>);

                }
                // if (role[index].staffRoles[i].idStaff == null) {
                //     roleValue[index] = (<div><input type="checkbox" id={role[index].roleName} name="role" />
                //         <label htmlFor="Nam">{role[index].roleName}</label><br /></div>);
                // }

            }
        }
        return roleValue;
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
                    Sửa Thông Tin Nhân Viên
                </header>
                <form id="addform" onSubmit={(e, x) => submit(e, x)}>
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
                        <StaffRole />
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