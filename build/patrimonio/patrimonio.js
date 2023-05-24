"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patrimonio = void 0;
class Patrimonio {
    constructor(id, setorID, catedoriaID, colaboradorID, codigo, nome, dataAdquirido, valorAdquirido, valorDepreciado, estado, observacao) {
        this._id = 0;
        this._setorID = [];
        this._categoriaID = [];
        this._colaboradorID = 0; //TODO  FK colaborador
        this._codigo = "";
        this._nome = "";
        this._dataAdquirido = new Date();
        this._valorAdquirido = 0;
        this._valorDepreciado = 0;
        this._estado = "";
        this._observacao = "";
        this.id = id;
        this.setorID = setorID;
        this.categoriaID = catedoriaID;
        this.colaboradorID = colaboradorID;
        this.codigo = codigo;
        this.nome = nome;
        this.dataAdquirido = dataAdquirido;
        this.valorAdquirido = valorAdquirido;
        this.valorDepreciado = valorDepreciado;
        this.estado = estado;
        this.observacao = observacao;
    }
    //GETTER E SETTER ID
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    //GETTER E SETTER SETOR ID
    set setorID(setor) {
        for (let setorID of setor) {
            this._setorID.map((id) => (id.id = setorID.id));
        }
    }
    get setorID() {
        return this._setorID;
    }
    //GETTER E SETTER CATEGORIA ID
    set categoriaID(categoria) {
        for (let catID of categoria) {
            this._categoriaID.map((id) => (id.id = catID.id));
        }
    }
    get categoriaID() {
        return this._categoriaID;
    }
    //GETTER E SETTER COLABORADOR ID
    set colaboradorID(id) {
        this._colaboradorID = id; //Deve ser alterado para classe colaborador
    }
    get colaboradorID() {
        return this._colaboradorID;
    }
    //GETTER E SETTER CODIGO
    set codigo(cod) {
        this._codigo = cod;
    }
    get codigo() {
        return this._codigo;
    }
    //GETTER E SETTER NOME
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    //GETTER E SETTER DATA ADQUIRIDO
    set dataAdquirido(data) {
        this._dataAdquirido = data;
    }
    get dataAdquirido() {
        return this._dataAdquirido;
    }
    //GETTER E SETTER VALOR ADQUIRIDO
    set valorAdquirido(valor) {
        this._valorAdquirido = valor;
    }
    get valorAdquirido() {
        return this._valorAdquirido;
    }
    //GETTER E SETTER VALOR DEPRECIADO
    set valorDepreciado(valor) {
        this._valorDepreciado = valor;
    }
    get valorDepreciado() {
        return this._valorDepreciado;
    }
    //GETTER E SETTER ESTADO
    set estado(estado) {
        this._estado = estado;
    }
    get estado() {
        return this._estado;
    }
    //GETTER E SETTER OBSERVAÇÃO
    set observacao(obs) {
        this._observacao = obs;
    }
    get observacao() {
        return this._observacao;
    }
}
exports.Patrimonio = Patrimonio;
