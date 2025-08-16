import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import Loader from '../components/Loader'
import { useCart } from '../contexts/CartContext'

export default function ProductDetail(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    const t = setTimeout(() => {
      const p = products.find(p => String(p.id) === id)
      setProduct(p || null)
      setLoading(false)
    }, 400)
    return () => clearTimeout(t)
  }, [id])

  if(loading) return <Loader />
  if(!product) return <div className="py-5 text-center">Product not found</div>

  return (
    <div className="row g-4">
      <div className="col-md-6 text-center">
        <img src={product.image} alt={product.title} className="img-fluid" style={{maxHeight: 360, objectFit:'contain'}} />
      </div>
      <div className="col-md-6">
        <h3>{product.title}</h3>
        <div className="mb-2"><span className="badge text-bg-secondary">{product.category}</span></div>
        <p className="text-muted">{product.description}</p>
        <h4 className="text-success mb-3">₹{product.price.toFixed(2)}</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={()=>addToCart(product)}>
            <i className="bi bi-cart-plus me-1"></i>Add to Cart
          </button>
          <Link to="/cart" className="btn btn-outline-secondary">Go to Cart</Link>
        </div>
      </div>
    </div>
  )
}
