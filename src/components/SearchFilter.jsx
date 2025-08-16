import React from 'react'

export default function SearchFilter({ search, setSearch, category, setCategory, maxPrice, setMaxPrice, categories }){
  return (
    <div className="row g-2 mb-3">
      <div className="col-12 col-md-6">
        <input className="form-control" placeholder="Search products..." value={search} onChange={e=>setSearch(e.target.value)} />
      </div>
      <div className="col-6 col-md-3">
        <select className="form-select" value={category} onChange={e=>setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="col-6 col-md-3">
        <input type="range" className="form-range" min="0" max="20000" step="50" value={maxPrice} onChange={e=>setMaxPrice(Number(e.target.value))} />
        <small className="text-secondary">Max Price: ₹{maxPrice}</small>
      </div>
    </div>
  )
}
