import styled from "styled-components";



export const PedidosWrapper=styled.div`

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:auto;
margin-top:40px;

    h1{
        font-weight:400;
        text-align:center;
        border-bottom:0.1px solid rgba(241,250,238,0.3);
        width:300px;
        height:50px;
        border-spacing:20px;
    }
`
export const PedidosContainer=styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top:20px;
    max-width:420px;


        div{
            display:flex;
            margin:auto;
            width:420px;
            
            height:60px;
            border-radius:7px;
            display:flex;
            flex-direction:row;
            align-items:center;
            background:var(--dark-blue);
            
            @media (max-width:420px){
                width:200px;
            }


            &+div{
                margin-top:25px;
            }

            span{
                margin-left:20px;
                width:40px;
                height:40px;
                background:var(--soft-blue);
                border-radius:10%;

                &:hover{
                    border:4px solid var(--white);
                }
            }

            p{
                padding-left:20px;
                color:var(--dark-blue);
                color:var(--white);
            }
        }
    

`