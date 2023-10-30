import Roupa from "./roupa";

export default class Roupas {
    constructor() {
        this.roupas = [];
    }

    addRoupa(nome, descricao, rarity, dataLancamento, capitulo, temporada) {
        const novaRoupa = new Roupa(nome, descricao, rarity, dataLancamento, capitulo, temporada);
        this.roupas.push(novaRoupa);
    }
}
