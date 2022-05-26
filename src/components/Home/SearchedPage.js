
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate'

export function SearchedPage() {

    const { state } = useLocation();
    const url = `https://localhost:44380/api/Product/Search/` + state.value
    const [product, setProduct] = useState(0)

    const [pageNumber, setPageNumber] = useState(0)


    const productPerPage = 8
    const pagesVisited = pageNumber * productPerPage

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    // const option = { method: "GET", mode: 'no-cors', headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    let content = null

    useEffect(() => {
        fetch(url)
            .then(response => response.json()

          ).then(data => setProduct(data))
  }, [url])        
  const pageCount = Math.ceil(Object.keys(product).length / productPerPage) 
 
  if (product) {
    content =
        <div className="" style={{ padding: '0!important' }} >
            <div className="row">
                <div className="col-12" >
                    <div className="">
                        <h1><strong>Kết quả tìm kiếm cho "{state.value}"</strong></h1>
                        <div className="row" style={{ marginRight: '-200px' }}>
                            {product
                                .slice(pagesVisited, pagesVisited+productPerPage)
                                .map(item => (
                             
                                <div key={item.name} className="col-3" style={{ paddingBottom: '40px', marginTop:'200px' }}>
                                <div className="" style={{ maxHeight: '100px', maxWidth: '150px', minHeight: '250px' }}>
                                    <a href={`/ProductDetail/${item.idProduct}`}>
                                        <img width={160} height={160} src={'https://localhost:44380//Image/' + item.imageUrl} alt={item.name} className="card-img-top" />
                                    </a>
                                    <div className="">
                                        <a href={`/ProductDetail/${item.idProduct}`}>
                                            <h5 style={{ minHeight: '50px', color: 'black', fontSize: '15px' }} className="card-title" dangerouslySetInnerHTML={ { __html: item.name}}></h5>
                                        </a>
                                        <h6 style={{color:'red'}} className="card-price">{item.price} VND</h6>


                                                </div>
                                            </div>
                                        </div>



                                    )
                                    )}

                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ marginLeft: '45%' }}>
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


    }
    return (

        <div>
            {content}
        </div>

    )

}   