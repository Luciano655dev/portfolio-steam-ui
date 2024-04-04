import styled from 'styled-components'

export const StyledLabelItem = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
    width: 100%;
    height: 5vh;
    background-color: #192141;

    h1{
        margin: 0;
        font-size: 1em;
        margin-left: 0.5em;
        color: white;
    }
`

// #192141
export const ItemContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    min-width: 98%;
    max-width: 90%;
    min-height: 25vh;
    margin-bottom: 1em;
    border-radius: 0.2em;
    background-color: rgba(0, 0, 0, 0.3);

    overflow: hidden;
`