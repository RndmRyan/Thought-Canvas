import React from 'react'

import Header from './subcomponents/Header'


function blogsearch() {
  return (
    <div>
      <Header />

      <div className='HeroSection dividerTop2'>    
          <h2>Lets Find Some Thoughts To Admire</h2>
          <div className='searchBar'>
            <input placeholder='Search' />
            <button className='filters'><i class="fa-solid fa-filter"></i></button>
            <button className='searchIcon'><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
      </div>

      <div className='BlogPagination'>
      </div>

    </div>
  )
}

export default blogsearch