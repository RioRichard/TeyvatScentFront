import React, { useState, useEffect } from 'react'
import '../Content/CSS/Button.css'
import Popup from "reactjs-popup";
import { EditAdminAccount } from './EditAdminAccount';
import { AddAccountStaff } from './AddAccountStaff';
import swal from 'sweetalert'
import Url from '../Home/URL'

export function AdminAccount() {
    const url = Url +`/api/Authentication/AllStaffInfo`
    const changeInfoUrl = Url +`/api/Authentication/ChangeMemberInfo/`
    const [account, setAccount] = useState(0)
    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setAccount(data))
    }, [url])
    let content = null
    function submitXNV(item, e) {
        var id = item.info.idStaff
        var fullName = item.info.fullName; 
        if(fullName == null)
        {
            fullName = 'chưa cập nhật'
        }
        var gender = item.info.gender
        if(gender == null)
        {
            gender = true
        }
        console.log(id);
        swal({
            title: "Tiến hành vô hiệu hóa tài khoản nhân viên?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(changeInfoUrl + id, {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        {
                            "fullname": fullName,
                            "gender": gender,
                            "isDelete": true
                        }
                    )
                })
                    .then(res => {
                        if (res.status == 200) {
                            swal({
                                title: "Đã vô hiệu hóa tài khoản của nhân viên",
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
                                title: "Xảy ra lỗi khi thực hiện lệnh",
                                icon: "error",
                                dangerMode: 'Xác nhận'
                            })
                        }
                    })
            } else {
                swal({
                    title: "Đã thu hồi lệnh",
                    dangerMode: 'Xác nhận'
                });
            }
        })
    }
    if (account) {
        content =
            <div>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">TÀI KHOẢN NHÂN VIÊN</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                            <li className="breadcrumb-item active">TÀI KHOẢN NHÂN VIÊN</li>
                        </ol>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark" style={{ color: 'white' }}>
                                    <tr >
                                        <td style={{ fontSize: '15px' }}>Tên đăng nhập</td>
                                        <td style={{ fontSize: '15px' }}>Email</td>
                                        <td style={{ fontSize: '15px' }}>Tên đầy đủ</td>
                                        <td style={{ fontSize: '15px' }}>Giới tính</td>
                                        <td style={{ fontSize: '15px' }}>Sửa thông tin</td>
                                        <td style={{ fontSize: '15px' }}>Vô hiệu</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {account.map(item => {
                                        console.log(item)
                                        if (item.info.isDelete != true) {
                                            return (
                                                <tr key={item.info.idStaff}>
                                                    <td>
                                                        <h5 className="categorye-name" style={{ color: 'black' }}>{item.info.userName}</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="categorye-name" style={{ color: 'black' }}>{item.info.email}</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="categorye-name" style={{ color: 'black' }}>{item.info.fullName}</h5>
                                                    </td>
                                                    <td>
                                                        {item.info.gender == true && <h5 className="categorye-name" style={{ color: 'black' }}>Nam</h5>}
                                                        {item.info.gender == false && <h5 className="categorye-name" style={{ color: 'black' }}>Nữ</h5>}
                                                    </td>
                                                    <td>
                                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                            <Popup modal trigger={<button className="btn btn-primary btn-editcategory" >
                                                                SỬA
                                                            </button>}>
                                                                {close => <EditAdminAccount close={close} logedcategory={item} />}
                                                            </Popup>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                            <button className="btn btn-primary" id="del-id" onClick={(e) => submitXNV(item, e)}>Vô Hiệu</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                            <div className="form-group">
                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <Popup modal trigger={<button className="btn btn-primary btn-addcategory" >Thêm Tài Khoản Nhân Viên</button>}>
                                        {close => <AddAccountStaff close={close} />}
                                    </Popup>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    }
    return (
        <div>
            {content}
        </div>
    )
}