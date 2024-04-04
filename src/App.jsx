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

export default function App() {
  const backgroundSrc = 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1502190/ab689603a427930cb69d5ad4db5c255ccd334133.mp4'
  const github_api_key = import.meta.env.VITE_GITHUB_API_KEY

  const [userInfo, setUserInfo] = useState({})
  const [userRepos, setUserRepos] = useState({})

  const [loading, setLoading] = useState(true)

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
  
        // Calcula o total de estrelas recebidas
        const totalStars = reposResponse.data.reduce((acc, repo) => acc + repo.stargazers_count, 0)
  
        // Busca os commits de todos os repositórios do usuário
        const commitsPromises = reposResponse.data.map(async (repo, index) => {
          const commitsResponse = await axios.get(`https://api.github.com/repos/luciano655dev/${repo.name}/commits`, {
            headers: { Authorization: `Bearer ${github_api_key}` }
          })
          repos[index] = {...repos[index], commits: commitsResponse.data.length}
          return commitsResponse.data.length
        })
        let totalCommits = await Promise.all(commitsPromises)
        totalCommits = totalCommits.reduce((acc, val)=>acc + val)
  
        // Calcula a porcentagem da linguagem mais usada
        const languages = reposResponse.data.reduce((acc, repo) => {
          if (repo.language) {
            acc[repo.language] = acc[repo.language] ? acc[repo.language] + 1 : 1
          }
          return acc
        }, {})
        const totalRepos = reposResponse.data.length
        const languagePercentageArray = []
        for (const language in languages) {
          const percentage = ((languages[language] / totalRepos) * 100).toFixed(2)
          languagePercentageArray.push({ name: language, percentage: `${percentage}%` })
        }
  
        setUserRepos({
          repos: reposResponse.data,
          totalStars,
          totalCommits,
          language: languagePercentageArray[0]
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      setLoading(false)
    }
  
    fetchData()
  }, [window.location.href])

  if(loading) return <Loader />

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
