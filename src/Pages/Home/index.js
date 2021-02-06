import React from 'react'
import { BurguerMenu, Container } from './HomeElements';
import abstract1 from '../../Assets/Abstract1.png'
import abstract2 from '../../Assets/Abstract2.png'
import character from '../../Assets/character1.png'

function Home() {
    return (
        <>
        <Container>
            {/* <img src={abstract1} alt="abstract" className="abstract1"/> */}
            <img src={abstract2} alt="abstract" className="abstract2"/>
            {/* <img src={character} alt="person" className="person"/>  */}
        <nav>
            <h2>MasterChef</h2>
            <button>
                <BurguerMenu/>
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
