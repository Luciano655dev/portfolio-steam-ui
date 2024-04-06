import styled from 'styled-components'

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SocialMediaImagesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;

    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5em;

    margin: 1em;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.5);

        width: 4em;
        height: 4em;
        margin: 0.7em;

        @media (max-width: 768px) {
            width: 10vw;
            height: 10vw;
            margin: 1vw;
        }

        &:hover {
            cursor: pointer;
        }

        p {
            color: white;
        }
    }

    img{
        border: 1px solid gray;
        margin: 0.7em;
        max-width: 4em;
        max-height: 4em;

        transition: 0.3s;

        @media (max-width: 768px) {
            max-width: 10vw;
            max-height: 10vw;
            margin: 1vw;
        }

        &:hover {
            cursor: pointer;
            filter: brightness(50%);
        }
    }
`

export const GithubInfoContainer = styled.div`
    display: flex;
    flex-direction: row;

    margin: 1em;
    padding: 1em;

    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5em;

    div{
        margin-right: 1em;

        h1 {
            font-size: 2em;
            font-weight: 100;
            margin-bottom: 0;
            margin-top: 0;
            margin-left: 0.5em;
            color: white;

            @media (max-width: 768px) {
                font-size: 5vw;
                margin-left: 1vw;
            }
        }

        h2{
            display: flex;
            flex-direction: row;
            font-size: 1em;
            font-weight: 100;
            margin: 0;
            margin-left: 1.1em;
            color: gray;

            a {
                color: white;
            }

            p {
                color: white;
                text-decoration: underline;
                margin: 0;
                margin-left: 0.3em;

                transition: 0.3s;
                cursor: pointer;
                &:hover {
                    color: lightgray;
                }
            }

            div {
                display: none;
                position: absolute;

                width: 30vw;
                padding: 1em;
                transform: translateY(1.2em) translateX(-5em);

                border-radius: 1em;
                background-color: rgb(0, 0, 0);
                color: lightgray;

                z-index: 100;
            }

            &:hover div {
                display: block;
            }

            @media (max-width: 768px) {
                font-size: 2vw;
                margin-left: 1.1vw;
            }
        }
    }
`