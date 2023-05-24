"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setor = void 0;
class Setor {
    constructor(id, departamentoID, chefeID, nome, funcao, direcao) {
        this._id = 0;
        this._departamentoID = [];
        this._chefeID = 0; //TODO FK Chefe
        this._nome = "";
        this._funcao = "";
        this._direcao = false;
        this.id = id;
        this._departamentoID = departamentoID;
        this.chefeID = chefeID;
        this.nome = nome;
        this.funcao = funcao;
        this.direcao = direcao;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    //GETTER e SETTER DEPARTAMENTO ID
    set departamentoID(departamento) {
        for (let idDep of departamento)
            this._departamentoID.map(({ id }) => (idDep.id = id));
    }
    get departamentoID() {
        return this._departamentoID;
    }
    //GETTER E SETTER CHEFE
    set chefeID(id) {
        this._chefeID = id;
    }
    get chefeID() {
        return this._chefeID;
    }
    //GETTER E SETTER NOME
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    //GETTER E SETTER
    set funcao(funcao) {
        this._funcao = funcao;
    }
    get funcao() {
        return this._funcao;
    }
    //GETTER E SETTER DIREÇÃO
    set direcao(direcao) {
        this._direcao = direcao;
    }
    get direcao() {
        return this._direcao;
    }
}
exports.Setor = Setor;
