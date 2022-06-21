import React, { useState } from 'react'
import swal from 'sweetalert'
import isEmpty from "validator/lib/isEmpty"
import Url from '../Home/URL'
export function AddAddress({ close }) {
    const url = Url + "/api/Address/AddAddress";
    const [addressName, setAddresName] = useState('')
    const [validationMsg, setValidationMsg] = useState('')
    const [sdt, setsdt] = useState('')
    const [receiver, setReceiver] = useState('')

    let auth = sessionStorage.getItem('data')
    function submit(e) {
        e.preventDefault();
        var address = document.getElementById('address').value
        var phone = document.getElementById('phone').value
        var reciever = document.getElementById('receiver').value
        var isDefault = document.getElementById('isDefault').checked
        console.log(isDefault)
        var isValid = validateAll()
            if (!isValid) {
                fetch(url, {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + auth,
                    },
                    body: JSON.stringify(
                        {
                            "addressed": address,
                            "phone": phone,
                            "reciever": reciever,
                            "isDefault": isDefault
                        }
                    )
                })
                .then(response => {
                    if (response.status == 200) {
                        swal({
                            title: "Thêm địa chỉ thành công!!",
                            icon: "success",
                            dangerMode: 'Xác nhận',
                        }).then(dangerMode => {
                            if (dangerMode) {
                                window.location.reload();
                            }
                        })
                    }
                    else {
                        swal({
                            title: "Xảy ra lỗi khi thực hiện lệnh",
                            icon: "error",
                            dangerMode: 'Xác nhận',
                        })
                    }
                })

            }
    }
    const onChangeAddressName = (event) => {
        const value = event.target.value
        setAddresName(value)
    }
    const onChangeSDT = (event) => {
        const value = event.target.value
        setsdt(value)
    }
    const onChangeReceiver = (event) => {
        const value = event.target.value
        setReceiver(value)
    }

    const validateAll = () => {
        const msg = {}
        if (isEmpty(addressName)) {
            msg.addressName = "Không thể thiếu địa chỉ"
        }
        if (isEmpty(sdt)) {
            msg.sdt = "Không thể thiếu số điện thoại"
        }
        if (isEmpty(receiver)) {
            msg.receiver = "Không thể thiếu người nhận"
        }
        console.log(msg)
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) { return true }
        else { return false }
    }
    

    let content = null
    content =
        <div className="modal" style={{ position: "fixed", top: '0', bottom: '0', right: '0', left: '0', display: 'block' }}>
            <div className="modal-container" style={{ marginLeft: "20%", marginTop: '5%' }}>
                <div className="close">
                    <a style={{ textDecoration: 'none' }} className="close" onClick={close}>
                        &times;
                    </a>
                </div>
                <header className="modal-header">
                    <i className="far fa-edit"></i>
                    Thêm địa chỉ
                </header>
                <form id="modalForm" onSubmit={(e) => submit(e)}>
                    <div className="modal-body">
                        <div className="modal-product-name">
                            <label for="address" className="modal-label" >
                                Địa chỉ
                            </label>
                            <input id="address" type="text" className="modal-input" placeholder="Nhập địa chỉ của bạn" name="address" onChange={onChangeAddressName} />
                        </div>
                        <div>
                            <h5 style={{ color: 'red' }}>{validationMsg.addressName}</h5>
                        </div>
                        <div className="modal-product-price">
                            <label for="phone" className="modal-label">
                                Số điện thoại
                            </label>
                            <input id="phone" type="text" className="modal-input" placeholder="Nhập số điện thoại của bạn" name="phone" onChange={onChangeSDT} />
                        </div>
                        <div>
                            <h5 style={{ color: 'red' }}>{validationMsg.sdt}</h5>
                        </div>
                        <div className="modal-product-stock">
                            <label for="receiver" className="modal-label">
                                Người nhận
                            </label>
                            <input id="receiver" type="text" className="modal-input" placeholder="Nhập tên người nhận" name="receiver" onChange={onChangeReceiver} />
                        </div>
                        <div>
                            <h5 style={{ color: 'red' }}>{validationMsg.receiver}</h5>
                        </div>
                        <div className="modal-product-description">
                            <label for="isDefault" className="modal-label">
                                Địa chỉ mặc định 
                            </label>
                            <input type="checkbox" id="isDefault" name="isDef" value="True" />
                        </div>
                    </div>
                    <footer className="modal-footer">
                        <button className="buy-tickets save" >
                            Lưu
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    return (
        <div>
            {content}
        </div>
    )
}