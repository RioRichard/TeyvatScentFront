import React from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
export function Content(props) {
    const url = `https://localhost:44380/api/Cart/AddToCart`

    var name = props.name
    var product = props.data
    var count = 0;
    // console.log(product)
    var result;
    const sweetAlertClick = () => {
                swal({
                    title: "Thêm sản phẩm vào giỏ hàng thành công!!",
                    icon: "success",
                    dangerMode: 'Xác nhận',
                })
    }


    let auth = localStorage.getItem('token')
    function submit(e, item) {
        var id = item.idProduct;
        console.log(id)
        fetch(url, {
            method: 'post',
            headers:{
         Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + auth,
                  
            
        },
        body: JSON.stringify(
            {
                "idProduct": id,
                "quantity": 3
              }
        )
    })
    sweetAlertClick();
    }

    if (product) {
        result = (
            <div style={{ marginTop: '150px' }} className="container">
                <div style={{ border: '5px solid blue', borderRadius: '20px', padding: '5px', margin: '10px 0' }}>
                    <h2 className="text-center">{name}  </h2>
                    <div className="row">
                        {product.map(item => {
                            if (count < 8) {
                                count++
                                return (
                                    <div key={item.idProduct} className="col-3">
                                        <div style={{ minHeight: '450px', maxHeight: '450px' }}>
                                            <a href={`/ProductDetail/${item.idProduct}`}>
                                                <img src={'https://localhost:44380//Image/' + item.imageUrl} className="card-img-top" style={{ minWidth: '100px', maxWidth: '150px', height: "180px" }} />
                                            </a>
                                            <div className="card-body">
                                                <Link to={`/ProductDetail/${item.idProduct}`}>
                                                    <h5 className="card-title" style={{ minHeight: '100px', color: 'black' }} dangerouslySetInnerHTML={{ __html: item.name }}></h5>
                                                </Link>
                                                <h5 className="card-price" style={{ minHeight: '20px', color: 'red' }}>Giá: {item.price} VND</h5>
                                                <a href={`/ProductDetail/${item.idProduct}`} className="btn btn-primary">Info</a>
                                                <button name="add" className="btn btn-outline-danger" onClick={(e) => submit(e,item)} pid={item.idProduct}>Add</button>
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


