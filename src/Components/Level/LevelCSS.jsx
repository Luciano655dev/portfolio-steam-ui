import styled from 'styled-components'

export const LevelContainer = styled.div`
    width: 100%;
    height: 17vh;

    margin-top: 1em;
    margin-bottom: 3em;

    h2{
        color: white;
        font-weight: 100;
        margin-bottom: 0.5em;
        margin-top: 0.5em;

        span {
            border: 2px solid #D95B43;
            border-radius: 50px;
            padding: 0.3rem;
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 910px) {
        transform: translateX(1em);
    }
`

export const BadgeContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 90%;
    height: 6vh;
    background-color: rgba(0, 0, 0, 0.5);

    position: relative;
    padding: 8px 8px;
    display: flex;
    align-items: center;
    gap: 8px;

    img{
        max-width: 50px;
        height: 50px;
    }

    div {
        display: flex;
        flex-direction: column;
        color: white;

        h2{
            margin: 0.2em;
            font-size: 1em;
        }
        p {
            margin: 0;
            font-size: 0.8em;
        }
    }

    @media only screen and (max-width: 910px) {
        width: calc(90vw+1em);
    }
`

export const LeftButtonsContainer = styled.div`
    margin-top: 0.5rem;
    display: flex;
    align-items: center;

    button {
        background: rgba(0, 0, 0, 0.5);
        color: #c4c4c4;
        padding: 0.5rem 0.6rem;
        border: none;
        margin-right: 0.25rem;
        font-size: 15px;

        transition: 0.3s;

        &:hover{
            cursor: pointer;
            background: rgba(0, 0, 0, 0.8);
        }
    }
`