import React from 'react';
import styled, { keyframes } from 'styled-components';

// Definição da animação
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Estilização da roda
const Spinner = styled.div`
  border: 5px solid #f3f3f3; /* Cor da borda */
  border-top: 5px solid black; /* Cor da borda superior */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1.5s linear infinite; /* Aplica a animação */
`

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

// Componente de Rodinha
const Loader = () => {
  return (
    <SpinnerContainer><Spinner/></SpinnerContainer>
  );
};

export default Loader;