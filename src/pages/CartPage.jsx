import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function CartPage(){
  const { items, removeOne, removeAll, addToCart, totalAmount } = useCart()

  if(items.length === 0){
    return (
      <div className="text-center py-5">
        <h5>Your cart is empty</h5>
        <Link to="/" className="btn btn-primary mt-3">Shop now</Link>
      </div>
    )
  }

  return (
    <div className="row g-4">
      <div className="col-lg-8">
        <ul className="list-group">
          {items.map(it => (
            <li key={it.id} className="list-group-item d-flex align-items-center">
              <img src={it.image} alt={it.title} width="64" height="64" style={{objectFit:'contain'}} className="me-3" />
              <div className="flex-grow-1">
                <div className="fw-semibold">{it.title}</div>
                <div className="text-muted small">{it.category}</div>
                <div className="mt-1">
                  <span className="badge text-bg-success me-2">₹{it.price.toFixed(2)}</span>
                  <span className="badge text-bg-secondary">Qty: {it.qty}</span>
                </div>
              </div>
              <div className="btn-group">
                <button className="btn btn-sm btn-outline-secondary" onClick={()=>removeOne(it.id)}>-</button>
                <button className="btn btn-sm btn-outline-secondary" onClick={()=>addToCart(it)}>+</button>
                <button className="btn btn-sm btn-outline-danger" onClick={()=>removeAll(it.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Order Summary</h5>
            <p className="card-text">Subtotal: <strong>₹{totalAmount.toFixed(2)}</strong></p>
            <div className="d-grid gap-2">
              <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
              <Link to="/" className="btn btn-outline-secondary">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
