import BankAccount from "../core/domain/bankAccount.ts";

interface BankAccountPersistence {
    insert(bankAccount: BankAccount): Promise<void>;
}

export default BankAccountPersistence;