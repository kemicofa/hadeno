import OpenBankAccount from "../../application/features/openBankAccount.ts";
import BankAccountRepository from "../../application/ports/bankAccountRepository.ts";
import { Command } from "../../deps.ts";
import FindBankAccount from "../../application/features/findBankAccount.ts";
import SQLiteAdapter from "../secondary/sqliteAdapter.ts";
interface CliParams {
  openBankAccount?: {
    name: string;
    phone: string;
  };
  findBankAccount?: {
    phone: string;
  };
}

const createCli = (bankAccountRepository: BankAccountRepository) =>
async (
  params: CliParams,
) => {
  // library extract informations du cli
  if (params.openBankAccount) {
    const openBankAccount = new OpenBankAccount(bankAccountRepository);
    console.log(
      await openBankAccount.open({
        name: params.openBankAccount.name,
        telephone: params.openBankAccount.phone,
      }),
    );
  }
  if (params.findBankAccount) {
    const findBankAccount = new FindBankAccount(bankAccountRepository);
    console.log(
      await findBankAccount.find(params.findBankAccount.phone),
    );
  }
};

const cli = createCli(new SQLiteAdapter());

await new Command()
  .name("HADeno")
  .version("0.1.0")
  .description("Command line interface for HADeno")
  .command("open-bank-account")
  .arguments("<name:string> <phone:string>")
  .action((_, name, phone) => cli({ openBankAccount: { name, phone } }))
  .command("find-bank-account")
  .arguments("<phone:string>")
  .action((_, phone) => cli({ findBankAccount: { phone } }))
  .parse(Deno.args);
