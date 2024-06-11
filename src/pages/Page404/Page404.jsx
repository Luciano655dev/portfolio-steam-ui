import { Container, StyledLink } from "./Page404CSS"

export default function Page404(){
    return <Container>
        <h1>404</h1>
        <h2>Page not Found</h2>
        <div>
            <StyledLink to={`/`}>Home</StyledLink>
            <StyledLink to={`/articles`}>Articles</StyledLink>
        </div>
    </Container>
}