import { assertInstanceOf } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import { BankAccountDTO } from "../ports/bankAccountRepository.ts";
import FindBankAccount from "./findBankAccount.ts";

Deno.test("should be able to initiate a find bank account instance", () => {
  const mock = {
    get: (): Promise<BankAccountDTO> =>
      Promise.resolve({
        name: "kevin",
        telephone: "+33600000",
        createAt: new Date(),
      }),
  };
  assertInstanceOf(new FindBankAccount(mock), FindBankAccount);
});

Deno.test("should be able to find a bank account", () => {
  // TODO
});

Deno.test("should throw if bank account does not exist", () => {
  // TODO
});
