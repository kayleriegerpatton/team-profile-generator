const Manager = require("./Manager");

describe("Manager", () => {
  test("should be an instance of Manager", () => {
    //   declare expected result
    // get actual result
    // assert
    // expect(actual).toBeInstanceOf();
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

  test("should return expected office number", () => {
    //   declare expected result
    // get actual result
    // assert
  });

  test("should return 'Manager'", () => {
    // setup test
    const manager = new Manager({
      name: "Bob",
      email: "bob@email.com",
      id: "123",
      officeNumber: "123 456",
    });
    //   declare expected result
    const expected = "Manager";
    // get actual result
    const actual = manager.getRole();
    // assert
    expect(actual).toBe(expected);
  });
});
