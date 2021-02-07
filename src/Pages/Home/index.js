import React, {useState} from 'react'
import { BurguerMenu, Container, MainHeader, NavItems, HomeBody } from './HomeElements';

import abstract2 from '../../Assets/Abstract2.png'



function Home({open,setOpen}) {
   
        
    return (
        <>
       
        <Container>
           <MainHeader>
                <img src={abstract2} alt="abstract" className="abstract2"/>
           
                <NavItems>
                    <h2>MasterChef</h2>
                    <button onClick={()=>setOpen(!open)}  >
                        <BurguerMenu />
                    </button>
                </NavItems>
            </MainHeader>

        <HomeBody>
        <div>
        <h1 >Bem-vindo ao Masterchef</h1>
        <p>Clique no menu hamburguer para opções</p>
        </div>
        </HomeBody>
       
        </Container>
        
            
        </>
    )
}

export default Home
