export default class Roupa {
    constructor(nome,descricao, raridade, dataLancamento, capitulo, temporada, imagem ) {
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

    generateImage() {
        return 'https://fortniteskins.net/wp-content/cache/thumb/91/9ce682852850991_666x630.webp'
    }
}

