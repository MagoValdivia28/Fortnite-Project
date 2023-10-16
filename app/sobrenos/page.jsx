import styles from "./sobrenos.module.css"
import Pessoa from "../components/pessoa/page";
import Header from "../components/header/header";
import Image from "next/image";
const Sobrenos = () => (
    <div className={styles.main}>
        <Header />

        <div className={styles.card1}>
            <Image src={"/enigma.jpg"} width={256} height={200} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, labore adipisci delectus blanditiis porro ducimus? Sequi ut quis voluptatibus aliquam, doloribus libero, rerum natus laudantium quas eaque vitae expedita quisquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, labore adipisci delectus blanditiis porro ducimus? Sequi ut quis voluptatibus aliquam, doloribus libero, rerum natus laudantium quas eaque vitae expedita quisquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, labore adipisci delectus blanditiis porro ducimus? Sequi ut quis voluptatibus aliquam, doloribus libero, rerum natus laudantium quas eaque vitae expedita quisquam.
            </p>
        </div>
        <div className={styles.container}>
            <Pessoa imagem={"/"} nome={"Felipe Pedro"} cargo={"TechLead"} descricao={"Felipe Pedro, o líder carismático e habilidoso da equipe, é o pilar sobre o sucesso coletivo. Com sua visão estratégica e habilidade em motivar os outros, ele liderou a equipe 'ENIGMA' na direção de grandes conquistas e vitórias."} />
            <Pessoa imagem={"/pe.jpg"} nome={"Pedro Isac"} cargo={"Dev"} descricao={"Pedro Isac, um visionário nato, é a mente por trás das ideias revolucionárias do grupo. Com sua paixão pela tecnologia e sua habilidade em pensar fora da caixa, Pedro é a força motriz por trás das inovações que a equipe 'ENIGMA' traz para o mundo."} />
            <Pessoa imagem={"/"} nome={"Guilherme Rocha"} cargo={"Dev"} descricao={"Guilherme Rocha é o estrategista incansável da equipe. Sua capacidade de pensar de forma lógica e racional é um ativo valioso na resolução de problemas complexos. Ele sempre encontra a melhor maneira de abordar qualquer situação, mantendo a equipe no caminho certo."} />
        </div>
        <div className={styles.container}>
            <Pessoa imagem={"/"} nome={"Matheus Gomes"} cargo={"Dev"} descricao={"Matheus Gomes é o técnico habilidoso que garante que todas as inovações sejam inovadoras com sucesso. Sua experiência em lidar com tecnologias de ponta é fundamental para visões transformarem em realidade."} />
            <Pessoa imagem={"/"} nome={"Matheus Coco"} cargo={"Dev"} descricao={"Matheus Coco é o membro mais criativo da equipe. Sua mente artística traz uma perspectiva única para a solução de problemas, e sua habilidade em transformar ideias em realidade é inigualável."} />
            <Pessoa imagem={"/"} nome={"Thayna Vazzoler"} cargo={"Dev"} descricao={"Thayna Vazzoler é especialista em pesquisa e análise de dados da equipe. Sua curiosidade insaciável e atenção aos detalhes permitem que a equipe 'ENIGMA' descubra insights importantes e tome decisões embasadas em evidências."} />
        </div>
    </div>
);


export default Sobrenos;