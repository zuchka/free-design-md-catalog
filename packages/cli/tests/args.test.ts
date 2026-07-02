import { describe, expect, it } from "vitest";
import { parseArgs } from "../src/args.js";

describe("parseArgs", () => {
  it("parses the add command with a positional id", () => {
    expect(parseArgs(["add", "abc123"])).toEqual({
      command: "add",
      idOrUrl: "abc123",
      out: undefined,
      host: undefined,
      force: false,
    });
  });

  it("parses --out, --host, and --force together", () => {
    expect(
      parseArgs([
        "add",
        "abc123",
        "--out",
        "specs/stripe.md",
        "--host",
        "http://localhost:8080",
        "--force",
      ]),
    ).toEqual({
      command: "add",
      idOrUrl: "abc123",
      out: "specs/stripe.md",
      host: "http://localhost:8080",
      force: true,
    });
  });

  it("supports --out=value style", () => {
    expect(parseArgs(["add", "abc123", "--out=foo.md"])).toMatchObject({
      out: "foo.md",
    });
  });

  it("parses the list command", () => {
    expect(parseArgs(["list"])).toEqual({
      command: "list",
      host: undefined,
      category: undefined,
      search: undefined,
      json: false,
    });
  });

  it("parses list filters and json output", () => {
    expect(
      parseArgs([
        "list",
        "--category",
        "Developer Tools & IDEs",
        "--search=stripe",
        "--host",
        "http://localhost:8080",
        "--json",
      ]),
    ).toEqual({
      command: "list",
      host: "http://localhost:8080",
      category: "Developer Tools & IDEs",
      search: "stripe",
      json: true,
    });
  });

  it("returns the help command on --help or -h", () => {
    expect(parseArgs(["--help"])).toEqual({ command: "help" });
    expect(parseArgs(["-h"])).toEqual({ command: "help" });
  });

  it("returns the version command on --version or -v", () => {
    expect(parseArgs(["--version"])).toEqual({ command: "version" });
    expect(parseArgs(["-v"])).toEqual({ command: "version" });
  });

  it("returns the help command when no args are passed", () => {
    expect(parseArgs([])).toEqual({ command: "help" });
  });

  it("throws when add is given without an id", () => {
    expect(() => parseArgs(["add"])).toThrow(/id/i);
  });

  it("throws on an unknown command", () => {
    expect(() => parseArgs(["pull", "abc123"])).toThrow(/unknown/i);
  });

  it("throws on an unknown list flag", () => {
    expect(() => parseArgs(["list", "--limit", "10"])).toThrow(/unknown/i);
  });
});
