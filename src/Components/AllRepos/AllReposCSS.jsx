import styled from 'styled-components'

export const RightContentContainer = styled.div`
    width: 100%;
    height: 85%;

    transform: translateX(-1em);

    background-color: rgba(0, 0, 0, 0.5);

    @media only screen and (max-width: 768px) {
        transform: translateX(0);
    }
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

    h2 {
        margin: 0.5em;
        margin-bottom: 0;
        font-weight: 100;
        font-size: 1.3em;
        color: white;
    }

    a{
        margin: 0.5em;
        margin-top: 1em;
        margin-left: 1em;
        font-weight: 100;
        font-size: 1em;
        color: white;

        text-decoration: none;
        transition: 0.2s;

        &:hover{
            color: gray;
        }
    }

    @media only screen and (max-width: 768px) {
        transform: translateX(2em);
    }
`