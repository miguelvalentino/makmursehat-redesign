import React from 'react'

function Navbar() {
  return (
<header>
        <div className='container'>
        <nav>
            <div className='logo'>
                <h2>MakmurSehat</h2>
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