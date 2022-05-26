import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import '../Content/CSS/Button.css'
import { AddProduct } from './AddProduct'
import { EditProduct } from './EditProduct'
import Popup from "reactjs-popup";
// import $ from 'jquery';
export function Product() {

    const url = `https://localhost:44380/api/Product`


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
    
    const pageCount = Math.ceil(Object.keys(product).length / productPerPage)
    // var count = 0;
    if (product) {
        content = (
            <div>
                <div>
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">DANH MỤC</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                                <li className="breadcrumb-item active">DANH MỤC</li>
                            </ol>

                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead className="bg-dark" style={{ color: 'white' }}>
                                        <tr>

                                            <td>Tên Sản Phẩm</td>
                                            <td>Giá</td>
                                            <td>Số Lượng</td>
                                            <td>Hình Ảnh</td>
                                            <td>Sửa Thông Tin Sản Phẩm</td>
                                            <td>Xóa Thông Tin Sản Phẩm</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product
                                            .slice(pagesVisited, pagesVisited+productPerPage)
                                            .map(item => {
                                            return (<tr key={item.idProduct}>
                                                <td>
                                                    <h5 className="product-name" style={{ color: 'black' }} dangerouslySetInnerHTML={ { __html: item.name}}></h5>
                                                    
                                                </td>
                                                <td>
                                                    <h5 className="product-name" style={{ color: 'black' }} >{item.price}</h5>
                                                </td>
                                                <td>
                                                    <h5 className="product-name" style={{ color: 'black' }}>{item.stock}</h5>
                                                </td>
                                                <td>
                                                    <img src={'https://localhost:44380//Image/' + item.imageUrl} className="card-img-top" style={{ minWidth: '100px', maxWidth: '150px' }} />
                                                </td>
                                                <td>
                                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                        <Popup modal trigger={<button className="btn btn-primary btn-editproduct" >
                                                        SỬA
                                                    </button>}>
                                                        {close => <EditProduct close={close} />}
                                                    </Popup>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                        <button className="btn btn-primary" name="delete" >XÓA</button>
                                                    </div>
                                                </td>
                                            </tr>)

                                        })}
                                    </tbody>
                                </table>
                                <div className="form-group">
                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <Popup modal trigger={<button className="btn btn-primary btn-addproduct">Thêm Sản Phẩm</button>}>
                                            {close => <AddProduct close={close} />}
                                        </Popup>
                                    </div>
                                </div>
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