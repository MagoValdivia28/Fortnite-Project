export default class Roupa {
    constructor(nome,raridade,preco, capitulo, dataLancamento) {
        this.nome = nome;
        this.raridade = raridade;
        this.preco = preco;
        this.capitulo = capitulo;
        this.dataLancamento = dataLancamento;
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

