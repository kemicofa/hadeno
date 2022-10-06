import OpenBankAccount from "../../application/features/openBankAccount.ts";
import InMemoryAdapter from "../secondary/inMemoryAdapter.ts";
import BankAccountRepository from "../../application/ports/bankAccountRepository.ts";
import { Command } from "../../deps.ts";
interface CliParams {
  openBankAccount: {
    name: string;
    phone: string;
  };
}

const createCli = (bankAccountRepository: BankAccountRepository) =>
async (
  params: CliParams,
) => {
  const openBankAccount = new OpenBankAccount(bankAccountRepository);
  // library extract informations du cli
  if (params.openBankAccount) {
    console.log(
      await openBankAccount.open({
        name: params.openBankAccount.name,
        telephone: params.openBankAccount.phone,
      }),
    );
  }
};

const cli = createCli(new InMemoryAdapter());

await new Command()
  .name("HADeno")
  .version("0.1.0")
  .description("Command line interface for HADeno")
  .command("open-bank-account")
  .arguments("<name:string> <phone:string>")
  .action((_, name, phone) => cli({ openBankAccount: { name, phone } }))
  .parse(Deno.args);
