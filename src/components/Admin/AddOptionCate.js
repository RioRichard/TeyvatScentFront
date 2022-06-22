import React, { useState, useEffect } from 'react'
import Url from '../Home/URL'
export function AddOptionCate() {
    const url = Url + "/api/Category"
    const [category, setCategory] = useState(0)
    let content= null
    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setCategory(data))
    }, [url])

    const getCateOption = (event) => {
        event.preventDefault();
        const CateOption = event.target.value;
        console.log(CateOption);
    };

    if (category)
        content =
            <div className="">
                <label htmlFor="text-tickets" className="modal-label">
                    Chọn Danh Mục Cho Sản Phẩm
                </label>
                <select name="idCate" id="" className="form-control"  style={{ maxWidth: '50%' }} onChange={getCateOption}>
                    {category.map(item => {
                        return (
                            <option key={item.idCategory} defaultValue={item.idCategory}>{item.categoryName}</option>
                        )
                    }
                    )}
                </select>
            </div>
    return (
        <div>
            {content}
        </div>
    )
}