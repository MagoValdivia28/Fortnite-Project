import styles from './page.module.css';

const Mapinfo = ({imagem, nome, descrição, cor})  => {
    return (
        <div>
            <div className={styles.cardMap} style={{background: cor}}>
                <img src={imagem} height={200} width={200}/>
                <h2>{nome}</h2>
                <h3>{descrição}</h3>


            </div>
        </div>
    )
}

export default Mapinfo;