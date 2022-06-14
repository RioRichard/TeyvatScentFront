import React, { useEffect, useState } from 'react';
import '../Content/CSS/Button.css'
export function Info() {
    const url = `https://localhost:44380/api/Authentication/GetAdminInfo`
    const [adminInfo, setAdminInfo] = useState(0)
    let auth = sessionStorage.getItem('data')
    useEffect(() => {
        fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + auth,
            }
        }
        )
            .then(response => response.json()

            ).then(data => setAdminInfo(data))
    }, [url])
    // var x = adminInfo.info;
    // if (adminInfo) {
    //     console.log(adminInfo.info);
    // }
    const changeInfoUrl = 'https://localhost:44380/api/Authentication/ChangeAdminInfo';
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
        console.log(gender);
        console.log(fullname);
        fetch(changeInfoUrl, {
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
    }
    if (adminInfo) {
        return (
            <div className='wrapper'>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">THÔNG TIN TÀI KHOẢN ADMIN</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                            <li className="breadcrumb-item active">Thông tin tài khoản admin</li>
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
                                    <input defaultValue={adminInfo.info.fullName} style={{ maxWidth: '50%' }} className="form-control py-4" id="fullname" type="text" name="fullname" placeholder="" />
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
                                <button type='submit' className="btn btn-primary btn-editaddress" >Xác nhận chỉnh sửa</button>
                            </form>
                            
                        </div>
                    </div>
                </main>
            </div>
        );
    }

}