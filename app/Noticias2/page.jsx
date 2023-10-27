import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import styles from './page.module.css'


const Noticia2 = () => {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <img className={styles.img2} src="	https://cdn2.unrealengine.com/fncs-global-championship-2023-1900x600-73be5bea2d7e.jpg" />
                <div>
                    <h1><strong>CAMPEONATO GLOBAL DO FNCS 2023 — PROGRAMAÇÃO DAS TRANSMISSÕES E CAMPEONATO DA COMUNIDADE!</strong></h1>
                    <span>24.10.2023</span>
                    <p>E aí, pessoal! A Tabela de Liderança do Fortnite no Discord voltou trazendo recompensas no jogo para jogar com amigos do Discord. Além disso, ganhe um mês de Discord Nitro só de participar.</p>
                </div>

            </div>
            <Footer />
        </>
    )

}

export default Noticia2