const Engineer = require("./Engineer");

describe("Engineer", () => {
  const engineer = new Engineer({
    name: "Alice",
    id: 853,
    email: "alice@email.com",
    github: "mygithubname",
  });
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

  test("should return expected id number", () => {
    //   declare expected result
    const expected = 853;
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

  // getGitHub method test
  test("should return GitHub username", () => {
    // declare expected result
    const expected = "mygithubname";
    // get actual result
    const actual = engineer.getGithub();
    // assert
    expect(actual).toBe(expected);
  });

  // getRole method test
  test("should return expected role", () => {
    //   declare expected result
    const expected = "Engineer";
    // get actual result
    const actual = engineer.getRole();
    // assert
    expect(actual).toBe(expected);
  });

  // generateCard() method test
  test("should return Engineer card HTML", () => {
    // declare expected result
    const expected = `<div class="card m-3" style="width: 18rem">
    <div class="card-body bg-light">
      <h5 class="card-title">Alice</h5>
      <h6 class="card-subtitle mb-2 text-primary">Engineer</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: 853</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:alice@email.com"
            >alice@email.com</a
          >
        </li>

        <li class="list-group-item">
          <i
            class="fa-brands fa-github-square"
            style="font-size: 1.5rem"
          ></i>
          GitHub: <a href="https://github.com/mygithubname" target="_blank">mygithubname</a>
        </li>
      </ul>
    </div>
  </div>`;
    // get actual result
    const actual = engineer.generateCard();
    // assert
    expect(actual).toEqual(expected);
  });
});
