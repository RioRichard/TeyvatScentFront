import React, { useState, useEffect } from 'react'
export function AddOptionCate() {
    const url = "https://localhost:44380/api/Category"
    const [category, setCategory] = useState(0)
    let content= null
    useEffect(() => {
        fetch(url)
            .then(response => response.json()

            ).then(data => setCategory(data))
    }, [url])

    if (category)
        content =
            <div className="">
                <label for="text-tickets" className="modal-label">
                    Chọn Danh Mục Cho Sản Phẩm
                </label>
                <select name="idCate" id="" className="form-control" onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();' style={{ maxWidth: '50%' }}>
                    {category.map(item => {
                        return (
                            <option value="@item.IDCategory">{item.categoryName}</option>
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