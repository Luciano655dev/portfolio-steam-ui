import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;

    h1, h2 {
        margin: 0;
        color: white;
    }
`

export const StyledLink = styled(Link)`
    font-size: 1em;
    color: #1A9FFF;
    text-decoration: none;
    margin: 1em;
    transition: 0.2s;

    &:hover {
        color: gray;
        text-decoration: underline;
    }
`