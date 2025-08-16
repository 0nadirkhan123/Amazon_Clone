import React from 'react'

export default function Banner(){
  return (
    <div className="banner p-4 p-md-5 mb-4 text-dark">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h1 className="display-6 fw-bold">Welcome to Amazon</h1>
          <p className="lead">Find great products at tiny prices. This is a cloned project of Amazon .</p>
        </div>
        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/amazon.svg" alt="logo" width="96" />
        </div>
      </div>
    </div>
  )
}
