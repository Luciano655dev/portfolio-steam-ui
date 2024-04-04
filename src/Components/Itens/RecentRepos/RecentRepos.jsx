import { ItemContainer, StyledLabelItem } from "../GeneralCSS"
import { RecentRepoContainer, RecentRepoInfoContainer } from './RecentReposCSS'

export default function RecentRepos({ userRepos }){
    const repos = userRepos.repos.slice(0, 3).map(repo=>{
        const dataInicial = new Date()
        const dataFinal = new Date(repo.updated_at)

        const diferencaEmMilissegundos = Math.abs(dataFinal - dataInicial);
        const diferencaEmHoras = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60))
        return {...repo, lastUpdate: diferencaEmHoras}
    })

    const goTo = (url) => window.open(url, '_blank')

    return  <ItemContainer>
        <StyledLabelItem>
            <h1>Repositórios Recentes</h1>
        </StyledLabelItem>
        
        {
            repos.map(repo => <RecentRepoContainer onClick={()=>goTo(`https://github.com/luciano655dev/${repo.name}`)}>
                <a href={`https://github.com/luciano655dev/${repo.name}`} target="_blank">{repo.name}</a>
                <h2>{repo.description}</h2>
    
                <label>{repo.language}</label>
    
    
                <RecentRepoInfoContainer>
                    <div>
                    <h1>{repo.stargazers_count}</h1>
                    <h2>estrelas</h2>
                    </div>
                    <div>
                    <h1>{repo.commits}</h1>
                    <h2>Commits</h2>
                    </div>
                    <div>
                    <h1>{repo.lastUpdate} h</h1>
                    <h2>last updated</h2>
                    </div>
                </RecentRepoInfoContainer>
            </RecentRepoContainer>)
        }
    </ItemContainer>
}