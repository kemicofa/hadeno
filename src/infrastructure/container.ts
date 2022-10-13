import InMemoryAdapter from "../adapters/secondary/inMemoryAdapter.ts";
import SQLiteAdapter from "../adapters/secondary/sqliteAdapter.ts";
import TreezorApiAdapter from "../adapters/secondary/treezorApiAdapter.ts";
import FindBankAccount from "../application/features/findBankAccount.ts";
import OpenBankAccount from "../application/features/openBankAccount.ts";

const denoEnv = Deno.env.get("DENO_ENV");

export let openBankAccount: InstanceType<typeof OpenBankAccount>;
export let findBankAccount: InstanceType<typeof FindBankAccount>;

const providerBankApi = new TreezorApiAdapter();

if (denoEnv === "test") {
  // TODO: pass providerBankApi stub for tests???

  const inMemoryAdapter = new InMemoryAdapter();
  openBankAccount = new OpenBankAccount(inMemoryAdapter, providerBankApi);
  findBankAccount = new FindBankAccount(inMemoryAdapter);
} else {
  const sqliteAdapter = new SQLiteAdapter();
  openBankAccount = new OpenBankAccount(sqliteAdapter, providerBankApi);
  findBankAccount = new FindBankAccount(sqliteAdapter);
}
