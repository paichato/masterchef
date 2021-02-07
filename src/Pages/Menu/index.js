import React from 'react'
import { CloseIcon, MenuFrame } from './MenuElements'

const Menu=({open,setOpen})=> {
    return (
        <>
            <MenuFrame open={open} setOpen={setOpen} >
                <div className="central">
                    <button onClick={()=>setOpen(!open)} open={open} >
                        <CloseIcon/>
                        
                    </button>
                    <a href="/">
                        Minha Conta
                    </a>
                    <a href="/">
                    Meus Pedidos
                    </a>
                    <a href="/">
                    Minha Conta
                    </a>

                </div>
            </MenuFrame>
        </>
    )

  
}

export default Menu
