import styled from 'styled-components';

export const StyledSkillsImages = styled.div`
    div {
        display: flex;
        flex-direction: column;

        div {
            display: flex;
            justify-content: center;
            flex-direction: row;

            img{
                border: 1px solid gray;
                margin: 0.7em;
                max-width: 6em;
                max-height: 6em;

                transition: 0.3s;

                &:hover {
                    cursor: pointer;
                    filter: brightness(50%);
                }
            }
        }

        .textContainer {
            display: flex;
            flex-direction: column;
            justify-content: start;
            margin: 1em;

            h1 {
                font-size: 2em;
                color: white;
                margin: 0;
            }

            h2{
                font-size: 1em;
                font-weight: 100;
                color: gray;
                margin: 0;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        div {
            flex-direction: column;
            align-items: center;

            div {
                flex-direction: row;
                align-items: center;

                img {
                    max-width: 15vw;
                    max-height: 15vw;
                    margin: 1vw;
                }
            }

            .textContainer {
                width: 80vw;
                align-items: start;
                justify-content: start;
            }
        }
    }
`;
