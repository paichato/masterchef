import { useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import { NavItems } from './Pages/Home/HomeElements';
import Menu from './Pages/Menu';
import MinhaConta from './Pages/MinhaConta';
import Pedidos from './Pages/Pedidos';
import Sobre from './Pages/Sobre';
import Routes from './Routes';
import GlobalStyle from './styles/global'
import {Switch, Route, Router} from 'react-router';

function App() {
  
  const [open, setOpen] = useState(false);


  return (
    <>
   <BrowserRouter basename="/" forceRefresh={true}>
    
    <Menu open={open} setOpen={setOpen} /> 
    <Switch>
  
     
    <Route path="/" exact>
    <Home open={open} setOpen={setOpen}/>
    </Route>
    
    <Route path="/MinhaConta/">
    <MinhaConta open={open} setOpen={setOpen}/>
    </Route>
    
    <Route path="/Pedidos/">
    <Pedidos open={open} setOpen={setOpen}/>
    </Route>

    <Route path="/Sobre/" >
    <Sobre open={open} setOpen={setOpen}/>
    </Route>

  {/* <Routes open={open} setOpen={setOpen}/> */}
  </Switch>
  </BrowserRouter>

    
      <GlobalStyle/> {/*importando estilos globais*/}
    </>
  );
}

export default App;
