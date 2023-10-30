export default class Roupa {
    constructor(nome,descricao, raridade, dataLancamento, capitulo, temporada ) {
        this.nome = nome;
        this.descricao = descricao;
        this.raridade = raridade;
        this.dataLancamento = dataLancamento;
        this.capitulo = capitulo;
        this.temporada = temporada;
        this.id = this.generateId();
        this.imagem = this.generateImage();
    }

    generateId() {
        return parseInt(Math.random() * 9999);
    }

    generateImage() {
        return 'https://fortniteskins.net/wp-content/cache/thumb/91/9ce682852850991_666x630.webp'
    }
}

