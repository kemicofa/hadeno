import { DB } from "../../deps.ts";
import BankAccountPersistence from "../BankAccountPersistence.ts";
import bankAccountSQLLite from "./bankAccountSQLLite.ts";

const INITIALIZE_DATABASE_QUERY = `
    CREATE TABLE IF NOT EXISTS BankAccount (
        bankAccountId TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        createdAt TEXT NOT NULL
    )
`;

const db = new DB("hadeno.db");

db.execute(INITIALIZE_DATABASE_QUERY);

export const bankAccountPersistence: BankAccountPersistence = bankAccountSQLLite(db);


