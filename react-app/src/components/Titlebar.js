import React from 'react'

export default function Titlebar() {
  return (
    <header>
      <div className='Header'>
        <div className="Title">
          <span>VoxelEngine Launcher</span>
        </div>
        <div className="titleButtons">
          <div>
            -
          </div>
          <div>
            □
          </div>
          <div className='closeButton'>
            x
          </div>
        </div>
      </div>
    </header>
  )
}
