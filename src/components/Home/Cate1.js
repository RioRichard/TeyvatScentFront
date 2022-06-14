import React from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
export function Content(props) {
    const url = `https://localhost:44380/api/Cart/AddToCart`

    var name = props.name
    var product = props.data
    var count = 0;
    // console.log(product)
    var result;
    let auth = sessionStorage.getItem("data")

    function currencyFormat(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'
    }
    function submit(e,item) {
        var id = item.idProduct;
        console.log(id)
        if (auth == null) {
            swal({
                title: "Tiến hành đăng nhập để mua hàng",
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
                    window.location.href="/signandlog"
                }
            })
        }
        else {
            fetch(url, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                },
                body: JSON.stringify(
                    {
                        "idProduct": id,
                        "quantity": 1
                    }
                )
            })
            swal({
                title: "Thêm sản phẩm vào giỏ hàng thành công!!",
                icon: "success",
                dangerMode: 'Xác nhận',
            })
        }
    }

    if (product) {
        result = (
            <div style={{ marginTop: '150px' }} className="container">
                <div style={{ border: '5px solid blue', borderRadius: '20px', padding: '5px', margin: '10px 0' }}>
                    <h2 style={{fontWeight:'bold',fontSize:'42px', marginBottom:'30px'}} className="text-center">{name}  </h2>
                    <div className="row">
                        {product.map(item => {
                            if (count < 8) {
                                count++
                                return (
                                    <div key={item.idProduct} className="col-3">
                                        <div style={{ minHeight: '450px', maxHeight: '450px' }}>
                                            <a href={`/ProductDetail/${item.idProduct}`}>
                                                <img src={'https://localhost:44380//Image/' + item.imageUrl} className="card-img-top" style={{ minWidth: '100px', maxWidth: '150px', height: "180px", marginLeft:'35px' }} />
                                            </a>
                                            <div className="card-body">
                                                <Link style={{ textDecoration: 'none' }} to={`/ProductDetail/${item.idProduct}`}>
                                                    <h5 className="card-title" style={{ minHeight: '80px', color: 'black' }} dangerouslySetInnerHTML={{ __html: item.name }}></h5>
                                                </Link>
                                                <h5 className="card-price" style={{ minHeight: '20px', color: 'red' }}>Giá: {currencyFormat(item.price)}</h5>
                                                <a href={`/ProductDetail/${item.idProduct}`} className="btn btn-primary">Info</a>
                                                <button name="add" className="btn btn-outline-danger" onClick={(e) => submit(e, item)} pid={item.idProduct}><FontAwesomeIcon icon={faCartArrowDown} /></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}

                    </div>
                </div>
            </div>)
    }
    return result;
}


