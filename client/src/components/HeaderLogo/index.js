import React from 'react'
import './style.css'

export const HeaderLogo = props => {
  return (
    <div style={{fontSize: '30px'}}>
      <div className='header-line-1 header-line' data-title='TheLocus'>
        <h1 className='header-css'>TheLocus</h1>
      </div>
      <div className='header-line-2 header-line' data-title='Louis'>
        <h1 className='header-css'>Louis</h1>
      </div>
      <div className='header-line-3 header-line' data-title='______'>
        <h1 className='header-css-divider header-line-3'>______</h1>
      </div>
      <div className='header-line-4 header-line' data-title='Alridge'>
        <h1 className='header-css header-line-4'>Alridge</h1>
      </div>
    </div>
  )
}

export default HeaderLogo
