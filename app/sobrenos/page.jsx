import styles from "./sobrenos.module.css"
import Pessoa from "../components/pessoa/page";
import Header from "../components/header/header";
const Sobrenos = () => (
    <div className={styles.main}>
        <Header />
        
        <div className={styles.card1}>
            <img src={"enigma.jpg"} width={256} height={200}/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, labore adipisci delectus blanditiis porro ducimus? Sequi ut quis voluptatibus aliquam, doloribus libero, rerum natus laudantium quas eaque vitae expedita quisquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, labore adipisci delectus blanditiis porro ducimus? Sequi ut quis voluptatibus aliquam, doloribus libero, rerum natus laudantium quas eaque vitae expedita quisquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, labore adipisci delectus blanditiis porro ducimus? Sequi ut quis voluptatibus aliquam, doloribus libero, rerum natus laudantium quas eaque vitae expedita quisquam.
            </p>
        </div>
        <div className={styles.container}>
            <Pessoa imagem={""} nome={"Pedro Isac"} cargo={"Desenvolvedor"} descricao={"Gosto muito de musica"} />
            <Pessoa imagem={""} nome={"Guilherme Rocha"} cargo={"Desenvolvedor"} descricao={"Gosto muito de musica"} />
            <Pessoa imagem={""} nome={"Matheus Gomes"} cargo={"Desenvolvedor"} descricao={"Gosto muito de musica"} />
        </div>
        <div className={styles.container}>
            <Pessoa imagem={""} nome={"Matheus Coco"} cargo={"Desenvolvedor"} descricao={"Gosto muito de musica"} />
            <Pessoa imagem={""} nome={"Thayna Vazzoler"} cargo={"Desenvolvedor"} descricao={"Gosto muito de musica"} />
            <Pessoa imagem={""} nome={"Felipe Pedro"} cargo={"Desenvolvedor"} descricao={"Gosto muito de musica"} />
        </div>
    </div>
);


export default Sobrenos;