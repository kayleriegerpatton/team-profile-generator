const Employee = require("./Employee");

const employee = new Employee({
  name: "Bob",
  id: 123,
  email: "bob@email.com",
});

describe("Employee", () => {
  test("should return expected name", () => {
    //   declare expected result
    const expected = "Bob";
    // get actual result
    const actual = employee.name;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return expected id number", () => {
    //   declare expected result
    const expected = 123;
    // get actual result
    const actual = employee.id;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return expected email", () => {
    //   declare expected result
    const expected = "bob@email.com";
    // get actual result
    const actual = employee.email;
    // assert
    expect(actual).toBe(expected);
  });

  // getName method test
  test("should return expected name", () => {
    // declare expected result
    const expected = "Bob";
    // get actual result
    const actual = employee.getName();
    // assert
    expect(actual).toBe(expected);
  });

  // getId method test
  test("should return expected id number", () => {
    // declare expected result
    const expected = 123;
    // get actual result
    const actual = employee.getId();
    // assert
    expect(actual).toBe(expected);
  });

  // getEmail method test
  test("should return expected email", () => {
    // declare expected result
    const expected = "bob@email.com";
    // get actual result
    const actual = employee.getEmail();
    // assert
    expect(actual).toBe(expected);
  });

  // getRole method test
  test("should return expected role", () => {
    //   declare expected result
    const expected = "Employee";
    // get actual result
    const actual = employee.getRole();
    // assert
    expect(actual).toBe(expected);
  });
});
