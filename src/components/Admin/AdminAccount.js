import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import '../Content/CSS/Button.css'
import Popup from "reactjs-popup";
export function AdminAccount() {
    const url = `https://localhost:44380/api/Authentication/AllStaffInfo`
    const [account, setAccount] = useState(0)
    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setAccount(data))
    }, [url])
    console.log(account);
    let content = null
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
                                        return (
                                            <tr key={item.info.idStaff}>
                                                <td>
                                                    <h5 className="categorye-name" style={{ color: 'black' }}>{item.info.userName}</h5>
                                                </td>
                                                <td>
                                                    <h5 className="categorye-name" style={{ color: 'black' }}></h5>
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
                                                        {/* <Popup modal trigger={
                                                    {close => <EditCategory close={close} logedcategory={item}/>}
                                                </Popup> */}
                                                        <button className="btn btn-primary btn-editcategory" >
                                                            SỬA
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                        <button className="btn btn-primary" id="del-id"  >Vô Hiệu</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                            <div className="form-group">
                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                    {/* <Popup modal trigger={<button className="btn btn-primary btn-addcategory" >Thêm Danh Mục</button>}>
                                {close => <AddCategory close={close} />}
                            </Popup> */}
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