export class Cargo {
  private _id: number = 0;
  private _name: string = "";
  private _function: string = "";

  constructor(id: number, name: string, func: string) {
    this.id = id;
    this.name = name;
    this.function = func;
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

  public set function(func: string) {
    this._function = func;
  }
  public get function(): string {
    return this._function;
  }
}
