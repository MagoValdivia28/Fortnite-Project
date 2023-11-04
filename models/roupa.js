class Roupa {
    constructor(nome,descricao, raridade, dataLancamento, capitulo, temporada, imagem,  ) {
        this.nome = nome;
        this.descricao = descricao;
        this.raridade = raridade;
        this.dataLancamento = dataLancamento;
        this.capitulo = capitulo;
        this.temporada = temporada;
        this.imagem = imagem;
        this.id = this.generateId();
    }

    generateId() {
        return parseInt(Math.random() * 9999);
    }

}

export default Roupa