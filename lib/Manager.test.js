const Manager = require("./Manager");

describe("Manager", () => {
  const manager = new Manager({
    name: "Bob",
    email: "bob@email.com",
    id: 123,
    officeNumber: "123 456",
  });

  test("should be an instance of Manager", () => {
    //   declare expected result
    const expected = true;
    // get actual result
    const actual = manager instanceof Manager;
    // assert
    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    //   declare expected result
    const expected = "Bob";
    // get actual result
    const actual = manager.name;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return expected id number", () => {
    //   declare expected result
    const expected = 123;
    // get actual result
    const actual = manager.id;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return expected email", () => {
    //   declare expected result
    const expected = "bob@email.com";
    // get actual result
    const actual = manager.email;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return expected office number", () => {
    //   declare expected result
    const expected = "123 456";
    // get actual result
    const actual = manager.officeNumber;
    // assert
    expect(actual).toBe(expected);
  });

  // getRole method test
  test("should return 'Manager'", () => {
    //   declare expected result
    const expected = "Manager";
    // get actual result
    const actual = manager.getRole();
    // assert
    expect(actual).toBe(expected);
  });
});
