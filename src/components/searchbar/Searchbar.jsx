import React, { useState } from 'react'
import './searchbar.scss'

export default function Searchbar() {

  const types = ["Buy", "Rent"];

  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    max: "0",
    min: "0"
  })

  const switchType = (val) => {
    setQuery((prev) => ({...prev, type: val}))
  }

  return (
    <div className='searchbar'>
        <div className="type">
            {types.map((type) => (
              <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>{type}</button>
            ))}
        </div>
        <form>
            <input type='text' name='location' placeholder='City Location'/>
            <input type='text' name='minPrice' min={0} max={100000000} placeholder='Min Price'/>
            <input type='text' name='maxPrice' min={0} max={100000000} placeholder='Max Price'/>
            <button><img src="/search.png" alt="" /></button>
        </form>
    </div>
  )
}
