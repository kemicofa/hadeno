import {
  assertInstanceOf,
  assertThrows,
} from "https://deno.land/std@0.158.0/testing/asserts.ts";
import BankAccount from "./bankAccount.ts";

Deno.test("should not be able to create a bank account if the number is too short", () => {
  const bankAccountId = crypto.randomUUID();

  assertThrows(
    () => new BankAccount(bankAccountId, "kevin", "+336000"),
    "Telephone needs at least 10 characters",
  );
});

Deno.test("should not be able to create a bank account if the bank account id is not a valid v4 uuid", () => {
  assertThrows(
    () => new BankAccount("123", "kevin", "+3360000000"),
    "Bank account is not a valid v4 uuid",
  );
});

Deno.test("should be able to create a bank account", () => {
  const bankAccount = new BankAccount(
    crypto.randomUUID(),
    "kevin",
    "+33600000000",
  );
  assertInstanceOf(bankAccount, BankAccount);
});
