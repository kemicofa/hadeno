import { Command } from "../../deps.ts";
import {
  findBankAccount,
  openBankAccount,
} from "../../infrastructure/container.ts";

await new Command()
  .name("HADeno")
  .version("0.1.0")
  .description("Command line interface for HADeno")
  .command("open-bank-account")
  .arguments("<name:string> <phone:string>")
  .action((_, name, telephone) =>
    openBankAccount.open({ name, telephone }).then(console.log)
  )
  .command("find-bank-account")
  .arguments("<phone:string>")
  .action((_, telephone) => findBankAccount.find(telephone).then(console.log))
  .parse(Deno.args);
