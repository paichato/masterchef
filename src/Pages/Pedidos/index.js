import React from 'react'
import { BurguerMenu, Container, MainHeader, NavItems } from '../Home/HomeElements'
import abstract2 from '../../Assets/Abstract2.png'
import { PedidosContainer, PedidosWrapper } from './PedidosElements'
import { BrowserRouter, Link, Switch } from 'react-router-dom'


function Pedidos({open, setOpen}) {
    return (
        <>
            <Container>
                <MainHeader>
                    <img src={abstract2} alt="abstract" className="abstract2"/>
                    <NavItems>
                        <BrowserRouter forceRefresh={true}>
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
                <PedidosWrapper>
                    <h1>Pedidos</h1>
                    <PedidosContainer>
                        <div>
                            <span></span>
                            <p>pedido</p>
                        </div>
                        <div>
                            <span></span>
                            <p>pedido</p>
                        </div>
                        <div>
                            <span></span>
                            <p>pedido</p>
                        </div>
                        </PedidosContainer>
                </PedidosWrapper>
            </Container>
        </>
    )
}

export default Pedidos
