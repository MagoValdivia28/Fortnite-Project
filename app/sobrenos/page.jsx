"use client"
import styles from "./sobrenos.module.css"
import Pessoa from "../components/pessoa/page";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Sobrenos = () => (
   
   <div className={styles.fundo}>
        <Header />
        <div className={styles.main}>
            <div className={styles.card1}>
                <Image className={styles.imgLogo} src={"/enigmaa.jpg"} width={256} height={200} />
                <Image className={styles.imgEquipe} src={"/foto-equipe.jpeg"} width={256} height={200} />
                <p>
                    Em um mundo repleto de desafios e mistérios a serem desvendados, a equipe "ENIGMA" se destaca como um grupo unido e comprometido em superar obstáculos e desvendar os segredos do amanhã. Sob a liderança inspirada de Felipe Pedro, e com a participação ativa dos membros Pedro Isac, Guilherme Rocha, Thayná Vazzoler, Matheus Coco e Matheus Gomes, essa equipe é a personificação da colaboração, inovação e determinação.
                </p>
            </div>
            <div className={styles.container1}>
                <div className={styles.container2}>
                    <Pessoa imagem={"/fe.jpeg"} nome={"Felipe Pedro"} descricao={"TechLead"} />
                    <Pessoa imagem={"/pe.jpg"} nome={"Pedro Isac"} descricao={"Dev"} />
                    <Pessoa imagem={"/rocha.jpeg"} nome={"Guilherme Rocha"} descricao={"2000 Vbucks"} />
                </div>
                <div className={styles.container2}>
                    <Pessoa imagem={"/pravel.jpeg"} nome={"Matheus Gomes"} descricao={"Dev"} />
                    <Pessoa imagem={"/matheus coco.webp"} nome={"Matheus Côcco"} descricao={"Dev"} />
                    <Pessoa imagem={"/thayna.png"} nome={"Thayna Vazzoler"} descricao={"Dev"} />
                </div>
            </div>
        <Footer />
        </div>
  </div>
);


export default Sobrenos;
