import { Departamento } from "../departamento/departamento";

export class Setor {
  private _id: number = 0;
  private _departamentoID: Array<Departamento> = [];
  private _chefeID: number = 0; //TODO FK Chefe
  private _nome: string = "";
  private _funcao: string = "";
  private _direcao: boolean = false;

  constructor(
    id: number,
    departamentoID: Array<Departamento>,
    chefeID: number,
    nome: string,
    funcao: string,
    direcao: boolean
  ) {
    this.id = id;
    this._departamentoID = departamentoID;
    this.chefeID = chefeID;
    this.nome = nome;
    this.funcao = funcao;
    this.direcao = direcao;
  }

  public set id(id: number) {
    this._id = id;
  }
  public get id(): number {
    return this._id;
  }

  //GETTER e SETTER DEPARTAMENTO ID
  public set departamentoID(departamento: Array<Departamento>) {
    for (let idDep of departamento)
      this._departamentoID.map(({ id }) => (idDep.id = id));
  }
  public get departamentoID() {
    return this._departamentoID;
  }

  //GETTER E SETTER CHEFE
  public set chefeID(id: number) {
    this._chefeID = id;
  }
  public get chefeID() {
    return this._chefeID;
  }

  //GETTER E SETTER NOME
  public set nome(nome: string) {
    this._nome = nome;
  }
  public get nome() {
    return this._nome;
  }

  //GETTER E SETTER
  public set funcao(funcao: string) {
    this._funcao = funcao;
  }
  public get funcao() {
    return this._funcao;
  }

  //GETTER E SETTER DIREÇÃO
  public set direcao(direcao: boolean) {
    this._direcao = direcao;
  }
  public get direcao() {
    return this._direcao;
  }
}
