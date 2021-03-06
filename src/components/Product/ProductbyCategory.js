import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ReactPaginate from 'react-paginate'
import Url from '../Home/URL'
export function ProductbyCategory() {
    const params = useParams();
    const url = Url + `/api/Product/GetByCategory/${params.idCategory}`
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
            .then(response => response.json()

            ).then(data => setProduct(data))
    }, [params.idCategory])
    const pageCount = Math.ceil(Object.keys(product).length / productPerPage)

    function currencyFormat(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'
    }
    if (product) {
        content =
            <div className="" style={{ padding: '0!important' }} >
                <div className="row">
                    <div className="col-12" >
                        <div className="">
                            <div className="row" style={{ marginRight: '-200px' }}>
                                {product
                                    .slice(pagesVisited, pagesVisited + productPerPage)
                                    .map(item => (
                                    <div key={item.name} className="col-3" style={{ paddingBottom: '40px' }}>
                                        <div className="" style={{ maxHeight: '100px', maxWidth: '150px', minHeight: '250px' }}>
                                            <a href={`/ProductDetail/${item.idProduct}`}>
                                                <img width={160} height={160} src={Url + '//Image/' + item.imageUrl} alt={product.name} className="card-img-top" />
                                            </a>
                                            <div className="">
                                                <a  style={{ textDecoration: 'none' }} href={`/ProductDetail/${item.idProduct}`}>
                                                    <h5 style={{ minHeight: '50px', color: 'black', fontSize: '15px' }} className="card-title" dangerouslySetInnerHTML={ { __html: item.name}}></h5>
                                                </a>
                                                <h6 style={{color:'red'}} className="card-price">{currencyFormat(item.price)} </h6>


                                            </div>
                                        </div>
                                    </div>
                                )
                                )}
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