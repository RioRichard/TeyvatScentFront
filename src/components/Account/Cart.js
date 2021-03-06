
import '../Content/CSS/Button.css'
import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import Url from '../Home/URL'
export function Cart() {
    const url = Url + `/api/Cart/GetCart`
    const chargeUrl = Url + '/api/Invoice/Charge'
    const addressUrl = Url + '/api/Address/GetAddress'
    const deleteUrl = Url + `/api/Cart/UpdateCart/`
    const [cart, setCart] = useState(0)
    const [address, GetAddress] = useState(0)
    let auth = sessionStorage.getItem('data')
    if (auth == null) {
        auth = sessionStorage.getItem('tokenGoogle')
    }

    if (auth) {
        useEffect(() => {
            fetch(addressUrl, {
                method: 'get',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                }
            }
            )
                .then(response => {
                    if (response.status == 200) {
                        return response.json()
                    }
                    else {
                        return null
                    }
                })
                .then(data => GetAddress(data))
        }, [addressUrl])

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
                .then(response => {
                    if (response.status == 200) {
                        return response.json()
                    }
                    else {
                        return null
                    }
                })
                .then(data => setCart(data))

        }, [url])
    }


    function charge(e) {
        e.preventDefault();
        if (Object.keys(address).length == 0) {
            swal({
                title: "Ch??a c?? ?????a ch??? ????? c?? th??? thanh to??n",
                icon: "warning",
                buttons: {
                    cancel: "Tho??t!",
                    willSign: {
                        text: "Th??m ?????a ch???!",
                        value: "willSign",
                    },
                },
            }).then((willSign) => {
                if (willSign) {
                    window.location.href = "/account/address"
                }
            })
        }
        else {
            if (cart.product.length == 0) {
                swal({
                    title: "Kh??ng th??? ti???n h??nh thanh to??n khi kh??ng c?? s???n ph???m",
                    icon: "warning",
                    buttons: {
                        cancel: "Tho??t!",
                        willSign: {
                            text: "MUA S???M!",
                            value: "willSign",
                        },
                    },
                }).then((willSign) => {
                    if (willSign) {
                        window.location.href = "/"
                    }
                })
            }
            else {
                fetch(chargeUrl, {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + auth,
                    }
                })
                swal({
                    title: "Thanh to??n th??nh c??ng!!",
                    icon: "success",
                    dangerMode: 'X??c nh???n',
                }).then((dangerMode) => {
                    if (dangerMode) {
                        window.location.href = "/account/invoice"
                    }
                })
            }
        }
    }
    function currencyFormat(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'
    }

    const handleChange = (e, id, price) => {
        var changeQuanlity = e.target.value

        fetch(deleteUrl + cart.idCart, {
            method: 'put',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + auth,
            },
            body: JSON.stringify(
                {
                    "idProduct": id,
                    "quantity": changeQuanlity
                }
            )
        })
        const result = document.getElementById(id);
        result.textContent = currencyFormat(e.target.value * price)
        var totalPrice = 0
        var value
        // var table = document.getElementById("table table-bordered").rows[1].cells[4].innerText;
        cart.product.map(item => {
            if (item.product.idProduct == id) {
                item.quantity = e.target.value
            }
        })
        setCart(cart)
        cart.product.map(item => {
            value = item.product.price * item.quantity
            totalPrice = totalPrice + value
        })
        const TongGiaTien = document.getElementById('totalPrice');
        TongGiaTien.textContent = currencyFormat(totalPrice)
    }
    function countAll(cart) {
        var totalPrice = 0
        var value
        cart.product.map(item => {
            value = item.product.price * item.quantity
            totalPrice = totalPrice + value
        })
        return (currencyFormat(totalPrice))
    }
    function deleteCart(e, id) {
        swal({
            title: "B???n ch???c ch???n mu???n x??a?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(deleteUrl + cart.idCart, {
                    method: 'put',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + auth,
                    },
                    body: JSON.stringify(
                        {
                            "idProduct": id,
                            "quantity": '0'
                        }
                    )
                })
                swal({
                    title: "X??a s???n ph???m kh???i gi??? h??ng th??nh c??ng?",
                    icon: "success",
                    dangerMode: 'X??c nh???n'
                }).then(dangerMode => {
                    if (dangerMode) {
                        window.location.reload();
                    }
                });
            }
        })
    }
    let content = null
    if (cart) {
        content =
            <div className='wrapper'>
                <main>
                    <div style={{marginLeft:'-60px'}} className="container-fluid">
                        <h1 className="mt-4">GI??? H??NG C???A B???N</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/account">T??i kho???n</a></li>
                            <li className="breadcrumb-item active">Gi??? h??ng c???a b???n</li>
                        </ol>
                        <table className="table table-bordered" id="table table-bordered">
                            <thead className="bg-dark text-light" >
                                <tr>
                                    <td>T??n s???n ph???m</td>
                                    <td>H??nh ???nh</td>
                                    <td>Gi?? ti???n</td>
                                    <td>S?? l?????ng</td>
                                    <td>T???ng s??? ti???n</td>
                                    <td>T??nh tr???ng s???n ph???m</td>
                                    <td>Xo?? s???n ph???m</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.product.map(item => {
                                        return (
                                            <tr key={item.idCart} className="product_tr">
                                                <td><h3 dangerouslySetInnerHTML={{ __html: item.product.name }}></h3></td>
                                                <td><img src={Url + '//Image/' + item.product.imageUrl} alt={item.name} style={{ width: '150px', height: '150px', borderRadius: '0%' }} /></td>
                                                <td>
                                                    <div className="unitprice" > <h3>{currencyFormat(item.product.price)}</h3></div>
                                                </td>

                                                <td><h3> <input type="number" min="1" max="100" name="quantity" id={item.product.name} defaultValue={item.quantity} onChange={(e) => handleChange(e, item.product.idProduct, item.product.price)} /></h3>
                                                </td>
                                                <td><div className="totalItem"> <h3 id={item.product.idProduct}>{currencyFormat(item.quantity * item.product.price)}</h3> </div></td>
                                                <td>
                                                    {item.product.stock <= 0 &&
                                                        <span id="stock_status" style={{ color: 'red' }}><h3>H???t h??ng</h3></span>}
                                                    {item.product.stock > 0 &&
                                                        <span id="stock_status" ><h3>C??n H??ng</h3></span>}
                                                </td>
                                                <td><button name="delete" className="btn btn-outline-danger" cid="@item.IDCart" pid="@item.IDProduct" onClick={(e) => deleteCart(e, item.product.idProduct)}> X??a<i className="fas fa-trash"></i></button></td>
                                            </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-end">
                            <h3>T???ng c???ng: <b className="total"></b></h3>
                            <h3 id="totalPrice" >
                                {countAll(cart)}
                            </h3>
                        </div>
                        <div className="d-flex justify-content-end" style={{ marginBottom: '10px', marginTop: '10px' }}>
                            <a href='/account/address'>
                                <button className="btn btn-primary btn-edit" type="button">Ch???nh ?????a ch???.</button>
                            </a>
                        </div>
                        <div className="d-flex justify-content-end">
                            <input type="hidden" name="addressCount" defaultValue="@ViewBag.AddressCount" />
                            <a href="/" className="btn btn-outline-primary">Ti???p t???c mua s???m</a>
                            <button name="charge" type="button" onClick={(e) => charge(e)} className="btn btn-danger" style={{ marginLeft: '20px' }}>Thanh to??n!</button>
                        </div>

                    </div>
                </main>
            </div>
    }
    else {
        content =
            <div className='wrapper'>
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">GI??? H??NG C???A B???N</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/account">T??i kho???n</a></li>
                            <li className="breadcrumb-item active">Gi??? h??ng c???a b???n</li>
                        </ol>
                        <h1 style={{ textAlign: 'center', marginTop: '10%', color: 'red' }}>Gi??? h??ng tr???ng</h1>
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
