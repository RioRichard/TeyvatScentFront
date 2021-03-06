import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import '../Content/CSS/Button.css'
import swal from 'sweetalert'
import Url from '../Home/URL'

export function BannedStaff() {
    const changeInfoUrl = Url + `/api/Admin/ChangeMemberInfo/`
    const url = Url + `/api/Admin/AllStaffInfo`
    let authAdmin = sessionStorage.getItem('dataAdmin')
    let content = null;
    const [account, setAccount] = useState(0)
    useEffect(() => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authAdmin,
            },
        })
            .then(response => response.json()
            ).then(data => setAccount(data))
    }, [url])
    function submitKPNV(item, e) {
        var id = item.idStaff
        var fullName = item.fullName;
        var gender = item.gender
        fetch(changeInfoUrl + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authAdmin
            },
            body: JSON.stringify(
                {
                    "fullname": fullName,
                    "gender": gender,
                    "isDelete": false
                }
            )
        })
            .then(res => {
                if (res.status == 200) {
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
                else {
                    swal({
                        title: "Xảy ra lỗi khi thực hiện lệnh",
                        icon: "error",
                        dangerMode: 'Xác nhận'
                    })
                }
            })
    }
    const [pageNumber, setPageNumber] = useState(0)
    const StaffPerPage = 8
    const pagesVisited = pageNumber * StaffPerPage

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    var count = 0
    var tempPageCount
    var pageCount
    if (account) {
        account.map(item => {
            if (item.isDelete == true) {
                count++;
            }
        })
        tempPageCount = count;
    }
    if (tempPageCount) {
        pageCount = Math.ceil(count / StaffPerPage)
    }
    if (tempPageCount > 0) {
        content =
            <div>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">TÀI KHOẢN NHÂN VIÊN ĐÃ VÔ HIỆU</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>
                            <li className="breadcrumb-item active">TÀI KHOẢN NHÂN VIÊN ĐÃ VÔ HIỆU</li>
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
                                        .filter(o => o.isDelete == true)
                                        .slice(pagesVisited, pagesVisited + StaffPerPage)
                                        .map(item => {
                                            return (
                                                <tr key={item.idStaff}>
                                                    <td>
                                                        <h5 className="categorye-name" style={{ color: 'black' }}>{item.userName}</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="categorye-name" style={{ color: 'black' }}>{item.email}</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="categorye-name" style={{ color: 'black' }}>{item.fullName}</h5>
                                                    </td>
                                                    <td>
                                                        {item.gender == true && <h5 className="categorye-name" style={{ color: 'black' }}>Nam</h5>}
                                                        {item.gender == false && <h5 className="categorye-name" style={{ color: 'black' }}>Nữ</h5>}
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
                        <ReactPaginate
                            preveousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </main>
            </div>
    }
    else {
        content =
            <div className='wrapper'>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">TÀI KHOẢN NHÂN VIÊN</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/account">Trang quản lí</a></li>
                            <li className="breadcrumb-item active">TÀI KHOẢN NHÂN VIÊN ĂN BANNED</li>
                        </ol>
                        <h1 style={{ textAlign: 'center', marginTop: '10%', color: 'red' }}>NON - BANNED STAFF</h1>
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