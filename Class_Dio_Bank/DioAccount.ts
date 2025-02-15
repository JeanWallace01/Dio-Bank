import { idText } from "typescript";

export abstract class DioAccount {
    private name: string;
    private  accountNumber: number;
    private  balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }


    //Getter x setter
    public setName = (name:string): void => {
        this.name = name
        console.log("Nome alterado com sucesso !")
    }


    public getName = ():string => {
        return this.name
    }


    //Setando Status para teste
    public setStatusTest = (statustest: boolean): void  => {
        this.status = statustest
    }


    // Validação do status da conta
    public validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }
        throw new Error("Conta não validada !");
    };


    // Método deposit para adicionar saldo
   public deposit = (valueDeposit: number): number => {
        if (this.status) {
            this.balance += valueDeposit;
            return this.balance
        }

        throw new Error("Conta validada, disponível para depósito");
        ;
        
    };

    // Método de saque para reduzir o saldo
   public withDraw = (valueSaque: number): number => {
        if(!this.status) {
            throw new Error('Conta não valida para saque');
        }

        else if(valueSaque > this.balance) {
            throw new Error("Dinheiro insuficiente para saque")
        }

        this.balance -= valueSaque
        return this.balance

        
    };

    // Pega o saldo atual da conta
   public getBalance = (): number => {
        return this.balance;
    };

    

   
}
