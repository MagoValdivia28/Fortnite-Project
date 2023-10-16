const Pessoa = ({ imagem, nome, cargo, descricao }) => {
    return(
    <div>
        <img src={imagem}/>
        <h2>{nome}</h2>
        <h3>{cargo}</h3>
        <p>{descricao}</p>
    </div>
)};

export default Pessoa;