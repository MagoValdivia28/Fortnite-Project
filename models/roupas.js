import Roupa from "./roupa";

export default class Roupas {
    constructor() {
        this.roupas = [];
    }

    addRoupa(nome, raridade, preco, capitulo, dataLancamento) {
        const novaRoupa = new Roupa(nome, raridade, preco, capitulo, dataLancamento);
        this.roupas.push(novaRoupa);
    }
}
