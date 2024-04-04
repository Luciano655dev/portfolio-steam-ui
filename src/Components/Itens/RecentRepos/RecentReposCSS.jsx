import styled from 'styled-components'

export const RecentRepoContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 1em;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5em;
    width: 90%;
    cursor: pointer;

    a {
        margin: 0;
        color: white;
        font-size: 1.5em;

        font-weight: 400;

        text-decoration: none;
        transition: 0.3s;

        &:hover{
            color: lightblue;
        }
    }
    h2 {
        margin: 0;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        color: gray;
        font-size: 1em;
        font-weight: 100;
    }

    label {
        position: absolute;
        top: 1.3em;
        right: 1em;

        color: white;
        font-weight: 400;
    }

    h3{
        margin: 0;
        color: white;
    }
`

export const RecentRepoInfoContainer = styled.div`
    display: flex;
    flex-direction: row;

    margin: 0;
    margin-top: 0.5em;
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
        }

        h2{
            font-size: 1em;
            font-weight: 100;
            margin: 0;
            margin-left: 1.1em;
            color: gray;
        }
    }
`