import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import '../Content/CSS/Button.css'
import { AddProduct } from './AddProduct'
import { EditProduct } from './EditProduct'
import Popup from "reactjs-popup"
import swal from 'sweetalert'
import Url from '../Home/URL'
// import $ from 'jquery';
export function Product() {
    const url = Url + `/api/Product`
    const deurl = Url + '/api/Product/Delete'
    const updateurl = Url +'/api/Product/Update/'
    let  authAdmin = sessionStorage.getItem('dataAdmin') 
    const [product, setProduct] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const productPerPage = 8
    const pagesVisited = pageNumber * productPerPage
  
    const changePage = ({selected}) =>{
        setPageNumber(selected)
    }
    
    let content = null
    useEffect(() => {
        fetch(url)
            .then(response => 
                    response.json()
            ).then(data => setProduct(data))
    }, [url])

    function submit(item,e){
        var id=item.idProduct;
        console.log(id);
        swal({
            title: "Bạn chắc chắn muốn xóa?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
              fetch(deurl,{
                method:'delete',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(
                    id
                  )
            })
            swal({
                title: "Xóa sản phẩm thành công?",
                icon: "success",
                dangerMode: 'Xác nhận'
              }).then(dangerMode => {
                if (dangerMode) {
                    window.location.reload();
                }
            });
            } else {
              swal({
                title: "Lệnh xóa đã thu hồi",
                dangerMode: 'Xác nhận'
              });
            }
        })
    }
    function submitNKD(item,e){
        var id=item.idProduct;
        var idCategory = item.idCategory
        var name = item.name
        var price = item.price
        var imageurl = item.imageUrl
        var description = item.description
        var shortDescription = item.shortDescription
        var stock = item.stock
        console.log(id);
        swal({
            title: "Tiến hành dừng kinh doanh sản phẩm?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
              fetch(updateurl + id,{
                method:'put',
                headers: {'Content-Type':'application/json',
                'Authorization': "Bearer " + authAdmin,},
                body: JSON.stringify(
                    {
                        "idCategory": idCategory,
                        "name": name,
                        "price": price,
                        "stock": stock,
                        "imageUrl": imageurl,
                        "isDelete": true,
                        "description": description,
                        "shortDescription": shortDescription
                      }
                  )
            })
            swal({
                title: "Sản phẩm đã ngừng kinh doanh",
                icon: "success",
                dangerMode: 'Xác nhận'
              }).then(dangerMode => {
                if (dangerMode) {
                    window.location.reload();
                }
            });
            } else {
              swal({
                title: "Đã thu hồi lệnh",
                dangerMode: 'Xác nhận'
              });
            }
        })
    }
    function currencyFormat(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'
    }
    const pageCount = Math.ceil(Object.keys(product).length / productPerPage)
    // var count = 0;
    if (product) {
        content = (
            <div>
                <div>
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">SẢN PHẨM</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                                <li className="breadcrumb-item active">DANH MỤC</li>
                            </ol>
                            <div className="form-group">
                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <Popup modal trigger={<button className="btn btn-primary btn-addproduct">Thêm Sản Phẩm</button>}>
                                            {close => <AddProduct close={close} />}
                                        </Popup>
                                    </div>
                                </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead className="bg-dark" style={{ color: 'white' }}>
                                        <tr>

                                            <td>Tên Sản Phẩm</td>
                                            <td>Giá</td>
                                            <td>Số Lượng</td>
                                            <td>Hình Ảnh</td>
                                            <td>Sửa Thông Tin Sản Phẩm</td>
                                            <td>Ngừng Kinh Doanh Sản Phẩm</td>
                                            <td>Xóa Thông Tin Sản Phẩm</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product
                                            .filter(o => o.isDelete ==  false)
                                            .slice(pagesVisited, pagesVisited+productPerPage)
                                            .map(item => {
                                                if(item.isDelete == false)
                                                { return (<tr key={item.idProduct}>
                                                    <td>
                                                        <h5 className="product-name" style={{ color: 'black' }} dangerouslySetInnerHTML={ { __html: item.name}}></h5>
                                                        
                                                    </td>
                                                    <td>
                                                        <h5 className="product-name" style={{ color: 'black' }} >{currencyFormat(item.price)}</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="product-name" style={{ color: 'black' }}>{item.stock}</h5>
                                                    </td>
                                                    <td>
                                                        <img src={Url + '//Image/' + item.imageUrl} className="card-img-top" style={{ width: '150px', height: '150px',borderRadius:'0%' }} />
                                                    </td>
                                                    <td>
                                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                            <Popup modal trigger={<button className="btn btn-primary btn-editproduct" >
                                                            SỬA
                                                        </button>}>
                                                            {close => <EditProduct close={close} logedproduct={item}/>}
                                                        </Popup>
                                                        </div>
                                                    </td>
                                                    <td>
                                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                            <button className="btn btn-primary" name="stopStonk" onClick={(e) => submitNKD(item,e)}>NGỪNG</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                            <button className="btn btn-primary" name="delete" onClick={(e) => submit(item,e)}>XÓA</button>
                                                        </div>
                                                    </td>
                                                </tr>)}
                                        })}
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </main>
                </div>
                
                <ReactPaginate  
                preveousLabel = {"Previous"}
                nextLabel = {"Next"}
                pageCount = {pageCount}
                onPageChange = {changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName ={"paginationActive"}
                />
            </div>

        )
    }
    return (
        <div>
            {content}
        </div>
    )
}