import {
    ItemContainer,
    StyledLabelItem
} from '../GeneralCSS'
import { StyledTextBox } from './WhoAmICSS'

export default function WhoAmI(){
    return <ItemContainer>
        <StyledLabelItem>
            <h1>Who am ?</h1>
        </StyledLabelItem>

        <StyledTextBox>
            <p>
                <h3>Hello!</h3>
                My name is Luciano Menezes.
                <br></br><br></br>
                I was born in João Pessoa, Paraíba, and now I`m living in Orlando, Florida, USA.
                <br></br><br></br>
                I have been studying since 2020, and I`ve worked as a freelancer and as a game developer before.
                <br></br><br></br>
                I can speak Portuguese and English fluently, and I can handle a little bit of Spanish.
                <br></br><br></br>
                Today, I'm focusing on studying.
            </p>
        </StyledTextBox>
    </ItemContainer>
}