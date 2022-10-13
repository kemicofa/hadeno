Deno.test("should be able to open a bank account", async () => {
  const process = Deno.run({
    cmd: [
      "DENO_ENV=test",
      "deno",
      "run",
      "--allow-read",
      "--allow-write",
      "--allow-env",
      "./src/adapters/primary/cli.ts",
      "open-bank-account",
      "kevin",
      "+3660000000000",
    ],
  });

  const { code } = await process.status();
  const rawOutput = await process.output();
  const rawError = await process.stderrOutput();

  if (code === 0) {
    await Deno.stdout.write(rawOutput);
  } else {
    const errorString = new TextDecoder().decode(rawError);
    console.log(errorString);
  }

  Deno.exit(code);
});
