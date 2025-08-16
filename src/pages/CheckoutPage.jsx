import React, { useState } from 'react'
import { useCart } from '../contexts/CartContext'

export default function CheckoutPage(){
  const { items, totalAmount, clear } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', zip: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const e = {}
    if(!form.name) e.name = 'Name is required'
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Valid email required'
    if(!form.address) e.address = 'Address required'
    if(!form.city) e.city = 'City required'
    if(!/^\d{5,6}$/.test(form.zip)) e.zip = 'Valid ZIP required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if(!validate()) return
    setSubmitted(true)
    clear()
  }

  if(submitted){
    return (
      <div className="text-center py-5">
        <h4>Thank you! 🎉</h4>
        <p>Your order has been placed successfully.</p>
      </div>
    )
  }

  if(items.length === 0){
    return <div className="text-center py-5">No items to checkout.</div>
  }

  return (
    <div className="row g-4">
      <div className="col-lg-7">
        <h5 className="mb-3">Shipping Details</h5>
        <form onSubmit={submit} noValidate>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input name="name" className={"form-control " + (errors.name ? 'is-invalid' : '')} value={form.name} onChange={handleChange} />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input name="email" className={"form-control " + (errors.email ? 'is-invalid' : '')} value={form.email} onChange={handleChange} />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="col-12">
              <label className="form-label">Address</label>
              <input name="address" className={"form-control " + (errors.address ? 'is-invalid' : '')} value={form.address} onChange={handleChange} />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input name="city" className={"form-control " + (errors.city ? 'is-invalid' : '')} value={form.city} onChange={handleChange} />
              {errors.city && <div className="invalid-feedback">{errors.city}</div>}
            </div>
            <div className="col-md-6">
              <label className="form-label">ZIP</label>
              <input name="zip" className={"form-control " + (errors.zip ? 'is-invalid' : '')} value={form.zip} onChange={handleChange} />
              {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
            </div>
          </div>
          <button className="btn btn-success mt-3" type="submit">Place Order</button>
        </form>
      </div>
      <div className="col-lg-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Order Summary</h5>
            <ul className="list-group list-group-flush mb-3">
              {items.map(i => (
                <li key={i.id} className="list-group-item d-flex justify-content-between">
                  <span>{i.title} × {i.qty}</span>
                  <span>₹{(i.price * i.qty).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
