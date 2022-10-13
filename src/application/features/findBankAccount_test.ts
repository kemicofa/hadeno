import {
  assertInstanceOf,
  assertRejects,
} from "https://deno.land/std@0.158.0/testing/asserts.ts";
import BankAccountRepository, {
  BankAccountDTO,
} from "../ports/bankAccountRepository.ts";
import FindBankAccount from "./findBankAccount.ts";
import {
  assertSpyCallAsync,
  stub,
} from "https://deno.land/std@0.158.0/testing/mock.ts";
import InMemoryAdapter from "../../adapters/secondary/inMemoryAdapter.ts";
import BankAccount from "../domain/bankAccount.ts";

Deno.test("should be able to initiate a find bank account instance", () => {
  assertInstanceOf(
    new FindBankAccount({ getBankAccount: () => Promise.resolve(undefined) }),
    FindBankAccount,
  );
});

Deno.test("should be able to find a bank account", async () => {
  const bankAccountDTO: BankAccountDTO = {
    createAt: new Date(),
    name: "kevin",
    telephone: "+3600000000",
    bankAccountId: crypto.randomUUID(),
  };
  const repositoryGetStub = stub<BankAccountRepository, "getBankAccount">(
    new InMemoryAdapter(),
    "getBankAccount",
    () => Promise.resolve(bankAccountDTO),
  );
  const findBankAccount = new FindBankAccount({
    getBankAccount: repositoryGetStub,
  });
  const bankAccount = await findBankAccount.find("+3600000000");
  assertInstanceOf(bankAccount, BankAccount);
  assertSpyCallAsync(repositoryGetStub, 0, {
    args: ["+3600000000"],
    returned: bankAccountDTO,
  });
});

Deno.test("should throw if bank account does not exist", async () => {
  const findBankAccount = new FindBankAccount(new InMemoryAdapter());
  await assertRejects(
    () => findBankAccount.find("+3600000000"),
    "Could not find bank account",
  );
});
