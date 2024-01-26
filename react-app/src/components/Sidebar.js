import React from 'react'

export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='SidebarButtons'>
          <div>
            <div>
                <img src='src/img/game.svg' alt=''/>
            </div>
            <div>
                <img src='src/img/mods.svg' alt=''/>
            </div>
            <div>
                <img src='src/img/modpack.svg' alt=''/>
            </div>
          </div>
          <div>
            <div>
                <img src='src/img/settings.svg' alt=''/>
            </div>
          </div>
        </div>
    </div>
  )
}
