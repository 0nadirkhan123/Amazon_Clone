import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('cart-items')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(items))
  }, [items])

  const addToCart = (product) => {
    setItems(prev => {
      const found = prev.find(p => p.id === product.id)
      if(found){
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeOne = (id) => {
    setItems(prev => prev.flatMap(p => {
      if(p.id !== id) return [p]
      if(p.qty <= 1) return []
      return [{ ...p, qty: p.qty - 1 }]
    }))
  }

  const removeAll = (id) => setItems(prev => prev.filter(p => p.id !== id))

  const clear = () => setItems([])

  const totalQty = useMemo(() => items.reduce((s,i)=> s + i.qty, 0), [items])
  const totalAmount = useMemo(() => items.reduce((s,i)=> s + i.qty * i.price, 0), [items])

  return (
    <CartContext.Provider value={{ items, addToCart, removeOne, removeAll, clear, totalQty, totalAmount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  return useContext(CartContext)
}
