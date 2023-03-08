import React from 'react'
import formatCurrency from '../utilities/formatCurrency'
import Link from 'next/link'

const ItemCard = ({ id, image, name, price }) => {
  const route = name.replace(/\s+/g, '-').toLowerCase() + '-' + 'p' + id.toString()
  return (
    <div className='bg-white p-2'>
      <Link href='/item/[id]' as={`/item/${route}`}><img src={`http://localhost:5001${image}`} alt='/' className='cursor-pointer' layout='responsive' /></Link>
      {/* Overlay */}
      <div className='flex flex-col space-y-1 text-left jostfamily font-light'>
        <div className='hover:underline h-4 text-sm overflow-hidden'><Link href='/item/[id]' as={`/item/${route}`}>{name}</Link></div>
        <div className='text-sm'>{formatCurrency(price / 100)}</div>
      </div>
    </div>
  )
}

export default ItemCard