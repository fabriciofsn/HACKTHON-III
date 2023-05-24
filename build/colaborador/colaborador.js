"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = void 0;
class Colaborador {
    //GETTER E SETTER ID
    set id(value) {
        this._id = value;
    }
    get id() {
        return this._id;
    }
    //GETTER E SETTER SETOR ID
    set setorID(value) {
        for (let idSetor of this._setorID) {
            value.map((id) => (id.id = idSetor.id));
        }
    }
    get setorID() {
        return this._setorID;
    }
    //GETTER E SETTER CARGO ID
    set cargoID(value) {
        for (let cargoID of this.cargoID) {
            value.map((id) => (id.id = cargoID.id));
        }
    }
    get cargoID() {
        return this._cargoID;
    }
    //GETTER E SETTER CPF
    set CPF(cpf) {
        const CPFvalidator = /^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$/;
        if (CPFvalidator.test(cpf)) {
            this._CPF = cpf;
        }
        else {
            throw new Error();
        }
    }
    get CPF() {
        return this._CPF;
    }
    //GETTER E SETTER NOME
    set nome(value) {
        this._nome = value;
    }
    get nome() {
        return this._nome;
    }
    //GETTER E SETTER IMAGEM
    get imagem() {
        return this._imagem;
    }
    set imagem(value) {
        this._imagem = value;
    }
    //GETTER E SETTER SALÁRIO
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    //GETTER E SETTER CARGA HORARIA
    get cargaHoraria() {
        return this._cargaHoraria;
    }
    set cargaHoraria(value) {
        this._cargaHoraria = value;
    }
    //GETTER E SETTER EMAIL
    get email() {
        return this._email;
    }
    set email(email) {
        const emailValidator = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (emailValidator.test(email)) {
            this._email = email;
        }
        else {
            throw new Error();
        }
    }
    //GETTER E SETTER SENHA
    get senha() {
        return this._senha;
    }
    set senha(value) {
        this._senha = value;
    }
    //GETTER E SETTER TOKEN
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    //GETTER E SETTER OBSERVAÇÃO
    get obs() {
        return this._obs;
    }
    set obs(value) {
        this._obs = value;
    }
    //GETTER E SETTER HOME OFFICE
    get homeOffice() {
        return this._homeOffice;
    }
    set homeOffice(value) {
        this._homeOffice = value;
    }
    //GETTER E SETTER CEP
    set cep(cep) {
        const cepValidator = /^\d{5}-\d{3}/;
        if (cepValidator.test(cep)) {
            this._cep = cep;
        }
        else {
            throw new Error();
        }
    }
    get cep() {
        return this._cep;
    }
    //GETTER E SETTER CIDADE
    get cidade() {
        return this._cidade;
    }
    set cidade(value) {
        this._cidade = value;
    }
    //GETTER E SETTER BAIRRO
    get bairro() {
        return this._bairro;
    }
    set bairro(value) {
        this._bairro = value;
    }
    //GETTER E SETTER RUA
    get rua() {
        return this._rua;
    }
    set rua(value) {
        this._rua = value;
    }
    //GETTER E SETTER NUMERO
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    constructor(id, setorID, cargoID, CPF, nome, imagem, salario, cargaHoraria, email, senha, token, obs, homeOffice, cep, cidade, bairro, rua, numero) {
        this._id = 0;
        this._setorID = [];
        this._cargoID = [];
        this._CPF = "";
        this._nome = "";
        this._imagem = "";
        this._salario = 0;
        this._cargaHoraria = 0;
        this._email = "";
        this._senha = "";
        this._token = "";
        this._obs = "";
        this._homeOffice = false;
        this._cep = "";
        this._cidade = "";
        this._bairro = "";
        this._rua = "";
        this._numero = 0;
        this.id = id;
        this.setorID = setorID;
        this.cargoID = cargoID;
        this.CPF = CPF;
        this.nome = nome;
        this.imagem = imagem;
        this.salario = salario;
        this.cargaHoraria = cargaHoraria;
        this.email = email;
        this.senha = senha;
        this.token = token;
        this.obs = obs;
        this.homeOffice = homeOffice;
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
    }
}
exports.Colaborador = Colaborador;
