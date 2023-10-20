import styles from "./pessoa.module.css";
const Pessoa = ({ imagem, nome, descricao }) => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <img src={imagem} />
        <div className={styles.cardContent}>
          <h2>
            {nome}
          </h2>
          <p>
            {descricao}
          </p>
        </div>
      </div>
    </div>
    {/* <div className={styles.cardPessoa}>
            <img src={imagem} height={300} width={300} />
            <div className={styles.info}>
              <h2>{nome}</h2>
              <h3>{cargo}</h3>
            </div>
            <div className={styles.descri}>
              <p>{descricao}</p>
            </div>
          </div>
          </div> */
          * /}
         
  )
  
}

export default Pessoa;