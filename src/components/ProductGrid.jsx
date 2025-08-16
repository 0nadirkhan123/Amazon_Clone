import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import SearchFilter from './SearchFilter'
import Loader from './Loader'
import productsData from '../data/products'

export default function ProductGrid(){
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [maxPrice, setMaxPrice] = useState(20000)

  useEffect(() => {
    // Simulate fetch
    const t = setTimeout(() => {
      setProducts(productsData)
      setLoading(false)
    }, 600)
    return () => clearTimeout(t)
  }, [])

  const categories = useMemo(() => Array.from(new Set(productsData.map(p => p.category))), [])

  const filtered = useMemo(() => {
    return products
      .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
      .filter(p => category ? p.category === category : true)
      .filter(p => p.price <= maxPrice)
  }, [products, search, category, maxPrice])

  if(loading) return <Loader />

  return (
    <div>
      <SearchFilter
        search={search} setSearch={setSearch}
        category={category} setCategory={setCategory}
        maxPrice={maxPrice} setMaxPrice={setMaxPrice}
        categories={categories}
      />
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
