import React from 'react'
import { BurguerMenu, Container, MainHeader, NavItems } from '../Home/HomeElements'
import abstract2 from '../../Assets/Abstract2.png'
import { ContaForm } from './MinhaContaElements'
import { BrowserRouter, Link, Switch } from 'react-router-dom'

function MinhaConta({open,setOpen}) {
    return (
        <>
            <Container>
                <MainHeader>
                    <img src={abstract2} alt="abstract" className="abstract2"/>
                    <NavItems>
                        <BrowserRouter basename="/masterchef" forceRefresh={true}>
                            <Link to="/" exact >
                                <Switch>
                                    <h2>MasterChef</h2>
                                </Switch>
                             </Link>
                        </BrowserRouter>
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
