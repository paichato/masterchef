import styled from "styled-components";


export const SobreWrapper=styled.div`

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:auto;
margin-top:40px;

    h1{
        font-weight:400;
        text-align:center;
        /* border-bottom:0.1px solid rgba(241,250,238,0.3); */
        width:300px;
        height:50px;
        border-spacing:20px;
    }
`

export const SobreContainer=styled.div`


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
            
            height:220px;
            border-radius:7px;
            display:flex;
            flex-direction:row;
            align-items:center;
            background:var(--white);
            box-shadow:4px 8px 18px rgba(0,0,0,0.2);
            
            @media (max-width:420px){
                width:200px;
            }


            &+div{
                margin-top:25px;
            }

            section{
                /* display:flex;
                flex-direction:row; */
            }

            span{
                margin-left:20px;
                width:40px;
                height:200px;
                background:var(--soft-blue);
                border-radius:17px;

                &:hover{
                    border:4px solid var(--white);
                }
            }

            p{
                padding-left:20px;
                color:var(--dark-blue);

                &:hover{
                    border-left:1px solid var(--dark-blue)
                }

                &+p{
                    margin-top:20px;

                }
                a{
                    text-decoration:none;
                    color:var(--primary);
                }
                
            }
        }
`