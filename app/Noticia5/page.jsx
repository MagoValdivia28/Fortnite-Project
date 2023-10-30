import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "./noticia5.module.css";
const Noticia5 = () => {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <img className={styles.img1} src="https://cdn2.unrealengine.com/summer-escape-header-1900x600-6d21ba26b832.jpg" />
                <div className={styles.section}>
                    <h1 className={styles.tituloHeader}>MERGULHE NA FUGA DE VERÃO DO FORTNITE!</h1>
                    <span className={styles.dataHeader}>04.07.2023</span>
                    <p className={styles.autorHeader}>Equipe Enigma</p>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/Q7aEt2fgt0k?si=0PRfanaSHbSsP_EC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className={styles.texto}>Entre com tudo no clima de verão e flutue até a <strong>Fuga de Verão</strong> do Fortnite, que ficará disponível das 10h (BRT) do dia 4 de julho até as 10h (BRT) do dia 18 de julho de 2023.</p>

                    <h2 className={styles.tituloNoticia}>LAGOA DO SOL POENTE</h2>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-sunswoon-lagoon-1920x1080-1b07b27b7a0c.jpg" />
                    <p className={styles.texto}>O centro da festa está na <strong>Lagoa do Sol Poente</strong>. Esse local de celebração fechará as portas quando a Fuga de Verão acabar, então não se atrase! </p>

                    <h2 className={styles.tituloNoticia}>ENFRENTE O CALOR COM DOCINHOS DE DAR ÁGUA NA BOCA</h2>
                    <p className={styles.texto}>Espero que esteja com fome de doce. Itens de verão, como a <strong>Casquinha de Sorvete Congelada</strong> e a <strong>Sobremesa Especial do Cremosinho</strong>, voltaram especialmente para a Fuga de Verão. </p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-frozen-ice-cream-cones-1920x1080-4500fb165f21.jpg" />
                    <p className={styles.center}>
                        <em className={styles.emm}>Sorvetes tirados do cofre para a Fuga de Verão: Casquinha de Sorvete normal, Casquinha de Sorvete Congelada, Casquinha de Sorvete de Revitalisuco, Casquinha de Sorvete de Pimenta e a Sobremesa Especial do Cremosinho.</em>
                    </p>
                    <p className={styles.texto}>Solte fogos para celebrar o verão! A <strong>Pistola Sinalizadora de Fogos de Artifícios</strong> substituirá a Pistola Sinalizadora durante a Fuga de Verão.</p>

                    <h2 className={styles.tituloNoticia}>TAREFAS FUGA DE VERÃO</h2>
                    <p className={styles.texto}>Curta a atmosfera de verão e obtenha recompensas concluindo as <strong>Tarefas Em Busca do Drink Perfeito</strong>, as <strong>Tarefas Festa na Lagoa</strong> e as <strong>Tarefas Entre com Tudo.</strong></p>

                    <h3 className={styles.h3}>TAREFAS EM BUSCA DO DRINK PERFEITO</h3>
                    <em className={styles.emm}>Ficarão disponíveis gradativamente entre os dias 4 e 7 de julho.</em>

                    <p className={styles.texto}>Todo mundo gosta de uma bebida refrescante, e o Miáusculo das Miauravilhas não é diferente. Assuma a missão de provar bebidas para ele e faça um drinque tropical que ele possa curtir enquanto relaxa no verão. </p>
                    <p className={styles.texto}>Recompensas das Tarefas Em Busca do Drink Perfeito:</p>
                    <li className={styles.li}>EXP</li>
                    <li className={styles.li}>Envelopamento Nanicas</li>

                    <h3 className={styles.h3}>TAREFAS FESTA NA LAGOA</h3>
                    <em className={styles.emm}>Ficarão disponíveis gradativamente entre os dias 8 e 11 de julho.</em>
                    <p className={styles.texto}>O que é uma festa sem comida boa? Encontre a refeição perfeita para a festa e seja o centro das atenções na Ilha. </p>
                    <p className={styles.texto}>Recompensas das Tarefas Em Busca do Drink Perfeito:</p>
                    <li className={styles.li}>EXP</li>
                    <li className={styles.li}>Acessório para as Costas Sapito</li>

                    <h3 className={styles.h3}>TAREFAS ENTRE COM TUDO</h3>
                    <em className={styles.emm}>Ficarão disponíveis gradativamente entre os dias 12 e 16 de julho.</em>
                    <p className={styles.texto}>Você pode fazer uma entrada normal na festa, ou pode chegar com estilo. Faça uma entrada que ninguém esquecerá!</p>
                    <p className={styles.texto}>Recompensas das Tarefas Entre com Tudo:</p>
                    <li className={styles.li}>EXP</li>
                    <li className={styles.li}>Rastro de Fumaça Voo Florido</li>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-nanners-wrap-treezy-back-bling-and-blossom-drop-contrail-1920x1080-f9866fd7396c.jpg" />
                    <p className={styles.center}>
                        <em className={styles.emm}>Envelopamento Nanicas, Acessório para as Costas Sapito e Rastro de Fumaça Voo Florido.</em>
                    </p>
                    <p className={styles.texto}>Você ganhará EXP concluindo cada uma das Tarefas Fuga de Verão. Concluindo um determinado número de Tarefas Fuga de Verão, você desbloqueará novos itens para o seu Vestiário:</p>
                    <li className={styles.li}>Conclua 14 Tarefas Fuga de Verão: <strong>Acessório para as Costas Asas da Selva</strong></li>
                    <li className={styles.li}>Conclua 18 Tarefas Fuga de Verão: <strong>Asa-delta Zumbido</strong></li>
                    <li className={styles.li}>Conclua 24 Tarefas Fuga de Verão: <strong>Tela de Carregamento Fuga da Lagoa e Gesto Batida de Coco</strong></li>

                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-wild-fronds-back-bling-bugsy-glider-and-toasted-coconut-emote-1920x1080-255914a85a11.jpg" />
                    <p className={styles.center}>
                        <em className={styles.emm}>Acessório para as Costas Asas da Selva, Asa-delta Zumbido, Tela de Carregamento Fuga da Lagoa e Gesto Batida de Coco.</em>
                    </p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-lagoon-escape-loading-screen-1920x1080-d80b356d013f.jpg" />
                    <p className={styles.center}>
                        <em className={styles.emm}>Tela de Carregamento Fuga da Lagoa.</em>
                    </p>
                    <p className={styles.texto}>Concluindo estas Tarefas Fuga de Verão, você desbloqueará ainda mais itens para o seu Vestiário:</p>
                    <li className={styles.li}>Destrua 10 pedras: <strong>Picareta Machado Arcaico</strong> (Tarefa disponível às 10h BRT do dia 11 de julho) </li>
                    <li className={styles.li}>Escale em até 30 s após arrombar uma porta: <strong>Envelopamento Mar Estrelado</strong> (Tarefa disponível às 10h BRT do dia 12 de julho) </li>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-artifact-axe-pickaxe-and-starry-sea-wrap-1920x1080-79d70147f8ce.jpg" />
                    <p className={styles.center}>
                        <em className={styles.emm}>Picareta Machado Arcaico e Envelopamento Mar Estrelado.</em>
                    </p>
                    <p className={styles.texto}>Uma vez liberadas, as Tarefas Fuga de Verão ficarão disponíveis até o fim da Fuga de Verão.</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/summer-escape-discover-1920x1080-2a8322ab8a81.jpg" />
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-nanner-buddy-back-bling-1920x1080-3ab5f6b9993b.jpg" />
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-opal-outfit-and-chaos-explorer-outfit-1920x1080-ff3e36a87f2b.jpg" />
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-purradise-meowscles-outfit-1920x1080-c3779b7cfbb9.jpg" />
                    <p className={styles.center}>
                        <em className={styles.emm}>De olho no prêmio. Arte por Sam Mackenzie.</em>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Noticia5;