import { Container, StyledLink, Logo } from './NavbarCSS'

export default function Navbar(){
    return <Container>
        <Logo
            onClick={() => window.open(`https://steamcommunity.com/id/Luciano655/`)}
            src='https://store.akamai.steamstatic.com/public/shared/images/responsive/header_logo.png'
        ></Logo>

        <div>
            <StyledLink to={'/'}>Home</StyledLink>
            <StyledLink to={'/articles'}>Articles</StyledLink>
            <StyledLink to={'/'}>Videos (soon)</StyledLink>
        </div>
    </Container>
}