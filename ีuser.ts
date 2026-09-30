export class User{
    constructor(private id:number , private name:string , private mail:string) {}

    public getid(): number {return this.id};
    public getName(): string {return this.name};
    public getmail(): string {return this.mail};
    public getInfo(): string{
        return `User: ${this.id} ${this.name} ${this.mail}`
    }
}