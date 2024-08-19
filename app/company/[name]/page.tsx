import React from 'react'
type PropTypes = {
    params:{
        name:string,
        
    }
}
export default function PostName({params}: PropTypes) {
  return (
    <div>
      <h1>tên sản phẩm : {params.name}</h1>
    </div>
  )
}
