import { createGlobalStyle } from "styled-components";
//Todos estilos globais vem aqui
export default createGlobalStyle`

*{
    box-sizing:border-box;
    padding:0;
    margin:0;
    color:var(--secondary);
}

body, input, button{
    font-family:'Montserrat', sans-serif;
    font-size:18px;
    border:none;
    background:none;
}


html, body, #root{
  
    max-height:100vh; 
     height:100%;
    
    
 
}

//todas as cores usadas no projecto

#root{

    max-width:614px;
    margin:0 auto;
    
    
    
    --primary:#E63946; //red
    --secondary:#F1FAEE; //white
    --white:#fff;
    --blue-menu:#457B9D;
    --soft-blue:#A8DADC;
    --dark-blue:#355F79;


}

#loader{

max-width:614px;
margin:0 auto;



--primary:#E63946; //red
--secondary:#F1FAEE; //white
--white:#fff;
--blue-menu:#457B9D;
--soft-blue:#A8DADC;
--dark-blue:#355F79;



}

`