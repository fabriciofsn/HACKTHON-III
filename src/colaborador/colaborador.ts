import { Cargo } from "../cargo/cargo";
import { Setor } from "../setor/Setor";

export class Colaborador {
  private _id: number = 0;
  private _setorID: Setor[] = [];
  private _cargoID: Cargo[] = [];
  private _CPF: string = "";
  private _nome: string = "";
  private _imagem: string = "";
  private _salario: number = 0;
  private _cargaHoraria: number = 0;
  private _email: string = "";
  private _senha: string = "";
  private _token: string = "";
  private _obs: string = "";
  private _homeOffice: boolean = false;
  private _cep: string = "";
  private _cidade: string = "";
  private _bairro: string = "";
  private _rua: string = "";
  private _numero: number = 0;

  //GETTER E SETTER ID
  public set id(value: number) {
    this._id = value;
  }
  public get id(): number {
    return this._id;
  }

  //GETTER E SETTER SETOR ID
  public set setorID(value: Setor[]) {
    this._setorID = value;
  }
  public get setorID(): Setor[] {
    return this._setorID;
  }

  //GETTER E SETTER CARGO ID
  public set cargoID(value: Cargo[]) {
    this._cargoID = value;
  }
  public get cargoID(): Cargo[] {
    return this._cargoID;
  }

  //GETTER E SETTER CPF
  public set CPF(cpf: string) {
    const CPFvalidator = /^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$/;
    if (CPFvalidator.test(cpf)) {
      this._CPF = cpf;
    } else {
      throw new Error();
    }
  }
  public get CPF(): string {
    return this._CPF;
  }

  //GETTER E SETTER NOME
  public set nome(value: string) {
    this._nome = value;
  }
  public get nome(): string {
    return this._nome;
  }

  //GETTER E SETTER IMAGEM
  public get imagem(): string {
    return this._imagem;
  }
  public set imagem(value: string) {
    this._imagem = value;
  }

  //GETTER E SETTER SALÁRIO
  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }

  //GETTER E SETTER CARGA HORARIA
  public get cargaHoraria(): number {
    return this._cargaHoraria;
  }
  public set cargaHoraria(value: number) {
    this._cargaHoraria = value;
  }

  //GETTER E SETTER EMAIL
  public get email(): string {
    return this._email;
  }
  public set email(email: string) {
    const emailValidator = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (emailValidator.test(email)) {
      this._email = email;
    } else {
      throw new Error();
    }
  }

  //GETTER E SETTER SENHA
  public get senha(): string {
    return this._senha;
  }
  public set senha(value: string) {
    this._senha = value;
  }

  //GETTER E SETTER TOKEN
  public get token(): string {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }

  //GETTER E SETTER OBSERVAÇÃO
  public get obs(): string {
    return this._obs;
  }
  public set obs(value: string) {
    this._obs = value;
  }

  //GETTER E SETTER HOME OFFICE
  public get homeOffice(): boolean {
    return this._homeOffice;
  }
  public set homeOffice(value: boolean) {
    this._homeOffice = value;
  }

  //GETTER E SETTER CEP
  public set cep(cep: string) {
    const cepValidator = /^\d{5}-\d{3}/;
    if (cepValidator.test(cep)) {
      this._cep = cep;
    } else {
      throw new Error();
    }
  }
  public get cep(): string {
    return this._cep;
  }

  //GETTER E SETTER CIDADE
  public get cidade(): string {
    return this._cidade;
  }
  public set cidade(value: string) {
    this._cidade = value;
  }

  //GETTER E SETTER BAIRRO
  public get bairro(): string {
    return this._bairro;
  }
  public set bairro(value: string) {
    this._bairro = value;
  }

  //GETTER E SETTER RUA
  public get rua(): string {
    return this._rua;
  }
  public set rua(value: string) {
    this._rua = value;
  }

  //GETTER E SETTER NUMERO
  public get numero(): number {
    return this._numero;
  }
  public set numero(value: number) {
    this._numero = value;
  }

  constructor(
    id: number,
    setorID: Setor[],
    cargoID: Cargo[],
    CPF: string,
    nome: string,
    imagem: string,
    salario: number,
    cargaHoraria: number,
    email: string,
    senha: string,
    token: string,
    obs: string,
    homeOffice: boolean,
    cep: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: number
  ) {
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
