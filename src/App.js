import { useState } from 'react';
import Home from './Pages/Home';
import { NavItems } from './Pages/Home/HomeElements';
import Menu from './Pages/Menu';
import MinhaConta from './Pages/MinhaConta';
import Pedidos from './Pages/Pedidos';
import GlobalStyle from './styles/global'


function App() {
  
  const [open, setOpen] = useState(false);


  return (
    <>
    <Menu open={open} setOpen={setOpen} /> 
    {/* <Home open={open} setOpen={setOpen}/> */}
   
    {/* <MinhaConta open={open} setOpen={setOpen}/> */}
    <Pedidos open={open} setOpen={setOpen}/>


  
    
      <GlobalStyle/> {/*importando estilos globais*/}
    </>
  );
}

export default App;
