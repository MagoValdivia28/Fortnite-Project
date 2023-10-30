import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "./noticia1.module.css";
const Noticia1 = () => {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <img className={styles.img1} src="https://cdn2.unrealengine.com/fortnite-airphoria-1900x600-c928324c123d.jpg" />
                <div className={styles.section}>
                    <h1 className={styles.tituloHeader}>CONHEÇA AIRPHORIA NO FORTNITE: A CAÇA AOS TÊNIS SUPREMA DA NIKE</h1>
                    <span className={styles.dataHeader}>20.06.2023</span>
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
                    <h2 className={styles.tituloNoticia}>CONFIGURAÇÕES RECOMENDADAS PARA AIRPHORIA NO PC</h2>
                    <ul>
                        <li className={styles.li}>Modo de renderização: <strong>DirectX 121</strong> (é necessário reiniciar)
                            <li className={styles.liCircle}>Pode ser que você precise atualizar os drivers.</li>
                        </li>
                        <li className={styles.li}>Habilite <strong>Geometria Virtualizada de Nanite</strong></li>
                        <li className={styles.li}>Defina a <strong>Iluminação Global</strong> como Lumens Altos ou Lumens Épico</li>
                    </ul>
                    <h2 className={styles.tituloNoticia}>MAXXIMIZE SEU VESTIÁRIO COM AIRA E MAX MAXXIMISTA</h2>
                    <p className={styles.texto}>Aproveite os Trajes Aira e Max Maxximista, que já estão disponíveis na Loja de Itens! Ambos os Trajes fazem parte do Pacote Airphoria, que ainda conta com os Acessórios para as Costas <strong>Toca-músicas Solista</strong> e <strong>Pilha Máxxima</strong>. Coloque no volume máximo e arrebente na batalha.</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-airie-and-maxxed-out-max-outfits-1920x1080-be79c667f724.jpg" />
                    <p className={styles.texto}>Deixe Aira e Max Maxximista ainda mais estilosos com outros itens da Loja:</p>
                    <ul>
                        <li className={styles.li}><strong>Picareta Aerotênis:</strong> amortece o impacto como nenhum outro.</li>
                        <li className={styles.li}><strong>Picareta Maxxado:</strong> o queridinho dos maiores colecionadores.</li>
                        <li className={styles.li}><strong>Asa-delta Voo Máxximo:</strong> amarre o cadarço no ar.</li>
                        <li className={styles.li}><strong>Gesto Limpeza Expressa:</strong> mantendo o tênis nos trinques.</li>
                    </ul>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-airie-and-maxxed-out-max-accessories-1920x1080-b8b67cc56306.jpg" />
                    <p className={styles.texto}>As Picaretas Aerotênis e Maxxado, a Asa-delta Voo Máxximo e o Gesto Limpeza Expressa podem ser comprados separadamente ou no Pacotão Equipamentos Airphoria, que também inclui o <strong>Emoticon Airceno</strong>, o <strong>Spray Volume Máxximo</strong> e a <strong>Tela de Carregamento Airphoria:</strong></p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortntie-air-wave-emoticon-maxx-volume-spray-and-airphoria-loading-screen-1920x1080-65dcc1452b2f.jpg" />
                    <p className={styles.texto}>A Tela de Carregamento Airphoria em detalhes:</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortntie-airphoria-loading-screen-1920x1080-e030f089e3a4.jpg" alt="" />
                    <p className={styles.center}>
                        <em className={styles.emm}>De olho no prêmio. Arte por Sam Mackenzie.</em>
                    </p>
                    <h2 className={styles.tituloNoticia}>OSTENTE SUAS CONQUISTAS NA .SWOOSH</h2>
                    <p className={styles.texto}>Os jogadores que tiverem, no mínimo, 13 anos, morarem nos Estados Unidos e vincularem suas contas da Epic Games e Nike entre 20 de junho às 13h BRT e 27 de junho às 21h BRT poderão resgatar uma Conquista em <strong>.SWOOSH</strong> até dia 8 de agosto de 2023. Sujeito aos Termos e condições. Saiba mais em <a className={styles.colorLink} href="https://www.epicgames.com/help/en-US/fortnite-c5719335176219/accounts-c19319138499099/earn-achievements-on-swoosh-a16225767406107">fn.gg/airphoria-swoosh-achievements.</a></p>
                    <hr className={styles.hr} />
                    <p className={styles.textoUltimo}>Calce seu tênis para voar nas nuvens de Airphoria 👟</p>
                    <img className={styles.imgUltima} src="https://cdn2.unrealengine.com/fortnite-airphoria-4-1920x1080-378ef0c7e625.jpg" />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Noticia1;