import React from 'react'
import Home from '../Home'
import { BurguerMenu, Container, MainHeader, NavItems } from '../Home/HomeElements'
import abstract2 from '../../Assets/Abstract2.png'
import { ContaForm } from './MinhaContaElements'

function MinhaConta({open,setOpen}) {
    return (
        <>
            <Container>
                <MainHeader>
                    <img src={abstract2} alt="abstract" className="abstract2"/>
                    <NavItems>
                        <h2>MasterChef</h2>
                        <button onClick={()=>setOpen(!open)} open={open} >
                            <BurguerMenu />
                        </button>
                    </NavItems>
                </MainHeader>
           <ContaForm>
          
            <h1 >Minha Conta</h1>
            <form>
                <label>usuario</label>
                <input/>
                <label>usuario</label>
                <input/>
                <label>usuario</label>
                <input/>
                <button type="submit">Actualizar Conta</button>

            </form>

            
            </ContaForm>
        </Container>
         
        </>
    )
}

export default MinhaConta
