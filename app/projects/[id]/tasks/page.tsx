import React from 'react'
type PropTypes = {
    params:{
        id:number,
        
    }
}
export default function PostProject({ params}: PropTypes) {
  return (
    <div>
      <h1>trangg nhiệm vụ dự án có ID : {params.id}</h1>
    </div>
  )
}
