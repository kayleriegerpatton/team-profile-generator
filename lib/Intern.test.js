const Intern = require("./Intern");

// setup test
const intern = new Intern({
  name: "Bob",
  email: "bob@email.com",
  id: 123,
  school: "Fake University",
});

describe("Intern", () => {
  test("should be an instance of Intern", () => {
    //   declare expected result
    const expected = true;
    // get actual result
    const actual = intern instanceof Intern;
    // assert
    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    //   declare expected result
    const expected = "Bob";
    // get actual result
    const actual = intern.name;
    // assert
    expect(actual).toEqual(expected);
  });

  test("should return expected id number", () => {
    //   declare expected result
    const expected = 123;
    // get actual result
    const actual = intern.id;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return expected email", () => {
    //   declare expected result
    const expected = "bob@email.com";
    // get actual result
    const actual = intern.email;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return expected school", () => {
    //   declare expected result
    const expected = "Fake University";
    // get actual result
    const actual = intern.school;
    // assert
    expect(actual).toBe(expected);
  });

  // getSchool method test
  test("should return school name", () => {
    // declare expected result
    const expected = "Fake University";
    // get actual result
    const actual = intern.getSchool();
    // assert
    expect(actual).toBe(expected);
  });

  // getRole method test
  test("should return expected role", () => {
    //   declare expected result
    const expected = "Intern";
    // get actual result
    const actual = intern.getRole();
    // assert
    expect(actual).toBe(expected);
  });
});
