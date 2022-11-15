import OpenBankAccount from "./openBankAccount.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.158.0/testing/asserts.ts";

Deno.test("should be able to create a bank account", async () => {
  // TODO: replace with global mock
  const openBankAccount = new OpenBankAccount({
    insertBankAccount: () => Promise.resolve(),
  });

  const bankAccount = await openBankAccount.open({
    name: "kevin",
    telephone: "+3360000000",
  });

  assertEquals(bankAccount.name, "kevin");
  assertEquals(bankAccount.telephone, "+3360000000");
  assert(typeof bankAccount.bankAccountId === "string");
});
