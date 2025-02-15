import { DioAccount } from "./DioAccount"

 export class PeopleAccount extends DioAccount {

    //Definindo propriedade
    doc_id: number

    //Pegando as propriedades da classe herdada
    
    // Tem que fazer isso para fazer ela ser herdada de forma correta e como irá passar os valores do parâmetro
    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }

}