import React from 'react'
import { BurguerMenu, Container, MainHeader, NavItems } from '../Home/HomeElements'
import abstract2 from '../../Assets/Abstract2.png'
import { PedidosContainer, PedidosWrapper } from './PedidosElements'


function Pedidos({open, setOpen}) {
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
