import BankAccount from "../../core/domain/bankAccount.ts";
import { DB } from "../../deps.ts";
import BankAccountPersistence from "../BankAccountPersistence.ts";

const bankAccountSQLLite = (db: DB): BankAccountPersistence => ({
    insert(bankAccount: BankAccount) {
        db.query(
            "INSERT INTO BankAccount (bankAccountId, name, phone, createdAt) VALUES (?, ?, ?, ?)",
            [
                bankAccount.bankAccountId,
                bankAccount.name,
                bankAccount.telephone,
                bankAccount.createdAt,
            ],
        );
    
        return Promise.resolve();    
    }
})

export default bankAccountSQLLite;