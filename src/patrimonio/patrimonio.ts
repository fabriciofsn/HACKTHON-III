import { Categoria } from "../categoria/categoria";
import { Setor } from "../setor/Setor";

export class Patrimonio {
  private _id: number = 0;
  private _setorID: Setor[] = [];
  private _categoriaID: Categoria[] = [];
  private _colaboradorID: number = 0; //TODO  FK colaborador
  private _codigo: string = "";
  private _nome: string = "";
  private _dataAdquirido: Date = new Date();
  private _valorAdquirido: number = 0;
  private _valorDepreciado: number = 0;
  private _estado: string = "";
  private _observacao: string = "";

  constructor(
    id: number,
    setorID: Setor[],
    catedoriaID: Categoria[],
    colaboradorID: number,
    codigo: string,
    nome: string,
    dataAdquirido: Date,
    valorAdquirido: number,
    valorDepreciado: number,
    estado: string,
    observacao: string
  ) {
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
  public set id(id: number) {
    this._id = id;
  }
  public get id() {
    return this._id;
  }

  //GETTER E SETTER SETOR ID
  public set setorID(setor: Setor[]) {
    for (let setorID of setor) {
      this._setorID.map((id) => (id.id = setorID.id));
    }
  }
  public get setorID() {
    return this._setorID;
  }

  //GETTER E SETTER CATEGORIA ID
  public set categoriaID(categoria: Categoria[]) {
    for (let catID of categoria) {
      this._categoriaID.map((id) => (id.id = catID.id));
    }
  }
  public get categoriaID() {
    return this._categoriaID;
  }

  //GETTER E SETTER COLABORADOR ID
  public set colaboradorID(id: number) {
    this._colaboradorID = id; //Deve ser alterado para classe colaborador
  }
  public get colaboradorID() {
    return this._colaboradorID;
  }

  //GETTER E SETTER CODIGO
  public set codigo(cod: string) {
    this._codigo = cod;
  }
  public get codigo() {
    return this._codigo;
  }

  //GETTER E SETTER NOME
  public set nome(nome: string) {
    this._nome = nome;
  }
  public get nome() {
    return this._nome;
  }

  //GETTER E SETTER DATA ADQUIRIDO
  public set dataAdquirido(data: Date) {
    this._dataAdquirido = data;
  }
  public get dataAdquirido() {
    return this._dataAdquirido;
  }

  //GETTER E SETTER VALOR ADQUIRIDO
  public set valorAdquirido(valor: number) {
    this._valorAdquirido = valor;
  }
  public get valorAdquirido() {
    return this._valorAdquirido;
  }

  //GETTER E SETTER VALOR DEPRECIADO
  public set valorDepreciado(valor: number) {
    this._valorDepreciado = valor;
  }
  public get valorDepreciado() {
    return this._valorDepreciado;
  }

  //GETTER E SETTER ESTADO
  public set estado(estado: string) {
    this._estado = estado;
  }
  public get estado() {
    return this._estado;
  }

  //GETTER E SETTER OBSERVAÇÃO
  public set observacao(obs: string) {
    this._observacao = obs;
  }
  public get observacao() {
    return this._observacao;
  }
}
