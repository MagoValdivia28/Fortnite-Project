import styles from "./pessoa.module.css";
const Pessoa = ({ imagem, nome, cargo, descricao, cor }) => {
    // return (
    //     <div>
    //         <div className={styles.cardPessoa} style={{ backgroundColor: cor}}>
    //             <img src={imagem} height={200} width={250} />
    //             <h2>{nome}</h2>
    //             <h3>{cargo}</h3>
    //             <p>{descricao}</p>
    //         </div>
    //     </div>
    // )
    return (
        <div className={styles.card}>
          <img src={imagem} width={300} height={300} />
          <div className={styles.cardDescription}>
            <h1>{nome}</h1>
            <p>{cargo}</p>
            <div className={styles.vbucks}>
                <p>12</p>
            </div>
          </div>
        </div>
      )
};

export default Pessoa;