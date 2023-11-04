"use client"

class Roupas {
    constructor() {
        this.roupas = [];
    }

    addRoupa(roupa) {
        this.roupas.push(roupa);
    }

    getRoupas() {
        return this.roupas;
    }

    getRemoveRoupaById(lista) {
        this.roupas = this.roupas.filter(roupa => roupa.id !== lista.id);
    }

    getEditRoupaById(nome, descricao, rarity, data, capitulo, temporada, imagem, id) {
        this.roupas = this.roupas.map(roupa => {
            if (roupa.id === id) {
                roupa.nome = nome;
                roupa.descricao = descricao;
                roupa.raridade = rarity;
                roupa.dataLancamento = data;
                roupa.capitulo = capitulo;
                roupa.temporada = temporada;
                roupa.imagem = imagem;
            }
            return roupa;
        });
    }
}

export default Roupas
