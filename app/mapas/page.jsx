import Mapinfo from "../components/infomap/page";
import styles from "./page.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Mapas = () => (
      


    <div className={styles.main}>
         <Header />
         <div className={styles.cards}>
        <Mapinfo imagem={"/fortinite primeiro mapa.png"} nome={"Versao 1.6.0"} descrição={"O primeiro mapa do jogo"} cor={"#FF0000"}/>
        <Mapinfo imagem={"/fortinite primeiro mapa.png"} nome={"Versao 1.6.0"} descrição={"O primeiro mapa do jogo"} cor={"#FF0000"}/>
         </div>

    </div>
    
);

export default Mapas;