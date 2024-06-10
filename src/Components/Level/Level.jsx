import { LevelContainer, BadgeContainer, LeftButtonsContainer } from './LevelCSS'

export default function Level(){
    const goTo = (url) => window.open(url, '_blank')

    const getDifferenceInMonths = ()=>{
        const dataInicial = new Date(2007, 8, 8, 20, 0, 0)
        const dataFinal = new Date();
    
        const diferencaEmMilissegundos = Math.abs(dataFinal - dataInicial)
        const differenceInYears = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365))
    
        return differenceInYears;
    }

    const differenceInMonths = getDifferenceInMonths()

    return <LevelContainer>
        <h2>Level <span>{differenceInMonths}</span></h2>

        <BadgeContainer>
            <img src='data:image/png;base64,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'></img>

            <div>
                <h2>Javascript Badge</h2>
                <p>400xp</p>
            </div>
        </BadgeContainer>

        <LeftButtonsContainer>
            <button onClick={()=>goTo('https://github.com/luciano655dev')}>Follow me on GitHub!</button>
            <button onClick={()=>goTo('https://twitter.com/luciano655dev')}>and Twtter</button>
        </LeftButtonsContainer>
  </LevelContainer>
}