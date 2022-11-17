import BankAccountPersistence from "../../output/BankAccountPersistence.ts";
import BankAccount from "../domain/bankAccount.ts";

class BankAccountRepository {
    #bankAccountPersistence: BankAccountPersistence;
    constructor(bankAccountPersistence: BankAccountPersistence){
        this.#bankAccountPersistence = bankAccountPersistence;
    }

    insert(bankAccount: BankAccount) {
        return this.#bankAccountPersistence.insert(bankAccount);
    }
}

export default BankAccountRepository;