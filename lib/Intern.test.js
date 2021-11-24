const Intern = require("./Intern");

describe("Intern", () => {
  // setup test
  const intern = new Intern({
    name: "Bob",
    email: "bob@email.com",
    id: 123,
    school: "Fake University",
  });
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

  // generateCard() method test
  test("should return Intern card HTML", () => {
    // declare expected result
    const expected = `<div class="card m-3" style="width: 18rem">
    <div class="card-body bg-light">
      <h5 class="card-title">Bob</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: 123</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:bob@email.com"
            >bob@email.com</a
          >
        </li>

        <li class="list-group-item">
          <i
            class="fa-solid fa-graduation-cap"
            style="font-size: 1.2rem"
          ></i>
          School: Fake University
        </li>
      </ul>
    </div>
  </div>`;
    // get actual result
    const actual = intern.generateCard();
    // assert
    expect(actual).toEqual(expected);
  });
});
