import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

        // Método para conceder empréstimo, somando ao saldo
        getLoan = (valueEmprest: number): number => {
            if (this.validateStatus()) {
                const newValueBalance = this.deposit(valueEmprest);
                return newValueBalance
        } else {
            throw new Error("Sua conta não está validada, para empréstimo")
        }
    }
}
