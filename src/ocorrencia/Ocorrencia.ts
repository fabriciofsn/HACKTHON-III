import { OcorrenciaEnum } from "../tipos/ocorrencia";
import { Status } from "../tipos/status";
import { Urgencia } from "../tipos/urgencia";

export class Ocorrencia {
  private _id: number = 0;
  private _bensID: number = 0; // FK DEVE IMPORTAR O ID DO BEM
  private _tipoOcorrencia: OcorrenciaEnum = OcorrenciaEnum.ATIVAR;
  private _colabID: number = 0; // FK DEVE IMPORTAR O ID DO COLABORADOR
  private _name: string = "";
  private _tipo: OcorrenciaEnum = OcorrenciaEnum.ATIVAR;
  private _motivo: string = "";
  private _urgencia: Urgencia = Urgencia.SEM_URGENCIA;
  private _dataAbertura: Date = new Date();
  private _dataPrevista: Date = new Date();
  private _status: Status = Status.CONCLUIDA;
  private _dataAtendimento: Date = new Date();
  private _dataConcluido: Date = new Date();
  private _dataCancelado: Date = new Date();

  constructor(
    id: number,
    bensID: number,
    tipoOcorrencia: OcorrenciaEnum,
    colabID: number,
    name: string,
    tipo: OcorrenciaEnum,
    motivo: string,
    urgencia: Urgencia,
    dataAbertura: Date,
    dataPrevista: Date,
    status: Status,
    dataAtendimento: Date,
    dataConcluido: Date,
    dataCancelado: Date
  ) {
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
  public set id(id: number) {
    this._id = id;
  }
  public get id() {
    return this._id;
  }
  //GETTER E SETTER BEM ID
  public set bensID(bensID: number) {
    this._bensID = bensID;
  }
  public get bensID(): number {
    return this._bensID;
  }
  //TIPOS DE OCORRENCIA
  public set tipoDeOcorrencia(tipo: OcorrenciaEnum) {
    this._tipoOcorrencia = tipo;
  }
  public get tipoDeOcorrencia(): OcorrenciaEnum {
    return this._tipoOcorrencia;
  }
  //GETTER E SETTER COLABORADOR ID
  public set colabID(colabID: number) {
    this._colabID = colabID;
  }
  public get colabID(): number {
    return this._colabID;
  }
  //GETTER E SETTER NOME
  public set name(name: string) {
    this._name = name;
  }
  public get name(): string {
    return this._name;
  }
  //GETTER E SETTER TIPO
  public set tipo(tipo: OcorrenciaEnum) {
    this._tipo = tipo;
  }
  public get tipo(): OcorrenciaEnum {
    return this._tipo;
  }
  //GETTER E SETTER MOTIVO
  public set motivo(motivo: string) {
    this._motivo = motivo;
  }
  public get motivo(): string {
    return this._motivo;
  }
  //GETTER E SETTER URGENCIA
  public set urgencia(urgencia: Urgencia) {
    this._urgencia = urgencia;
  }
  public get urgencia(): Urgencia {
    return this._urgencia;
  }
  //GETTER E SETTER DATA ABERTURA
  public set dataAbertura(dataAbertura: Date) {
    this._dataAbertura = dataAbertura;
  }
  public get dataAbertura(): Date {
    return this._dataAbertura;
  }
  //GETTER E SETTER DATA PREVISTA
  public set dataPrevista(dataPrevista: Date) {
    this._dataPrevista = dataPrevista;
  }
  public get dataPrevista(): Date {
    return this._dataPrevista;
  }
  //GETTER E SETTER STATUS
  public set status(status: Status) {
    this._status = status;
  }
  public get status(): Status {
    return this._status;
  }
  //GETTER E SETTER DATA ATENDIMENTO
  public set dataAtendimento(data: Date) {
    this._dataAtendimento = data;
  }
  public get dataAtendimento(): Date {
    return this._dataAtendimento;
  }
  //GETTER E SETTER DATA CONCLUIDO
  public set dataConcluido(data: Date) {
    this._dataConcluido = data;
  }
  public get dataConcluido(): Date {
    return this._dataConcluido;
  }
  //GETTER E SETTER DATA CANCELADO
  public set dataCancelado(data: Date) {
    this._dataCancelado = data;
  }
  public get dataCancelado(): Date {
    return this._dataCancelado;
  }
}
