import React from 'react'
import Categories from '../components/Home/Categories'
import Products from '../components/Store/Products'

export default function Store() {
  return (
    <div className=' container'>
      <div className='py-3'>
        <div>
          <Products/>
        </div>
        <div>
          <Categories/>
        </div>
      </div>
    </div>
  )
}
