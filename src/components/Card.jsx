import React from 'react'
import { Link } from 'react-router-dom'

function Card({data}) {
    console.log(data)
  return (
    <div className='bg-zinc-100 rounded-lg p-4 w-74'>
        <img className='w-full h-32' src={data.thumbnail} alt={data.title} />
        <h4>{data.title}</h4>
        <p>{data.price}</p>
        <p>{data.color}</p>
        <Link to={`/${data.id}`} className='bg-green-300 text-white font-bold px-4 py-2 rounded-xl'>Buy Now</Link>
    </div>
  )
}

export default Card