import { Profile, StyledPfpImage } from './UserProfileCSs'

export default function UserProfile({ userInfo }){
    const {
        name,
        avatar_url,
        location,
        bio
    } = userInfo

    return <Profile>
        <StyledPfpImage src={avatar_url}></StyledPfpImage>
        <img
            className='border'
            src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/570/c6a479fae8979bc9c1a02378e488e3ce06b52cb1.png'
        ></img>

        <div>
            <h1>{name}</h1>
            <div>
                <img src='https://community.cloudflare.steamstatic.com/public/images/countryflags/br.gif'></img>
                <label>{location}</label>
            </div>

            <p>
                {bio}
            </p>
        </div>
    </Profile>
}