import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100vw;
    height: 16vh;
    background-color: #171D25;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
        position: absolute;
        right: 0;
        display: flex;
        flex-direction: row;
        gap: 2vw;
        margin-right: 2vw;
    }
    
    @media (max-width: 500px) {
        height: 20vh;
        justify-content: center;

        div {
            position: relative;
            flex-direction: column;
            text-align: center;
            gap: 0;
        }
    }
`

export const StyledLink = styled(Link)`
    font-size: 1.5em;
    color: #dcdedf;
    text-decoration: none;
    transition: 0.2s;

    &:hover{
        color: #1A9FDC;
        text-decoration: underline;
    }

    @media (max-width: 500px) {
        text-decoration: underline;
    }
`

export const Logo = styled.img`
    cursor: pointer;
    opacity: 50%;

    max-width: 50vw;
    max-height: 10vh;

    @media (max-width: 350px) {
        display: none;
    }
`