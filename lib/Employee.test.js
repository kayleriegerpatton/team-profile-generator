const Employee = require("./Employee");

describe("Employee", () => {
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

  test("should return expected role", () => {
    // setup test
    const employee = new Employee({
      name: "Bob",
      email: "bob@email.com",
      id: "123",
    });
    //   declare expected result
    const expected = "Employee";
    // get actual result
    const actual = employee.getRole();
    // assert
    expect(actual).toBe(expected);
  });
});
