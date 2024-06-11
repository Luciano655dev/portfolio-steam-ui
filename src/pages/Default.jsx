import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

import {
    GlobalStyle,
    StyledBackground,
    StyledBody,
    MainContainer
} from './Home/HomeCSS'

export default function DefaultPage(){
    const backgroundSrc = 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1502190/ab689603a427930cb69d5ad4db5c255ccd334133.mp4'

    return <div style={{ overflow: 'hidden' }}>
        <GlobalStyle></GlobalStyle>
        <StyledBackground autoPlay muted loop src={backgroundSrc} type="video/mp4" />

        <Navbar></Navbar>
        
        <StyledBody>
            <Outlet></Outlet>
        </StyledBody>

        <Footer></Footer>
    </div>
}