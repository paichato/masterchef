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
   
    .abstract2{
        z-index:3;
        margin-top:762px;
        margin-top:84.8vh;
        margin:84.8vh auto;
        background-repeat:no-repeat;
        
        @media (max-width:420px){
            
        }
    }
    .person{
        position:absolute;
        z-index:3;
        width:460px;
        height:460px;
    }

    nav{
        

        h2{
            font-family: 'Pattaya', sans-serif;
            padding-left:10px;
            cursor: pointer;
        }
    }
    
        

`

export const HomeBody=styled.section`
    div{
        margin-top:320px;
        padding-left:67px;

        @media (max-height:640px){
        margin:100px auto;
            }


        h1{
            width:300px;
            font-weight:400;
            font-size:42px;
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
export const MainHeader=styled.header`

`
export const NavItems=styled.nav`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        padding:20px;

`
