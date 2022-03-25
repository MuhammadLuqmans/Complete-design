import React from 'react'
import { Menu } from './Data'
import MenuCompnent from './Menu'

const MyMenuItems=(data)=>{
    return(
      Menu.map((list)=>{
        return(
            <div class="menu-item" style="border-bottom: 3px solid white; border-right: 3px solid white; margin-top:10px" key={list.id}>
            <h3>{list.id}</h3>
            <img src={list.img} alt={list.title} width="300" class="photo" />
            <div class="list-info">
              <header>
                <h4>{list.title}</h4>
                <h4 class="price">{list.price}</h4>
              </header>
              <p class="list-text">
                {list.desc}
              </p>
            </div>
          </div>
            
        )
    })
    )
}

export default MyMenuItems