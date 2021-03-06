import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { CloseIcon, LinkR, MenuFrame } from './MenuElements'
import {Switch} from 'react-router';

const Menu=({open,setOpen})=> {
    return (
        <>
            <MenuFrame open={open} setOpen={setOpen} >
                <div className="central">
                    <button onClick={()=>setOpen(!open)} open={open} >
                        <CloseIcon/>
                        
                    </button>
                   
                    <Switch>
                        <BrowserRouter forceRefresh={false}>
                            <LinkR to="/MinhaConta/" onClick={()=>setOpen(!open)} >
                                Minha Conta
                            </LinkR >
                            <LinkR to="/Pedidos/" onClick={()=>setOpen(!open)}>
                            Meus Pedidos
                            </LinkR>
                            <LinkR to="/Sobre/" onClick={()=>setOpen(!open)}>
                            Sobre
                            </LinkR>
                        </BrowserRouter>
                    </Switch>
                    
                    
                   

                </div>
            </MenuFrame>
        </>
    )

  
}

export default Menu
