export class Cargo {
  private _id: number = 0;
  private _nome: string = "";
  private _funcao: string = "";

  constructor(id: number, nome: string, func: string) {
    this.id = id;
    this.nome = nome;
    this.funcao = func;
  }

  public set id(id: number) {
    this._id = id;
  }
  public get id(): number {
    return this._id;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }
  public get nome(): string {
    return this._nome;
  }

  public set funcao(func: string) {
    this._funcao = func;
  }
  public get funcao(): string {
    return this._funcao;
  }
}
