import React from 'react'
import { BurguerMenu, Container, MainHeader, NavItems, HomeBody } from './HomeElements';
import abstract2 from '../../Assets/Abstract2.png'
import { BrowserRouter, Link, Switch } from 'react-router-dom';



function Home({open,setOpen}) {
   
        
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
