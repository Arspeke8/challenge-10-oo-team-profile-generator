const Employee = require("../Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email if provided valid arguments", () => {
      const e = new Employee("Jonh", 1, "fdsf@gmail.com");

      expect(e.name).toEqual("Jonh");
    });
    it("should create an object with a name and age if provided valid arguments", () => {
      const e = new Employee("Jonh", 1, "fdsf@gmail.com");

      expect(e.getRole()).toEqual("Employee");
    });
  });
});
