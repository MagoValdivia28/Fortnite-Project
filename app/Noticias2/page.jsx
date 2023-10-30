import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import styles from './page.module.css'


const Noticia2 = () => {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <img className={styles.img1} src="https://cdn2.unrealengine.com/fncs-global-championship-2023-1900x600-73be5bea2d7e.jpg" />
                <div className={styles.section}>
                    <h1 className={styles.tituloHeader}>CAMPEONATO GLOBAL DO FNCS 2023 — PROGRAMAÇÃO DAS TRANSMISSÕES E CAMPEONATO DA COMUNIDADE!</h1>
                    <span className={styles.dataHeader}>02.10.2023</span>
                    <p className={styles.autorHeader}>Equipe Enigma</p>
                    <p className={styles.texto}> O <strong>Campeonato Global do FNCS 2023 está chegando!</strong> A batalha entre alguns dos melhores jogadores do FNCS do mundo ocorrerá entre <strong>13 e 15 de outubro</strong> em Copenhague, Dinamarca. O que está em jogo? <strong>Um total de mais de US$ 4.000.000 em prêmios.</strong> Confira os detalhes do evento logo abaixo, incluindo como assistir pessoalmente na Royal Arena, pelo Fortnite no Lar das Lendas, ou no conforto da sua casa. Confira também os detalhes do <a href={"https://www.fortnite.com/competitive/news/fncs-global-championship-2023-broadcast-schedule-and-community-cup#FNCS-Global-Championship-Community-Cup"}> Campeonato Global da Comunidade do FNCS!</a></p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/pt-br-26comp-fncs-gc-logokeyart-social-1920x1080-309a5f8fbc52.jpg" />
                    <h2 className={styles.tituloNoticia}>ONDE ASSISTIR</h2>
                    <h4 className={styles.subtituloNoticia}><strong>ASSISTA PRESENCIALMENTE NA ROYAL ARENA</strong></h4>
                    <p className={styles.texto}>Assista à Vitória Royale na Royal Arena. Os ingressos para assistir pessoalmente ao Campeonato Global do FNCS 2023, na Royal Arena de Copenhague, estão à venda em <a href={"http://fn.gg/tickets"}> fn.gg/tickets.</a> Há ingressos para:</p>
                    <li className={styles.li}>Sexta-feira, 13 de outubro</li>
                    <li className={styles.li}>Sábado, 14 de outubro</li>
                    <li className={styles.li}>Sexta-feira, 13 de outubro</li>
                    <li className={styles.li}>Sexta-feira, 13 de outubro</li>
                    <p className={styles.texto}>Airphoria é uma colaboração entre Beyond Creative, Nike e Epic Games, que utiliza o Unreal Editor para Fortnite (UEFN). A Ilha Airphoria já está disponível até 27 de junho de 2023, às 21h BRT. Você pode acessá-la pelo Descobrir ou usando o Código da Ilha  2118-5342-7190! A partir de 28 de junho, quem jogar na Ilha por no mínimo 10 minutos receberá o Acessório para as Costas Air Max 1 '86. (Pode levar um tempo até você receber a caixa de presente com o item.)</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-air-max-1-86-back-bling-1920x1080-f794829b3958.jpg" />
                    <p className={styles.center}>
                        <em className={styles.emm}>O original</em>
                    </p>
                    <h2 className={styles.tituloNoticia}>MAXXIMIZE SEU VESTIÁRIO COM AIRA E MAX MAXXIMISTA</h2>
                    <p className={styles.texto}>Aproveite os Trajes Aira e Max Maxximista, que já estão disponíveis na Loja de Itens! Ambos os Trajes fazem parte do Pacote Airphoria, que ainda conta com os Acessórios para as Costas <strong>Toca-músicas Solista</strong> e <strong>Pilha Máxxima</strong>. Coloque no volume máximo e arrebente na batalha.</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-airie-and-maxxed-out-max-outfits-1920x1080-be79c667f724.jpg" />
                    <p className={styles.texto}>Deixe Aira e Max Maxximista ainda mais estilosos com outros itens da Loja:</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                </div>
            </div>
            <Footer />
        </>
    )
}
export default Noticia2;
