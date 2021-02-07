import styled from "styled-components";
import {AiOutlineClose} from 'react-icons/ai';
import Link from 'react-dom';

export const MenuFrame=styled.nav`
position:absolute;
z-index:10;
width:614px;
min-width:360px;
height:100vh;
transform-origin:1px;

background:var(--blue-menu);

transition:all 0.2s ease-in-out;

transform:${({open})=>open?'translateY(0%)':'translateY(-100%)'};

@media (max-width:360px){
        width:360px;
        margin:0;
    }

div{
    display:flex;
    flex-direction:column;
    text-align:center;
    padding-top:20vh;
    transition:all 0.2s ease-in-out;
    

    button{
        margin-left:400px;
        bottom:300px;
    }

    a{
        padding-top:60px;
        font-size:42px;
        font-weight:400;
        text-decoration:none;
        cursor:none;
        transition: all 0.2s ease-in-out;
        color:var(--soft-blue);

        &:hover{
            color:var(--white);
            cursor: pointer;
            
            
            transform: scale(1.1,1.1);
        }
        
        
    }

    
}

`

export const CloseIcon=styled(AiOutlineClose)`
position:absolute;
z-index:4;
width:40px;
    height:40px;
    bottom:800px;
    object-position:center;
        
        fill:var(--primary);
        

        transition: all 0.2s ease-in-out;

&:hover{
    fill:var(--mate);
    cursor: pointer;
    
    transform: scale(2,2);
    transform:rotate(180deg);
}

`

