import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Motiva+Sans');

  body {
    font-family: 'Motiva Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 0;

    overflow: hidden;
`

export const StyledBackground = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1000;
    overflow: hidden;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 61em;
    background: linear-gradient(to bottom, #090E20 0%, #0a2569 40%, #091638 100%);
    opacity: 98%;

    overflow: hidden;
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    flex: 70%;
    justify-content: start;
    align-items: center;
    padding: 0.5em;

    overflow: hidden;
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    flex: 30%;
    justify-content: start;
    align-items: center;

    overflow: hidden;
`

// ========== RIGHT SIDE HERE ==========

export const RightContentContainer = styled.div`
    width: 100%;
    height: 85%;

    transform: translateX(-1em);

    background-color: rgba(0, 0, 0, 0.5);
`

export const RightContentTexts = styled.div`
    display: flex;
    flex-direction: column;
    transform: translateX(1em);

    h1{
        margin: 0.5em;
        font-weight: 100;
        font-size: 1.5em;
        color: #4BAFC3;
    }

    a{
        margin: 0.5em;
        margin-top: 1em;
        font-weight: 100;
        font-size: 1em;
        color: white;

        text-decoration: none;
        transition: 0.2s;

        &:hover{
            color: gray;
        }
    }
`