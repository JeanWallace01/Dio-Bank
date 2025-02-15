import { CompanyAccount } from './Class_Dio_Bank/CompanyAccount';
import { PeopleAccount } from './Class_Dio_Bank/PeopleAccount';
import { AccountPersonalized } from './Class_Dio_Bank/AccountPersonalized';

//Crianado Objeto
const newPeopleAccount: PeopleAccount = new PeopleAccount(1, "Jean", 2);
const newCompanyAccount: CompanyAccount = new CompanyAccount("Maria", 10);
const newAccountPersonalized: AccountPersonalized = new AccountPersonalized("Jose", 93)


// Creates tests to methods
function testCompanyAccount() {
    try {
        newCompanyAccount.setName('pessoa Z');
        newCompanyAccount.getName();
        newCompanyAccount.setStatusTest(true);
        newCompanyAccount.validateStatus();
        console.log(
            `Saldo da empresa antes do deposito ${newCompanyAccount.getBalance()}`,
        );
        newCompanyAccount.deposit(1000);
        console.log(
            `Saldo da empresa depois do deposito ${newCompanyAccount.getBalance()}`,
        );
        console.log(
            `Saldo da empresa antes do saque ${newCompanyAccount.getBalance()}`,
        );
        newCompanyAccount.withDraw(1000);
        console.log(
            `Saldo da empresa depois do saque ${newCompanyAccount.getBalance()}`,
        );
        console.log(
            `Saldo da empresa antes do empréstimo: ${newCompanyAccount.getBalance()}`,
        );
        newCompanyAccount.getLoan(100000);
        console.log(
            `Novo saldo da empresa após o empréstimo: ${newCompanyAccount.getBalance()}`,
        );
    } catch (error) {
        console.error(error);
    }
}

function testPeopleAccount() {
    try {
        newPeopleAccount.setName('Jose');
        newPeopleAccount.getName();
        newPeopleAccount.setStatusTest(true);
        newPeopleAccount.validateStatus();
        console.log(
            `Saldo da pessoa antes do deposito ${newPeopleAccount.getBalance()}`,
        );
        newPeopleAccount.deposit(1000);
        console.log(
            `Saldo da pessoa depois do deposito ${newPeopleAccount.getBalance()}`,
        );
        console.log(
            `Saldo da pessoa antes do saque ${newPeopleAccount.getBalance()}`,
        );
        newPeopleAccount.withDraw(1000);
        console.log(
            `Saldo da pessoa depois do saque ${newPeopleAccount.getBalance()}`,
        );
    } catch (error) {
        console.error(error);
    }
}
function testReccomendedUserAccount() {
    try {
        newAccountPersonalized.setStatusTest(true);
        newAccountPersonalized.setName('Jose');
        newAccountPersonalized.getName();

        newAccountPersonalized.validateStatus();
        console.log(
            `Saldo do usuário recomendado antes do deposito ${newAccountPersonalized.getBalance()}`,
        );
        newAccountPersonalized.deposit(1000);
        console.log(
            `Saldo do usuário recomendado depois do deposito ${newAccountPersonalized.getBalance()}`,
        );
        console.log(
            `Saldo do usuário recomendado antes do saque ${newAccountPersonalized.getBalance()}`,
        );
        newAccountPersonalized.withDraw(1000);
        console.log(
            `Saldo do usuário recomendado depois do saque ${newAccountPersonalized.getBalance()}`,
        );
    } catch (error) {
        console.error(error);
    }
}


//Chamada das funções
testCompanyAccount();
testPeopleAccount();
testReccomendedUserAccount();