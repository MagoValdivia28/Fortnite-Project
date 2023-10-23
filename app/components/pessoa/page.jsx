import styles from "./pessoa.module.css";

const Pessoa = ({ imagem, nome, cargo, descricao }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={imagem} width={300} height={300} />
      <div className={styles.cardDescription}>
        <h1>{nome}</h1>
        <p>{cargo}</p>
        <div className={styles.vbucks}>
          <p>{descricao}</p>
        </div>
      </div>
    </div>
  )
};

export default Pessoa;