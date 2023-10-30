import Roupa from "./roupa";

export default class Roupas {
    constructor() {
        this.roupas = [];
    }

    addRoupa(nome, descricao, rarity, dataLancamento, capitulo, temporada, imagem) {
        const novaRoupa = new Roupa(nome, descricao, rarity, dataLancamento, capitulo, temporada, imagem);
        this.roupas.push(novaRoupa);
    }

    getRoupas() {
        return this.roupas;
    }
}
