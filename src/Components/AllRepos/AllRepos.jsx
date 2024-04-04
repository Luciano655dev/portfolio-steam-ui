import { RightContentContainer, RightContentTexts } from './AllReposCSS'

export default function AllRepos({ userRepos }){
  const repos = userRepos.repos.slice(0,30)

  return <RightContentContainer>
    <RightContentTexts>
      <h1>Codando</h1>

      <h2>Outros repositórios:</h2>

      {
        repos.map(repo=>
          <a key={repo.id} href={`https://github.com/luciano655dev/${repo.name}`} target="_blank">{repo.name}</a>
        )
      }
    </RightContentTexts>
  </RightContentContainer>
}