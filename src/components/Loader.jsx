import React from 'react'

export default function Loader(){
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
