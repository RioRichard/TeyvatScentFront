import React, { useState, useEffect } from 'react';
import '../Content/CSS/Button.css'
import Popup from "reactjs-popup";
import { AddAddress } from './AddAddress';
// import $ from 'jquery';
export function Address() {
    const url = `https://localhost:44380/api/Address/GetAddress`
    const [address, setAddress] = useState(0)
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

            ).then(data => setAddress(data))
    }, [url])
    console.log(address)
    let content = null;
    if (address) {
        content =
            <div className='wrapper'>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">ĐỊA CHỈ</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/admin">Tải khoản</a></li>

                            <li className="breadcrumb-item active">Địa chỉ</li>
                        </ol>
                        <div className="card-body container-fluid">
                            <form>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr className="table-header" style={{ backgroundColor: "lavender" }}>
                                            <td className="col-4">Địa chỉ</td>
                                            <td className="col-3">Số điện thoại</td>
                                            <td>Người nhận</td>
                                            <td>Địa chỉ mặc định</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {address.map(item => {
                                            return (
                                                <tr key={item.address.idAddress} className="table-body">
                                                    <td>{item.address.addressed}</td>
                                                    <td>{item.address.phone}</td>
                                                    <td>{item.address.reciever}</td>
                                                    <td>
                                                        {item.isDefault == true && <input name="IsDefault" checked type="radio" value="true" addid="@item.IDAddress" />}
                                                        {item.isDefault == false && <input name="IsDefault" type="radio" value="true" addid="@item.IDAddress" />}
                                                        {/* item.IsDefault==true)
                                                {

                                                }
                                                else
                                                {
                                                    <input name="IsDefault" type="radio" value="true" addid="@item.IDAddress" />
                                                } */}
                                                    </td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <Popup modal trigger={<button type='button' className="btn btn-primary btn-editaddress" >Thêm Địa Chỉ</button>}>
                                            {close => <AddAddress close={close} />}
                                        </Popup>
                                    </div>
                            </form>
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