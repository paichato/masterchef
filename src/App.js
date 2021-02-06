import { useState } from 'react';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import GlobalStyle from './styles/global'


function App() {
  
  const [open, setOpen] = useState(false);


  return (
    <>
    <Menu open={open} setOpen={setOpen} /> 
    <Home open={open} setOpen={setOpen}/>


  
    
      <GlobalStyle/> {/*importando estilos globais*/}
    </>
  );
}

export default App;
