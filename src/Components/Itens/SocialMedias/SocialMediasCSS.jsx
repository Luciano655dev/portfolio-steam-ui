import styled from 'styled-components'

export const StyledSkillsImages = styled.div`
    display: flex;
    flex-direction: column;

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

        h1 {
            font-size: 2em;
            margin-bottom: 0;
            margin-top: 0;
            margin-left: 0.5em;
            color: white;
        }

        h2{
            font-size: 1em;
            font-weight: 100;
            margin: 0;
            margin-left: 1em;
            color: gray;
        }
    }
`