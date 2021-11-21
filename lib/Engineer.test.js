const Engineer = require("./Engineer");

const engineer = new Engineer({
  name: "Alice",
  id: "853",
  email: "alice@email.com",
  github: "mygithubname",
});

describe("Engineer", () => {
  test("should be an instance of Engineer", () => {
    // declare expected result
    const expected = true;
    // get actual result
    const actual = engineer instanceof Engineer;
    // assert
    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    //   declare expected result
    const expected = "Alice";
    // get actual result
    const actual = engineer.name;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return expected id", () => {
    //   declare expected result
    const expected = "853";
    // get actual result
    const actual = engineer.id;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return expected email", () => {
    //   declare expected result
    const expected = "alice@email.com";
    // get actual result
    const actual = engineer.email;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return expected GitHub username", () => {
    //   declare expected result
    const expected = "mygithubname";
    // get actual result
    const actual = engineer.github;
    // assert
    expect(actual).toBe(expected);
  });

  test("should return GitHub username", () => {
    // declare expected result
    const expected = "mygithubname";
    // get actual result
    const actual = engineer.getGithub();
    // assert
    expect(actual).toBe(expected);
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
