import Header from "./components/header/header"
import style from "./page.module.css"
import Footer from "./components/footer/footer"


const Home = () => {
  return (

    <div className={style.container1}>
      <Header />
      <div className={style.container2}>
        <div className={style.container3}>
          <h1>CONHEÇA AIRPHORIA NO FORTNITE: A CAÇA AOS TÊNIS SUPREMA DA NIKE!!</h1>
        </div>
        <div className={style.container4}>
          <h1>
            CRIE AGORA MESMO A SUA PRÓPRIA SKIN!</h1>
        </div>
      </div>

      <div className={style.cardContainer}>
        <div className={style.card1}>
          <img src="https://cdn2.unrealengine.com/fortnite-island-creator-rules-1900x600-a829c3da1d8f.jpg" />
          <h3 className={style.pAzul}>15 de outubro de 2023!</h3>
          <p>REGRAS PARA CRIADORES DE ILHAS DO FORTNITE!</p>
        </div>

        <div className={style.card2}>
          <img src="https://cdn2.unrealengine.com/fortnite-battle-royale-v26-00-sep-6-hotfix-1900x600-f9c76d99b886.jpg" />
          <h3 className={style.pAzul}>22 de outubro de 2023!</h3>
          <p>AJUSTE DO BATTLE ROYALE DE 6 DE SETEMBRO: PEM QUEBRADOR DE ESCUDO E MAIS!!</p>
        </div>

        <div className={style.card3}>
          <img src="https://cdn2.unrealengine.com/summer-escape-header-1900x600-6d21ba26b832.jpg" />
          <h3 className={style.pAzul}>30 de outubro de 2023!</h3>
          <p>MERGULHE NA FUGA DE VERÃO DO FORTNITE!</p>
        </div>
      </div>

      <Footer />
    </div>


  )
}

export default Home