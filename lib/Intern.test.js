const Intern = require("./Intern");

describe("Intern", () => {
  test("should be an instance of Intern", () => {
    //   declare expected result
    // get actual result
    // assert
  });

  test("should return expected name", () => {
    //   declare expected result
    // get actual result
    // assert
  });

  test("should return expected id", () => {
    //   declare expected result
    // get actual result
    // assert
  });

  test("should return expected email", () => {
    //   declare expected result
    // get actual result
    // assert
  });

  test("should return expected school", () => {
    //   declare expected result
    // get actual result
    // assert
  });

  test("should return expected role", () => {
    // setup test
    const intern = new Intern({
      name: "Bob",
      email: "bob@email.com",
      id: "123",
      school: "Fake University",
    });
    //   declare expected result
    const expected = "Intern";
    // get actual result
    const actual = intern.getRole();
    // assert
    expect(actual).toBe(expected);
  });
});
