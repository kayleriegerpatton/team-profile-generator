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

  // generateCard() method test
  test("should return manager card HTML", () => {
    // declare expected result
    const expected = `<div class="card m-3" style="width: 18rem">
    <div class="card-body bg-light">
      <h5 class="card-title">Bob</h5>
      <h6 class="card-subtitle mb-2 text-danger">Manager</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: 123</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:bob@email.com"
            >bob@email.com</a
          >
        </li>

        <li class="list-group-item">
          <i class="fa-solid fa-building" style="font-size: 1.2rem"></i>
          Office Number: 123 456
        </li>
      </ul>
    </div>
  </div>`;
    // get actual result
    const actual = manager.generateCard();
    // assert
    expect(actual).toEqual(expected);
  });
});
