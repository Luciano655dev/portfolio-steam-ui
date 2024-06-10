import {
  GlobalStyle,
  StyledBody,
  StyledBackground,
  MainContainer,
  LeftSide,
  RightSide,
} from './AppCSS'
import Loader from './loadingContainerCSS'

import { useState, useEffect } from 'react'
import axios from 'axios'

import UserProfile from './Components/UserProfile/UserProfile'
import WhoAmI from './Components/Itens/WhoAmI/WhoAmI'
import SkillsAndGithub from './Components/Itens/SkillsAndGithub/SkillsAndGithub'
import SocialMedias from './Components/Itens/SocialMedias/SocialMedias'
import RecentRepos from './Components/Itens/RecentRepos/RecentRepos'

import Level from './Components/Level/Level'
import AllRepos from './Components/AllRepos/AllRepos'

import Footer from './Components/Footer/Footer'

const github_api_key = `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`
/*
  I am using this key ONLY to increase the number of requests on the website
  It doesn't give access to ANYTHING on my profile, I ask you not to use it
*/

export default function App() {
  const backgroundSrc = 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1502190/ab689603a427930cb69d5ad4db5c255ccd334133.mp4'

  const [userInfo, setUserInfo] = useState({})
  const [userRepos, setUserRepos] = useState({})

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        // Busca as informações do usuário
        const userResponse = await axios.get('https://api.github.com/users/luciano655dev', {
          headers: { Authorization: `Bearer ${github_api_key}` }
        })
        setUserInfo(userResponse.data)

        // Busca os repositórios públicos do usuário
        const reposResponse = await axios.get('https://api.github.com/users/luciano655dev/repos?sort=updated', {
          headers: { Authorization: `Bearer ${github_api_key}` },
          params: { type: 'public' } // Adiciona o parâmetro type=public
        })
        const repos = reposResponse.data

        // Busca os commits de todos os repositórios do usuário
        const commitsResponse = await axios.get(`https://api.github.com/search/commits?q=${encodeURIComponent(`author:${'luciano655dev'} is:merge`)}`, {
          Authorization: `token ${github_api_key}`,
          Accept: 'application/vnd.github.cloak-preview'
        })

        const totalCommits = commitsResponse.data.total_count

        // Calcula o total de estrelas recebidas
        const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)

        // Calcula a porcentagem da linguagem mais usada
        const languages = repos.reduce((acc, repo) => {
          if (repo.language) {
            acc[repo.language] = acc[repo.language] ? acc[repo.language] + 1 : 1
          }
          return acc
        }, {})
        const totalRepos = repos.length
        const languagePercentageArray = []
        for (const language in languages) {
          const percentage = ((languages[language] / totalRepos) * 100).toFixed(2)
          languagePercentageArray.push({ name: language, percentage: `${percentage}%` })
        }

        setUserRepos({
          repos,
          totalStars,
          totalCommits,
          language: languagePercentageArray[0]
        })
      } catch (error) {
        setError(true)
        console.error('Error fetching data:', error)
      }
      setLoading(false)
    }

    fetchData()
  }, [window.location.href])

  if(loading) return <Loader />
  if(error) return <h1>Error :(</h1>

  return <div>
        <StyledBody>
      <GlobalStyle></GlobalStyle>
      <StyledBackground autoPlay muted loop src={backgroundSrc} type="video/mp4" />

      <MainContainer>
        <LeftSide>
          <UserProfile
            userInfo={userInfo}
          ></UserProfile>

          <WhoAmI></WhoAmI>

          <SkillsAndGithub
            userInfo={userInfo}
            userRepos={userRepos}
          ></SkillsAndGithub>

          <SocialMedias></SocialMedias>

          <RecentRepos
            userRepos={userRepos}
          ></RecentRepos>
        </LeftSide>

      <RightSide>
        <Level></Level>

        <AllRepos
          userRepos={userRepos}
        ></AllRepos>
      </RightSide>
      </MainContainer>
    </StyledBody>

    <Footer></Footer>
  </div>
}
