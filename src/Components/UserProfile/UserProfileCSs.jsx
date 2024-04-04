import styled from 'styled-components'

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 2em;

    .border{
        position: absolute;

        min-width: calc(12em + 4px);
        min-height: calc(12em + 4px);
        max-width: calc(12em + 4px);
        max-height: calc(12em + 4px);
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin: 1em;

        h1{
            margin: 0;
            margin-bottom: 0.2em;
            font-size: 1.5em;
            color: #ffffff;
            font-weight: 20;
        }

        div {
            display: flex;
            flex-direction: row;
            margin: 0;

            img {
                margin: 0;
                max-width: 15px;
                max-height: 13px;
                margin-right: 0.2em;
            }

            label {
                font-size: 0.7em;
                color: lightgray;
            }
        }

        p {
            max-width: 100%;
            word-wrap: break-word;
            color: white;
        }
    }
`

export const StyledPfpImage = styled.img`
    margin: 1em;
    border: 2px solid #3F74B2;

    min-width: 10em;
    min-height: 10em;
    max-width: 10em;
    max-height: 10em;
`