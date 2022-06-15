import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import '../Content/CSS/Button.css'
import swal from 'sweetalert'
export function DeletedProduct() {
    const url = `https://localhost:44380/api/Product`
    const deurl = 'https://localhost:44380/api/Product/Delete'
    const updateurl = 'https://localhost:44380/api/Product/Update/'
    const [product, setProduct] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const productPerPage = 8
    const pagesVisited = pageNumber * productPerPage

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    let content = null
    useEffect(() => {
        fetch(url)
            .then(response =>
                response.json()
            ).then(data => setProduct(data))
    }, [url])

    function submit(item, e) {
        var id = item.idProduct;
        console.log(id);
        swal({
            title: "Bạn chắc chắn muốn xóa?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(deurl, {
                    method: 'delete',
                    headers: { 'Content-Type': 'application/json' },
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
    function submitTTKD(item, e) {
        var id = item.idProduct;
        var idCategory = item.idCategory
        var name = item.name
        var price = item.price
        var imageurl = item.imageUrl
        var description = item.description
        var shortDescription = item.shortDescription
        console.log(id);
        swal({
            title: "Tiếp tục kinh doanh sản phẩm?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(updateurl + id, {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        {
                            "idCategory": idCategory,
                            "name": name,
                            "price": price,
                            "stock": 0,
                            "imageUrl": imageurl,
                            "isDelete": false,
                            "description": description,
                            "shortDescription": shortDescription
                        }
                    )
                })
                swal({
                    title: "Sản phẩm đã được lên kệ hàng",
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
    var count = 0
    var tempPageCount
    var pageCount
    var tempDeletedProduct
    var deletedProduct = []
    if(product)
    {
        product.map(item =>{
            if(item.isDelete == true)
            {
                count ++
            }
        })
        tempPageCount = count;
    }
    if(tempPageCount)
    {
         pageCount = Math.ceil(count / productPerPage)
    }
  console.log(product)
    if (product) {
        content =
            <div className='wrapper'>
                <div>
                    <div>
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">SẢN PHẨM ĐÃ XÓA</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                                    <li className="breadcrumb-item active">SẢN PHẨM ĐÃ XÓA</li>
                                </ol>

                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead className="bg-dark" style={{ color: 'white' }}>
                                            <tr>

                                                <td>Tên Sản Phẩm</td>
                                                <td>Giá</td>
                                                <td>Số Lượng</td>
                                                <td>Hình Ảnh</td>
                                                <td>Tiếp tục kinh doanh sản phẩm</td>
                                                <td>Xóa Thông Tin Sản Phẩm</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product
                                                .filter(o => o.isDelete ==  true)
                                                .slice(pagesVisited, pagesVisited + productPerPage)
                                                .map(item => {
                                                    if (item.isDelete == true) {
                                                        return (<tr key={item.idProduct}>
                                                            <td>
                                                                <h5 className="product-name" style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: item.name }}></h5>

                                                            </td>
                                                            <td>
                                                                <h5 className="product-name" style={{ color: 'black' }} >{currencyFormat(item.price)}</h5>
                                                            </td>
                                                            <td>
                                                                <h5 className="product-name" style={{ color: 'black' }}>{item.stock}</h5>
                                                            </td>
                                                            <td>
                                                                <img src={'https://localhost:44380//Image/' + item.imageUrl} className="card-img-top" style={{ width: '150px', height: '150px', borderRadius: '0%' }} />
                                                            </td>
                                                            <td>
                                                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                                    <button className="btn btn-primary" name="stopStonk" onClick={(e) => submitTTKD(item,e)}>KHÔI PHỤC</button>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                                    <button className="btn btn-primary" name="delete" onClick={(e) => submit(item,e)} >XÓA</button>
                                                                </div>
                                                            </td>
                                                        </tr>)
                                                    }
                                                })}
                                        </tbody>
                                    </table>
                                    <div className="form-group">
                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <ReactPaginate
                        preveousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </div>
    }
    return (
        <div>
            {content}
        </div>
    )

}