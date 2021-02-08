import { useEffect, useRef, useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import MinhaConta from './Pages/MinhaConta';
import Pedidos from './Pages/Pedidos';
import Sobre from './Pages/Sobre';

import GlobalStyle from './styles/global'
import {Switch, Route} from 'react-router';

import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderF from './Loader/index';


const useExpired = (time)=>{
  const [expired, setExpired] = useState(false);
  const timoutRef = useRef();
  useEffect(()=>{
    timoutRef.current = setTimeout(()=>{
      setExpired(true);
    }, time);
    return ()=>{
      clearTimeout(timoutRef.current);
    }
  },[time]);
  return expired;
}


 function App() {
  function Runner(){
   
    return(
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

 
 </Switch>
 </BrowserRouter>

   
     <GlobalStyle/>
     </>)
  
 }
  const [open, setOpen] = useState(false); // state abrir e fexhar o menu

const expired=useExpired(5000);

    
  return (
    
  <>


   {expired?<Runner/>:<LoaderF/>}
 
  
    
   {/* <BrowserRouter basename="/" forceRefresh={true}>
    
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

  
  </Switch>
  </BrowserRouter>

    
      <GlobalStyle/> importando estilos globais */}
    </>
  );

}

export default App;
