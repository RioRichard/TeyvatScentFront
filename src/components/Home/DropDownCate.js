import React, { useState, useEffect } from 'react'
import './Dropdowncss.css'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

export function DropDownCate() {
  const url = `https://localhost:44380/api/Category`
  const [category, setCategory] = useState(0)
  useEffect(() => {
    fetch(url)
      .then(response => response.json()

      ).then(data => setCategory(data))
  }, [url])
  let content = null
  if (category) {
    content =
      <div className='menu'>
        {category.map(item=>{
          return(
            <a className='content-item' style={{textDecoration:'none'}} href={`/search/ProductbyCategory/${item.idCategory}`}>{item.categoryName}</a>
          )
        })}
      </div>
  }
  return (
    (
      <div>
        {content}
      </div>
    )
  )
}