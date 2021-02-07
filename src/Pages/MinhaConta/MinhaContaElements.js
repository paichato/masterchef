import styled from "styled-components";


export const ContaForm=styled.div`


max-width:324px;
text-align:left;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:10px;
margin:30px auto 0 auto;

    h1{
        font-weight:400;
    }
        label{
        display:flex;
        padding:10px 0 5px 0;

        }

        input{
        color:var(--dark-blue);
        text-indent:10px;
        max-width:320px;
        width:320px;
        height:64px;
        border-radius:4px;
        background:var(--secondary);
        box-shadow:4px 4px 18px rgba(0,0,0,0.2); 
        }
        button{
            width:320px;
            max-width:320px;
            background:transparent;
            border: 2px solid var(--white);
            color:var(--white);
            height:64px;
            margin-top:30px;
            border-radius:7px;
            cursor:pointer;
            transition:all 0.2s ease-in-out;

            &:hover{
                background:var(--white);
                color:var(--primary);
                font-weight:600;
            }
        }

`
