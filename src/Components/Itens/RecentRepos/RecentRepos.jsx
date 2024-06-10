import { useState, useEffect } from 'react'
import axios from 'axios'
import { ItemContainer, StyledLabelItem } from "../GeneralCSS"
import { RecentRepoContainer, RecentRepoInfoContainer } from './RecentReposCSS'

const github_api_key = `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`

export default function RecentRepos({ userRepos }){
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(()=>{
        async function fetchData(){
            setLoading(true)

            const reposPromises = userRepos.repos.slice(0, 3).map(async(repo)=>{
                try{
                    // get repos commits
                    const response = await axios.get(`https://api.github.com/repos/luciano655dev/${repo.name}/commits`, {
                        headers: { Authorization: `Bearer ${github_api_key}` }
                    })
                    const totalCommits = response.data.length
            
                    // Pega a diferença em horas
                    const dataInicial = new Date()
                    const dataFinal = new Date(repo.updated_at)
            
                    const diferencaEmMilissegundos = Math.abs(dataFinal - dataInicial);
                    const diferencaEmHoras = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60))
            
                    return {
                        ...repo,
                        lastUpdate: diferencaEmHoras,
                        totalCommits
                    }
                }catch(error){
                    console.log(error)
                    setError(error.data.message)
                    setLoading(false)
                }
            })

            const repos = await Promise.all(reposPromises)
            setRepos(repos)

            setLoading(false)
        }

        fetchData()
    }, [])

    const goTo = (url) => window.open(url, '_blank')

    if(error) return <ItemContainer>
        <StyledLabelItem>Error on Server...</StyledLabelItem>
    </ItemContainer>
    if(loading) return <></>

    return  <ItemContainer>
        <StyledLabelItem>
            <h1>Recent Projects</h1>
        </StyledLabelItem>
        
        {
            repos.map(repo => <RecentRepoContainer onClick={()=>goTo(`https://github.com/luciano655dev/${repo.name}`)} key={repo.id}>
                <a href={`https://github.com/luciano655dev/${repo.name}`} target="_blank">{repo.name}</a>
                <h2>{repo.description}</h2>
    
                <label>{repo.language}</label>
    
    
                <RecentRepoInfoContainer>
                    <div>
                    <h1>{repo.stargazers_count}</h1>
                    <h2>Stars</h2>
                    </div>
                    <div>
                    <h1>{repo.totalCommits}</h1>
                    <h2>Commits</h2>
                    </div>
                    <div>
                    <h1>{repo.lastUpdate}h</h1>
                    <h2>last updated</h2>
                    </div>
                </RecentRepoInfoContainer>
            </RecentRepoContainer>)
        }
    </ItemContainer>
}