import React from 'react'
import searchIcon from '../assets/search.png'

function Navbar() {
  return (
<header>
        <div className='container'>
        <nav>
            <div className='logo'>
                <h2>MakmurSehat</h2>
            </div>
            <div className='search-bar'>
                <input type="text" placeholder="Cari..." />
                <button type="submit">
                    <img src={searchIcon} alt="Cari" />
                </button>
            </div>
            <ul className='nav-link'>
                <li><a href="/home">Home</a></li>
                <li><a href="/Popular">Popular</a></li>
                <li><a href="/Recipes">Recipes</a></li>
                <li><a href="/About">About</a></li>
            </ul>
        </nav>
    </div>
</header>
  )
}

export default Navbar