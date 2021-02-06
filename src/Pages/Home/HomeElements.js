import styled from "styled-components";
import {AiOutlineMenu} from 'react-icons/ai'

export const Container=styled.div`

background:var(--primary);
max-width:614px;
min-width:360px;
height:100vh;


    @media (max-width:360px){
        
        width:360px;
        margin:0;
        
    }

    img{
        position:absolute;
        
    }
    .abstract1{
        /* position:absolute;
            z-index:2;
           
            margin-top:40.5vh;
            object-fit:cover; */

          
            
        }
    .abstract2{
        z-index:3;
        margin-top:762px;
        margin-top:84.8vh;
        margin:84.8vh auto;
        background-repeat:no-repeat;
    }
    .person{
        position:absolute;
        z-index:3;
        width:460px;
        height:460px;
    }

    nav{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        padding:20px;

        h2{
            font-family: 'Pattaya', sans-serif;
            padding-left:10px;
        }
    }
    div{
        margin-top:320px;
        padding-left:67px;

        @media (max-height:640px){
        margin:100px auto;
    }


        h1{
            width:350px;
            font-weight:400;
        }
        p{
           padding-top:20px;
            
        }
        
}
    
    
  

`

export const BurguerMenu=styled(AiOutlineMenu)`
    width:40px;
    height:40px;
    cursor: pointer;

    transition:all 0.2s ease-in-out;

    &:hover{
    fill:var(--mate);
    cursor: pointer;
    
    transform: scale(3,3);
    transform:rotate(180deg);
}
`