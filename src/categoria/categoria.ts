export class Categoria {
  private _id: number = 0;
  private _name: string = "";

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public set id(id: number) {
    this._id = id;
  }
  public get id(): number {
    return this._id;
  }

  public set name(name: string) {
    this._name = name;
  }
  public get name(): string {
    return this._name;
  }
}
