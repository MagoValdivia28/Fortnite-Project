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
                    <p className={styles.texto}> Chamando todos os colecionadores de tênis: numa improvável cidade flutuante, "Aira" frustrou a tentativa do "Max Maxximista" de adicionar Relíquias do Air Max à sua coleção já maxximizada. Conheça Airphoria no Fortnite e recupere as Relíquias do Air Max perdidas! Em troca, você receberá o <strong>Acessório para as Costas Air Max 1 '86.</strong></p>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/oqUaNwoWBYk?si=Jeop2lohtGgpLRW3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className={styles.texto}>Quer mais itens de Air Max no seu Vestiário? Os Trajes <strong>Aira</strong> e <strong>Max Maxximista</strong> já estão disponíveis na Loja de Itens do Fortnite com o <strong>Pacote Airphoria.</strong></p>
                    <h2 className={styles.tituloNoticia}>BOAS-VINDAS A AIRPHORIA</h2>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-airphoria-1-1920x1080-ce933e5fba41.jpg" />
                    <p className={styles.texto}>Prepare-se para uma aventura nas alturas: Airphoria é uma celebração aérea à cultura do "tênis". Pise com todo o conforto e conheça locais como a "Estação 97", a "Torre de Caixas de Sapatos" e o "Museu Máxximo". Explore a cidade para encontrar as Relíquias do Air Max!</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-airphoria-2-1920x1080-a6b77c9e379a.jpg" />
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-airphoria-3-1920x1080-f81d5be0b111.jpg" />
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
