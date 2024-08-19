import React from 'react'
type PropTypes = {
    params:{
        id:number,
        
    }
}
export default function PostUser({ params}: PropTypes) {
  return (
    <div>
      <h1>ID nguoi dung : {params.id}</h1>
    </div>
  )
}
