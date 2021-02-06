import { createGlobalStyle } from "styled-components";

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
    max-width:100vw;
    max-height:100vh;
    height:100%;
    width:100%;
}

#root{
    --primary:#E63946; //red
    --secondary:#F1FAEE; //white
    --white:#fff;
    --blue-menu:#457B9D;
    --soft-blue:#A8DADC;


}

`