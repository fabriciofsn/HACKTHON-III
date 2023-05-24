"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ocorrencia = void 0;
const ocorrencia_1 = require("../tipos/ocorrencia");
const status_1 = require("../tipos/status");
const urgencia_1 = require("../tipos/urgencia");
class Ocorrencia {
    constructor(id, bensID, tipoOcorrencia, colabID, name, tipo, motivo, urgencia, dataAbertura, dataPrevista, status, dataAtendimento, dataConcluido, dataCancelado) {
        this._id = 0;
        this._bensID = 0; // FK DEVE IMPORTAR O ID DO BEM
        this._tipoOcorrencia = ocorrencia_1.OcorrenciaEnum.ATIVAR;
        this._colabID = 0; // FK DEVE IMPORTAR O ID DO COLABORADOR
        this._name = "";
        this._tipo = ocorrencia_1.OcorrenciaEnum.ATIVAR;
        this._motivo = "";
        this._urgencia = urgencia_1.Urgencia.SEM_URGENCIA;
        this._dataAbertura = new Date();
        this._dataPrevista = new Date();
        this._status = status_1.Status.CONCLUIDA;
        this._dataAtendimento = new Date();
        this._dataConcluido = new Date();
        this._dataCancelado = new Date();
        this.id = id;
        this.bensID = bensID;
        this.tipoDeOcorrencia = tipoOcorrencia;
        this.colabID = colabID;
        this.name = name;
        this.tipo = tipo;
        this.motivo = motivo;
        this.urgencia = urgencia;
        this.dataAbertura = dataAbertura;
        this.dataPrevista = dataPrevista;
        this.status = status;
        this.dataAtendimento = dataAtendimento;
        this.dataConcluido = dataConcluido;
        this.dataCancelado = dataCancelado;
    }
    //GETTER E SETTER ID
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    //GETTER E SETTER BEM ID
    set bensID(bensID) {
        this._bensID = bensID;
    }
    get bensID() {
        return this._bensID;
    }
    //TIPOS DE OCORRENCIA
    set tipoDeOcorrencia(tipo) {
        this._tipoOcorrencia = tipo;
    }
    get tipoDeOcorrencia() {
        return this._tipoOcorrencia;
    }
    //GETTER E SETTER COLABORADOR ID
    set colabID(colabID) {
        this._colabID = colabID;
    }
    get colabID() {
        return this._colabID;
    }
    //GETTER E SETTER NOME
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    //GETTER E SETTER TIPO
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    //GETTER E SETTER MOTIVO
    set motivo(motivo) {
        this._motivo = motivo;
    }
    get motivo() {
        return this._motivo;
    }
    //GETTER E SETTER URGENCIA
    set urgencia(urgencia) {
        this._urgencia = urgencia;
    }
    get urgencia() {
        return this._urgencia;
    }
    //GETTER E SETTER DATA ABERTURA
    set dataAbertura(dataAbertura) {
        this._dataAbertura = dataAbertura;
    }
    get dataAbertura() {
        return this._dataAbertura;
    }
    //GETTER E SETTER DATA PREVISTA
    set dataPrevista(dataPrevista) {
        this._dataPrevista = dataPrevista;
    }
    get dataPrevista() {
        return this._dataPrevista;
    }
    //GETTER E SETTER STATUS
    set status(status) {
        this._status = status;
    }
    get status() {
        return this._status;
    }
    //GETTER E SETTER DATA ATENDIMENTO
    set dataAtendimento(data) {
        this._dataAtendimento = data;
    }
    get dataAtendimento() {
        return this._dataAtendimento;
    }
    //GETTER E SETTER DATA CONCLUIDO
    set dataConcluido(data) {
        this._dataConcluido = data;
    }
    get dataConcluido() {
        return this._dataConcluido;
    }
    //GETTER E SETTER DATA CANCELADO
    set dataCancelado(data) {
        this._dataCancelado = data;
    }
    get dataCancelado() {
        return this._dataCancelado;
    }
}
exports.Ocorrencia = Ocorrencia;
