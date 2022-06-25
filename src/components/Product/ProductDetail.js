import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import swal from 'sweetalert'
import Url from '../Home/URL'
export function ProductDetail() {
    const params = useParams();
    const url = Url + `/api/Product/${params.idProduct}`
    const cartUrl = Url + `/api/Cart/AddToCart`
    const [product, setProduct] = useState(null)
    let content = null

    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setProduct(data))
    }, [params.idProduct])
    let auth = sessionStorage.getItem("data")
    if(auth == null)
    {
        auth = sessionStorage.getItem("tokenGoogle")
    }
    function submit() {
        var id = params.idProduct;
        if (auth == null) {
            swal({
                title: "Tiến hành đăng nhập để mua hàng?",
                icon: "warning",
                buttons: {
                    cancel: "Thoát!",
                    willSign: {
                        text: "Đăng nhập!",
                        value: "willSign",
                    },
                },
            }).then((willSign) => {
                if (willSign) {
                    window.location.href = "/signandlog"
                }
            })
        }
        else {
            var quanlity = document.getElementById('quantity').value;
            fetch(cartUrl, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                },
                body: JSON.stringify(
                    {
                        "idProduct": id,
                        "quantity": quanlity
                    }
                )
            })
                .then(res => {
                    if (res.status == 200) {
                        swal({
                            title: "Đã thêm sản phẩm vào giỏ hàng",
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
                        }).then(dangerMode => {
                            if (dangerMode) {

                            }
                        })
                    }
                })
        }
    }
    function currencyFormat(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'
    }

    if (product) {
        content =
            <div className="container container-fluid" style={{ marginTop: '100px' }}>
                <div className="row f-flex justify-content-around">
                    <div className="col-12 col-lg-5 img-fluid" id="product_image">
                        <img src={Url + '//Image/' + product.imageUrl} alt={product.name} height="500" width="500" />
                    </div>

                    <div className="col-12 col-lg-5 mt-5">
                        <h3 dangerouslySetInnerHTML={{ __html: product.name }}></h3>
                        <hr />
                        <p id="product_price" ><strong>Giá cả:</strong> {currencyFormat(product.price)}</p>
                        <hr />
                        {product.stock > 0 &&
                            <div>
                                <label htmlFor="quantity"> <stong>Nhập số lượng:</stong></label>
                                <br />
                                <input style={{ marginTop: '12px' }} type="number" min="1" max="100" name="quantity" id="quantity" defaultValue={'1'}
                                />
                                <button type="button" style={{ padding: '10px', marginTop: '0px', marginLeft: '8px' }} id="cart_btn" className="btn btn-primary d-inline ml-4" onClick={(e) => submit(e)} >Add to Cart</button>

                            </div>}
                        {product.stock <= 0 &&
                            <span id="nothing2buy"  style={{ color: 'red' }}>HIỆN ĐANG NHẬP THÊM HÀNG</span>}
                        <hr />
                        <p><strong>Tồn Kho:</strong> </p>
                        {product.stock <= 0 &&
                            <span id="stock_status" style={{ color: 'red' }}>Hết Hàng</span>}
                        {product.stock > 0 &&
                            <span id="stock_status" >Còn Hàng</span>}
                        {product.stock = null &&
                            <span id="stock_status" style={{ color: 'red' }}>Hết Hàng</span>}
                        <hr />
                        <h4 className="mt-2">Mô Tả Thông Tin Sản Phẩm:</h4>
                        <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                        <hr />
                        <p id="product_seller mb-3">Sold by: <strong>KAZUHA C6</strong></p>
                    </div>
                </div>

            </div>
    }
    return (

        <div>
            {content}
        </div>

    )
}


