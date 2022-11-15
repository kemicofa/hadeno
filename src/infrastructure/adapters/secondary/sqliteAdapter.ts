import BankAccountRepository, { BankAccountDTO } from "../../../application/ports/bankAccountRepository.ts";
import { DB } from "../../../deps.ts";

interface BankAccountRow {
  bankAccountId: string;
  name: string;
  phone: string;
  createdAt: string;
}

class SQLiteAdapter implements BankAccountRepository {
  #db: DB;

  constructor() {
    const db = new DB("hadeno.db");
    db.execute(`
            CREATE TABLE IF NOT EXISTS BankAccount (
                bankAccountId TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                createdAt TEXT NOT NULL
            )
        `);
    this.#db = db;
  }

  insertBankAccount(bankAccountDTO: BankAccountDTO): Promise<void> {
    this.#db.query(
      "INSERT INTO BankAccount (bankAccountId, name, phone, createdAt) VALUES (?, ?, ?, ?)",
      [
        bankAccountDTO.bankAccountId,
        bankAccountDTO.name,
        bankAccountDTO.telephone,
        bankAccountDTO.createAt,
      ],
    );

    return Promise.resolve();
  }

  getBankAccount(telephone: string): Promise<BankAccountDTO | undefined> {
    const [row] = this.#db.query("SELECT * FROM BankAccount WHERE phone = ?", [
      telephone,
    ]);
    const bankAccountRow = row as [string, string, string, string];
    if (!bankAccountRow) {
      return Promise.resolve(undefined);
    }
    const bankAccountDTO: BankAccountDTO = {
      bankAccountId: bankAccountRow[0],
      name: bankAccountRow[1],
      telephone: bankAccountRow[2],
      createAt: new Date(bankAccountRow[3]),
    };
    return Promise.resolve(bankAccountDTO);
  }
}

export default SQLiteAdapter;
