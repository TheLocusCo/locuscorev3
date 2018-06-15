import React from 'react'
import './style.css'

export const HeaderLogo = props => {
  return (
    <div style={{fontSize: '30px'}}>
      <div className='header-line-1 header-line' data-title='THELOCUS'>
        <h1 className='header-css'>THELOCUS</h1>
      </div>
      <div className='header-line-2 header-line' data-title='__________'>
        <h1 className='header-css-divider'>__________</h1>
      </div>
      <div className='header-line-3 header-line' data-title='LOUIS'>
        <h1 className='header-css'>LOUIS</h1>
      </div>
      <div className='header-line-4 header-line' data-title='ALRIDGE'>
        <h1 className='header-css header-line-4'>ALRIDGE</h1>
      </div>
    </div>
  )
}

export default HeaderLogo
