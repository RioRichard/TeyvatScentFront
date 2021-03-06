import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import '../Content/CSS/Button.css'
import Popup from "reactjs-popup";
import { AddCategory } from './AddCategory'
import { EditCategory } from './EditCategory'
import swal from 'sweetalert'
import Url from '../Home/URL'
export function Category() {
    const url = Url + `/api/Category`
    const delUrl=Url + "/api/Category/DeleteCate"
    let  authAdmin = sessionStorage.getItem('dataAdmin') 
    function submit(item,e){
        var id=item.idCategory;
        console.log(id);
        swal({
            title: "Bạn chắc chắn muốn xóa?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
              fetch(delUrl,{
                method:'delete',
                headers: { 'Content-Type': 'application/json',
                'Authorization': "Bearer " + authAdmin, },
                body: JSON.stringify(
                    id
                  )
            })
            .then(response => {
                if (response.status == 200) {
                    swal({
                        title: "Xóa danh mục thành công?",
                        icon: "success",
                        dangerMode: 'Xác nhận'
                      }).then(dangerMode => {
                        if (dangerMode) {
                            window.location.reload();
                        }
                    });
                }
                else {
                    swal({
                        title: "Xảy ra lỗi khi thực hiện lệnh",
                        icon: "error",
                        dangerMode: 'Xác nhận',
                    })
                }
            })
            } else {
              swal({
                title: "Lệnh xóa đã thu hồi",
                dangerMode: 'Xác nhận'
              });
            }
        })
    }

    const [category, setCategory] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const productPerPage = 8
    const pagesVisited = pageNumber * productPerPage

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    let content = null


    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setCategory(data))
    }, [url])
    const pageCount = Math.ceil(Object.keys(category).length / productPerPage)
    
    if (category) {
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
                                    <thead className="bg-dark" style={{ color: 'white'}}>
                                        <tr >
                                            <td style={{fontSize:'15px'}}>Tên Danh Mục</td>
                                            <td style={{fontSize:'15px'}}>Sửa Danh Mục</td>
                                            <td style={{fontSize:'15px'}}>Xóa Danh Mục</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {category
                                            .slice(pagesVisited, pagesVisited + productPerPage)
                                            .map(item => {
                                                return (
                                                <tr key={item.categoryName} >
                                                    <td>
                                                        <h5 className="categorye-name" style={{ color: 'black' }}>{item.categoryName}</h5>
                                                    </td>
                                                    <td>
                                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                            <Popup modal trigger={<button  className="btn btn-primary btn-editcategory" >
                                                                SỬA
                                                            </button>}>
                                                                {close => <EditCategory close={close} logedcategory={item}/>}
                                                            </Popup>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" style={{ marginTop: '0px !important' }}>
                                                            <button onClick={(e) => submit(item,e)} className="btn btn-primary" id="del-id"  name={item.idCategory}>XÓA</button>
                                                        </div>
                                                    </td>
                                                </tr>)
                                            })}
                                    </tbody>
                                </table>
                                <div className="form-group">
                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <Popup modal trigger={<button className="btn btn-primary btn-addcategory" >Thêm Danh Mục</button>}>
                                            {close => <AddCategory close={close} />}
                                        </Popup>
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
        )
    }
    return (
        <div>
            {content}
        </div>
    )
}