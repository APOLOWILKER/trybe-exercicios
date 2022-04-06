class Person {
  private _name: string;
  private _birthDate: number;

  constructor(name: string) {
    this._name = name;
    this._birthDate = this._birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('O nome deve conter no minimo 3 caracteres.');
    }
  }

  get birthDate(): number {
    return this._birthDate;
  }

}