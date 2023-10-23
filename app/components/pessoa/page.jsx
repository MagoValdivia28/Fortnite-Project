import styles from "./pessoa.module.css";
const Pessoa = ({ imagem, nome, cargo, descricao, cor }) => {
    return (
        <div>
            <div className={styles.cardPessoa} style={{ backgroundColor: cor}}>
                <img src={imagem} height={200} width={250} />
                <h2>{nome}</h2>
                <h3>{cargo}</h3>
                <p>{descricao}</p>
            </div>
        </div>
    )
};

export default Pessoa;  