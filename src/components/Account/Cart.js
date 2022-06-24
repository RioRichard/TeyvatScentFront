
import '../Content/CSS/Button.css'
import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import Url from '../Home/URL'
export function Cart() {
    const url = Url + `/api/Cart/GetCart`
    const chargeUrl = Url +'/api/Invoice/Charge'
    const addressUrl = Url +'/api/Address/GetAddress'
    const deleteUrl = Url +`/api/Cart/UpdateCart/`
    const [cart, setCart] = useState(0)
    const [address, GetAddress] = useState(0)
    let auth = sessionStorage.getItem('data')


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

    function charge(e) {
        e.preventDefault();
        if (Object.keys(address).length == 0) {
            swal({
                title: "Chưa có địa chỉ để có thể thanh toán",
                icon: "warning",
                buttons: {
                    cancel: "Thoát!",
                    willSign: {
                        text: "Thêm địa chỉ!",
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
            if(cart.product.length == 0)
            {
                swal({
                    title: "Không thể tiến hành thanh toán khi không có sản phẩm",
                    icon: "warning",
                    buttons: {
                        cancel: "Thoát!",
                        willSign: {
                            text: "MUA SẮM!",
                            value: "willSign",
                        },
                    },
                }).then((willSign) => {
                    if (willSign) {
                        window.location.href = "/"
                    }
                })
            }
            else{
                fetch(chargeUrl, {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + auth,
                    }
                })
                swal({
                    title: "Thanh toán thành công!!",
                    icon: "success",
                    dangerMode: 'Xác nhận',
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
            title: "Bạn chắc chắn muốn xóa?",
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
                title: "Xóa sản phẩm khỏi giỏ hàng thành công?",
                icon: "success",
                dangerMode: 'Xác nhận'
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
                    <div className="container-fluid">
                        <h1 className="mt-4">GIỎ HÀNG CỦA BẠN</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                            <li className="breadcrumb-item active">Giỏ hàng của bạn</li>
                        </ol>
                        <table className="table table-bordered" id="table table-bordered">
                            <thead className="bg-dark text-light" >
                                <tr>
                                    <td>Tên sản phẩm</td>
                                    <td>Hình ảnh</td>
                                    <td>Giá tiền</td>
                                    <td>Sô lượng</td>
                                    <td>Tổng số tiền</td>
                                    <td>Tình trạng sản phẩm</td>
                                    <td>Xoá sản phẩm</td>
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
                                                        <span id="stock_status" style={{ color: 'red' }}><h3>Hết hàng</h3></span>}
                                                    {item.product.stock > 0 &&
                                                        <span id="stock_status" ><h3>Còn Hàng</h3></span>}
                                                </td>
                                                <td><button name="delete" className="btn btn-outline-danger" cid="@item.IDCart" pid="@item.IDProduct" onClick={(e) => deleteCart(e, item.product.idProduct)}> Xóa<i className="fas fa-trash"></i></button></td>
                                            </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-end">
                            <h3>Tổng cộng: <b className="total"></b></h3>
                            <h3 id="totalPrice" >
                                {countAll(cart)}
                            </h3>
                        </div>
                        <div className="d-flex justify-content-end" style={{ marginBottom: '10px', marginTop: '10px' }}>
                            <a href='/account/address'>
                                <button className="btn btn-primary btn-edit" type="button">Chỉnh địa chỉ.</button>
                            </a>
                        </div>
                        <div className="d-flex justify-content-end">
                            <input type="hidden" name="addressCount" defaultValue="@ViewBag.AddressCount" />
                            <a href="/" className="btn btn-outline-primary">Tiếp tục mua sắm</a>
                            <button name="charge" type="button" onClick={(e) => charge(e)} className="btn btn-danger" style={{ marginLeft: '20px' }}>Thanh toán!</button>
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
                        <h1 className="mt-4">GIỎ HÀNG CỦA BẠN</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/account">Tài khoản</a></li>
                            <li className="breadcrumb-item active">Giỏ hàng của bạn</li>
                        </ol>
                        <h1 style={{ textAlign: 'center', marginTop: '10%', color: 'red' }}>Giỏ hàng trống</h1>
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
