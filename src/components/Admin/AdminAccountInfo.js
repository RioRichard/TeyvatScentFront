import React, { useEffect, useState } from 'react';
import '../Content/CSS/Button.css'
import swal from 'sweetalert'
import Url from '../Home/URL'
export function Info() {
    const url = Url + `/api/Admin/GetAdminInfo`
    const [adminInfo, setAdminInfo] = useState(0)
    let authAdmin = sessionStorage.getItem('dataAdmin')
    console.log(authAdmin)
    useEffect(() => {
        fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authAdmin,
            }
        }
        )
            .then(response => response.json()
            ).then(data => setAdminInfo(data))
    }, [url])
   
    const changeInfoUrl = Url +'/api/Admin/ChangeAdminInfo';
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
        swal({
            title: "Xác nhận cập nhật thông tin?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(changeInfoUrl, {
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
        console.log(gender);
        console.log(fullname);

    }
    console.log(adminInfo);
    if (adminInfo) {
        return (
            <div className='wrapper'>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">THÔNG TIN TÀI KHOẢN NHÂN VIÊN</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                            <li className="breadcrumb-item active">Thông tin tài khoản nhân viên</li>
                        </ol>
                        <div className="card-body">
                            <div className="form-group">
                                <label className="small mb-1" htmlFor="inputEmailAddress">UserName</label>
                                <input style={{ maxWidth: '50%' }} className="form-control py-4" id="inputEmailAddress" type="text" disabled defaultValue={adminInfo.info.userName} />
                            </div>
                            <div className="form-group">
                                <label className="small mb-1" htmlFor="email">Email</label>
                                <input style={{ maxWidth: '50%' }} className="form-control py-4" id="email" type="email" disabled defaultValue={adminInfo.info.email} />
                            </div>
                            <form method="post" name="changeInfo" id="changeInfo" onSubmit={(e) => submit(e)}>

                                <div className="form-group">
                                    <label className="small mb-1" htmlFor="fullname">Tên đầy đủ</label>
                                    <input defaultValue={adminInfo.info.fullName} style={{ maxWidth: '50%' }} className="form-control py-4" id="fullname" type="text" name="fullname" placeholder="Enter Full Name" />
                                </div>
                                <h4>Giới tính</h4>
                                {adminInfo.info.gender == true &&
                                    <div className="form-group" >
                                        <input type="radio" id="Nam" name="gender" value="true" checked />
                                        <label htmlFor="Nam">Nam</label><br />
                                        <input type="radio" id="Nu" name="gender" value="false" />
                                        <label htmlFor="Nu">Nữ</label><br />
                                        <label htmlFor="gender" className="error"></label>
                                    </div>
                                }
                                {adminInfo.info.gender == false &&
                                    <div className="form-group" >
                                        <input type="radio" id="Nam" name="gender" value="true" />
                                        <label htmlFor="Nam">Nam</label><br />
                                        <input type="radio" id="Nu" name="gender" value="false" checked />
                                        <label htmlFor="Nu">Nữ</label><br />
                                        <label htmlFor="gender" className="error"></label>
                                    </div>
                                }
                                {adminInfo.info.gender == null &&
                                    <div className="form-group" >
                                        <input type="radio" id="Nam" name="gender" value="true" />
                                        <label htmlFor="Nam">Nam</label><br />
                                        <input type="radio" id="Nu" name="gender" value="false" />
                                        <label htmlFor="Nu">Nữ</label><br />
                                        <label htmlFor="gender" className="error"></label>
                                    </div>
                                }
                                <button type='submit' className="btn btn-primary btn-editaddress" >Xác nhận chỉnh sửa</button>
                            </form>

                        </div>
                    </div>
                </main>
            </div>
        );
    }

}