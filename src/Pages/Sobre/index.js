import React, { Children } from 'react'
import { BurguerMenu, Container, MainHeader, NavItems } from '../Home/HomeElements'
import { SobreContainer, SobreWrapper } from './SobreElements'
import abstract2 from '../../Assets/Abstract2.png'
import { BrowserRouter, Link, Switch } from 'react-router-dom'

function Sobre({open,setOpen}) {
    return (
        <>
             <Container style={{background:"var(--dark-blue)"}}>
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
                        <button onClick={()=>setOpen(!open)} open={open} setOpen={setOpen} >
                            <BurguerMenu />
                        </button>
                    </NavItems>
                </MainHeader>
                <SobreWrapper>
                    <h1>Sobre</h1>
                    <SobreContainer>
                        <div>
                            <span></span>
                            <section>
                                <p>Autor: Marlon D Jesus</p>
                                <p>Version 1.0.0</p>
                                <p><a target="#blank" href="https://github.com/paichato">Github</a></p>
                            </section>
                        </div>
                        
                        </SobreContainer>
                </SobreWrapper>
            </Container>
            
        </>
    )
}

export default Sobre
