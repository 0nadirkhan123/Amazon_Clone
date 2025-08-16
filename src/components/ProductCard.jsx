import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function ProductCard({ product }){
  const { addToCart } = useCart()

  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.title} style={{objectFit:'contain', height: 180}} />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title line-clamp-2">{product.title}</h6>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="badge text-bg-success price-badge">₹{product.price.toFixed(2)}</span>
            <div className="btn-group">
              <Link className="btn btn-sm btn-outline-primary" to={`/product/${product.id}`}>Details</Link>
              <button className="btn btn-sm btn-primary" onClick={()=>addToCart(product)}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
