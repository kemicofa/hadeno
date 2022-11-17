import OpenBankAccount from "./core/features/openBankAccount.ts";
import BankAccountRepository from "./core/repositories/bankAccountRepository.ts";
import { bankAccountPersistence } from "./output/sqllite/mod.ts";

// repositories
const bankAccountRepository = new BankAccountRepository(bankAccountPersistence)

// features
export const openBankAccount = new OpenBankAccount(bankAccountRepository);