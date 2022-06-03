import React from 'react'

export function AddAddress() {
    const url = "https://localhost:44380/api/Address/AddAddress";
    let auth = sessionStorage.getItem('data')
    function submit(e) {
        e.preventDefault();
        // var isValid = validateAll()
        //     if (!isValid) {

        //     }
        var address = document.getElementById('address').value
        var phone = document.getElementById('phone').value
        var reciever = document.getElementById('receiver').value
        var isDefault = document.getElementById('isDefault').checked
        console.log(isDefault)
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
    }

    return (
        <div className="modal" style={{ position: "fixed", top: '0', bottom: '0', right: '0', left: '0', display: 'block' }}>
            <div className="modal-container" style={{ marginLeft: "20%", marginTop: '5%' }}>
                <div className="close">
                    <i className="fas fa-times-circle"></i>
                </div>
                <header className="modal-header">
                    <i className="far fa-edit"></i>
                    Thêm địa chỉ
                </header>
                <form id="modalForm" onSubmit={(e) => submit(e)}>
                    <div className="modal-body">
                        <div className="modal-product-name">
                            <label for="address" className="modal-label">
                                Địa chỉ
                            </label>
                            <input id="address" type="text" className="modal-input" placeholder="Nhập địa chỉ của bạn" name="address" />
                        </div>
                        <div className="modal-product-price">
                            <label for="phone" className="modal-label">
                                Số điện thoại
                            </label>
                            <input id="phone" type="text" className="modal-input" placeholder="Nhập số điện thoại của bạn" name="phone" />
                        </div>

                        <div className="modal-product-stock">
                            <label for="receiver" className="modal-label">
                                Người nhận
                            </label>
                            <input id="receiver" type="text" className="modal-input" placeholder="Nhập tên người nhận" name="receiver" />
                        </div>
                        <div className="modal-product-description">
                            <label for="isDefault" className="modal-label">
                                Địa chỉ mặc định
                            </label>
                            <input type="checkbox" id="isDefault" name="isDef" value="True" />
                        </div>
                    </div>
                    <footer className="modal-footer">
                        <button className="buy-tickets save">
                            <i className="fas fa-check"></i>
                            Lưu
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    )
}