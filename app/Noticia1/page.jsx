import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "./noticia1.module.css";
const Noticia1 = () => {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <img className={styles.img1} src="https://cdn2.unrealengine.com/fortnite-fortnitemares-2023-1900x600-bc67aa012cc0.jpg" />
                <div className={styles.section}>

                    <h1>FORTNITE: PESADELOS 2023 CHEGOU COM A ATUALIZAÇÃO DA V.26.30 DO BATTLE ROYALE DO FORTNITE</h1>
                    <span>10.10.2023</span>
                    <p>Esta es la noticia 1</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Noticia1;