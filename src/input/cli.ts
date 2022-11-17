import { Command } from "../deps.ts";
import { openBankAccount } from "../instracture.ts";

await new Command()
  .name("HADeno")
  .version("0.1.0")
  .description("Command line interface for HADeno")
  .command("open-bank-account")
  .arguments("<name:string> <phone:string>")
  .action((_, name, telephone) =>
    openBankAccount.execute({ name, telephone }).then(console.log)
  )
  .parse(Deno.args);
