const Engineer = require("./Engineer");

describe("Engineer", () => {
  test("should be an instance of Engineer", () => {
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

  test("should return expected GitHub username", () => {
    //   declare expected result
    // get actual result
    // assert
  });

  test("should return expected role", () => {
    // setup test
    const engineer = new Engineer({
      name: "Bob",
      email: "bob@email.com",
      id: "123",
      github: "kayleriegerpatton",
    });
    //   declare expected result
    const expected = "Engineer";
    // get actual result
    const actual = engineer.getRole();
    // assert
    expect(actual).toBe(expected);
  });
});
