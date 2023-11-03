"use client"

class Roupas {
    constructor() {
        this.roupas = [];
    }

    addRoupa(roupa) {
        this.roupas.push(roupa);
        console.log(this.roupas);
    }

    getRoupas() {
        return this.roupas;
    }

    getRemoveRoupaById(lista) {
        console.log('removido ' + lista.id);
        this.roupas = this.roupas.filter(roupa => roupa.id !== lista.id);
        console.log(this.roupas);
    }
}

export default Roupas
