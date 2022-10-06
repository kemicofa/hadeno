import { assertThrows } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import BankAccount from "./bankAccount.ts";

Deno.test("should not be able to create a bank account if the number is too short", () => {
  assertThrows(
    () => new BankAccount("kevin", "+336000"),
    "Telephone needs at least 10 characters",
  );
});
