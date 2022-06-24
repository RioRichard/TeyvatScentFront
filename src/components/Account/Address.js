import React, { useState, useEffect } from 'react';
import '../Content/CSS/Button.css'
import Popup from "reactjs-popup";
import { AddAddress } from './AddAddress';
import Url from '../Home/URL'
// import $ from 'jquery';
export function Address() {
    const url = Url + `/api/Address/GetAddress`
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
    
    function change(e, id) {
        // e.preventDefault();
        console.log(id);
        const changeDefaultAddressUrl=Url+'/api/Address/ChangeDFAddress/'
        fetch(changeDefaultAddressUrl+id,{
            method: 'put',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + auth,
            }
        })
        
    }
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
                                    <thead className="bg-dark" style={{ color: 'white' }}>
                                        <tr className="table-header" >
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
                                                            {item.isDefault == true && <input onChange={(e) => change(e,item.address.idAddress)} name="IsDefault" defaultChecked type="radio" addid="@item.IDAddress" />}
                                                            {item.isDefault == false && <input onChange={(e) => change(e,item.address.idAddress)} name="IsDefault" type="radio" addid="@item.IDAddress" />}                                                    
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