const Intern = require("../intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
        const obj = new Intern("Foo", 1, "    ");
        expect(obj.name).toEqual("Foo");
        expect(obj.id).toEqual(1);
        expect(obj.email).toEqual("    ");
        });
    });
    describe("getName", () => {
        it("should return the object's name", () => {
        const obj = new Intern("Foo", 1, "    ");
        expect(obj.getName()).toEqual("Foo");
        });
    });
    describe("getId", () => {
        it("should return the object's id", () => {
        const obj = new Intern("Foo", 1, "    ");
        expect(obj.getId()).toEqual(1);
        });
    });
    describe("getEmail", () => {
        it("should return the object's email", () => {
        const obj = new Intern("Foo", 1, "    ");
        expect(obj.getEmail()).toEqual("    ");
        });
    });
    describe("getRole", () => {
        it("should return the object's role", () => {
        const obj = new Intern("Foo", 1, "    ");
        expect(obj.getRole()).toEqual("Intern");
        });
    });
    describe("getSchool", () => {
        it("should return the object's school", () => {
        const obj = new Intern("Foo", 1, "    ", "school");
        expect(obj.getSchool()).toEqual("school");
        });
    });
    });


