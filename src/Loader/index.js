import React from 'react'
import reactDom from 'react-dom';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from 'styled-components';



function LoaderF() {
    return reactDom.createPortal (
        <div>
            <Container>
             <Loader type="BallTriangle"  color="#E63946" height={100} width={100} timeout={5000} />
             </Container>
        </div>,
        document.getElementById('loader')
    )
}

export default LoaderF

const Container=styled.div`
width:614px;
margin:0 auto;
display:grid;
place-items:center;
margin-top:40vh;


`
