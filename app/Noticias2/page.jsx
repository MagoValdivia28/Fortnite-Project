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
                    <li className={styles.li}>Domingo, 15 de outubro</li>
                    <li className={styles.li}>O final de semana inteiro!</li>
                    <p className={styles.texto}>Você também pode assistir ao Campeonato Global do FNCS 2023 em outro lugar: o Lar das Lendas, no Fortnite! Assista à ação com outros jogadores e use Gestos para torcer pela sua dupla favorita. Acesse o Lar das Lendas com o Código da Ilha <a href={"https://www.fortnite.com/@gamefamx/3303-7480-5925"}>3303-7480-5925</a>, ou selecionando-a no Descobrir.</p>
                    <h2 className={styles.tituloNoticia}>GANHE SAQUES ASSISTINDO</h2>
                    <p className={styles.texto}>Você pode ganhar saques do Fortnite assistindo à competição! Ganhe saques do Fortnite assistindo no Lar das Lendas ou em<a href={"https://competitive.fortnite.com"}>competitive.fortnite.com.</a>  Caso você assista em <a href={"https://competitive.fortnite.com"}>competitive.fortnite.com</a>, lembre-se de se conectar com sua conta Epic Games.</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/pt-br-loc-26comp-fncs-gc-rewards-social-1920x1080-a64178fcf5e9.jpg" />
                    <p className={styles.texto}>Você não precisa competir para pontuar. Obtenha saques do Fortnite assistindo ao Campeonato Global do FNCS 2023:</p>
                    <li className={styles.li}>Assista por 30 minutos no Dia 1 no Lar das Lendas ou em competitive.fortnite.com: <strong>Emoticon Mostre seu Troféu</strong></li>
                    <li className={styles.li}>Assista por 30 minutos no Dia 2 no Lar das Lendas ou em competitive.fortnite.com: <strong> Spray Vitória Infinita</strong></li>
                    <li className={styles.li}>Assista por 30 minutos no Dia 3 no Lar das Lendas ou em competitive.fortnite.com: <strong>Tela de Carregamento Lendas Cintilantes</strong></li>
                    <li className={styles.li}>Assista por 1 hora no Dia 3 no Lar das Lendas ou em competitive.fortnite.com: <strong>Acessório para as Costas Escudo Eficiente</strong></li>
                    <p className={styles.texto}>Esses itens não estarão mais disponíveis para resgate por meio de saques do Fortnite após o fim da transmissão oficial do Campeonato Global do FNCS 2023, em 15 de outubro, mas, posteriormente, podem ser disponibilizados para compra na Loja de Itens do Fortnite.</p>
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
