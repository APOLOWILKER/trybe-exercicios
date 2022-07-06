
export default class Employee {
  
    private _registration: string;
    private _salary: number;
    private _admissionDate: Date;
    
    constructor() {
      this._registration = this.generateRegistration();
    }
    
    generateRegistration(): string {
      const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

      return `PRF${randomStr}`;
    }
    
  }
