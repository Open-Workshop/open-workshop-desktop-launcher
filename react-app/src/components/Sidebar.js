import React from 'react'

export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='SidebarButtons'>
          <div className='side-a-buttons'>
            <div>
                <img className='side-select' src='src/img/game.svg' alt='' draggable="false"/>
            </div>
            <div>
                <img className='side-select' src='src/img/mods.svg' alt='' draggable="false"/>
            </div>
            <div>
                <img className='side-select' src='src/img/modpack.svg' alt='' draggable="false"/>
            </div>
          </div>
          <div>
            <div className='side-b-buttons'>
                <img src='src/img/settings.svg' alt='' draggable="false"/>
            </div>
          </div>
        </div>
    </div>
  )
}
