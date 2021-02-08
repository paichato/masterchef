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
  const [open, setOpen] = useState(false);


  
const [count, setCount] = useState(0);
const [s, sets] = useState(false);
const countRef=useRef(count);
countRef.current=count;

  const today=new Date();
  const counter=today.getUTCMilliseconds();
 



 const getVisible=(isVisible)=>{
    if(isVisible===false){
      <Runner/>
    }
  }
    
  return (
    
  <>


  

    <LoaderF />
  
    
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

    
      <GlobalStyle/> importando estilos globais
    </>
  );

}

export default App;
