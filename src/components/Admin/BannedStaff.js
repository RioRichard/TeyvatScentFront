import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import '../Content/CSS/Button.css'
import swal from 'sweetalert'
import Url from '../Home/URL'
export function BannedStaff() {
    const changeInfoUrl = Url + `/api/Authentication/ChangeMemberInfo/`
    const url = Url + `/api/Authentication/AllStaffInfo`
    let content = null;
    const [account, setAccount] = useState(0)
    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setAccount(data))
    }, [url])
    function submitKPNV(item, e) {
        var id = item.info.idStaff
        var fullName = item.info.fullName;
        var gender = item.info.gender
        console.log(id);
                fetch(changeInfoUrl + id, {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        {
                            "fullname": fullName,
                            "gender": gender,
                            "isDelete": false
                        }
                    )
                })
                .then(res => {
                    if(res.status == 200)
                    {
                        swal({
                            title: "Đã khôi phục tài khoản của nhân viên",
                            icon: "success",
                            dangerMode: 'Xác nhận'
                        }).then(dangerMode => {
                            if (dangerMode) {
                                window.location.reload();
                            }
                        });
                    }
                    else{
                        swal({
                            title: "Xảy ra lỗi khi thực hiện lệnh",
                            icon: "error",
                            dangerMode: 'Xác nhận'
                        })
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
                            <li className="breadcrumb-item active">TÀI KHOẢN NHÂN VIÊN ĂN BANNED</li>
                        </ol>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark" style={{ color: 'white' }}>
                                    <tr >
                                        <td style={{ fontSize: '15px' }}>Tên đăng nhập</td>
                                        <td style={{ fontSize: '15px' }}>Email</td>
                                        <td style={{ fontSize: '15px' }}>Tên đầy đủ</td>
                                        <td style={{ fontSize: '15px' }}>Giới tính</td>
                                        <td style={{ fontSize: '15px' }}>Khôi phục</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {account
                                        .filter(o => o.info.isDelete ==  true)
                                        .map(item => {
                                        console.log(item)
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
                                                            <button className="btn btn-primary" id="del-id" onClick={(e) => submitKPNV(item, e)}>KHÔI PHỤC</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                    })}
                                </tbody>
                            </table>
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