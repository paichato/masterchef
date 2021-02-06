import React, {useState} from 'react'
import { BurguerMenu, Container } from './HomeElements';
import abstract1 from '../../Assets/Abstract1.png'
import abstract2 from '../../Assets/Abstract2.png'
import character from '../../Assets/character1.png'
import Menu from '../Menu';


function Home({open,setOpen}) {
   
        
    return (
        <>
       
        <Container>
           
            <img src={abstract2} alt="abstract" className="abstract2"/>
           
        <nav>
            <h2>MasterChef</h2>
            <button onClick={()=>setOpen(!open)}  >
                <BurguerMenu />
            </button>
        </nav>

        <div>
        <h1>Bem-vindo ao Masterchef</h1>
        <p>Clique no menu hamburguer para opções</p>
        </div>
        
        </Container>
        
            
        </>
    )
}

export default Home
