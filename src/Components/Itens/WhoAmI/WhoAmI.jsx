import {
    ItemContainer,
    StyledLabelItem
} from '../GeneralCSS'
import { StyledTextBox } from './WhoAmICSS'

export default function WhoAmI(){
    return <ItemContainer>
        <StyledLabelItem>
            <h1>Quem sou eu?</h1>
        </StyledLabelItem>

        <StyledTextBox>
            <p>
                Meu nome é Luciano Menezes. <br></br>
                <br></br>
                Sou de João Pessoa, Paraíba e estudo programação há 3 anos. <br></br>
                <br></br>
                Já trabalhei como Freelancer com desenvolvimento de jogos na Unity e tenho experiência em desenvolvimento de software, além de ser voltado para isso. <br></br>
                <br></br>
                Sou fluente em Português e inglês. <br></br>
                <br></br>
                Hoje, estou focando nos estudos.
            </p>
        </StyledTextBox>
    </ItemContainer>
}