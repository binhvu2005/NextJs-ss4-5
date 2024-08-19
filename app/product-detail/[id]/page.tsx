import React from 'react'
type PropTypes = {
    params:{
        id:number,
        
    }
}
export default function PostDetail({ params}: PropTypes) {
  return (
    <div>
      <h1>ID sản phẩm : {params.id}</h1>
    </div>
  )
}
