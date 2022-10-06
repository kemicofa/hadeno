import OpenBankAccount from "./openBankAccount.ts";
import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";

Deno.test("should be able to create a bank account", async () => {
  const openBankAccount = new OpenBankAccount({
    insert: () => Promise.resolve(),
  });
  const bankAccount = await openBankAccount.open({
    name: "kevin",
    telephone: "+3360000000",
  });

  assertEquals(bankAccount.name, "kevin");
  assertEquals(bankAccount.telephone, "+3360000000");
});
