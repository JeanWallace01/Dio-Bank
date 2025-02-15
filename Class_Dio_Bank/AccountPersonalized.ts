import { DioAccount } from "./DioAccount";

export class AccountPersonalized extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }


    public depositPersonalized = (valuePersonalized:number): number => {
        valuePersonalized += 10
        this.deposit(valuePersonalized)
        return this.getBalance()
    } 

};