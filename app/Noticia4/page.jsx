import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "./noticia4.module.css";
const Noticia4 = () => {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <img className={styles.img1} src="https://cdn2.unrealengine.com/fortnite-battle-royale-v26-00-sep-6-hotfix-1900x600-f9c76d99b886.jpg" />
                <div className={styles.section}>
                    <h1 className={styles.tituloHeader}>AJUSTE DA V.26.00 DO BATTLE ROYALE DO FORTNITE DE 6 DE SETEMBRO: PEM QUEBRADOR DE ESCUDO E MAIS!</h1>
                    <span className={styles.dataHeader}>06.09.2023</span>
                    <p className={styles.autorHeader}>Equipe Enigma</p>
                    <p className={styles.texto}> As defesas do Kouji estão dando trabalho? O ajuste v.26.00 de 6 de setembro traz dois itens que ajudarão você a invadir qualquer base: o <strong>PEM Quebrador de Escudo</strong> e o <strong>Lançador de Granadas Adesivas</strong>. Se os foguetes do Lançador de Granadas Adesivas acabarem, basta se precaver: o <strong>Otimizador da Realidade Extra Explosivo</strong> reabastecerá você. </p>
                    <h2 className={styles.tituloNoticia}>PEM QUEBRADOR DE ESCUDO</h2>
                    <p className={styles.texto}>Arremesse um PEM Quebrador de Escudo para causar dano a Escudos inimigos e desativar temporariamente sistemas elétricos, como câmeras, torretas e redes de laser. Mas cuidado na hora da fuga, pois o PEM Quebrador de Escudo também desabilita veículos.</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-battle-royale-v26-00-sep-6-hotfix-1900x600-f9c76d99b886.jpg" />
                    <p className={styles.texto}>A melhor defesa é o ataque contra defesas. O PEM Quebrador de Escudo pode ser encontrado no chão, em Baús e Bolsas de Roubo.</p>
                    <h2 className={styles.tituloNoticia}>LANÇA-GRANADAS ADESIVANTE</h2>
                    <p className={styles.texto}> Quer dizer que suas tentativas de roubo não estão colando? Sem estresse. Use o Lançador de Granadas Adesivas para disparar projéteis que grudam em superfícies! Os projéteis explodem após um curto período, causando dano a estruturas e inimigos próximos.</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-sticky-grenade-launcher-1900x600-676fcc583c23.jpg" />
                    <p className={styles.texto}>O Lançador de Granadas Adesivas grudou na sua mente? Essa nova arma pode ser encontrada em Baús, Baús Holográficos, Bolsas de Roubo, drones voadores e reivindicando um PI.</p>
                    <h2 className={styles.tituloNoticia}>NOVOS OTIMIZADORES DA REALIDADE</h2>
                    <h3 className={styles.h3}>EXTRA EXPLOSIVO</h3>
                    <p className={styles.texto}>Extra! Extra! Mais explosões chegando! Após ativar o Otimizador da Realidade Extra Explosivo, você receberá uma leva de munição de foguete logo de cara e, sempre que abrir contêineres, receberá mais. Use o Otimizador da Realidade enquanto dispara foguetes com o Lançador de Granadas Adesivas para mostrar todo o seu poder explosivo!</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-explosive-surplus-reality-augment-1900x600-42127628742c.jpg" />
                    <h3 className={styles.h3}>ALTA VOLTAGEM</h3>
                    <p className={styles.texto}>Ative o <strong>Otimizador da Realidade Alta Voltagem</strong> para ganhar instantaneamente uma Maleta Torreta e PEMs Quebradores de Escudo. Ao ativar este Otimizador, as eliminações obtidas concederão PEMs Quebradores de Escudo adicionais.</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-high-voltage-reality-augment-1900x600-f5b290ee2071.jpg" />
                    <h3 className={styles.h3}>CAÇA-TEMPESTADES</h3>
                    <p className={styles.texto}>O Otimizador da Realidade <strong>Caça-tempestades</strong> (ou Escapa-tempestades, melhor dizendo) reduz o gasto de Energia ao correr em disparada. O gasto de Energia será ainda menor na Tempestade.</p>
                    <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-storm-chaser-reality-augment-1900x600-f364617a20c5.jpg" />
                    <p className={styles.texto}>Se perseguir a Tempestade (ou fugir dela) não for eletrizante o bastante pra você, também retiramos o Otimizador da Realidade Reinstalação Rápida do cofre. Ganhe Reinstalação de Asa-delta sempre que ganhar imunidade a dano de queda!</p>
                    <h2 className={styles.tituloNoticia}>OBSERVAÇÕES DO COMPETITIVO</h2>
                    <li className={styles.li}>Os Otimizadores da Realidade Lançador de Granadas Adesivas e Extra Explosivo não estão inclusos nos torneios.</li>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Noticia4;

